export default function AbilityCard({ability}: {ability: string}) {
  return (
    <div className="m-2 capitalize text-sm px-3 py-1 border-green-900 border-2 rounded-full bg-slate-100 pr-2 pl-2">
      <h3>{ability}</h3>
    </div>
  );
}