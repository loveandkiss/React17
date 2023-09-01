import { FC } from 'react'

export interface IVideoPlayerProps {
  src: string
  isPlaying: boolean,
}

export interface IBoxStyles { flex: number, background: string }

export interface IBoxesProps {
  boxes: IBoxStyles[]
}

export interface IMegaBoostProps {
  // 函数类型
  handleClick: () => void
}

