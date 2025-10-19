import { Clock, DollarSign, Hammer, AlertCircle, CheckCircle2, FileText } from 'lucide-react';
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
    <div className="w-full max-w-[1200px] bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4DA3FF] to-[#3B8FE6] px-4 py-5 md:px-8 md:py-6 text-white">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
          <div>
            <Badge className="bg-white/20 text-white border-0 mb-2">
              Kitchen Renovation
            </Badge>
            <div className="text-2xl mb-1">Relocate Kitchen Sink</div>
            <div className="text-sm text-white/80">
              Updated 2 hours ago • Intermediate Level
            </div>
          </div>
          <Button
            variant="secondary"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
          >
            <FileText className="w-4 h-4 mr-2" />
            Export Plan
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-white/70">Estimated Cost</div>
                <div className="text-lg text-white">$1,245</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-white/70">Total Time</div>
                <div className="text-lg text-white">12-16 hrs</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Hammer className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-white/70">Difficulty</div>
                <div className="text-lg text-white">Medium</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Phases */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-[#1F1F1F]">Project Phases</div>
                <div className="text-sm text-[#6B7280]">40% Complete</div>
              </div>
              <Progress value={40} className="mb-6 h-2" />

              <div className="space-y-3">
                {phases.map((phase, index) => (
                  <Card
                    key={index}
                    className={`border ${
                      phase.status === 'active'
                        ? 'border-[#4DA3FF] bg-[#4DA3FF]/5'
                        : phase.status === 'complete'
                        ? 'border-[#A5C59E] bg-[#A5C59E]/5'
                        : 'border-[#E5E7EB] bg-white'
                    }`}
                  >
                    <CardContent className="p-4 flex items-center gap-3 flex-wrap">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          phase.status === 'active'
                            ? 'bg-[#4DA3FF]'
                            : phase.status === 'complete'
                            ? 'bg-[#A5C59E]'
                            : 'bg-[#E5E7EB]'
                        }`}
                      >
                        {phase.status === 'complete' ? (
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        ) : (
                          <span
                            className={`text-sm ${
                              phase.status === 'active' ? 'text-white' : 'text-[#6B7280]'
                            }`}
                          >
                            {index + 1}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-[180px]">
                        <div className="text-[#1F1F1F]">{phase.name}</div>
                        {phase.status === 'active' && (
                          <div className="text-sm text-[#4DA3FF] mt-1">In Progress</div>
                        )}
                      </div>
                      {phase.status === 'active' && (
                        <Button size="sm" className="w-full sm:w-auto bg-[#4DA3FF] hover:bg-[#3B8FE6] text-white rounded-full">
                          View Details
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Permit Notice */}
            <Card className="border-[#FFA500] bg-[#FFA500]/5">
              <CardContent className="p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#FFA500] mt-0.5" />
                <div>
                  <div className="text-[#1F1F1F] mb-1">Permit Required</div>
                  <div className="text-sm text-[#6B7280] mb-3">
                    Moving plumbing fixtures requires a permit in your area (San Francisco, CA)
                  </div>
                  <Button size="sm" variant="outline" className="border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500]/10 rounded-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Materials & Tools */}
          <div className="space-y-6">
            <Card className="border-[#E5E7EB]">
              <CardContent className="p-5">
                <div className="text-[#1F1F1F] mb-4">Materials List</div>
                <div className="space-y-3">
                  {materials.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-start justify-between mb-1">
                        <div className="text-sm text-[#1F1F1F] flex-1">{item.name}</div>
                        <div className="text-sm text-[#1F1F1F]">${item.price}</div>
                      </div>
                      <div className="text-xs text-[#6B7280]">
                        Qty: {item.quantity} • {item.category}
                      </div>
                      {index < materials.length - 1 && <Separator className="my-3" />}
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <div className="text-[#1F1F1F]">Subtotal</div>
                  <div className="text-[#1F1F1F]">$384</div>
                </div>
                <Button className="w-full mt-4 bg-[#4DA3FF] hover:bg-[#3B8FE6] text-white rounded-full">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#E5E7EB]">
              <CardContent className="p-5">
                <div className="text-[#1F1F1F] mb-4">Required Tools</div>
                <div className="space-y-2">
                  {['Pipe Wrench', 'PEX Cutter', 'Adjustable Wrench', 'Bucket', 'Teflon Tape'].map(
                    (tool) => (
                      <div key={tool} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF]" />
                        <div className="text-sm text-[#6B7280]">{tool}</div>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
