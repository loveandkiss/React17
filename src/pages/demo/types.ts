export interface IVideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

export interface IBoxStyles {
  flex: number;
  background: string;
}

export interface IBoxesProps {
  boxes: IBoxStyles[];
}

export interface IMegaBoostProps {
  // 函数类型
  handleClick: () => void;
}

// 接口
export interface IItem {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}
