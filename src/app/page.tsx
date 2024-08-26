import Image from 'next/image'
import styles from './page.module.css'

import { http, HttpResponse } from 'msw'
import { getServer } from '../msw'

export const revalidate = 0
export const dynamic = 'force-dynamic'

if (process.env.NODE_ENV !== 'production') {
  getServer()?.use(
    http.get('https://dummyjson.com/products/1', ({ request, params, cookies }) => {
      return HttpResponse.json({
        id: '1',
        name: 'Hi',
        price: 100,
      })
    }),
  )
}

export default async function Home() {
  const data = await fetch('https://dummyjson.com/products/1', {
    cache: 'no-store',
  }).then((res) => res.json())

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
