import { Separator } from './components/ui/separator';
import { DesignSystem } from './components/DesignSystem';
import { PhotoUploadScreen } from './components/PhotoUploadScreen';
import { SkillCalibrationScreen } from './components/SkillCalibrationScreen';
import { ProjectBreakdownScreen } from './components/ProjectBreakdownScreen';
import { ProgressTrackerScreen } from './components/ProgressTrackerScreen';
import { Home, Lightbulb } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4DA3FF] to-[#3B8FE6] flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xl text-[#1F1F1F]">HomeScope</div>
                <div className="text-xs text-[#6B7280]">Design Intelligence for Real Homes</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#4DA3FF]/10 rounded-full">
              <Lightbulb className="w-4 h-4 text-[#4DA3FF]" />
              <span className="text-sm text-[#4DA3FF]">UI/UX Concept Storyboard</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="space-y-16">
          {/* Introduction */}
          <section className="max-w-[900px]">
            <div className="text-3xl text-[#1F1F1F] mb-4">
              An AI-Powered Home Improvement Companion
            </div>
            <div className="text-lg text-[#6B7280] mb-6">
              HomeScope analyzes photos of your home and turns renovation ideas into personalized, 
              step-by-step guides based on your skill level and local building requirements.
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4DA3FF]" />
                <span className="text-sm text-[#6B7280]">Photo-Based Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#A5C59E]" />
                <span className="text-sm text-[#6B7280]">Skill-Matched Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4DA3FF]" />
                <span className="text-sm text-[#6B7280]">Local Compliance Data</span>
              </div>
            </div>
          </section>

          <Separator className="bg-[#E5E7EB]" />

          {/* Design System */}
          <section>
            <DesignSystem />
          </section>

          <Separator className="bg-[#E5E7EB]" />

          {/* Key Screens */}
          <section className="space-y-12">
            <div>
              <div className="text-3xl text-[#1F1F1F] mb-2">Key Screens</div>
              <div className="text-[#6B7280]">
                Representative screens showcasing the core user experience
              </div>
            </div>

            {/* Screen 1: Photo Upload */}
            <div className="space-y-6">
              <div>
                <div className="text-xl text-[#1F1F1F] mb-2">
                  1. Photo Upload & Space Recognition
                </div>
                <div className="text-sm text-[#6B7280]">
                  Intuitive drag-and-drop interface with immediate visual feedback and AI-powered space analysis
                </div>
              </div>
              <div className="flex justify-center">
                <PhotoUploadScreen />
              </div>
            </div>

            {/* Screen 2: Skill Calibration */}
            <div className="space-y-6">
              <div>
                <div className="text-xl text-[#1F1F1F] mb-2">
                  2. Skill Calibration
                </div>
                <div className="text-sm text-[#6B7280]">
                  Friendly assessment that adapts project complexity and instruction detail to user experience
                </div>
              </div>
              <div className="flex justify-center">
                <SkillCalibrationScreen />
              </div>
            </div>

            {/* Screen 3: Project Breakdown */}
            <div className="space-y-6">
              <div>
                <div className="text-xl text-[#1F1F1F] mb-2">
                  3. Project Breakdown
                </div>
                <div className="text-sm text-[#6B7280]">
                  Comprehensive view with phased tasks, material lists, cost estimates, and permit requirements
                </div>
              </div>
              <div className="flex justify-center">
                <ProjectBreakdownScreen />
              </div>
            </div>

            {/* Screen 4: Progress Tracker */}
            <div className="space-y-6">
              <div>
                <div className="text-xl text-[#1F1F1F] mb-2">
                  4. Progress Tracker
                </div>
                <div className="text-sm text-[#6B7280]">
                  Visual progress monitoring with confidence indicators and step-by-step guidance access
                </div>
              </div>
              <div className="flex justify-center">
                <ProgressTrackerScreen />
              </div>
            </div>
          </section>

          <Separator className="bg-[#E5E7EB]" />

          {/* Reference Aesthetic */}
          <section className="space-y-6">
            <div>
              <div className="text-xl text-[#1F1F1F] mb-2">Design Inspiration</div>
              <div className="text-[#6B7280]">
                Blending the best of modern product design
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: 'Apple Home', trait: 'Clarity & Airiness' },
                { name: 'Notion', trait: 'Structured & Modular' },
                { name: 'Houzz Pro', trait: 'Visual Inspiration' },
                { name: 'Google Home', trait: 'Approachable Tech' },
              ].map((ref) => (
                <div
                  key={ref.name}
                  className="p-6 rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#4DA3FF] transition-colors"
                >
                  <div className="text-[#1F1F1F] mb-1">{ref.name}</div>
                  <div className="text-sm text-[#6B7280]">{ref.trait}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Note */}
          <section className="text-center py-8">
            <div className="text-sm text-[#9CA3AF]">
              HomeScope Concept • October 2025 • Designed for clarity, intelligence, and confidence
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
