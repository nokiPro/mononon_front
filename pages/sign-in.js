import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
			<Head>
        <title>Sign in</title>
      </Head>
      <h1>Sign in</h1>
      <h2>
				<Link href="/sign-up">
          <a>sign up</a>
        </Link>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}