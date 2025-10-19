import { CheckCircle2, Circle, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export function ProgressTrackerScreen() {
  const tasks = [
    {
      id: 1,
      title: 'Turn off water supply',
      completed: true,
      time: '5 min',
      confidence: 'Easy',
    },
    {
      id: 2,
      title: 'Remove existing sink and drain',
      completed: true,
      time: '30 min',
      confidence: 'Moderate',
    },
    {
      id: 3,
      title: 'Mark new sink location',
      completed: true,
      time: '15 min',
      confidence: 'Easy',
    },
    {
      id: 4,
      title: 'Cut and route new water lines',
      completed: false,
      time: '2 hrs',
      confidence: 'Challenging',
      current: true,
    },
    {
      id: 5,
      title: 'Install drain assembly',
      completed: false,
      time: '45 min',
      confidence: 'Moderate',
    },
    {
      id: 6,
      title: 'Mount and seal new sink',
      completed: false,
      time: '1 hr',
      confidence: 'Moderate',
    },
    {
      id: 7,
      title: 'Connect fixtures and test',
      completed: false,
      time: '30 min',
      confidence: 'Easy',
    },
  ];

  const completedTasks = tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedTasks / tasks.length) * 100);

  return (
    <div className="w-full max-w-[390px] h-[844px] bg-[#FAFAF9] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 pt-14 pb-4 bg-white border-b border-[#E5E7EB]">
        <div className="text-[#1F1F1F] mb-1">Your Progress</div>
        <div className="text-sm text-[#6B7280] mb-4">
          Relocate Kitchen Sink
        </div>

        {/* Progress Ring */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="#E5E7EB"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="#4DA3FF"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 34}`}
                strokeDashoffset={`${2 * Math.PI * 34 * (1 - progressPercent / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg text-[#1F1F1F]">{progressPercent}%</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[#1F1F1F] mb-1">
              {completedTasks} of {tasks.length} tasks done
            </div>
            <div className="text-sm text-[#6B7280]">
              ~{Math.round((tasks.length - completedTasks) * 0.75)} hours remaining
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-[#4DA3FF]/5 border-[#4DA3FF]/20">
            <CardContent className="p-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#4DA3FF]" />
              <div>
                <div className="text-xs text-[#6B7280]">Time Invested</div>
                <div className="text-sm text-[#1F1F1F]">4.5 hrs</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#A5C59E]/5 border-[#A5C59E]/20">
            <CardContent className="p-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#A5C59E]" />
              <div>
                <div className="text-xs text-[#6B7280]">On Track</div>
                <div className="text-sm text-[#1F1F1F]">95% pace</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-2">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className={`border ${
                task.current
                  ? 'border-[#4DA3FF] bg-[#4DA3FF]/5'
                  : task.completed
                  ? 'border-[#E5E7EB] bg-white opacity-60'
                  : 'border-[#E5E7EB] bg-white'
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="pt-0.5">
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#A5C59E]" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#D1D5DB]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm mb-1 ${
                        task.completed ? 'line-through text-[#9CA3AF]' : 'text-[#1F1F1F]'
                      }`}
                    >
                      {task.title}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`text-xs border-0 px-2 py-0 ${
                          task.confidence === 'Easy'
                            ? 'bg-[#A5C59E]/10 text-[#A5C59E]'
                            : task.confidence === 'Moderate'
                            ? 'bg-[#4DA3FF]/10 text-[#4DA3FF]'
                            : 'bg-[#FFA500]/10 text-[#FFA500]'
                        }`}
                      >
                        {task.confidence}
                      </Badge>
                      <span className="text-xs text-[#9CA3AF]">• {task.time}</span>
                    </div>
                    {task.current && (
                      <Button
                        size="sm"
                        className="mt-3 w-full bg-[#4DA3FF] hover:bg-[#3B8FE6] text-white rounded-full h-8 text-xs"
                      >
                        View Step-by-Step Guide
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-6 bg-white border-t border-[#E5E7EB]">
        <Button className="w-full bg-[#A5C59E] hover:bg-[#93B38C] text-white rounded-full h-12">
          Mark Current Task Complete
        </Button>
      </div>
    </div>
  );
}
