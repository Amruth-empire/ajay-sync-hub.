import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects | AJAY Sync Hub",
  description: "Track and manage all PM-AJAY scheme projects",
};

export default async function ProjectsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  return <ProjectsClient />;
}
