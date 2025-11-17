import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const blogPosts = [
  {
    id: 1,
    image: blog1,
    date: "01/01/25",
    title: "Empower Yourself and Your Health",
    excerpt: "Discover professional physiotherapy techniques that can transform your daily wellness routine and improve mobility.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 2,
    image: blog2,
    date: "05/01/25",
    title: "Essential Stretching for Daily Wellness",
    excerpt: "Learn simple yet effective stretching exercises you can incorporate into your morning routine for better flexibility.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    image: blog3,
    date: "10/01/25",
    title: "Understanding Your Treatment Plan",
    excerpt: "A comprehensive guide to making the most of your healthcare consultations and physiotherapy sessions.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    image: blog4,
    date: "15/01/25",
    title: "Back Health and Rehabilitation",
    excerpt: "Expert insights on maintaining a healthy spine and recovering from back-related injuries with targeted exercises.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 5,
    image: blog5,
    date: "20/01/25",
    title: "Senior Care and Mobility Solutions",
    excerpt: "Gentle physiotherapy approaches designed specifically for seniors to maintain independence and quality of life.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 6,
    image: blog6,
    date: "25/01/25",
    title: "Holistic Wellness Lifestyle",
    excerpt: "Integrating physical therapy, nutrition, and mindfulness for a complete approach to health and well-being.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-6 py-20 max-w-4xl">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-96 object-cover rounded-2xl mb-8"
        />
        
        <div className="mb-6">
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {post.title}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          <p className="text-foreground/80 leading-relaxed">
            {post.content}
          </p>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
