import React from "react";
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map(video => (
        <VideoItem key={video.etag} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
