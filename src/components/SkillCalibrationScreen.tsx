import { Wrench, Zap, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function SkillCalibrationScreen() {
  const skillLevels = [
    {
      icon: Zap,
      title: 'Beginner',
      subtitle: 'New to DIY projects',
      description: 'I prefer simple, guided tasks with minimal tools',
      selected: false,
    },
    {
      icon: Wrench,
      title: 'Intermediate',
      subtitle: 'Some experience',
      description: 'Comfortable with basic tools and moderate complexity',
      selected: true,
    },
    {
      icon: GraduationCap,
      title: 'Advanced',
      subtitle: 'Seasoned DIYer',
      description: 'I can handle complex projects and specialized tools',
      selected: false,
    },
  ];

  return (
    <div className="w-full max-w-[390px] h-[844px] bg-[#FAFAF9] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 pt-14 pb-6">
        <Badge className="bg-[#4DA3FF]/10 text-[#4DA3FF] border-0 mb-3">
          Step 2 of 3
        </Badge>
        <div className="text-[#1F1F1F] mb-2">What's Your Skill Level?</div>
        <div className="text-[#6B7280] text-sm">
          We'll tailor the project complexity and instructions to match your experience
        </div>
      </div>

      {/* Skill Options */}
      <div className="flex-1 px-6 pb-6 flex flex-col gap-3 overflow-y-auto">
        {skillLevels.map((level, index) => {
          const Icon = level.icon;
          return (
            <Card
              key={index}
              className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${
                level.selected
                  ? 'border-[#4DA3FF] bg-[#4DA3FF]/5 shadow-md'
                  : 'border-[#E5E7EB] bg-white hover:border-[#4DA3FF]/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    level.selected ? 'bg-[#4DA3FF]' : 'bg-[#F3F4F6]'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      level.selected ? 'text-white' : 'text-[#6B7280]'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[#1F1F1F]">{level.title}</div>
                    {level.selected && (
                      <CheckCircle2 className="w-5 h-5 text-[#4DA3FF]" />
                    )}
                  </div>
                  <div className="text-xs text-[#6B7280] mb-2">
                    {level.subtitle}
                  </div>
                  <div className="text-sm text-[#6B7280]">
                    {level.description}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}

        {/* Additional Questions */}
        <div className="mt-4">
          <div className="text-sm text-[#1F1F1F] mb-3">
            What tools do you have access to?
          </div>
          <div className="flex flex-wrap gap-2">
            {['Basic Hand Tools', 'Power Drill', 'Saw', 'Paint Supplies', 'Measuring Tools'].map(
              (tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="border-[#4DA3FF] text-[#4DA3FF] bg-white hover:bg-[#4DA3FF]/10 cursor-pointer px-3 py-1.5"
                >
                  {tool}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 bg-white border-t border-[#E5E7EB] space-y-3">
        <Button className="w-full bg-[#4DA3FF] hover:bg-[#3B8FE6] text-white rounded-full h-12">
          Continue
        </Button>
        <Button variant="ghost" className="w-full text-[#6B7280] hover:text-[#1F1F1F] hover:bg-transparent">
          Back
        </Button>
      </div>
    </div>
  );
}
