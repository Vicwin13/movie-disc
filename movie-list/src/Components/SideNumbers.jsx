import rectangle from "./Images/Rectangle 1.png";

export default function SideNumbers() {
  return (
    <div className="">
      <aside className="text-white flex items-center gap-2 absolute inset-y-0 right-24">
        <img className="h-fit " src={rectangle} alt="" />
        <div>
          <div className="text-sm">1</div>
          <div className="text-s font-semibold">2</div>
          <div className="text-lg font-bold">3</div>
          <div className="text-s font-semibold">4</div>
          <div className="text-sm">5</div>
        </div>
      </aside>
    </div>
  );
}
