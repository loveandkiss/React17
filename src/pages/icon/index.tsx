import Icon from "../../components/Icon";
import React, { useState } from "react";
import styles from "./index.module.less";
import IconSelect from "../../components/IconSelect";

console.log('styles', styles)

const IconList = [
  {
    type: 'icon-English',
    size: 'large',
    label: 'English'
  },
  {
    type: 'icon-Chinese',
    size: 'large',
    label: 'Chinese'
  },
  {
    type: 'icon-close',
    size: 'large',
    label: 'close'
  },
  {
    type: 'icon-reload',
    size: 'large',
    label: 'reload'
  },
  {
    type: 'icon-menu',
    size: 'large',
    label: 'menu'
  },
  {
    type: 'icon-table',
    size: 'large',
    label: 'table'
  },
  {
    type: 'icon-folder',
    size: 'large',
    label: 'folder'
  },
  {
    type: 'icon-message',
    size: 'large',
    label: 'message'
  },
  {
    type: 'icon-copy',
    size: 'large',
    label: 'copy'
  },
  {
    type: 'icon-user-space',
    size: 'large',
    label: 'user-space'
  },
  {
    type: 'icon-number',
    size: 'large',
    label: 'number'
  },
  {
    type: 'icon-circle',
    size: 'large',
    label: 'circle'
  },
  {
    type: 'icon-publish',
    size: 'large',
    label: 'publish'
  },
  {
    type: 'icon-empty',
    size: 'large',
    label: 'empty'
  },
]

const IconPage: React.FC = ({ children }) => {
  return (
    <div>
      <div className={styles.iconHeader}>antd 配合iconfont 使用</div>
      <div className={styles.iconBody}>
        {
          IconList.map(iconItem => (
            <div className={styles.iconItem} key={iconItem.type}>
              <Icon type={iconItem.type} size={iconItem.size} />
              <span>{iconItem.label}</span>
            </div>
          ))
        }
      </div>
      <div>
        <IconSelect />
      </div>
    </div>
  );
};

export default IconPage;
