import React from "react";
import "./video.css";

const Video = ({ videoId }) => {
  return (
    <section className="video-section-container">
      <h3>Video de presentación:</h3>
      <iframe
        className="iframe-video"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video de presentacion"
        frameBorder="0"
        allow="accelerometer; clipboard-write;  gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
};

export default Video;
