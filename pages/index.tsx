import Layout from './Layout';
import Navbar from './Navbar';
import Sections from './Sections';

export default function Home() {
  return (
    <Layout>
      <img src="images/draws/topBar.png" alt="" className="object-cover object-bottom h-48 w-screen" />
      <Navbar />
      <div className="flex flex-col">
        <div className="my-4 mx-auto font-bold text-green-900 tracking-widest text-xl text-center">
          こんにちは！新海農園です！
        </div>
        <div className="my-4 mx-auto font-bold text-green-900 tracking-widest text-xl text-center leading-loose">
          2024年開園に向け準備を進めています
          <br />
          体験&参加型でゆったり自然と触れ合える
          <br />
          そんなフルーツ農園を目指しています
          <br />
          一緒に「ふるさと」を作りませんか？
        </div>
      </div>
      <Sections />
      <img src="images/draws/bottomBar.png" alt="" className="object-cover object-bottom h-24 w-screen" />
    </Layout>
  );
}
