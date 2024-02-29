import Head from 'next/head';
import Image from 'next/image';
const { VERCEL_URL } = process.env

export default function Page() {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content="https://modsen-software.com/news" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Modsen | Modern Software Engineering" />
      <meta property="og:description"
        content="Custom software development for your needs. Front-end · Back-end · Mobile Development · DevOps · QA & Testing provided by a reliable tech company." />
      <meta property="og:image"
        content="https://open-graph-dl8g.vercel.app/api/og/api/og" />
      <meta property="og:site_name" content="Modsen" />
      <meta property="og:locale" content="en_US" />
      <title>Modsen | Modern Software Engineering</title>
    </Head>
    <Image src={'https://vercel-nu-six-90.vercel.app/test.svg'} width={700} height={500} alt='r' />

    Test
  </>
}