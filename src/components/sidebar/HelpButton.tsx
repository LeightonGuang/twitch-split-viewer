const HelpButton = ({
  showHelp,
  onClick,
}: {
  showHelp: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`p-2 leading-none hover:cursor-pointer hover:text-gray-400 ${showHelp ? "text-[#9147ff]" : "text-gray-500"}`}
      title="help"
      onClick={onClick}
    >
      ?
    </button>
  );
};

export default HelpButton;
