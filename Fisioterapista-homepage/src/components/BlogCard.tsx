import { Button } from "@/components/ui/button";
import { User, Tag } from "lucide-react";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  author?: string;
  category?: string;
}

const BlogCard = ({ 
  image, 
  date, 
  title, 
  excerpt,
  author = "Admin",
  category = "Healthcare"
}: BlogCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-4 left-4 bg-background px-4 py-2 rounded-lg shadow-md">
          <span className="text-sm font-bold text-foreground">{date}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>By {author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Tag className="w-4 h-4" />
            <span>{category}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {excerpt}
        </p>
        
        <Button variant="outline" size="sm" className="rounded-full">
          Read More
        </Button>
      </div>
    </article>
  );
};

export default BlogCard;
