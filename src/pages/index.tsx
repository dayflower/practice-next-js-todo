import Head from 'next/head';
import TodoInputForm from './components/TodoInputForm';
import TodoList from './components/TodoList';

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Next TODO</title>
    </Head>

    <main>
      <TodoInputForm />
      <TodoList />
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
