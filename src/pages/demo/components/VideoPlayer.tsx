import React, { useEffect, useRef, FC } from 'react';
import type { IVideoPlayerProps } from '../types'

const VideoPlayer: FC<IVideoPlayerProps> = ({ src, isPlaying, children }) => {
  // window.console.log(src)
  // window.console.log(isPlaying)
  const videoRef = useRef<HTMLVideoElement>(null);


  // 一般来说，Effect 会在 每次 渲染时执行。但更多时候，并不需要每次渲染的时候都执行 Effect。
  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return <div>
    <video ref={videoRef} src={src} loop playsInline />
    { children }
  </div>
}

export default VideoPlayer