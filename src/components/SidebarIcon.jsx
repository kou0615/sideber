import React from "react";
import Icon from "../images/ダウンロード.png";

function SidebarIcon() {
  return (
    <div className="SidebarIcon">
      <img src={Icon} alt="自分のアイコン" />
      <p>programming@gmail.com</p>
    </div>
  );
}

export default SidebarIcon;
