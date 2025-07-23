import { HTestimonial } from "@/constants-temp/data";
import CardStackSlider from "@/components/Elements/CardStackSlider";
import BackgroundDots from "@/components/Elements/BackgroundDots";

const HomeTesti = () => {
  return (
    <section className="py-[3rem] h-testi">
      <BackgroundDots />
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-raleway font-medium text-darkblue">
          {HTestimonial.title}
        </h2>
        <p className="text-center text-lg text-darkblue opacity-80">
          {HTestimonial.desc}
        </p>

        <CardStackSlider />
      </div>
    </section>
  );
};

export default HomeTesti;
