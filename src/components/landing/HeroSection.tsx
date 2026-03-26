import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-illustration.jpg";

const stats = [
  { value: "6", label: "Stages" },
  { value: "12+", label: "Languages" },
  { value: "50+", label: "Action Cards" },
];

const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="gradient-hero min-h-screen flex items-center pt-20 pb-12">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-trust-blue-light text-accent text-sm font-semibold mb-6">
              Proposed for NIESBUD
            </span>
            <h1 className="text-hero md:text-hero-md text-foreground mb-5 text-balance">
              Learn business by playing a{" "}
              <span className="text-primary">simple game.</span>
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-lg">
              A digital platform inspired by Snakes & Ladders that helps small
              business owners understand real-world decisions — without risk.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <div className="relative flex-1 max-w-sm">
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

            <div className="flex gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={heroImg}
              alt="Entrepreneurs learning business through a board game"
              width={1024}
              height={768}
              className="w-full max-w-md md:max-w-lg rounded-2xl shadow-elevated"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
