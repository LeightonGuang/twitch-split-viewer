import { ChatIconSvg, EditIconSvg } from "../../assets/Icons";

const EditChannelListButton = ({
  setShowSidebar,
  showEditChannelList,
  setshowEditChannelList,
}: {
  showEditChannelList: boolean;
  setshowEditChannelList: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) =>
  showEditChannelList ? (
    <button
      className={`p-2 leading-none text-gray-500 hover:cursor-pointer hover:text-gray-400`}
      title="Twitch Chat"
      onClick={() => {
        setshowEditChannelList(false);
      }}
    >
      <ChatIconSvg className="h-4 w-4" />
    </button>
  ) : (
    <button
      className={`p-2 leading-none text-gray-500 hover:cursor-pointer hover:text-gray-400`}
      title="Edit Channel List"
      onClick={() => {
        setShowSidebar(true);
        setshowEditChannelList(true);
      }}
    >
      <EditIconSvg className="h-4 w-4" />
    </button>
  );

export default EditChannelListButton;
