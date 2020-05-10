import React, { useState } from "react"
import video from "../images/test-home-video.mp4"
import thumb from "../images/test-image.jpg"
import thumb2 from "../images/test2-image.jpg"
import "./video.css"

function VideoEx() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const onLoadData = () => {
    setIsVideoLoaded(true)
  }
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
          <h1>Gallery Images</h1>
      <img
        src={thumb}
        alt="Thumb"
        style={{width: "30%" , marginRight: "30px"}}
      ></img>
      <img
        src={thumb2}
        alt="Thumb"
        style={{width: "30%" , marginLeft:"30px" }}
      ></img>
      <video
        loop
        autoPlay
        playsInline
        muted
        preload={'auto'}
        src={video}
        onLoadedData={onLoadData}
        style={{ opacity: isVideoLoaded ? 1 : 0, float: "right", width:"31%", height:"10%" }}
      />
    </div>
  )
}

export default VideoEx
