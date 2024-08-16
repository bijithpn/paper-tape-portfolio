import { ReactNode } from "react";
import Maintenance from "../pages/maintenance";
import "../assets/css/maintenance.css";

// ----------------

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="site-wrapper">
      {/* {children} */}
      <Maintenance />
    </div>
  );
}

export default Layout;
