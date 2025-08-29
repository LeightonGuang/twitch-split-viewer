const ChatSelectToggle = ({
  showChatSelect,
  setShowChatSelect,
}: {
  showChatSelect: boolean;
  setShowChatSelect: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="flex justify-center">
    <button
      className="flex w-full justify-center p-2 hover:cursor-pointer hover:bg-[#36353b]"
      title={showChatSelect ? "Hide Chat Select" : "Show Chat Select"}
      onClick={() => {
        setShowChatSelect(!showChatSelect);
      }}
    >
      <div className="h-[0.3125rem] w-[2.5rem] rounded-full bg-[#27262c]" />
    </button>
  </div>
);

export default ChatSelectToggle;
