import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trade Anywhere, Anytime</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Download the <span className="text-primary">GrowTrade App</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the power of GrowTrade in your pocket. Trade on the go with our mobile apps, 
            available for both iOS and Android devices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="default"
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl group"
            >
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </Button>

            <Button
              variant="default"
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl group"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { value: "4.9", label: "App Store Rating" },
              { value: "1M+", label: "Downloads" },
              { value: "50K+", label: "Reviews" },
              { value: "24/7", label: "Trading Access" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
