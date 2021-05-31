import Section from './SectionContainer';

export default function Goal() {
  const GoalStory = ({
    id, text, dark = false, rightPic = false,
  }) => {
    const Image = () => <img src={`/images/draws/${id}.png`} alt={id} className="max-w-xs" />;
    const Text = () => (
      <div className="my-8 w-56 md:w-full mx-8 text-green-900 text-xl font-bold leading-loose">
        {text}
      </div>
    );

    return (
      <div
        style={{
          background: dark ? '#DCEDF0' : '',
        }}
      >
        <div
          className="hidden md:flex items-center max-w-screen-md mx-auto py-12"
        >
          {!rightPic && <Image />}
          <Text />
          {rightPic && <Image />}
        </div>
        <div
          className="flex md:hidden flex-col items-center py-12"
        >
          <Text />
          <Image />
        </div>
      </div>
    );
  };
  return (
    <Section id="goal" sectionTitle="目指す農園">
      <div
        className="w-screen"
      >
        <GoalStory
          id="story1"
          text="農業生産法人として地域に溶け込み若い世代に 整備された畑を残していくことが目標です"
          dark
        />
        <GoalStory
          id="story2"
          text="34年のサラリーマン人生を経て農家に転身したのは 幼い頃に親しんだ自然を 未来に残していく必要があると感じたからです"
          rightPic
        />
        <GoalStory
          id="story3"
          text="「農村の活性化、国土を守る。」誰かがやるべきことに、挑戦していきたいです"
          dark
        />
        <GoalStory
          id="story4"
          text="本当にまだまだ先は長いのですが、 夢を持って毎日楽しく働いています！"
          rightPic
        />
        <GoalStory
          id="story5"
          text="興味を持ってくださった方、 新海農園で一緒に農業をやりませんか？ ご連絡をお待ちしております！"
          dark
        />
      </div>
    </Section>
  );
}
