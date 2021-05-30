import Item from './Item';

export default function Navbar() {
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
      <div className="hidden md:flex mx-auto max-w-screen-xl justify-evenly">
        {
          items.map(
            (item) => <Item id={item.id} name={item.name} />,
          )
        }
      </div>
      <div className="flex flex-col md:hidden gap-y-1">
        {
          items.map(
            (item) => (
              <div className="flex justify-center py-2" style={{ backgroundColor: '#D0E3E7' }}>
                <div className="flex w-1/2">
                  <img src={`/images/icons/${item.id}.svg`} alt="" className="w-8 h-8 mr-8" />
                  <div className="text-green-900 font-sansRound text-xl whitespace-nowrap">
                    {item.name}
                  </div>
                </div>
              </div>
            ),
          )
        }
      </div>
    </>
  );
}
