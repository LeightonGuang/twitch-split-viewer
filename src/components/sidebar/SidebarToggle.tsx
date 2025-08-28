import Button from "../Button";
import { ExpandSidebarSvg, MinimizeSidebarSvg } from "../../assets/Icons";

const SidebarToggle = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) =>
  showSidebar ? (
    <Button
      onClick={() => {
        setShowSidebar(false);
      }}
      title="Minimize Sidebar"
    >
      <MinimizeSidebarSvg className="h-4 w-4" />
    </Button>
  ) : (
    <Button
      className="w-min"
      onClick={() => setShowSidebar(true)}
      title="Expand Sidebar"
    >
      <ExpandSidebarSvg className="h-4 w-4" />
    </Button>
  );

export default SidebarToggle;
