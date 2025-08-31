import { ExpandSidebarSvg, MinimizeSidebarSvg } from "../../assets/Icons";

const SidebarToggle = ({
  showSidebar,
  setShowSidebar,
  setshowEditChannelList,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setshowEditChannelList: React.Dispatch<React.SetStateAction<boolean>>;
}) =>
  showSidebar ? (
    <button
      className="p-2 leading-none text-gray-500 hover:cursor-pointer hover:text-gray-400"
      title="Minimize Sidebar"
      onClick={() => {
        setShowSidebar(false);
        setshowEditChannelList(false);
      }}
    >
      <MinimizeSidebarSvg className="h-4 w-4" />
    </button>
  ) : (
    <button
      className="p-2 leading-none text-gray-500 hover:cursor-pointer hover:text-gray-400"
      title="Expand Sidebar"
      onClick={() => setShowSidebar(true)}
    >
      <ExpandSidebarSvg className="h-4 w-4" />
    </button>
  );

export default SidebarToggle;
