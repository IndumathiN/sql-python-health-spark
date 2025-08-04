import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChevronRight, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - replace with actual webhook/API integration
    try {
      // This is where you'd integrate with n8n webhook or Mailchimp API
      const response = await fetch("https://mite-kind-neatly.ngrok-free.app/webhook-test/getEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      // For now, just simulate success
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        toast({
          title: "Welcome aboard!",
          description: "You'll be notified when we launch exclusive content.",
        });
      }, 1000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Master Healthcare 
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent"> Data Analysis</span>
              <br />
              One Query at a Time
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
              Get daily SQL and Python challenges using real-world datasets. 
              Designed for analysts, data learners, and self-starters. 
              <span className="font-semibold text-accent"> Join early to unlock exclusive content!</span>
            </p>

            {/* Email Signup Form */}
            <Card className="p-6 bg-card/95 backdrop-blur-sm shadow-glow max-w-md mx-auto lg:mx-0">
              {isSubmitted ? (
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">You're In!</h3>
                  <p className="text-muted-foreground">We'll notify you when exclusive content becomes available.</p>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-14 text-lg"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : "Join Early"}
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </Card>

            <p className="text-primary-foreground/70 text-sm mt-4 max-w-md mx-auto lg:mx-0">
              Join 2,000+ healthcare professionals improving their data skills daily. No spam, unsubscribe anytime.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={heroImage}
                alt="Healthcare Data Analysis Platform"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-8 -right-8 bg-accent text-accent-foreground p-4 rounded-xl shadow-medium animate-bounce">
              <div className="text-2xl font-bold">2K+</div>
              <div className="text-sm">Active Learners</div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-success text-success-foreground p-4 rounded-xl shadow-medium animate-bounce delay-500">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};