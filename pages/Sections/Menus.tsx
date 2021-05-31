import Section, { Subsection } from './SectionContainer';
import { DarkBackground } from '../Layout';

export default function Menus() {
  return (
    <Section id="menus" sectionTitle="農業体験メニュー">
      <DarkBackground>
        <Subsection subsectionTitle="農業体験メニュー">
          本年は会員限定の体験テストを予定しています。
          <br />
          詳しくは「お問い合わせ」フォームを使ってお問い合わせください。
          <br />
          開園準備中のため出来ない作業があります。（提携農園のご紹介もできます）
          <img src="/images/draws/calendar.svg" alt="calendar" className="my-8 rounded-xl border-4 border-green-900" />

        </Subsection>
      </DarkBackground>
      <Subsection subsectionTitle="宅配メニュー">
        本年は桃限定・会員限定の宅配テストを予定しています。
        <br />
        詳しくは「お問い合わせ」フォームを使ってお問い合わせください。
      </Subsection>
      <DarkBackground>
        <Subsection subsectionTitle="ふるさとイベント">
          農園周辺で開催されるお祭りなどを紹介して行きます。
          <br />
          お祭りに合わせて「里帰り」はいかがですか？
          <br />
          農園イベントも準備が出来次第ご案内します。
          <br />
          定番は、夏の流しそうめん、冬の餅つき。乞うご期待！

        </Subsection>
      </DarkBackground>
    </Section>

  );
}
