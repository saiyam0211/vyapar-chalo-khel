import { motion } from "framer-motion";
import { MousePointerClick, Dices, MoveRight, Zap, BookOpen } from "lucide-react";

const steps = [
  { icon: MousePointerClick, label: "Choose Action", desc: "Pick a business decision" },
  { icon: Dices, label: "Roll Dice", desc: "See what the market brings" },
  { icon: MoveRight, label: "Move Forward", desc: "Advance on the board" },
  { icon: Zap, label: "Face Result", desc: "Snake or Ladder?" },
  { icon: BookOpen, label: "Learn Why", desc: "Understand the outcome" },
];

const HowItWorks = () => (
  <section className="py-20">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-section md:text-section-md text-center text-foreground mb-14"
      >
        How the game <span className="text-secondary">works</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full gradient-saffron flex items-center justify-center mb-3 shadow-card">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-xs font-bold text-primary mb-0.5">Step {i + 1}</div>
            <div className="font-bold text-foreground text-sm">{s.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute">
                {/* Arrow handled by gap */}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
