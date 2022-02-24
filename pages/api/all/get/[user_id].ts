import { NextApiRequest, NextApiResponse } from "next";
import { getClicks, getUrls, HOME } from "constants/paths";
import { Url } from "interfaces/Url";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const baseUrl = HOME.slice(0, HOME.length - 1);

    const { user_id: userId } = req.query;
    const user_id = Array.isArray(userId) ? userId[0] : userId;
    const clicksEndpoint = getClicks(user_id);
    const urlsEndpoint = getUrls(user_id);
    const endpoints = [clicksEndpoint, urlsEndpoint];

    const [clickData, urlData] = await Promise.all(
      endpoints.map(async (url) => {
        const resp = await fetch(baseUrl + url);
        return resp.json();
      })
    );

    const errors = clickData.error || urlData.error || null;

    if (errors) {
      res.statusCode = 400;
    } else {
      res.statusCode = 200;
    }

    const urls =
      urlData &&
      clickData &&
      urlData.data.map((url: Url) => {
        const clicks =
          clickData.data.filter((click) => click.urls.id === url.id).length ||
          0;
        return {
          ...url,
          clicks,
        };
      });

    const data = {
      urls: urls || [],
      clicks: clickData?.data || [],
      totalClicks: clickData?.data.length || 0,
    };

    res.json({
      success: !!data,
      data: data,
      error: errors,
    });
  } catch (error) {
    res.statusCode = 500;
    res.json({
      success: false,
      error,
    });
  }
}
