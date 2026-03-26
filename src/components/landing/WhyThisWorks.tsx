import { motion } from "framer-motion";
import { ShieldCheck, Brain, AlertCircle, Heart } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Learn without fear", desc: "Make mistakes in the game, not with real money." },
  { icon: Brain, title: "Practice decisions", desc: "Build your thinking skills one move at a time." },
  { icon: AlertCircle, title: "Understand mistakes early", desc: "See what can go wrong before it costs you." },
  { icon: Heart, title: "Build confidence", desc: "Feel ready to take real business steps." },
];

const WhyThisWorks = () => (
  <section className="py-20">
    <div className="container max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-section md:text-section-md text-center text-foreground mb-14"
      >
        Why this <span className="text-secondary">works</span>
      </motion.h2>

      <div className="space-y-5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-5 p-5 rounded-xl bg-card border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-green-light flex items-center justify-center shrink-0">
              <r.icon className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">{r.title}</h3>
              <p className="text-muted-foreground mt-1">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyThisWorks;
