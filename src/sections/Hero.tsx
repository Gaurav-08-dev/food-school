import Button from "@/components/Button";
import starsBg from "@/assets/stars.png"
export const Hero = () => {
  return (
    <section className="h-[492px] flex items-center" style={{
      backgroundImage:`url(${starsBg.src})`
    }}>
      <div className="container">
        <h1 className="text-6xl font-semibold tracking-tighter bg-white bg-gradient-to-br from-white via-white to-indigo-700 text-transparent bg-clip-text text-center">
          The Food School
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Let&apos;s eat and get fit
        </p>
        <div className="flex justify-center mt-5">
          <Button>Start Today</Button>
        </div>
      </div>
    </section>
  );
};
