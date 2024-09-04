import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import PlanetWithStars from "@/components/PlanetWithStars";
export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,35,.5)_78%,transparent)]"></div>

      <PlanetWithStars />
      <div className="container relative mt-16">
        <h1 className="text-6xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          The Food School
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Let&apos;s eat and get fit
        </p>
        <div className="flex justify-center mt-5">
          <Button>Start Today</Button>
        </div>
      </div>
    </section>
  );
};
