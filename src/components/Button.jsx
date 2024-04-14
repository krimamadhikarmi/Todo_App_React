export function Button({ onClick, color, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white bg-${color}-600 hover:bg-${color}-700 focus:outline-none rounded-md`}
    >
      {children}
    </button>
  );
}
