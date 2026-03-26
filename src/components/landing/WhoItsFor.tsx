import { motion } from "framer-motion";
import { Store, Users, Sparkles, GraduationCap } from "lucide-react";

const segments = [
  { icon: Store, title: "Rural & Semi-Urban Entrepreneurs", desc: "Small shop owners, traders, and service providers looking to grow." },
  { icon: Users, title: "Women & SHG Members", desc: "Women-led businesses and self-help group members building livelihoods." },
  { icon: Sparkles, title: "Youth & First-Time Founders", desc: "Young people starting their first business with limited guidance." },
  { icon: GraduationCap, title: "NIESBUD / EDP Participants", desc: "Trainees in entrepreneurship development programs across India." },
];

const WhoItsFor = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-section md:text-section-md text-center text-foreground mb-4"
      >
        Built for people who want to{" "}
        <span className="text-secondary">start or grow</span> a small business
      </motion.h2>
      <p className="text-center text-muted-foreground text-body-lg mb-14 max-w-2xl mx-auto">
        Whether you run a small shop, lead an SHG, or are just starting out — this is made for you.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {segments.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-saffron-light flex items-center justify-center mb-4">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsFor;
