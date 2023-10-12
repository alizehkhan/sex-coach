import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

const Coaching121 = () => {
  return (
    <>
      <h2 className="mb-8 mt-24 font-serif text-4xl font-semibold text-stone-700">
        1:1 Coaching
      </h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="w-fit rounded-lg bg-stone-100 px-10 py-8">
          <p className="text-lg font-semibold text-stone-700">3 months</p>
          <p className="mb-3 mt-2 font-serif text-6xl font-semibold text-stone-700">
            £840
          </p>
          <ul className="text-stone-600">
            <li className="flex gap-2">
              <IconCheck />7 x 1 hour sessions
            </li>
            <li className="mt-2 flex gap-2">
              <IconCheck />
              Email support & check-ins
            </li>
            <li className="mt-2 flex gap-2">
              <IconCheck />
              Personalised homework in between
            </li>
          </ul>
          <Link
            href="https://calendly.com/intimacycoaching/complimentary-coaching-call"
            target="_blank"
            className="mt-8 block w-fit rounded-md bg-rose-800 px-3 py-2 text-white hover:bg-rose-900"
          >
            Book a free discovery call
          </Link>
        </div>
        <div className="flex w-fit flex-col justify-between rounded-lg bg-stone-100 px-10 py-8">
          <div>
            <p className="text-lg font-semibold text-stone-700">One-off</p>
            <p className=" mb-3 mt-2 font-serif text-6xl font-semibold text-stone-700">
              £140
            </p>
            <ul className="text-stone-600">
              <li className="flex gap-2">
                <IconCheck />1 hour session
              </li>
            </ul>
          </div>
          <Link
            href="https://calendly.com/intimacycoaching/complimentary-coaching-call"
            target="_blank"
            className="mt-8 block w-fit rounded-md bg-rose-800 px-3 py-2 text-white hover:bg-rose-900"
          >
            Book a free discovery call
          </Link>
        </div>
      </div>
    </>
  );
};

export default Coaching121;
