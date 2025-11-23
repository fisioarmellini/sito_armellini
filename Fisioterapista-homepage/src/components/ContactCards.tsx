import { MapPin, Phone, Mail } from "lucide-react";

const ContactCards = () => {
  const contacts = [
    {
      icon: MapPin,
      title: "Dove sono",
      content: "Via Giuseppe Mercalli 11, Roma Parioli",
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "+39 379 100 9600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "dottoressa.armellini@gmail.com",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <contact.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                {contact.title}
              </h3>
              <p className="text-sm md:text-base text-foreground">{contact.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
