import { motion } from "framer-motion";
import { Dices, Layers, AlertTriangle, BarChart3, Globe, MessageCircle } from "lucide-react";

const features = [
  { icon: Dices, title: "Familiar Format", desc: "Based on Snakes & Ladders — a game everyone already knows and loves." },
  { icon: Layers, title: "Decision Cards", desc: "Choose actions like hiring, buying stock, or taking a loan — just like real business." },
  { icon: AlertTriangle, title: "Real Consequences", desc: "Every decision has an outcome. Learn what works and what doesn't." },
  { icon: BarChart3, title: "Business Health Dashboard", desc: "Track your shop's money, customers, and reputation as you play." },
  { icon: Globe, title: "Regional Languages", desc: "Play in Hindi, Tamil, Bengali, and 12+ languages across India." },
  { icon: MessageCircle, title: "Mentor Guidance", desc: "Get simple tips and advice after each round to help you learn." },
];

const FeaturesSection = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-section md:text-section-md text-center text-foreground mb-14"
      >
        What makes it <span className="text-primary">special</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4 p-5 rounded-xl bg-background border border-border hover:shadow-card transition-shadow"
          >
            <div className="w-11 h-11 rounded-lg bg-saffron-light flex items-center justify-center shrink-0">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
