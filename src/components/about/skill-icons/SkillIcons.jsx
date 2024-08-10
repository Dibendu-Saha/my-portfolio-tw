import React from "react";
import reactIcon from "../../../assets/img/icon-react.svg";
import reduxIcon from "../../../assets/img/icon-redux.svg";
import jsIcon from "../../../assets/img/icon-javascript.svg";
import jqueryIcon from "../../../assets/img/icon-jquery.svg";
import { IconCard } from "../../../common/AppComponents";

const SkillIcons = () => {
  return (
    <div className="grid grid-cols-4">
      {/* react,redux,js,jquey,html,css,net,c#,api,sql */}

      <IconCard imgSrc={reactIcon} altText="react icon" />
      <IconCard imgSrc={reduxIcon} altText="redux icon" />
      <IconCard imgSrc={jsIcon} altText="javascript icon" />
      <IconCard imgSrc={jqueryIcon} altText="jquery icon" />
    </div>
  );
};

export default SkillIcons;
