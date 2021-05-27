import Layout from './Layout';
import Navbar from './Navbar';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col">
        <div className="my-4 mx-auto font-bold text-green-900 tracking-widest text-xl text-center">
          こんにちわ！新海農園です！
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
        <div>
          農業体験メニュー
        </div>
      </div>
    </Layout>
  );
}
