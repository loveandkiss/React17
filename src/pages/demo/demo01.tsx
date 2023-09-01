import React, { FC, useState, useRef, useEffect } from "react";
import { Button, Col, Form, Input, Row, Table, Select } from "antd";
import { type InputRef } from 'antd'
import VideoPlayer from './components/VideoPlayer'

// 函数组件
const Demo: FC = () => {
  // useState
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // 使用 useRef 引用值
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // 获取指向节点的 ref
  const inputRef = useRef<InputRef>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current && clearInterval(intervalRef.current);

    // 每 10 毫秒更新一次时间
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  const handleStop = () => {
    intervalRef.current && clearInterval(intervalRef.current);
  }

  return (
    <>
    <div>{startTime?? ''}</div>
    <div>{now?? ''}</div>
    <Button type='primary' onClick={handleStart}>开始</Button>
    <Button style={{ marginLeft: '10px'}} type="dashed" danger onClick={handleStop}>停止</Button>
    <br />
    <Input type="text" ref={inputRef}/>
    {/* 原始标签 */}
    {/* <input type="text" ref={inputRef} /> */}
    <Button onClick={handleClick}>聚焦输入框</Button>

    <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '暂停' : '播放'}
    </Button>
    <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={isPlaying}>
      <div>测试组件children</div>
    </VideoPlayer>
    </>
  );
};

export default Demo;
