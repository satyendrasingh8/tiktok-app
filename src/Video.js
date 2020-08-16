import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ channel, description, song, likes, shares, messages, url }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        autoplay
        id={channel}
        onClick={onVideoPress}
        ref={videoRef}
      >
        <source src={url} type="video/mp4" />
      </video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      {/*videofooter  */}
      {/* videosidebar */}
    </div>
  );
}

export default Video;
