import { Clock, DollarSign, Hammer, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';

export function ProjectBreakdownScreen() {
  const phases = [
    { name: 'Planning & Permits', status: 'complete' as const },
    { name: 'Demolition', status: 'complete' as const },
    { name: 'Plumbing Installation', status: 'active' as const },
    { name: 'Tile Work', status: 'pending' as const },
    { name: 'Fixtures & Finishing', status: 'pending' as const },
  ];

  const materials = [
    { name: 'Kohler Kitchen Sink', price: 285, quantity: 1, category: 'Fixture' },
    { name: 'PEX Piping (50ft)', price: 45, quantity: 1, category: 'Plumbing' },
    { name: 'P-Trap Assembly', price: 18, quantity: 1, category: 'Plumbing' },
    { name: 'Silicone Sealant', price: 12, quantity: 2, category: 'Supplies' },
  ];

  return (
    <div className="w-full max-w-[390px] h-[844px] bg-[#FAFAF9] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 pt-14 pb-4 bg-white border-b border-[#E5E7EB]">
        <div className="text-[#1F1F1F] mb-1">Project Plan</div>
        <div className="text-sm text-[#6B7280]">Relocate Kitchen Sink</div>
        <div className="mt-2">
          <Badge variant="outline" className="border-0 bg-[#4DA3FF]/5 text-[#4DA3FF]">Kitchen Renovation</Badge>
        </div>

        {/* Quick Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Card className="border-[#E5E7EB]">
            <CardContent className="p-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-[#4DA3FF]" />
              </div>
              <div>
                <div className="text-xs text-[#6B7280]">Estimated Cost</div>
                <div className="text-sm text-[#1F1F1F]">$1,245</div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-[#E5E7EB]">
            <CardContent className="p-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#A5C59E]/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-[#A5C59E]" />
              </div>
              <div>
                <div className="text-xs text-[#6B7280]">Total Time</div>
                <div className="text-sm text-[#1F1F1F]">12–16 hrs</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {/* Progress Summary */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-[#1F1F1F]">Phases</div>
            <div className="text-sm text-[#6B7280]">40% complete</div>
          </div>
          <Progress value={40} className="h-2" />
        </div>

        {/* Phases List */}
        <div className="space-y-2">
          {phases.map((phase, index) => (
            <Card
              key={index}
              className={`border ${
                phase.status === 'active'
                  ? 'border-[#4DA3FF] bg-[#4DA3FF]/5'
                  : phase.status === 'complete'
                  ? 'border-[#E5E7EB] bg-white opacity-70'
                  : 'border-[#E5E7EB] bg-white'
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      phase.status === 'active'
                        ? 'bg-[#4DA3FF]'
                        : phase.status === 'complete'
                        ? 'bg-[#A5C59E]'
                        : 'bg-[#E5E7EB]'
                    }`}
                  >
                    {phase.status === 'complete' ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : (
                      <span
                        className={`text-xs ${
                          phase.status === 'active' ? 'text-white' : 'text-[#6B7280]'
                        }`}
                      >
                        {index + 1}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[#1F1F1F]">{phase.name}</div>
                    {phase.status === 'active' && (
                      <div className="text-xs text-[#4DA3FF] mt-1">In Progress</div>
                    )}
                  </div>
                  {phase.status === 'active' && (
                    <Button size="sm" className="bg-[#4DA3FF] hover:bg-[#3B8FE6] text-white rounded-full h-8 text-xs px-3">
                      Details
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Materials */}
        <Card className="border-[#E5E7EB]">
          <CardContent className="p-5">
            <div className="text-[#1F1F1F] mb-3">Materials</div>
            <div className="space-y-3">
              {materials.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between mb-1">
                    <div className="text-sm text-[#1F1F1F] flex-1 pr-3">{item.name}</div>
                    <div className="text-sm text-[#1F1F1F]">${item.price}</div>
                  </div>
                  <div className="text-xs text-[#6B7280]">Qty: {item.quantity} • {item.category}</div>
                  {index < materials.length - 1 && <Separator className="my-3" />}
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <div className="text-[#1F1F1F]">Subtotal</div>
              <div className="text-[#1F1F1F]">$384</div>
            </div>
            <Button className="w-full mt-4 bg-[#4DA3FF] hover:bg-[#3B8FE6] text-white rounded-full h-10">
              Add to Cart
            </Button>
          </CardContent>
        </Card>

        {/* Permit Notice */}
        <Card className="border-[#FFA500]/30 bg-[#FFA500]/5">
          <CardContent className="p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#FFA500] mt-0.5" />
            <div>
              <div className="text-[#1F1F1F] mb-1">Permit Required</div>
              <div className="text-sm text-[#6B7280] mb-3">
                Moving plumbing fixtures requires a permit in your area (San Francisco, CA)
              </div>
              <Button size="sm" variant="outline" className="border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500]/10 rounded-full h-8 text-xs">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bottom primary action */}
        <Button className="w-full bg-[#4DA3FF] hover:bg-[#3B8FE6] text-white rounded-full h-12">
          Export Plan
        </Button>
      </div>
    </div>
  );
}
