import { Dices } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border bg-card">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Dices className="w-5 h-5 text-primary" />
        <span className="font-bold text-foreground">Unicorn Lite: Snakes & Ladders Edition</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Unicorn Lite. Made with ❤️ for Bharat.
      </p>
    </div>
  </footer>
);

export default Footer;
