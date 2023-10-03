import Image from 'next/image'
import { BOOKS } from './content'

const Books = () => {
  return (
    <>
      <h2 className="font-serif font-semibold text-4xl mt-40 text-stone-700 mb-8">
        Books I recommend
      </h2>
      <div className="flex-1 flex flex-wrap gap-8">
        {BOOKS.map((book, i) => (
          <div key={i} className="w-[200px]">
            <Image
              height={240}
              width={200}
              className="object-cover rounded-md w-full h-[264px]"
              src={book.image}
              alt=""
            />
            <p className="text-lg mt-3 text-stone-700 font-semibold">
              {book.title}
            </p>
            <p className="text-stone-500">{book.author}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Books
