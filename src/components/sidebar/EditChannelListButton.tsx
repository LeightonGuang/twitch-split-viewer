import { EditIconSvg } from "../../assets/Icons";

const EditChannelListButton = ({
  showEditChannelList,
  setshowEditChannelList,
}: {
  showEditChannelList: boolean;
  setshowEditChannelList: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <button
    className={`p-2 leading-none hover:cursor-pointer hover:text-gray-400 ${showEditChannelList ? "text-[#9147ff]" : "text-gray-500"}`}
    title="Edit Channel List"
    onClick={() => {
      setshowEditChannelList(!showEditChannelList);
    }}
  >
    <EditIconSvg className="h-4 w-4" />
  </button>
);

export default EditChannelListButton;
