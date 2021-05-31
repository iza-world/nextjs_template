import Layout from './Layout';
import Navbar from './Navbar';
import Hero from './Hero';
import Sections from './Sections';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Sections />
      <img src="images/draws/bottomBar.png" alt="" className="object-cover object-bottom h-24 w-screen" />
    </Layout>
  );
}
