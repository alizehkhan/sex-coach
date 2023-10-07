import type { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className="my-10 font-serif text-5xl font-semibold text-stone-700 tracking-tight md:text-7xl">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="mt-12 font-serif text-3xl font-semibold tracking-tight text-stone-600">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mt-8 font-serif text-xl font-semibold text-stone-700">
        {children}
      </h3>
    ),
    p: ({ children }: { children?: ReactNode }) => (
      <p className="my-4 font-sans text-lg leading-normal text-stone-600 ">
        {children}
      </p>
    ),
    li: ({ children }: { children?: ReactNode }) => (
      <li className=" font-sans text-lg leading-normal text-stone-600">
        {children}
      </li>
    ),
    ul: ({ children }: { children?: ReactNode }) => (
      <ul className="list-disc pl-10">{children}</ul>
    ),
    ol: ({ children }: { children?: ReactNode }) => (
      <ul className="list-decimal pl-10">{children}</ul>
    ),
    hr: () => <hr className="mt-10 border-stone-300" />,

    ...components,
  }
}
