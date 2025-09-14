"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

import { Menu, X, Sparkles, Image, Home, Video, Zap, Clock, Edit, FolderOpen } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-14 md:h-16 items-center px-4 md:px-6 lg:px-8 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105">
          <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 group-hover:shadow-lg">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-black transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
            Krea
          </span>
        </Link>

        {/* Desktop Navigation - Absolutely centered */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform -translate-x-1/2 bg-muted/90 rounded-2xl px-6 py-2.5">
          <Link
            href="/"
            title="Home"
            className={`text-foreground hover:text-foreground transition-all duration-300 p-2 rounded-md hover:scale-110 hover:shadow-md group ${
              pathname === '/' 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'bg-muted/30 hover:bg-muted/70'
            }`}
          >
            <Home className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
              pathname === '/' ? 'text-black' : 'text-foreground'
            }`} />
          </Link>
          <Link
            href="/gallery"
            title="Gallery"
            className={`text-foreground hover:text-foreground transition-all duration-300 p-2 rounded-md hover:scale-110 hover:shadow-md group ${
              pathname === '/gallery' 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'bg-muted/30 hover:bg-muted/70'
            }`}
          >
            <Image className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
              pathname === '/gallery' ? 'text-black' : 'text-foreground'
            }`} />
          </Link>
          <Link
            href="/video"
            title="Video"
            className={`text-foreground hover:text-foreground transition-all duration-300 p-2 rounded-md hover:scale-110 hover:shadow-md group ${
              pathname === '/video' 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'bg-muted/30 hover:bg-muted/70'
            }`}
          >
            <Video className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
              pathname === '/video' ? 'text-black' : 'text-foreground'
            }`} />
          </Link>
          <Link
            href="/enhancer"
            title="Enhancer"
            className={`text-foreground hover:text-foreground transition-all duration-300 p-2 rounded-md hover:scale-110 hover:shadow-md group ${
              pathname === '/enhancer' 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'bg-muted/30 hover:bg-muted/70'
            }`}
          >
            <Zap className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
              pathname === '/enhancer' ? 'text-black' : 'text-foreground'
            }`} />
          </Link>
          <Link
            href="/realtime"
            title="Realtime"
            className={`text-foreground hover:text-foreground transition-all duration-300 p-2 rounded-md hover:scale-110 hover:shadow-md group ${
              pathname === '/realtime' 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'bg-muted/30 hover:bg-muted/70'
            }`}
          >
            <Clock className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
              pathname === '/realtime' ? 'text-black' : 'text-foreground'
            }`} />
          </Link>
          <Link
            href="/edit"
            title="Edit"
            className={`text-foreground hover:text-foreground transition-all duration-300 p-2 rounded-md hover:scale-110 hover:shadow-md group ${
              pathname === '/edit' 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'bg-muted/30 hover:bg-muted/70'
            }`}
          >
            <Edit className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
              pathname === '/edit' ? 'text-black' : 'text-foreground'
            }`} />
          </Link>
          <Link
            href="/assets"
            title="Assets"
            className={`text-foreground hover:text-foreground transition-all duration-300 p-2 rounded-md hover:scale-110 hover:shadow-md group ${
              pathname === '/assets' 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'bg-muted/30 hover:bg-muted/70'
            }`}
          >
            <FolderOpen className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
              pathname === '/assets' ? 'text-black' : 'text-foreground'
            }`} />
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="flex items-center space-x-2 md:space-x-4 border-l border-border/50 pl-4 ml-auto">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden sm:flex text-sm hover:scale-105 transition-all duration-300 hover:shadow-md">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-sm px-3 md:px-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Start</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="sm"
            className="hover:scale-110 transition-all duration-300 hover:shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 transition-transform duration-300" /> : <Menu className="h-5 w-5 transition-transform duration-300" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link
              href="/"
              className={`flex items-center space-x-3 transition-all duration-300 p-2 rounded-md hover:scale-105 hover:shadow-md group ${
                pathname === '/'
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'text-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                pathname === '/' ? 'text-black' : 'text-foreground'
              }`} />
              <span className="transition-all duration-300 group-hover:translate-x-1">Home</span>
            </Link>
            <Link
              href="/gallery"
              className={`flex items-center space-x-3 transition-all duration-300 p-2 rounded-md hover:scale-105 hover:shadow-md group ${
                pathname === '/gallery'
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'text-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Image className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                pathname === '/gallery' ? 'text-black' : 'text-foreground'
              }`} />
              <span className="transition-all duration-300 group-hover:translate-x-1">Gallery</span>
            </Link>
            <Link
              href="/video"
              className={`flex items-center space-x-3 transition-all duration-300 p-2 rounded-md hover:scale-105 hover:shadow-md group ${
                pathname === '/video'
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'text-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Video className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                pathname === '/video' ? 'text-black' : 'text-foreground'
              }`} />
              <span className="transition-all duration-300 group-hover:translate-x-1">Video</span>
            </Link>
            <Link
              href="/enhancer"
              className={`flex items-center space-x-3 transition-all duration-300 p-2 rounded-md hover:scale-105 hover:shadow-md group ${
                pathname === '/enhancer'
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'text-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Zap className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                pathname === '/enhancer' ? 'text-black' : 'text-foreground'
              }`} />
              <span className="transition-all duration-300 group-hover:translate-x-1">Enhancer</span>
            </Link>
            <Link
              href="/realtime"
              className={`flex items-center space-x-3 transition-all duration-300 p-2 rounded-md hover:scale-105 hover:shadow-md group ${
                pathname === '/realtime'
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'text-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Clock className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                pathname === '/realtime' ? 'text-black' : 'text-foreground'
              }`} />
              <span className="transition-all duration-300 group-hover:translate-x-1">Realtime</span>
            </Link>
            <Link
              href="/edit"
              className={`flex items-center space-x-3 transition-all duration-300 p-2 rounded-md hover:scale-105 hover:shadow-md group ${
                pathname === '/edit'
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'text-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Edit className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                pathname === '/edit' ? 'text-black' : 'text-foreground'
              }`} />
              <span className="transition-all duration-300 group-hover:translate-x-1">Edit</span>
            </Link>
            <Link
              href="/assets"
              className={`flex items-center space-x-3 transition-all duration-300 p-2 rounded-md hover:scale-105 hover:shadow-md group ${
                pathname === '/assets'
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'text-foreground hover:text-foreground hover:bg-muted/50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FolderOpen className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                pathname === '/assets' ? 'text-black' : 'text-foreground'
              }`} />
              <span className="transition-all duration-300 group-hover:translate-x-1">Assets</span>
            </Link>
            <div className="flex space-x-2 pt-4 border-t">
              <Button variant="ghost" size="sm" className="flex-1 hover:scale-105 transition-all duration-300 hover:shadow-md">
                Sign In
              </Button>
              <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}