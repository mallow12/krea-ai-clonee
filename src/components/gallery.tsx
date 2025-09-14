"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Download, Share2, Eye, Sparkles } from "lucide-react";
import { useHover } from "@/hooks/useHover";

const galleryItems = [
  {
    id: 1,
    title: "Code Visualization",
    prompt: "Colorful programming code display with syntax highlighting and gradients",
    style: "Digital Art",
    likes: 2847,
    views: 15234,
    author: "@code_artist",
    gradient: "from-violet-600 to-fuchsia-500",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
  },
  {
    id: 2,
    title: "Forest Pathway",
    prompt: "Sunlit forest trail winding through tall green trees with natural lighting",
    style: "Photography",
    likes: 1923,
    views: 8765,
    author: "@nature_lens",
    gradient: "from-emerald-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
  },
  {
    id: 3,
    title: "Earth at Night",
    prompt: "Satellite view of Earth showing city lights and illuminated coastlines from space",
    style: "Space Photography",
    likes: 3421,
    views: 18902,
    author: "@space_observer",
    gradient: "from-blue-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
  },
  {
    id: 4,
    title: "Fluid Abstract",
    prompt: "Vibrant liquid marble patterns with pink, blue and purple flowing colors",
    style: "Abstract Art",
    likes: 2156,
    views: 11543,
    author: "@fluid_artist",
    gradient: "from-purple-600 to-pink-500",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
  },
  {
    id: 5,
    title: "Natural Texture",
    prompt: "Rich brown organic surface with natural grain and earthy tones",
    style: "Texture",
    likes: 1687,
    views: 7892,
    author: "@texture_hunter",
    gradient: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
  },
  {
    id: 6,
    title: "Modern Architecture",
    prompt: "Contemporary white building with geometric glass panels and angular design",
    style: "Architecture",
    likes: 2934,
    views: 14567,
    author: "@arch_photographer",
    gradient: "from-teal-600 to-emerald-500",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
  }
];

export function Gallery() {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover<number>();

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            <Sparkles className="w-3 h-3 mr-1" />
            Community Gallery
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Discover amazing creations
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              from our community
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse through various design concepts and UI experiments. 
            Each item demonstrates different visual approaches and interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {galleryItems.map((item) => (
            <Card 
              key={item.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative aspect-square overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`}></div>
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                    isHovered(item.id) ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg truncate">{item.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {item.style}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.prompt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-medium">{item.author}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 md:p-8 lg:p-12 border">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
            Ready to create your masterpiece?
          </h3>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators and start generating amazing content today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-sm md:text-base"
            >
              Start Creating Free
            </Button>
            <Button variant="outline" size="lg" className="text-sm md:text-base">
              Explore Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}