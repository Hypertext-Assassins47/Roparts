import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div
    className="video-responsive"
    style={{
      overflow: "hidden",
      paddingBottom: "26.25%",
      position: "relative",
      height: "0",
    }}
  >
    <iframe
      width="653"
      height="280"
      src={`${embedId}`}
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
      style={{
        left: "22%",
        position: "absolute",
        top: "0",
        width: "60%",
        height: "100%",
      }}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
