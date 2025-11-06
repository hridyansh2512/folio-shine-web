import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const DashboardPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Dashboard Image */}
          <div className="relative animate-scale-in order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={dashboardImage}
                alt="GrowTrade investment dashboard showing portfolio performance, market data, and trading interface"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-fade-in order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Powerful Dashboard</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Track Your <span className="text-primary">Portfolio</span> in Real-Time
            </h2>

            <p className="text-lg text-muted-foreground">
              Get a comprehensive view of your investments with our intuitive dashboard. 
              Monitor performance, analyze trends, and make data-driven decisions with ease.
            </p>

            <ul className="space-y-4">
              {[
                "Live portfolio valuation and P&L tracking",
                "Interactive charts with historical performance",
                "Customizable watchlists and alerts",
                "Detailed transaction history and reports",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" size="lg" className="group mt-6">
              Explore Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
