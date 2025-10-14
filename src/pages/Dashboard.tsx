import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import ProjectCard from "@/components/ProjectCard";
import { FolderKanban, Building2, IndianRupee, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Active Projects", value: 156, icon: FolderKanban, trend: "+12%", trendUp: true },
    { title: "Partner Agencies", value: 45, icon: Building2, trend: "+3%", trendUp: true },
    { title: "Funds Allocated", value: "₹2.4Cr", icon: IndianRupee, trend: "+8%", trendUp: true },
    { title: "Success Rate", value: "94%", icon: TrendingUp, trend: "+2%", trendUp: true },
  ];

  const projects = [
    {
      name: "Adarsh Gram Development - Phase 2",
      type: "Adarsh Gram",
      location: "Rajasthan",
      progress: 75,
      status: "On Track" as const,
      team: 12,
      deadline: "Dec 2025"
    },
    {
      name: "GIA Infrastructure Upgrade",
      type: "GIA",
      location: "Gujarat",
      progress: 45,
      status: "At Risk" as const,
      team: 8,
      deadline: "Jan 2026"
    },
    {
      name: "Hostel Construction Project",
      type: "Hostel",
      location: "Maharashtra",
      progress: 30,
      status: "Delayed" as const,
      team: 15,
      deadline: "Nov 2025"
    },
    {
      name: "Adarsh Gram Sanitation Drive",
      type: "Adarsh Gram",
      location: "Uttar Pradesh",
      progress: 90,
      status: "On Track" as const,
      team: 10,
      deadline: "Oct 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your PM-AJAY projects
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Active Projects</h2>
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              View All →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
