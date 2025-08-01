import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Database, TrendingUp, Code } from "lucide-react";

export const SampleChallengeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Daily Challenge Preview
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Real Problems, Real Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each day, solve one real-world healthcare problem using SQL or Python
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card-gradient shadow-large border-0">
            {/* Challenge Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Question of the Day (7/30/25)
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      5 mins
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Intermediate
                    </div>
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                SQL Challenge
              </Badge>
            </div>

            {/* Challenge Question */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-card-foreground mb-4">
                1. How many patients in this dataset are farmers?
              </h4>
              <p className="text-muted-foreground mb-6">
                Type your query below
              </p>

              {/* Mock SQL Interface */}
              <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 ml-4">SQL Query Editor</span>
                </div>
                
                <div className="text-gray-300">
                  <div className="text-purple-400">SELECT</div>
                  <div className="text-yellow-300 ml-4">*</div>
                  <div className="text-purple-400">FROM</div>
                  <div className="text-blue-300 ml-4">PUBLIC.DEMOGRAPHY</div>
                  <div className="text-purple-400">WHERE</div>
                  <div className="text-gray-300 ml-4">
                    OCCUPATION = <span className="text-green-300">'farmer'</span>;
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-sans text-sm font-medium transition-colors">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-info/10 rounded-lg">
                  <Code className="w-5 h-5 text-info" />
                </div>
                <div>
                  <h5 className="font-semibold text-card-foreground">Real Datasets</h5>
                  <p className="text-sm text-muted-foreground">Anonymized healthcare data from actual medical systems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h5 className="font-semibold text-card-foreground">Instant Feedback</h5>
                  <p className="text-sm text-muted-foreground">Get immediate results and explanations for every query</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Database className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h5 className="font-semibold text-card-foreground">Track Progress</h5>
                  <p className="text-sm text-muted-foreground">Build your streak and monitor skill development</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};