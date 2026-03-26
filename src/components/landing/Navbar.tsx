import { Dices } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg gradient-saffron flex items-center justify-center">
          <Dices className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-bold text-foreground text-lg">Unicorn Lite</span>
      </div>
      <button className="gradient-saffron text-primary-foreground font-bold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
        Join Beta
      </button>
    </div>
  </nav>
);

export default Navbar;
