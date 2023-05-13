import { FaBars } from "react-icons/fa";
import useSidebar from "@/store/sidebar";

const MenuButton = () => {
  const [, sidebarActions] = useSidebar();

  return (
    <button className="menu-icon-container">
      <FaBars size={40} color="#D4DCFA" onClick={sidebarActions.toggle} />
    </button>
  );
};

export default MenuButton;
