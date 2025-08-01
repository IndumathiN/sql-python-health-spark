import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Database, Zap, CheckCircle } from "lucide-react";

export const WhyThisWorksSection = () => {
  const benefits = [
    {
      title: "Built for Busy Learners",
      description: "Just 5 minutes a day. No lengthy courses or overwhelming content. Perfect for healthcare professionals with demanding schedules.",
      icon: Clock,
      stats: "5 min/day",
      color: "primary"
    },
    {
      title: "Real Datasets, Real Skills",
      description: "Work with actual anonymized healthcare data. Build skills that directly translate to your professional work environment.",
      icon: Database,
      stats: "100% Real Data",
      color: "accent"
    },
    {
      title: "Daily Habit → Long-term Mastery",
      description: "Consistent daily practice builds lasting expertise. Small, focused challenges create compound learning effects.",
      icon: Zap,
      stats: "95% Retention",
      color: "success"
    }
  ];

  const outcomes = [
    "Write complex SQL queries confidently",
    "Analyze patient demographics and outcomes",
    "Extract insights from clinical databases",
    "Automate reporting with Python scripts",
    "Join tables across healthcare systems",
    "Optimize database performance"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Why This Works
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Science Behind
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Daily Practice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Microlearning with real-world application creates the most effective path to data mastery
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <Card key={index} className="p-8 bg-card-gradient shadow-medium border-0 hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  {/* Icon and Stat */}
                  <div className={`w-20 h-20 bg-${benefit.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-10 h-10 text-${benefit.color}`} />
                  </div>
                  
                  <div className={`text-2xl font-bold text-${benefit.color} mb-2`}>
                    {benefit.stats}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Learning Outcomes */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-muted/50 border-0">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                What You'll Master
              </h3>
              <p className="text-muted-foreground">
                Skills that healthcare data professionals use every day
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-card-foreground font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Testimonial Preview */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary/5 border-primary/20 max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="text-4xl mb-4">💭</div>
              <blockquote className="text-lg text-card-foreground italic">
                "I've been trying to improve my SQL skills for months. This daily approach finally made it stick. 
                The healthcare context makes every challenge relevant to my work."
              </blockquote>
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Sarah M.</strong> - Healthcare Data Analyst
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};