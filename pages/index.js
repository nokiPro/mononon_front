import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>

      <Link href="/sign-in">
          <a>sign in</a>
      </Link>
      <Link href="/sign-up">
          <a>sign up</a>
      </Link>
    </Layout>
  )
}
