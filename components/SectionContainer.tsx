'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  const pathname = usePathname()
  const isSobre = pathname === '/sobre'

  return (
    <section
      className={
        isSobre
          ? 'w-screen max-w-none overflow-x-hidden' // FORÇA tela cheia
          : 'w-full px-4 sm:px-6 xl:px-8'
      }
    >
      {children}
    </section>
  )
}
