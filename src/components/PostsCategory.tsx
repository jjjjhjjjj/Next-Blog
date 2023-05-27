type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selected: string;
};

export default function PostsCategory({ onClick, selected }: Props) {
  return (
    <nav className="flex flex-col items-center mt-2">
      {category.map((ct, index) => (
        <button
          type="button"
          key={index}
          onClick={onClick}
          className={`${
            selected === ct ? "text-cyan-400" : ""
          } hover:text-cyan-400 mb-1`}
        >
          {ct}
        </button>
      ))}
    </nav>
  );
}

const category = ["All Posts", "my story", "frontend", "backend", "javascript"];
