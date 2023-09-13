import MovieContent from "./MovieContent";
import SideNav from "./SideNav";

export default function MovieBox() {
  return (
    <div className="h-screen flex ">
      <SideNav />
      <MovieContent />
    </div>
  );
}
