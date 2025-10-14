"use client";

import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, BarChart3, TrendingUp, Calendar } from "lucide-react";

export default function ReportsClient() {
  const recentReports = [
    {
      title: "Q4 2024 Progress Report",
      type: "Quarterly Report",
      date: "Dec 31, 2024",
      size: "2.4 MB"
    },
    {
      title: "Fund Utilization Analysis",
      type: "Financial Report",
      date: "Dec 15, 2024",
      size: "1.8 MB"
    },
    {
      title: "Agency Performance Summary",
      type: "Performance Report",
      date: "Dec 10, 2024",
      size: "3.1 MB"
    },
    {
      title: "Project Status Overview",
      type: "Status Report",
      date: "Dec 5, 2024",
      size: "2.2 MB"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Reports & Analytics</h1>
            <p className="text-muted-foreground">Generate and download comprehensive reports</p>
          </div>
          <Button className="gradient-primary text-white border-0">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Reports"
            value="156"
            trend="+12%"
            icon={FileText}
          />
          <StatCard
            title="This Month"
            value="24"
            trend="+8%"
            icon={Calendar}
          />
          <StatCard
            title="Downloads"
            value="1,234"
            trend="+15%"
            icon={Download}
          />
          <StatCard
            title="Avg. Report Size"
            value="2.3 MB"
            trend="-5%"
            icon={BarChart3}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Report Type</CardTitle>
            </CardHeader>
            <CardContent>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reports</SelectItem>
                  <SelectItem value="quarterly">Quarterly Reports</SelectItem>
                  <SelectItem value="financial">Financial Reports</SelectItem>
                  <SelectItem value="performance">Performance Reports</SelectItem>
                  <SelectItem value="status">Status Reports</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Time Period</CardTitle>
            </CardHeader>
            <CardContent>
              <Select defaultValue="last-month">
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-week">Last Week</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="last-quarter">Last Quarter</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Format</CardTitle>
            </CardHeader>
            <CardContent>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF Document</SelectItem>
                  <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                  <SelectItem value="csv">CSV File</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{report.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>{report.type}</span>
                        <span>•</span>
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
