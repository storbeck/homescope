import { Card, CardContent } from './ui/card';

export function DesignSystem() {
  const colors = [
    { name: 'Intelligent Blue', hex: '#4DA3FF', role: 'Primary Actions' },
    { name: 'Sage Green', hex: '#A5C59E', role: 'Success States' },
    { name: 'Warm White', hex: '#FAFAF9', role: 'Background' },
    { name: 'Graphite Gray', hex: '#1F1F1F', role: 'Text Primary' },
    { name: 'Slate Gray', hex: '#6B7280', role: 'Text Secondary' },
    { name: 'Light Gray', hex: '#E5E7EB', role: 'Borders' },
  ];

  return (
    <div className="w-full max-w-[1200px] space-y-8">
      {/* Header */}
      <div>
        <div className="text-3xl text-[#1F1F1F] mb-2">Design System</div>
        <div className="text-[#6B7280]">
          A calm, intelligent interface blending professional and approachable design
        </div>
      </div>

      {/* Color Palette */}
      <div>
        <div className="text-xl text-[#1F1F1F] mb-4">Color Palette</div>
        <div className="grid grid-cols-3 gap-4">
          {colors.map((color) => (
            <Card key={color.hex} className="border-[#E5E7EB] overflow-hidden">
              <div
                className="h-32"
                style={{ backgroundColor: color.hex }}
              />
              <CardContent className="p-4">
                <div className="text-[#1F1F1F] mb-1">{color.name}</div>
                <div className="text-sm text-[#6B7280] mb-2">{color.hex}</div>
                <div className="text-xs text-[#9CA3AF]">{color.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <div className="text-xl text-[#1F1F1F] mb-4">Typography</div>
        <Card className="border-[#E5E7EB]">
          <CardContent className="p-8 space-y-6">
            <div>
              <div className="text-3xl text-[#1F1F1F] mb-2">
                Heading Large
              </div>
              <div className="text-sm text-[#6B7280]">
                Inter / System Font Stack • Clear hierarchy
              </div>
            </div>
            <div>
              <div className="text-xl text-[#1F1F1F] mb-2">
                Heading Medium
              </div>
              <div className="text-sm text-[#6B7280]">
                Used for section headers and card titles
              </div>
            </div>
            <div>
              <div className="text-[#1F1F1F] mb-2">
                Body Text Regular
              </div>
              <div className="text-sm text-[#6B7280]">
                Comfortable reading with generous line height and spacing
              </div>
            </div>
            <div>
              <div className="text-sm text-[#6B7280]">
                Small / Caption Text
              </div>
              <div className="text-xs text-[#9CA3AF] mt-1">
                For secondary information and helper text
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design Principles */}
      <div>
        <div className="text-xl text-[#1F1F1F] mb-4">Design Principles</div>
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-[#E5E7EB]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-[#4DA3FF]/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded bg-[#4DA3FF]" />
              </div>
              <div className="text-[#1F1F1F] mb-2">Clarity First</div>
              <div className="text-sm text-[#6B7280]">
                Every element serves a purpose. Clean layouts with generous whitespace guide user focus.
              </div>
            </CardContent>
          </Card>
          <Card className="border-[#E5E7EB]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-[#A5C59E]/10 flex items-center justify-center mb-4">
                <div className="grid grid-cols-2 gap-1 w-6 h-6">
                  <div className="bg-[#A5C59E] rounded-sm" />
                  <div className="bg-[#A5C59E] rounded-sm" />
                  <div className="bg-[#A5C59E] rounded-sm" />
                  <div className="bg-[#A5C59E] rounded-sm" />
                </div>
              </div>
              <div className="text-[#1F1F1F] mb-2">Structured & Modular</div>
              <div className="text-sm text-[#6B7280]">
                Information organized in digestible cards and phases that build confidence.
              </div>
            </CardContent>
          </Card>
          <Card className="border-[#E5E7EB]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-[#4DA3FF]/10 flex items-center justify-center mb-4">
                <div className="flex gap-1 items-end">
                  <div className="w-1.5 h-3 bg-[#4DA3FF] rounded-full" />
                  <div className="w-1.5 h-5 bg-[#4DA3FF] rounded-full" />
                  <div className="w-1.5 h-4 bg-[#4DA3FF] rounded-full" />
                </div>
              </div>
              <div className="text-[#1F1F1F] mb-2">Adaptive Intelligence</div>
              <div className="text-sm text-[#6B7280]">
                Personalized to skill level and context, providing just the right amount of guidance.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Component Patterns */}
      <div>
        <div className="text-xl text-[#1F1F1F] mb-4">Component Patterns</div>
        <Card className="border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4DA3FF] to-[#3B8FE6] flex-shrink-0" />
              <div className="flex-1">
                <div className="text-[#1F1F1F] mb-1">Rounded Corners</div>
                <div className="text-sm text-[#6B7280]">
                  12-20px border radius for cards and containers creates approachable feel
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#4DA3FF] flex items-center justify-center text-white flex-shrink-0">
                →
              </div>
              <div className="flex-1">
                <div className="text-[#1F1F1F] mb-1">Pill-shaped Buttons</div>
                <div className="text-sm text-[#6B7280]">
                  Fully rounded buttons for primary actions provide clear call-to-action
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1 flex-shrink-0">
                <div className="w-4 h-4 rounded bg-[#4DA3FF]" />
                <div className="w-4 h-4 rounded bg-[#4DA3FF]/20" />
                <div className="w-4 h-4 rounded bg-[#4DA3FF]/20" />
              </div>
              <div className="flex-1">
                <div className="text-[#1F1F1F] mb-1">Progressive Disclosure</div>
                <div className="text-sm text-[#6B7280]">
                  Information revealed in stages to prevent overwhelm
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
