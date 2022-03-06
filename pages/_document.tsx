import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { isProduction } from 'constants/mode'
import { GA_TRACKING_ID } from 'lib/gtag'

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* Apple icons */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/images/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/images/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/apple-icon-180x180.png"
          />

          {/* Android icons */}
          <link
            rel="icon"
            type="image/png"
            sizes="36x36"
            href="/images/favicon/android-icon-36x36.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="/images/favicon/android-icon-48x48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="/images/favicon/android-icon-72x72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/favicon/android-icon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="/images/favicon/android-icon-144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/favicon/android-icon-192x192.png"
          />

          {/* Microsoft Icon */}
          <link
            rel="icon"
            type="image/vnd.microsoft.icon"
            sizes="70x70"
            href="/images/favicon/ms-icon-70x70.png"
          />
          <link
            rel="icon"
            type="image/vnd.microsoft.icon"
            sizes="144x144"
            href="/images/favicon/ms-icon-144x144.png"
          />
          <link
            rel="icon"
            type="image/vnd.microsoft.icon"
            sizes="150x150"
            href="/images/favicon/ms-icon-150x150.png"
          />
          <link
            rel="icon"
            type="image/vnd.microsoft.icon"
            sizes="310x310"
            href="/images/favicon/ms-icon-310x310.png"
          />

          <link rel="manifest" href="/manifest.json" />

          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>

          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
