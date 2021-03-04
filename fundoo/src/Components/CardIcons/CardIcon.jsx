import React from "react";
import Reminder from "../../Asset/reminder.svg";
import Colaborators from "../../Asset/colaborator.svg";
import Palette from "../../Asset/colorcard.svg";
import Archive from "../../Asset/archive.svg";
import More from "../../Asset/more_.svg";
import "./CardIcons.css";
export default function Icons() {
  return (
    <div className="IconsList">
      <div>
        <img src={Reminder} alt="" />
      </div>
      <div>
        <img src={Colaborators} alt="" />
      </div>
      <div>
        <img src={Palette} alt="" />
      </div>
      <div>
        <img src={Archive} alt="" />
      </div>
      <div>
        <img src={More} alt="" />
      </div>
    </div>
  );
}
