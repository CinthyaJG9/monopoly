import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Monopoly App</h1>
      <Link href="/play">Play Game</Link>
    </div>
  );
};

export default HomePage;
