interface Podcast {
  title: string
  host: string
  image: string
  url: string
  length: string
}

const PODCASTS: Podcast[] = [
  {
    title: 'Consent on the Dancefloor',
    host: 'Let’s Talk Zouk',
    image: '/podcasts/podcast-1.png',
    url: 'https://open.spotify.com/episode/2QJnS2JA5ZeVVarmT1F7V2?si=ab6567a7b66e43ee',
    length: '55:14',
  },
  {
    title: 'Intimacy in Relationships',
    host: 'LUAN Emotional Museum',
    image: '/podcasts/podcast-2.png',
    url: 'https://open.spotify.com/episode/54foRyFXY8UyLIXgXSRQZs?si=3369bcb778d945ce',
    length: '71:16',
  },
  {
    title: 'A conversation with Haneen who runs the Sex Homework Society',
    host: 'Relating to Self',
    image: '/podcasts/podcast-3.png',
    url: 'https://open.spotify.com/episode/4JtuCdqlPuWxqwGkuRDvGy?si=8a31c7a8fafd4eb6',
    length: '55:28',
  },
  {
    title: 'Undressing Bridgerton with Sex Coach Haneen Khan',
    host: 'A Bridgerton Podcast',
    image: '/podcasts/podcast-4.png',
    url: 'https://open.spotify.com/episode/04z3FMSL4GLIwa7u9o3L1u?si=a386f0e4795742fe',
    length: '49:25',
  },
]

interface Book {
  title: string
  author: string
  image: string
}

const BOOKS: Book[] = [
  {
    title: 'A Woman’s Guide to Power',
    author: 'Kasia Urbanik',
    image: '/books/book-1.png',
  },
  {
    title: 'Urban Tantra',
    author: 'Barbara Carrellas',
    image: '/books/book-2.png',
  },
  {
    title: 'Enjoy Sex (How, When and If You Want To)',
    author: 'Meg John Barker',
    image: '/books/book-3.png',
  },
  {
    title: 'Sex Talks',
    author: 'Vanessa Marin',
    image: '/books/book-4.png',
  },
  {
    title: 'Come As You Are',
    author: 'Emil Nagoski',
    image: '/books/book-5.png',
  },
  {
    title: 'The Art of Receiving & Giving',
    author: 'Betty Martin',
    image: '/books/book-6.png',
  },
  {
    title: 'The Erotic Mind',
    author: 'Jack Morin',
    image: '/books/book-7.png',
  },
]

const SCHOOLS = [
  'Non Violent Communication',
  'Internal Family Systems Therapy',
  'Somatic Coaching ',
  'Authentic Relating & Circling',
  'Wheel of Consent',
  'Existential Kink',
  'Contact improv',
  'Improv Theatre',
]

export interface Testimonial {
  quote: string
  author: string
  country: 'United Kingdom 🇬🇧' | 'United States 🇺🇸' | 'Mexico 🇲🇽' | 'Germany 🇩🇪'
  image: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Haneen helped me to realise how important my desires are. Instead of pressure, scripts and performance, Haneen helped me to embody playfulness and presence. I've learned that my sexual journey is mine to write, and it can be as fun, geeky, silly and lovely as I want it to be",
    author: 'Ali',
    country: 'United States 🇺🇸',
    image: '/testimonials/testimonial-ali.png',
  },
  {
    quote:
      'Because of all the discomfort I felt around sexuality  - one of the things I really valued was Haneen’s lighthearted, silly and playful approach. It woke me up to realise that sex is supposed to be fun! Not all “heavy briefcases” and serious suits! I felt myself being uplifted by all of the joy  - and all that heaviness slowly dissolve! ',
    author: 'Michael',
    country: 'United Kingdom 🇬🇧',
    image: '/testimonials/testimonial-michael.png',
  },
  {
    quote:
      'You can tell how passionate Haneen is about her work  by how she facilitates live classes, makes space for difficult emotions, and openly shares her own inner challenges with the group…. It reminds me, we are all human, we are all learning!',
    author: 'Inga',
    country: 'Mexico 🇲🇽',
    image: '/testimonials/testimonial-inga.png',
  },
  {
    quote:
      'Haneen’s delivery of her courses are simply gold - she never fails to make spaces a super fun (and supported) ride to be on!',
    author: 'Thea',
    country: 'United Kingdom 🇬🇧',
    image: '/testimonials/testimonial-thea.png',
  },
  {
    quote:
      'I particularly liked the care Haneen took to acknowledge when people may not be comfortable in workshops and offered opportunities for people to advocate for their needs while also making space in the course for cheeky and playful exploration. ',
    author: 'Lisa',
    country: 'United Kingdom 🇬🇧',
    image: '/testimonials/testimonial-lisa.png',
  },
]

const LINKS = ['Home', 'About', 'Coaching', 'Workshops', 'Blog']

export { PODCASTS, BOOKS, SCHOOLS, TESTIMONIALS, LINKS }
