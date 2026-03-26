import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, Gamepad2 } from "lucide-react";

const items = [
  { icon: ArrowDown, color: "bg-destructive/10 text-destructive", title: "Snakes = Real Business Problems", desc: "Bad decisions, market changes, or unexpected costs can pull you back — just like in real life." },
  { icon: ArrowUp, color: "bg-green-light text-secondary", title: "Ladders = Smart Growth", desc: "Good choices like saving money, learning skills, or finding customers help you move ahead." },
  { icon: Gamepad2, color: "bg-saffron-light text-primary", title: "Decisions = Your Control", desc: "You choose actions in the game — just like you make decisions in your business every day." },
];

const CoreIdea = () => (
  <section className="py-20">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-section md:text-section-md text-center text-foreground mb-4"
      >
        Game meets <span className="text-primary">business</span>
      </motion.h2>
      <p className="text-center text-muted-foreground text-body-lg mb-14 max-w-2xl mx-auto">
        You choose actions (like real life). You roll dice (market uncertainty). You face outcomes (growth or problems).
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center p-8 rounded-2xl bg-card border border-border shadow-card"
          >
            <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-5`}>
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-foreground text-xl mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreIdea;
