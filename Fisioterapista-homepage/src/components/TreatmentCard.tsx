import { Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TreatmentCardProps {
  image: string;
  title: string;
  benefits: string[];
}

const TreatmentCard = ({ image, title, benefits }: TreatmentCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl border-border">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          {title}
        </h3>
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
        <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
          Scopri di più
          <ArrowRight className="w-4 h-4" />
        </button>
      </CardContent>
    </Card>
  );
};

export default TreatmentCard;
