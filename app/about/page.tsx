import Books from "./_components/Books";
import Credentials from "./_components/Credentials";
import Podcasts from "./_components/Podcasts";
import Schools from "./_components/Schools";
import Story from "./_components/Story";
import Testimonials from "./_components/Testimonials";

const About = () => {
  return (
    <>
      <div className="flex h-[calc(90vh-80px)] items-end bg-[linear-gradient(180deg,rgba(0,0,0,0.00)45%,rgba(0,0,0,0.20)70%),url('/haneen/haneen-1.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h1 className="border-l-4 border-solid border-white pb-28 pl-8 pt-4 font-serif text-5xl text-white drop-shadow-lg md:text-[100px]">
            Hola, I&apos;m Haneen
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6">
        <Story />
        <Credentials />
        <Schools />
        <Podcasts />
        <Books />
        <Testimonials />
      </div>
    </>
  );
};

export default About;
