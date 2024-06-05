'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function SearchForm() {
  const [inputValue, setInputValue] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  const query = searchParams.get('q')

  function handlerSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (inputValue === '') return null

    router.push(`/search?q=${inputValue}`)
  }

  return (
    <form
      onSubmit={handlerSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        defaultValue={query ?? ''}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 bg-transparent text-sm placeholder:text-zinc-500"
        type="text"
        placeholder="Buscar produtos"
      />
    </form>
  )
}
