import Section from './SectionContainer';
import { DarkBackground } from '../Layout';

export default function Goal() {
  const GoalStory = ({
    id, children, rightPic = false,
  }) => {
    const Image = () => <img src={`/images/draws/${id}.png`} alt={id} className="max-w-xs" />;
    const Text = () => (
      <div className="my-8 w-56 md:w-full mx-8 text-green-900 text-xl font-bold leading-loose md:whitespace-nowrap">
        {children}
      </div>
    );

    return (
      <>
        <div className="hidden md:flex items-center max-w-screen-md mx-auto py-12">
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
      </>
    );
  };
  return (
    <Section id="goal" sectionTitle="目指す農園">
      <div
        className="w-screen"
      >
        <DarkBackground>
          <GoalStory
            id="story1"
          >
            農業生産法人として地域に溶け込み
            <br />
            若い世代に整備された畑を残していくことが目標です
          </GoalStory>
        </DarkBackground>
        <GoalStory
          id="story2"
          rightPic
        >
          34年のサラリーマン人生を経て農家に転身したのは
          <br />
          幼い頃に親しんだ自然を
          <br />
          未来に残していく必要があると感じたからです
        </GoalStory>
        <DarkBackground>
          <GoalStory
            id="story3"
          >
            「農村の活性化、国土を守る。」
            <br />
            誰かがやるべきことに、挑戦していきたいです
          </GoalStory>
        </DarkBackground>
        <GoalStory
          id="story4"
          rightPic
        >
          本当にまだまだ先は長いのですが、
          <br />
          夢を持って毎日楽しく働いています！
        </GoalStory>
        <DarkBackground>
          <GoalStory
            id="story5"
          >
            興味を持ってくださった方、
            <br />
            新海農園で一緒に農業をやりませんか？
            <br />
            ご連絡をお待ちしております！
          </GoalStory>
        </DarkBackground>
      </div>
    </Section>
  );
}
