import { ExpandSidebarSvg, MinimizeSidebarSvg } from "../../../assets/Icons";

const SidebarToggle = ({
  showSidebar,
  setShowSidebar,
  setshowEditChannelList,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setshowEditChannelList: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      className="leading-none text-gray-500 hover:cursor-pointer hover:text-gray-400"
      title={showSidebar ? "Minimize Sidebar" : "Expand Sidebar"}
      onClick={() => {
        setShowSidebar(!showSidebar);
        setshowEditChannelList(false);
      }}
    >
      {showSidebar ? (
        <MinimizeSidebarSvg className="size-4" />
      ) : (
        <ExpandSidebarSvg className="size-4" />
      )}
    </button>
  );
};

export default SidebarToggle;
