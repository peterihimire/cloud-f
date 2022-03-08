import React from "react";
import ReactPlayer from "react-player/lazy";
import styles from "./styles.module.scss";

const video = ({ wrapperClass }) => {
  return (
    <div className={wrapperClass}>
      <ReactPlayer
        className={`react-player ${styles.reactPlayer}`}
        url="https://www.youtube.com/watch?v=ulprqHHWlng" // this will be dynamic
        // light={true}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default video;
