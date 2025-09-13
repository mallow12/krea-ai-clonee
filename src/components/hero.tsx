"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, Wand2, Image, Video, Palette } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export function Hero() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const debouncedPrompt = useDebounce(prompt, 300);

  const handleGenerate = () => {
    if (!debouncedPrompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Creation
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Generate stunning{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  images & videos
                </span>{" "}
                with AI
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Turn your ideas into visuals quickly. Built to explore modern web interfaces 
                and AI-inspired design patterns.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-sm">
                <Image className="w-4 h-4 text-purple-500" />
                Image Generation
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-sm">
                <Video className="w-4 h-4 text-pink-500" />
                Video Creation
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-sm">
                <Palette className="w-4 h-4 text-blue-500" />
                Style Transfer
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Start Creating Free
              </Button>
              <Button variant="outline" size="lg">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 text-center sm:text-left">
              <div>
                <div className="text-2xl font-bold">10M+</div>
                <div className="text-sm text-muted-foreground">Images Generated</div>
              </div>
              <div>
                <div className="text-2xl font-bold">500K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Generation Interface */}
          <div className="relative">
            <div className="bg-card border rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">AI Studio</span>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium">Describe your vision</label>
                  <Textarea
                    placeholder="A majestic dragon soaring through a sunset sky, digital art style..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">Style</label>
                    <select className="w-full p-2 rounded-md border bg-background text-sm">
                      <option>Photorealistic</option>
                      <option>Digital Art</option>
                      <option>Oil Painting</option>
                      <option>Anime</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">Aspect Ratio</label>
                    <select className="w-full p-2 rounded-md border bg-background text-sm">
                      <option>16:9</option>
                      <option>1:1</option>
                      <option>4:3</option>
                      <option>9:16</option>
                    </select>
                  </div>
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Image
                    </>
                  )}
                </Button>

                {/* Preview Area */}
                <div className="aspect-video bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                  {isGenerating ? (
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto" />
                      <p className="text-sm text-muted-foreground">Creating your masterpiece...</p>
                    </div>
                  ) : (
                    <div className="text-center space-y-2">
                      <Image className="w-12 h-12 text-muted-foreground/50 mx-auto" />
                      <p className="text-sm text-muted-foreground">Your generated image will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}