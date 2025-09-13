import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Features />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}
