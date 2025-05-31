import React from 'react';

const VideoPlayer = () => {
  return (
    <video width="600" controls>
      <source src="../images/gameReview.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
