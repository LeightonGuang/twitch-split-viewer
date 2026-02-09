import { useState } from "react";
import { ChatIconSvg, EditIconSvg } from "../../assets/Icons";

const EditChannelListButton = ({
  setShowSidebar,
  showEditChannelList,
  setshowEditChannelList,
}: {
  showEditChannelList: boolean;
  setshowEditChannelList: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isSwitching, setIsSwitching] = useState(false);

  const switchIcon = (next: boolean) => {
    setIsSwitching(true);

    setTimeout(() => {
      if (next) setShowSidebar(true);
      setshowEditChannelList(next);
      setIsSwitching(false);
    }, 150);
  };

  return (
    <button
      className={`p-2 leading-none text-gray-500 transition-[filter,transform,color] duration-500 ease-in-out hover:cursor-pointer hover:text-gray-400 active:scale-95 ${isSwitching ? "blur-xs" : "blur-0"} `}
      title={showEditChannelList ? "Twitch Chat" : "Edit Channel List"}
      onClick={() => switchIcon(!showEditChannelList)}
    >
      {showEditChannelList ? (
        <ChatIconSvg className="h-4 w-4" />
      ) : (
        <EditIconSvg className="h-4 w-4" />
      )}
    </button>
  );
};

export default EditChannelListButton;
