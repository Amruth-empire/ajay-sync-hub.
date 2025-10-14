"use client";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, Filter } from "lucide-react";

export default function ProjectsClient() {
  const projects = [
    {
      name: "Adarsh Gram Development - Phase 1",
      type: "Adarsh Gram",
      location: "Uttar Pradesh",
      progress: 75,
      status: "On Track" as const,
      team: 12,
      deadline: "Dec 2025",
    },
    {
      name: "Girls Hostel Construction",
      type: "Hostel",
      location: "Bihar",
      progress: 45,
      status: "At Risk" as const,
      team: 8,
      deadline: "Mar 2026",
    },
    {
      name: "GIA Educational Infrastructure",
      type: "GIA",
      location: "Madhya Pradesh",
      progress: 30,
      status: "Delayed" as const,
      team: 15,
      deadline: "Jun 2026",
    },
    {
      name: "Community Center Development",
      type: "Adarsh Gram",
      location: "Rajasthan",
      progress: 90,
      status: "On Track" as const,
      team: 10,
      deadline: "Nov 2025",
    },
    {
      name: "Boys Hostel Renovation",
      type: "Hostel",
      location: "Maharashtra",
      progress: 60,
      status: "On Track" as const,
      team: 7,
      deadline: "Jan 2026",
    },
    {
      name: "GIA School Upgrade Project",
      type: "GIA",
      location: "Gujarat",
      progress: 25,
      status: "At Risk" as const,
      team: 9,
      deadline: "Apr 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Projects
            </h1>
            <p className="text-muted-foreground">
              Track and manage all PM-AJAY scheme projects
            </p>
          </div>
          <Button className="gradient-primary text-white border-0">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search projects..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="adarsh">Adarsh Gram</SelectItem>
              <SelectItem value="gia">GIA</SelectItem>
              <SelectItem value="hostel">Hostel</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-status">
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">All Status</SelectItem>
              <SelectItem value="on-track">On Track</SelectItem>
              <SelectItem value="at-risk">At Risk</SelectItem>
              <SelectItem value="delayed">Delayed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}
