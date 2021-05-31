import Section from './SectionContainer';

export default function Goal() {
  const GoalStory = ({ id, text }) => (
    <div
      className="flex items-center max-w-screen-md mx-auto py-12"
    >
      <img src={`/images/draws/${id}.png`} alt={id} className="max-w-xs" />
      <div className="ml-8 text-green-900 text-xl font-bold leading-loose">
        {text}
      </div>
    </div>
  );
  return (
    <Section id="goal" sectionTitle="目指す農園">
      <div
        className="w-screen"
        style={{
          background: '#DCEDF0',
        }}
      >
        <GoalStory id="story1" text="農業生産法人として地域に溶け込み若い世代に 整備された畑を残していくことが目標です" />
        <GoalStory id="story2" text="34年のサラリーマン人生を経て農家に転身したのは 幼い頃に親しんだ自然を 未来に残していく必要があると感じたからです" />
        <GoalStory
          id="story3"
          text="「農村の活性化、国土を守る。」誰かがやるべきことに、挑戦していきたいです"
        />
        <GoalStory
          id="story4"
          text="本当にまだまだ先は長いのですが、 夢を持って毎日楽しく働いています！"
        />
        <GoalStory
          id="story5"
          text="興味を持ってくださった方、 新海農園で一緒に農業をやりませんか？ ご連絡をお待ちしております！"
        />
      </div>
    </Section>
  );
}
