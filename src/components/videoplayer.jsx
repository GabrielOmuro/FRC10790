import React from 'react';
import video from "/images/gameReview.mp4"

const VideoPlayer = () => {
  return (
    <video width="600" controls>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
