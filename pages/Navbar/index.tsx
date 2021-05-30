import { useState } from 'react';
import Item, { MenuItem } from './Item';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const items = [
    { id: 'goal', name: '目指す農園' },
    { id: 'menus', name: '各種メニュー' },
    { id: 'access', name: 'アクセス' },
    { id: 'contact', name: 'お問い合わせ' },
    { id: 'kaiin', name: '会員専用' },
    { id: 'staff', name: 'スタッフ専用' },
    { id: 'dayori', name: '農園だより' },
  ];

  return (
    <>
      <div className="relative h-24 md:h-48 w-screen">
        <img src="images/draws/topBar.png" alt="" className="absolute object-cover object-bottom h-full w-full" />
        <div className="md:hidden absolute bottom-0 right-0 m-2">
          <button className={`hamburger-icon mb-2 ${openMenu && 'open'}`} type="button" onClick={() => setOpenMenu(!openMenu)}>
            <span />
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="hidden md:flex mx-auto max-w-screen-xl justify-evenly">
        {
          items.map(
            (item) => <Item id={item.id} name={item.name} />,
          )
        }
      </div>
      {
  openMenu
      && (
      <div className="flex flex-col md:hidden gap-y-1">
        {
          items.map(
            (item) => (
              <MenuItem id={item.id} name={item.name} />
            ),
          )
        }
      </div>
      )

}
    </>
  );
}
