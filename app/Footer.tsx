import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-12 mt-16 bg-stone-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-4xl text-stone-700 font-serif font-semibold mb-8">
          Haneen Khan
        </p>
        <div className="text-xs text-stone-700 flex gap-2">
          <p>All rights reserved © Haneen Khan 2023</p>
          <div>
            <Link className="underline" href={''}>
              Privacy
            </Link>{' '}
            |{' '}
            <Link className="underline" href={''}>
              Terms
            </Link>
          </div>
          <p>
            Website by{' '}
            <Link
              className="underline"
              target="_blank"
              href="https://alizehkhan.com"
            >
              Alizeh
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
