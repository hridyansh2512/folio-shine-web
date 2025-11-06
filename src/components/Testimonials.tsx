import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    avatar: "PS",
    content: "GrowTrade has completely transformed the way I invest. The AI insights are incredibly accurate, and the interface is so intuitive. I've seen a 23% growth in my portfolio in just 6 months!",
    rating: 5,
  },
  {
    name: "Raj Malhotra",
    role: "Business Owner",
    avatar: "RM",
    content: "As someone new to investing, I was intimidated by the stock market. GrowTrade made it simple and accessible. The educational resources and real-time support are outstanding.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Marketing Manager",
    avatar: "AR",
    content: "The zero-commission model and transparent pricing won me over. No hidden fees, no surprises. Just honest investing. Plus, the mobile app is fantastic for trading on the go.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Trusted by <span className="text-primary">2 Million+</span> Investors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about their investment journey with GrowTrade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
