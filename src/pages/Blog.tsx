import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Button } from "@/components/ui/button";
import { Activity, Heart } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      date: "01/01/25",
      title: "Empower Yourself and Your Health",
      excerpt: "Discover professional physiotherapy techniques that can transform your daily wellness routine and improve mobility."
    },
    {
      id: 2,
      image: blog2,
      date: "05/01/25",
      title: "Essential Stretching for Daily Wellness",
      excerpt: "Learn simple yet effective stretching exercises you can incorporate into your morning routine for better flexibility."
    },
    {
      id: 3,
      image: blog3,
      date: "10/01/25",
      title: "Understanding Your Treatment Plan",
      excerpt: "A comprehensive guide to making the most of your healthcare consultations and physiotherapy sessions."
    },
    {
      id: 4,
      image: blog4,
      date: "15/01/25",
      title: "Back Health and Rehabilitation",
      excerpt: "Expert insights on maintaining a healthy spine and recovering from back-related injuries with targeted exercises."
    },
    {
      id: 5,
      image: blog5,
      date: "20/01/25",
      title: "Senior Care and Mobility Solutions",
      excerpt: "Gentle physiotherapy approaches designed specifically for seniors to maintain independence and quality of life."
    },
    {
      id: 6,
      image: blog6,
      date: "25/01/25",
      title: "Holistic Wellness Lifestyle",
      excerpt: "Integrating physical therapy, nutrition, and mindfulness for a complete approach to health and well-being."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section (Colore sfondo aggiornato) */}
      <section className="bg-secondary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <Activity className="absolute top-20 left-[10%] w-32 h-32 text-primary" strokeWidth={1} />
          <Heart className="absolute bottom-20 right-[15%] w-24 h-24 text-primary" strokeWidth={1} />
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              News e Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Approfondimenti, consigli e novità dal mondo della fisioterapia per aiutarti a vivere una vita più sana e attiva.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="px-12 rounded-full font-bold"
          >
            Load More
          </Button>
        </div>
      </section>

      {/* Sezione Aggiunta */}
      <HowItWorksSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;