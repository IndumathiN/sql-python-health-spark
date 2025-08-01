import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Target, BarChart3, ArrowRight } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Import the Dataset",
      description: "Access curated healthcare datasets with documentation and context for each challenge.",
      icon: Download,
      color: "primary"
    },
    {
      number: "02", 
      title: "Solve the Daily Challenge",
      description: "Work through real-world problems using SQL or Python with guided hints when needed.",
      icon: Target,
      color: "accent"
    },
    {
      number: "03",
      title: "Get Feedback and Track Your Streak",
      description: "Receive instant feedback, explanations, and build your learning streak over time.",
      icon: BarChart3,
      color: "success"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to master healthcare data analysis, one challenge at a time
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={step.number} className="relative">
                  <Card className="p-8 bg-card shadow-medium border-0 h-full hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                    {/* Step Number */}
                    <div className={`w-16 h-16 rounded-full bg-${step.color}/10 flex items-center justify-center mb-6`}>
                      <span className={`text-2xl font-bold text-${step.color}`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 bg-${step.color}/10 rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className={`w-6 h-6 text-${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>

                  {/* Arrow connector - hidden on mobile and last item */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5 min</div>
              <p className="text-muted-foreground">Daily commitment</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Real</div>
              <p className="text-muted-foreground">Healthcare datasets</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">Instant</div>
              <p className="text-muted-foreground">Feedback & hints</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-info mb-2">Track</div>
              <p className="text-muted-foreground">Your progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};