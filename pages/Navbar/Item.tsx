export default function Item({ name, iconFile }) {
  return (
    <div className="group mx-2 my-8 flex flex-col items-center">
      <img src={`/images/icons/${iconFile}`} alt="" className="w-8 h-8" />
      <div className="px-2 py-0.5 rounded text-green-900 group-hover:text-white font-sansRound mt-2 whitespace-nowrap group-hover:bg-green-600">
        {name}
      </div>
    </div>
  );
}
