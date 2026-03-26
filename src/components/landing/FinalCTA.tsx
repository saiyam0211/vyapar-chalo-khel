import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24">
      <div className="container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-section md:text-section-md text-foreground mb-4">
            Start learning business the{" "}
            <span className="text-primary">simple way</span>
          </h2>
          <p className="text-muted-foreground text-body-lg mb-8">
            Join thousands of entrepreneurs across India learning through play.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
              />
            </div>
            <button className="gradient-saffron text-primary-foreground font-bold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-base whitespace-nowrap">
              Join Beta
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            Designed for Bharat's entrepreneurs 🇮🇳
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
