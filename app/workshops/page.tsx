import Link from "next/link";

import { COMING_SOON_WORKSHOPS } from "./content";
import Testimonial from "./Testimonial";

const Workshops = () => {
  return (
    <>
      <div className="flex h-[calc(90vh-80px)] items-end bg-[linear-gradient(180deg,rgba(0,0,0,0.00)45%,rgba(0,0,0,0.20)70%),url('/haneen/haneen-3.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h1 className="border-l-4 border-solid border-white pb-28 pl-8 pt-4 font-serif text-5xl text-white drop-shadow-lg md:text-[100px]">
            Workshops
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mt-20 flex flex-col gap-12 md:flex-row">
          <div className="h-fit max-w-lg rounded-md bg-stone-100 px-8 py-6">
            <h2 className="font-serif text-4xl font-semibold text-stone-700">
              Workshops coming soon
            </h2>
            <p className="mt-2 text-xl text-stone-500">
              Notify me when these workshops are released
            </p>
            <Link
              href="https://sexhomeworksociety.typeform.com/to/qwb4MdHg"
              target="_blank"
              className="mt-4 block w-fit rounded-md bg-rose-800 px-3 py-2 text-white hover:bg-rose-900"
            >
              Notify me
            </Link>
          </div>
          <div className="border-t-[1px] border-solid border-stone-300">
            {COMING_SOON_WORKSHOPS.map((workshop, i) => (
              <div
                key={i}
                className="max-w-lg border-b-[1px] border-solid border-stone-300 py-6"
              >
                <h3 className="mb-1 font-serif text-2xl font-semibold text-stone-700">
                  {workshop.title}
                </h3>
                <p className="text-stone-500">{workshop.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Testimonial />
      </div>
    </>
  );
};

export default Workshops;
