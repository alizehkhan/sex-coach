import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

const CoachingCouples = () => {
  return (
    <>
      <h2 className="mb-8 mt-24 font-serif text-4xl font-semibold text-stone-700">
        Couples Coaching Programme
      </h2>
      <div className="max-w-xl text-lg text-stone-600">
        <p className="font-semibold text-stone-700">Maybe...</p>
        <ul className="my-2 pl-6">
          <li>❓ You feel disconnected from each other</li>
          <li>❓ You struggle getting turned on</li>
          <li>❓ You repeat the same sex routine over and over again.</li>
          <li>
            ❓ One of you always initiates sex, and the other feels pressure to
            say yes!
          </li>
        </ul>
        <p className="mt-8">
          In all cases, the loss of spark isn&apos;t actually about the loss of
          spark. It&apos;s about the lack of COMMUNICATION. The longer you leave
          it, the harder it becomes to talk about it. People think sex should be
          this “NATURAL” thing that happens effortlessly. In reality, having an
          awesome sex life takes work. Think of it as a hobby that takes
          practice.
        </p>
        <p className="mt-8 font-semibold text-stone-700">
          Along this sexual self awareness journey, you’ll both:
        </p>
        <ul className="my-2 pl-6">
          <li>
            🍊 Uncover your sexual “personality” type & identify your turn-ons
            and turn-offs
          </li>
          <li>
            🍊 Start to feel more embodied and experience deeper pleasure!
          </li>
          <li>🍊 Explore different sexual initiation styles</li>
          <li>🍊 Learn to communicate your desires with ease & confidence</li>
        </ul>
      </div>
      <div className="mt-8 w-fit rounded-lg bg-stone-100 px-10 py-8">
        <p className="text-lg font-semibold text-stone-700">3–4 months</p>
        <p className="mb-3 mt-2 font-serif text-6xl font-semibold text-stone-700">
          £1200
        </p>
        <ul className="text-stone-600">
          <li className="flex gap-2">
            <IconCheck />8 x 75 min sessions
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
          href="https://calendly.com/intimacycoaching/chemistrycall"
          target="_blank"
          className="mt-8 block w-fit rounded-md bg-rose-800 px-3 py-2 text-white hover:bg-rose-900"
        >
          Book a free chemistry call
        </Link>
      </div>
    </>
  );
};

export default CoachingCouples;
