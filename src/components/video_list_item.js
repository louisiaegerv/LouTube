import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  // const video = props.video;
  const title = video.snippet.title;
  const img = video.snippet.thumbnails.default.url;
  const link = "https://www.youtube.com/watch?v=" + video.id.videoId;

  return (
    <li onClick={ () => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
            <img className="media-object" src={img} />
        </div>
        <div className="media-body">
          <div className="media-heading">
              <p>{title}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
