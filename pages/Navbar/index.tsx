import Item from './Item';

export default function Navbar() {
  return (
    <>
      <div className="flex mx-auto max-w-screen-xl justify-evenly">
        <Item id="goal" name="目指す農園" />
        <Item id="menus" name="各種メニュー" />
        <Item id="access" name="アクセス" />
        <Item id="contact" name="お問い合わせ" />
        <Item id="kaiin" name="会員専用" />
        <Item id="staff" name="スタッフ専用" />
        <Item id="dayori" name="農園だより" />
      </div>
    </>
  );
}
