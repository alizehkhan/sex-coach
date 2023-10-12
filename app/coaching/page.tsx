import Coaching121 from "./Coaching121";
import CoachingCouples from "./CoachingCouples";
import Faqs from "./Faqs";
import Roots from "./Roots";
import Testimonial from "./Testimonial";

const Coaching = () => {
  return (
    <>
      <div className="flex h-[calc(90vh-80px)] items-end bg-[linear-gradient(180deg,rgba(0,0,0,0.00)45%,rgba(0,0,0,0.20)70%),url('/haneen/haneen-6.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h1 className="border-l-4 border-solid border-white pb-28 pl-8 pt-4 font-serif text-5xl text-white drop-shadow-lg md:text-[100px]">
            Intimacy Coaching
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6">
        <Roots />
        <Coaching121 />
        <CoachingCouples />
        <Faqs />
        <Testimonial />
      </div>
    </>
  );
};

export default Coaching;
