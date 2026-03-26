import { motion } from "framer-motion";
import { BookOpen, Presentation, RefreshCcw } from "lucide-react";

const useCases = [
  { icon: BookOpen, title: "Pre-training Engagement", desc: "Introduce business concepts before the classroom session begins." },
  { icon: Presentation, title: "Workshop Activity", desc: "Use as an interactive exercise during entrepreneurship workshops." },
  { icon: RefreshCcw, title: "Post-training Reinforcement", desc: "Let participants practice what they learned in a safe environment." },
];

const InstitutionsSection = () => (
  <section className="py-20 bg-trust-blue-light">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-section md:text-section-md text-center text-foreground mb-4"
      >
        A powerful tool for{" "}
        <span className="text-accent">entrepreneurship programs</span>
      </motion.h2>
      <p className="text-center text-muted-foreground text-body-lg mb-14 max-w-2xl mx-auto">
        Designed for NIESBUD and institutions running entrepreneurship development programs.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {useCases.map((u, i) => (
          <motion.div
            key={u.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="text-center p-8 rounded-2xl bg-card border border-border shadow-card"
          >
            <div className="w-14 h-14 rounded-xl bg-trust-blue-light flex items-center justify-center mx-auto mb-5">
              <u.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">{u.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{u.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InstitutionsSection;
