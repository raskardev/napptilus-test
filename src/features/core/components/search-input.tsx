interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ onChange }: Props) => {
  return (
    <div className="relative w-full md:w-auto">
      <input
        className="w-full p-2 pr-10 text-black border border-slate-400 rounded-xl md:w-64"
        type="search"
        placeholder="Search"
        onChange={onChange}
      />
      <img
        src="/search.png"
        alt="search icon"
        className="absolute w-4 h-4 transform -translate-y-1/2 right-3 top-1/2"
      />
    </div>
  );
};
