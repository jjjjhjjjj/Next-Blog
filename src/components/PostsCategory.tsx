type Props = {
  onClick: (category: string) => void;
  selected: string;
  categories: string[];
};

export default function PostsCategory({
  categories,
  onClick,
  selected,
}: Props) {
  return (
    <div className="flex flex-col items-center">
      <strong className="text-xl border-b-2 border-b-cyan-400">Category</strong>
      <nav className="flex flex-col items-center mt-2">
        {categories.map((ct, index) => (
          <button
            type="button"
            key={index}
            onClick={() => onClick(ct)}
            className={`${
              selected === ct ? "text-cyan-400" : ""
            } hover:text-cyan-400 mb-1`}
          >
            {ct}
          </button>
        ))}
      </nav>
    </div>
  );
}
