import { motion } from "framer-motion";

const stages = [
  { hindi: "Soch aur Shuruaat", english: "Think & Begin", desc: "Discover your business idea and take the first step.", num: 1 },
  { hindi: "Parivaar aur Pehla Sahara", english: "Family & First Support", desc: "Get support from people around you to start small.", num: 2 },
  { hindi: "Pehla Bazaar aur Pehchaan", english: "First Market & Identity", desc: "Find your first customers and build your name.", num: 3 },
  { hindi: "Vyapar ka Vistaar", english: "Business Growth", desc: "Expand your reach, add products, and earn more.", num: 4 },
  { hindi: "Majboot Vyavastha", english: "Strong Systems", desc: "Build reliable processes for your growing business.", num: 5 },
  { hindi: "Safal Udyam", english: "Successful Enterprise", desc: "Run a stable, profitable, and respected business.", num: 6 },
];

const JourneyStages = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-section md:text-section-md text-center text-foreground mb-4"
      >
        The Journey — <span className="text-primary">6 Stages</span>
      </motion.h2>
      <p className="text-center text-muted-foreground text-body-lg mb-14 max-w-2xl mx-auto">
        Progress through six stages — from first idea to successful business.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stages.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-6 rounded-xl bg-background border border-border shadow-card overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-5xl font-black text-primary/10">
              {s.num}
            </div>
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
              Stage {s.num}
            </div>
            <h3 className="font-bold text-foreground text-lg mb-1">{s.hindi}</h3>
            <div className="text-sm text-accent font-semibold mb-2">{s.english}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JourneyStages;
