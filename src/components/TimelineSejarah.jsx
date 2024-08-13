import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineSejarah = ({ data, loadMore }) => {
  const [visible, setVisible] = useState(false);
  function loadHandler() {
    if (data.id % 4 == 0) {
      return loadMore();
    }
  }
  return (
    <>
      <VerticalTimelineElement
        id="sejarahTimeline"
        className="vertical-timeline-element--work "
        contentStyle={{
          background: "none",
          color: "#fff",
          fontSize: "13px",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={`Tahun ${data.year}`}
        iconStyle={{ background: "#ff8343", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title text-lg md:text-2xl lg:text-2xl">
          {data.title}
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <p>{data.content}</p>
        <div className="gambar-container flex gap-3 overflow-scroll">
          <div
            className="gambar min-w-[14rem]  h-28 object-cover bg-cover bg-center bg-no-repeat rounded-md"
            style={{ backgroundImage: `url(${data.gambar1})` }}
          ></div>
          <div
            className="gambar min-w-[14rem] h-28 object-cover bg-cover bg-center bg-no-repeat rounded-md"
            style={{ backgroundImage: `url(${data.gambar2})` }}
          ></div>
          <div
            className="gambar min-w-[14rem] h-28 object-cover bg-cover bg-center bg-no-repeat rounded-md"
            style={{ backgroundImage: `url(${data.gambar3})` }}
          ></div>
        </div>
      </VerticalTimelineElement>
    </>
  );
};

export default TimelineSejarah;
