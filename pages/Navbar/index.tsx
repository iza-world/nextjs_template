import Item from './Item';

export default function Navbar() {
  return (
    <div className="flex mx-auto max-w-screen-xl justify-evenly">
      <Item name="目指す農園" iconFile="goal.svg" />
      <Item name="各種メニュー" iconFile="menus.svg" />
      <Item name="アクセス" iconFile="access.svg" />
      <Item name="お問い合わせ" iconFile="contact.svg" />
      <Item name="会員専用" iconFile="kaiin.svg" />
      <Item name="スタッフ専用" iconFile="staff.svg" />
      <Item name="農園だより" iconFile="dayori.svg" />
    </div>
  );
}
