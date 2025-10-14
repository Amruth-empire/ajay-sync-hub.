import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AgenciesClient from "./AgenciesClient";

export const metadata = {
  title: "Agencies | AJAY Sync Hub",
  description: "Manage executing and coordinating agencies",
};

export default async function AgenciesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  return <AgenciesClient />;
}
