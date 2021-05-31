export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="mt-16 mx-auto font-bold text-green-900 tracking-widest text-xl text-center">
        こんにちは！新海農園です！
      </div>
      <img src="images/draws/hero.png" alt="hero" className="hidden md:block object-contain h-80 mt-8" />
      <img src="images/draws/heroSmall.png" alt="hero" className="block md:hidden object-contain h-80 mt-8" />
      <div className="mt-12 mx-auto font-bold text-green-900 tracking-widest text-xl text-center leading-loose">
        2024年開園に向け準備を進めています
        <br />
        体験&参加型でゆったり自然と触れ合える
        <br />
        そんなフルーツ農園を目指しています
        <br />
        一緒に「ふるさと」を作りませんか？
      </div>
    </div>
  );
}
