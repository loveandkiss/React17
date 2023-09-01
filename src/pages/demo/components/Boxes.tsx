//Boxes.jsx
import React, { FC, memo } from 'react';
import type { IBoxesProps } from '../types'
import styles from "../index.module.less";

const  Boxes: FC<IBoxesProps> = ({ boxes }) => {
  window.console.log('Boxes render')
  return (
    <div className={styles.boxesWrapper}>
      {
        boxes.map((boxStyles, i) => (
          <div
            key={i}
            className="box"
            style={boxStyles}
          />
        ))
      }
    </div>
  );
}

export default memo(Boxes);
