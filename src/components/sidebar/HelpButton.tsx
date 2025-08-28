const HelpButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="p-2 leading-none text-gray-500 hover:cursor-pointer hover:text-gray-400"
      title="help"
      onClick={onClick}
    >
      ?
    </button>
  );
};

export default HelpButton;
