import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center py-4 font-semibold bg-header">
      <div className="flex flex-1 max-w-screen-lg">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="w-10 h-8 mr-4" />
        </Link>
        <h1 className="text-2xl">Oompa Loompa's Crew</h1>
      </div>
    </header>
  );
};
