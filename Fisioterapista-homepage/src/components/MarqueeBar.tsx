import { Instagram, Phone } from "lucide-react";

const MarqueeBar = () => {
  const content = [
    { icon: Instagram, text: "Instagram: dottoressa.armellini" },
    { icon: Phone, text: "Contattami: +39 392 1780744" },
  ];
  //test

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-4">
      <div className="animate-marquee whitespace-nowrap flex gap-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center">
            {content.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-medium">
                <item.icon className="w-8 h-8" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBar;
