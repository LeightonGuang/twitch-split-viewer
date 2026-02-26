import { motion } from "framer-motion";
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
      className="size-4 overflow-hidden leading-none text-gray-500 hover:cursor-pointer hover:text-gray-400"
      title={showSidebar ? "Minimize Sidebar" : "Expand Sidebar"}
      onClick={() => {
        setShowSidebar(!showSidebar);
        setshowEditChannelList(false);
      }}
    >
      <motion.div
        className="flex w-max"
        animate={{
          x: showSidebar ? "-50%" : "0",
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
      >
        <ExpandSidebarSvg className="size-4" />
        <MinimizeSidebarSvg className="size-4" />
      </motion.div>
    </button>
  );
};

export default SidebarToggle;
