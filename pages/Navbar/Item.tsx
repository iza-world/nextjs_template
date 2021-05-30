import Link from 'next/link';

export default function Item({ id = '', name }) {
  return (
    <Link href={`#${id}`}>
      <div className="group mx-2 my-8 flex flex-col items-center cursor-pointer">
        <img src={`/images/icons/${id}.svg`} alt="" className="w-8 h-8" />
        <div className="px-2 py-0.5 rounded text-green-900 group-hover:text-white font-sansRound mt-2 whitespace-nowrap group-hover:bg-green-600">
          {name}
        </div>
      </div>
    </Link>
  );
}

export function MenuItem({ id = '', name }) {
  return (
    <Link href={`#${id}`}>
      <div className="flex justify-center py-2 cursor-pointer" style={{ backgroundColor: '#D0E3E7' }}>
        <div className="flex w-1/2">
          <img src={`/images/icons/${id}.svg`} alt="" className="w-8 h-8 mr-8" />
          <div className="text-green-900 font-sansRound text-xl whitespace-nowrap">
            {name}
          </div>
        </div>
      </div>
    </Link>
  );
}
