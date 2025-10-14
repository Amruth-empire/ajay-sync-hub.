import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, TrendingUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smart Collaboration for
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              PM-AJAY Scheme
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            AI-powered platform for seamless coordination between stakeholders at state, central, and executing agency levels
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => navigate(user ? "/dashboard" : "/auth")}
            >
              {user ? "Go to Dashboard" : "Get Started"}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <BarChart3 className="h-12 w-12 mb-4 mx-auto text-accent" />
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-white/80">Monitor project progress with live updates and analytics</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <Users className="h-12 w-12 mb-4 mx-auto text-accent" />
              <h3 className="text-xl font-semibold mb-2">Agency Management</h3>
              <p className="text-white/80">AI-driven coordination and role tracking</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <TrendingUp className="h-12 w-12 mb-4 mx-auto text-accent" />
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-white/80">Early warning system for delays and performance issues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
