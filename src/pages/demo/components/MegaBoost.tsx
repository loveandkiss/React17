// MegaBoost.jsx
import React, { FC, memo } from 'react';
import { Button } from 'antd'
import { IMegaBoostProps } from '../types'

const MegaBoost: FC<IMegaBoostProps>  = ({ handleClick }) => {
  window.console.log('Render MegaBoost');
  return (
    <Button
      type="dashed"
      className="mega-boost-button"
      onClick={handleClick}
    >
      MEGA BOOST!
    </Button>
  );
}

export default memo(MegaBoost);
