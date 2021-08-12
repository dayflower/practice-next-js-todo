import Head from 'next/head';

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Next TODO</title>
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </main>

    <footer></footer>

    <style jsx global>{`
      body {
        margin: 4rem;
      }
    `}</style>
  </div>
);

export default Home;
