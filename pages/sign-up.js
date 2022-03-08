import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
			<Head>
        <title>Sign up</title>
      </Head>
      <h1>Sign up</h1>
      <h2>
				<Link href="/sign-in">
          <a>sign in</a>
        </Link>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}