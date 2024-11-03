interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ onChange }: Props) => {
  return (
    <div className="relative">
      <input
        className="p-2 pr-10 text-black border border-slate-400 rounded-xl"
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
