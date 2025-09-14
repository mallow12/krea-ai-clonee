"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wand2, 
  Zap, 
  Video, 
  Image, 
  Users, 
  RotateCcw,
  ChevronRight
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const featuredModels = [
  {
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image Generation",
    description: "Generate complex, high-quality images using the powerful WAN 2.2 model, featuring exceptional prompt adherence and ultra-fine details.",
    badge: "FEATURED MODEL",
    buttonText: "Try WAN 2.2",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=300&fit=crop&crop=center"
  },
  {
    title: "FLUX1 Krea",
    subtitle: "FLUX1 Krea Image generation",
    description: "Generate stunning images with FLUX1 Krea model. Advanced AI technology for creative professionals.",
    badge: "NEW MODEL",
    buttonText: "Try FLUX1 Krea",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop&crop=center"
  },
  {
    title: "DALL-E 3",
    subtitle: "Creative AI",
    description: "Advanced text-to-image generation with exceptional creativity and accuracy.",
    badge: "NEW",
    buttonText: "Try DALL-E 3",
    gradient: "from-emerald-500 via-teal-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center"
  },
  {
    title: "Midjourney",
    subtitle: "Artistic generation",
    description: "Create beautiful, artistic images with unique styles and compositions.",
    badge: "TRENDING",
    buttonText: "Try Midjourney",
    gradient: "from-amber-500 via-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop&crop=center"
  },
  {
    title: "Leonardo AI",
    subtitle: "Professional quality",
    description: "Professional-grade AI image generation for commercial and creative projects.",
    badge: "PRO",
    buttonText: "Try Leonardo AI",
    gradient: "from-rose-500 via-pink-500 to-red-600",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&h=300&fit=crop&crop=center"
  },
  {
    title: "Adobe Firefly",
    subtitle: "Creative suite",
    description: "Integrated AI generation tools designed for creative professionals and workflows.",
    badge: "ENTERPRISE",
    buttonText: "Try Adobe Firefly",
    gradient: "from-amber-500 via-yellow-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center"
  }
];

const generateFeatures = [
  {
    icon: Image,
    title: "Image",
    description: "Text-to-image with modern design.",
    badge: "NEW",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500"
  },
  {
    icon: Video,
    title: "Video",
    description: "Video generation with smooth animations.",
    badge: null,
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500"
  },
  {
    icon: Zap,
    title: "Realtime",
    description: "Real-time preview with instant feedback.",
    badge: null,
    color: "from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-500"
  },
  {
    icon: RotateCcw,
    title: "Motion Transfer",
    description: "Apply motion styles to static images.",
    badge: "NEW",
    color: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-500"
  },
  {
    icon: Wand2,
    title: "Enhancer",
    description: "Image editing with intuitive controls.",
    badge: "NEW",
    color: "from-emerald-500 to-green-500",
    iconBg: "bg-emerald-500"
  },
  {
    icon: Users,
    title: "Train",
    description: "Custom model training interface.",
    badge: null,
    color: "from-gray-500 to-gray-600",
    iconBg: "bg-gray-500"
  }
];





export function Features() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 448; // w-[28rem] + gap
      const gap = 24; // gap-6
      const scrollPosition = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = 448;
      const gap = 24;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.max(0, Math.min(newIndex, featuredModels.length - 1)));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Featured Models Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Models</h2>
            <Button variant="ghost" className="text-blue-500 hover:text-blue-600">
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scroll-smooth scrollbar-hide" 
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
          >
            <div className="flex gap-6 w-max">
              {featuredModels.map((model, index) => (
                <Card key={index} className="group overflow-hidden border-0 text-white relative h-80 w-[28rem] flex-shrink-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${model.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                  <CardHeader className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <Badge variant="secondary" className="w-fit bg-white/20 text-white border-white/30">
                        {model.badge}
                      </Badge>
                      <div className="space-y-2">
                        <h3 className="text-3xl md:text-4xl font-bold">{model.title}</h3>
                        <p className="text-xl font-medium text-white/90">{model.subtitle}</p>
                        <p className="text-white/80 leading-relaxed max-w-md">{model.description}</p>
                      </div>
                    </div>
                    <button className="bg-white text-black hover:bg-white/90 px-4 py-2 rounded-lg font-medium transition-colors w-fit">
                      {model.buttonText}
                    </button>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Dot Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {featuredModels.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-500 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Generate Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Generate</h2>
            <Button variant="ghost" className="text-blue-500 hover:text-blue-600">
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {generateFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card cursor-pointer">
                <CardHeader className="p-4">
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-lg ${feature.iconBg} flex items-center justify-center`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm">{feature.title}</h3>
                        {feature.badge && (
                          <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700">
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Logic
              </Button>
              <Button variant="ghost" size="sm">
                Pricing
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-24 bg-card rounded-2xl p-6 md:p-8 border">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Trusted by creators worldwide</h3>
            <p className="text-sm md:text-base text-muted-foreground">Join millions creating amazing content</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              10M+
            </div>
            <div className="text-sm text-muted-foreground">Images Generated</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              500K+
            </div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              &lt;3s
            </div>
            <div className="text-sm text-muted-foreground">Avg Generation Time</div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}