import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Brain, BarChart3, Wallet, Clock } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Market Data",
    description: "Get instant access to live stock prices, market trends, and comprehensive financial data to make informed decisions.",
  },
  {
    icon: Brain,
    title: "AI Investment Insights",
    description: "Leverage cutting-edge AI algorithms to discover investment opportunities tailored to your financial goals and risk profile.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Tracking",
    description: "Monitor your investments in real-time with intuitive charts, performance analytics, and personalized dashboards.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Bank-grade encryption and multi-factor authentication ensure your investments and personal data are always protected.",
  },
  {
    icon: Wallet,
    title: "Zero Commission",
    description: "Invest in stocks and ETFs without worrying about brokerage fees. Keep more of your returns.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is available round the clock to help you with any questions or concerns.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Everything You Need to <span className="text-primary">Grow Your Wealth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make investing simple, secure, and profitable for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
