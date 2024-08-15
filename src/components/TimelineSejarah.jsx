import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import icon from "../assets/Jasmerah.svg";
import "./timelinesejarah.css";
const TimelineSejarah = ({ data }) => {
  const Icon = () => {
    return <img src={icon} alt="" />;
  };
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{
          background: "none",
          color: "#fff",
          fontSize: "13px",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={`Tahun ${data.year}`}
        iconStyle={{ background: "#e96523", color: "#fff" }}
        icon={<Icon />}
      >
        <h3 className="vertical-timeline-element-title text-lg md:text-2xl lg:text-2xl">
          {data.title}
        </h3>
        <p>{data.content}</p>
        <div className="gambar-container flex gap-3 overflow-scroll">
          <div
            className="gambar min-w-[14rem] max-w-[14rem] h-28 object-cover bg-cover bg-center bg-no-repeat rounded-md"
            style={{ backgroundImage: `url(${data.gambar1})` }}
          ></div>
          <div
            className="gambar min-w-[14rem] max-w-[14rem] h-28 object-cover bg-cover bg-center bg-no-repeat rounded-md"
            style={{ backgroundImage: `url(${data.gambar2})` }}
          ></div>
          <div
            className="gambar min-w-[14rem] max-w-[14rem] h-28 object-cover bg-cover bg-center bg-no-repeat rounded-md"
            style={{ backgroundImage: `url(${data.gambar3})` }}
          ></div>
        </div>
        <button
          type="button"
          className="box-3d text-black p-2 px-3 font-bold mt-3"
        >
          Detail
        </button>
      </VerticalTimelineElement>
    </>
  );
};

export default TimelineSejarah;
