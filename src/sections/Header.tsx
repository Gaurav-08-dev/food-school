import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div>
            <div className="border border-white/15 h-10 w-10 rounded-lg inline-flex justify-center items-center">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-white/70 text-sm">
              <a href="#" className="hover:text-white transition">Home</a>
              <a href="#" className="hover:text-white transition">Testimonials</a>
              <a href="#" className="hover:text-white transition">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>
              Start Today
            </Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
