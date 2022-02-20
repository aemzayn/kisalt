import { supabase } from "./initSupabase";

export async function getProfile() {
  try {
    const user = supabase.auth.user();

    let { data, error, status } = await supabase
      .from("profiles")
      .select("username, website, avatar_url")
      .eq("id", user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      return { data, error: null };
    }
  } catch (error) {
    return { data: null, error };
  }
}
