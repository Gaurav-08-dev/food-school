import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <div className="border border-white/15 h-10 w-10 rounded-lg inline-flex justify-center items-center">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image: linear-gradient(to_top, black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>
              <span>Start Today!</span>
            </button>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
