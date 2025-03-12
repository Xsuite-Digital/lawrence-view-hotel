

export default function QuickActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-black rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
    >
      {children}
    </button>
  );
}
