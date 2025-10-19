import { Camera, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function AIWorkflowDiagram() {
  const steps = [
    {
      icon: Camera,
      title: 'Image Analysis',
      description: 'AI identifies room type, dimensions, materials, and constraints',
      color: '#4DA3FF',
    },
    {
      icon: Cpu,
      title: 'Plan Generation',
      description: 'Creates skill-matched steps, cost estimates, and compliance checks',
      color: '#A5C59E',
    },
    {
      icon: CheckCircle2,
      title: 'Personalized Output',
      description: 'Delivers tailored guides with local regulations and material sourcing',
      color: '#4DA3FF',
    },
  ];

  return (
    <div className="w-full max-w-[1200px]">
      <div className="text-xl text-[#1F1F1F] mb-6">AI → Data → User Feedback Loop</div>
      
      <div className="flex items-center justify-between gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex items-center gap-4 flex-1">
              <Card className="border-[#E5E7EB] flex-1">
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <div className="text-[#1F1F1F] mb-2">{step.title}</div>
                  <div className="text-sm text-[#6B7280]">{step.description}</div>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-[#9CA3AF] flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Feedback Loop */}
      <div className="mt-6">
        <Card className="border-[#4DA3FF] bg-[#4DA3FF]/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#4DA3FF] flex items-center justify-center flex-shrink-0">
                <div className="text-white text-sm">↻</div>
              </div>
              <div>
                <div className="text-[#1F1F1F] mb-1">Continuous Learning</div>
                <div className="text-sm text-[#6B7280]">
                  User progress and feedback refine future recommendations, improving accuracy and personalization over time
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
