import { Dices } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2.5">
        <div className="w-28 h-28 rounded-lg flex items-center justify-center">
          <img src="/logo.png" alt="UdyogVerse" className="w-20 h-20 object-contain" />
        </div>
        <span className="font-bold text-foreground text-lg -ml-8">UdyogVerse</span>
      </div>
      <button className="gradient-saffron text-primary-foreground font-bold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
        Join Beta
      </button>
    </div>
  </nav>
);

export default Navbar;
