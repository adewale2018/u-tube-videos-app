import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet } = video;
  return (
    <div className='item video-item' onClick={() => onVideoSelect(video)}>
      <img
        className='ui image'
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <div className='content'>
        <h3 className='header'>{snippet.title}</h3>
      </div>
    </div>
  );
};

export default VideoItem;
