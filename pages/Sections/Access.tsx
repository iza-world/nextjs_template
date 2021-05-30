import Section from './SectionContainer';

export default function Access() {
  return (
    <Section id="access" sectionTitle="アクセス">
      <div className="flex flex-col md:flex-row gap-x-16">
        <div className="flex-1">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4507.312428058396!2d138.45770197385065!3d35.63114114415806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601bf5c9a26dd88f%3A0xd1ee21f1cb4af619!2s3745%20Iino%2C%20Minami-Alps%2C%20Yamanashi%20400-0222!5e0!3m2!1sen!2sjp!4v1622189863476!5m2!1sen!2sjp" width="100%" height="100%" loading="lazy" />
        </div>
        <div className="flex-1">
          現在の自宅： 〒400-0222 山梨県南アルプス市飯野3745-20
          <br />
          tel : 090-9818-2229
          <br />
          mail：
          <br />
          農園の場所： ※ナビでは表示されません
          <br />
          （上の畑）南アルプス市飯野新田
          <br />
          （下の畑）南アルプス市飯野三宮神
          <br />
          集合場所：「道の駅しらね」 ※中部横断自動車道白根ＩＣから西へ３００ｍ ここから農園へご案内します
        </div>
      </div>
    </Section>
  );
}
