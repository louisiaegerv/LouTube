import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video) {
    return <div>Loading...</div>;
  }

  const title = video.snippet.title;
  const description = video.snippet.description;
  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="video-title">{ title }</div>
        <div className="video-description">{ description }</div>
      </div>
    </div>
  );
};

export default VideoDetail;
