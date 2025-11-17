import { Button } from "@/components/ui/button";
import { User, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

interface BlogPost {
  id: number;
  image: string;
  date: string;
  author: string;
  category: string;
  title: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: blog1,
    date: "01/01/25",
    author: "Admin",
    category: "Healthcare",
    title: "Empower Yourself and Your Health",
    excerpt:
      "Discover professional physiotherapy techniques that can transform your daily wellness routine and improve mobility.",
  },
  {
    id: 2,
    image: blog2,
    date: "05/01/25",
    author: "Admin",
    category: "Healthcare",
    title: "Essential Stretching for Daily Wellness",
    excerpt:
      "Learn simple yet effective stretching exercises you can incorporate into your morning routine for better flexibility.",
  },
  {
    id: 3,
    image: blog3,
    date: "10/01/25",
    author: "Admin",
    category: "Healthcare",
    title: "Understanding Your Treatment Plan",
    excerpt:
      "A comprehensive guide to making the most of your healthcare consultations and physiotherapy sessions.",
  },
];

const LatestNewsFeed = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary text-muted-foreground text-xs sm:text-sm mb-3 md:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            RIMANI AGGIORNATO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-2">
            Novità e blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Image with Date Overlay */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-background px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-foreground font-semibold text-sm">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-primary" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-primary" />
                    <span>{post.category}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <Link to={`/blog/${post.id}`}>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsFeed;
