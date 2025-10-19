import { Upload, Camera, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function PhotoUploadScreen() {
  return (
    <div className="w-full max-w-[390px] h-[844px] bg-[#FAFAF9] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 pt-14 pb-6">
        <div className="text-[#1F1F1F] mb-2">Upload Your Space</div>
        <div className="text-[#6B7280] text-sm">
          Take or upload photos of the room you'd like to improve
        </div>
      </div>

      {/* Main Upload Area */}
      <div className="flex-1 px-6 pb-6 flex flex-col gap-4">
        {/* Primary Upload Zone */}
        <div className="flex-1 border-2 border-dashed border-[#4DA3FF] bg-white rounded-2xl flex flex-col items-center justify-center gap-4 min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-[#4DA3FF]/10 flex items-center justify-center">
            <Upload className="w-8 h-8 text-[#4DA3FF]" />
          </div>
          <div>
            <div className="text-center text-[#1F1F1F] mb-1">
              Drag photos here or
            </div>
            <Button className="bg-[#4DA3FF] hover:bg-[#3B8FE6] text-white rounded-full px-6">
              Browse Files
            </Button>
          </div>
          <div className="text-xs text-[#9CA3AF]">
            Supports JPG, PNG • Max 10MB per image
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-[#E5E7EB] hover:border-[#4DA3FF] hover:bg-[#4DA3FF]/5 rounded-xl">
            <Camera className="w-6 h-6 text-[#4DA3FF]" />
            <span className="text-sm text-[#1F1F1F]">Take Photo</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-[#E5E7EB] hover:border-[#4DA3FF] hover:bg-[#4DA3FF]/5 rounded-xl">
            <ImageIcon className="w-6 h-6 text-[#4DA3FF]" />
            <span className="text-sm text-[#1F1F1F]">From Gallery</span>
          </Button>
        </div>

        {/* Example Uploads */}
        <div>
          <div className="text-xs text-[#6B7280] mb-3">Recent Uploads</div>
          <div className="grid grid-cols-3 gap-2">
            <Card className="aspect-square rounded-lg overflow-hidden border-[#E5E7EB] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DA3FF]/20 to-[#A5C59E]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                  <ImageIcon className="w-4 h-4 text-[#4DA3FF]" />
                </div>
              </div>
            </Card>
            <Card className="aspect-square rounded-lg overflow-hidden border-[#E5E7EB] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A5C59E]/20 to-[#4DA3FF]/20" />
            </Card>
            <Card className="aspect-square rounded-lg overflow-hidden border-[#E5E7EB] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B7280]/20 to-[#4DA3FF]/20" />
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-6 bg-white border-t border-[#E5E7EB]">
        <Button className="w-full bg-[#4DA3FF] hover:bg-[#3B8FE6] text-white rounded-full h-12">
          Continue with Photos
        </Button>
      </div>
    </div>
  );
}
