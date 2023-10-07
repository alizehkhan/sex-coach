import Image from 'next/image'

import { BOOKS } from '../content'

const Books = () => {
  return (
    <>
      <h2 className="font-serif font-semibold text-4xl mt-40 text-stone-700 mb-8">
        Books I recommend
      </h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {BOOKS.map((book, i) => (
          <div key={i} className="flex items-center gap-4">
            <Image
              height={40}
              width={64}
              className="object-cover shrink-0 rounded-md w-10 h-16"
              src={book.image}
              alt=""
            />
            <div>
              <p className="text-lg text-stone-700 font-semibold">
                {book.title}
              </p>
              <p className="text-stone-500">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Books
