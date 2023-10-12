import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const CouplesCoaching = () => {
  return (
    <div className="flex flex-col gap-12 rounded-lg bg-stone-100 px-16 py-12 md:flex-row">
      <div className="flex-1">
        <Image
          src="/couples-coaching.png"
          alt=""
          height={300}
          width={400}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 text-lg">
        <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-700 md:text-5xl md:leading-tight">
          Couples Intimacy Coaching Programme
        </h2>
        <p className="mt-4 font-serif text-2xl font-semibold leading-tight tracking-tight text-stone-500">
          An 8-week journey back to each other 🔥
        </p>
        <p className="mt-4 text-stone-600">
          I&apos;ve coached hundreds of couples to break out of routine and feel
          more pleasure, desire, intimacy and aliveness in their sexual
          connection. I give couples a rich understanding of their needs &
          turn-ons, and make their conversations about sex feel effortless, and
          even fun!
        </p>
        <Link
          href="/coaching"
          className="mt-6 flex w-fit items-center gap-1 font-semibold text-stone-700 underline underline-offset-8 transition-all hover:gap-4"
        >
          Learn more
          <IconChevronRight stroke={1.5} />
        </Link>
      </div>
    </div>
  );
};

export default CouplesCoaching;
