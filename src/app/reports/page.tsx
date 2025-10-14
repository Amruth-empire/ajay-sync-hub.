import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ReportsClient from "./ReportsClient";

export const metadata = {
  title: "Reports & Analytics | AJAY Sync Hub",
  description: "Generate and download comprehensive reports",
};

export default async function ReportsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  return <ReportsClient />;
}
