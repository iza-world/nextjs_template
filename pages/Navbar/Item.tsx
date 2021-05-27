export default function Item({ name, iconFile }) {
  return (
    <div className="mx-2 my-8 flex flex-col items-center">
      <img src={`/images/icons/${iconFile}`} alt="" className="w-8 h-8" />
      <div className="text-green-900 font-sansRound mt-2 whitespace-nowrap">
        {name}
      </div>
    </div>
  );
}
