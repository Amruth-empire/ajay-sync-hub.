import Link from "next/link";
import { useEffect } from "react";
import { Home, Search, ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  // Next.js handles 404 logging automatically. You can add custom logging here if needed.

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full border-border p-8 md:p-12">
        <div className="text-center">
          {/* Icon */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
              <FileQuestion className="h-16 w-16 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-background">
              <span className="text-2xl font-bold text-foreground">!</span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-8xl md:text-9xl font-bold text-foreground mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Please
            check the URL or return to the homepage.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white border-0"
            >
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/projects"
                className="text-sm text-primary hover:underline"
              >
                Projects
              </Link>
              <Link
                href="/agencies"
                className="text-sm text-primary hover:underline"
              >
                Agencies
              </Link>
              <Link
                href="/reports"
                className="text-sm text-primary hover:underline"
              >
                Reports
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
