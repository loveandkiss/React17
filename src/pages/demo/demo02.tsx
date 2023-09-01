// Demo02.tsx
import React, { FC, useMemo } from 'react';

import Boxes from './components/Boxes';
import type { IBoxStyles } from './types'

const  Demo02: FC = () => {
  const [name, setName] = React.useState('');
  const [boxWidth, setBoxWidth] = React.useState(1);

  // const id = React.useId(); // React18新增API
  const id = new Date().getTime()

  // Try changing some of these values!
  // const boxes: IBoxStyles[] = [
  //   { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
  //   { flex: 3, background: 'hsl(260deg 100% 40%)' },
  //   { flex: 1, background: 'hsl(50deg 100% 60%)' },
  // ];


  // 优化后
  const boxes: IBoxStyles[] = useMemo(() => {
    return [
      { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
      { flex: 3, background: 'hsl(260deg 100% 40%)' },
      { flex: 1, background: 'hsl(50deg 100% 60%)' },
    ]
  }, [boxWidth]);

  return (
    <>
      <Boxes boxes={boxes} />

      <section>
        <label htmlFor={`${id}-name`}>
          Name:
        </label>
        <input
          id={`${id}-name`}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor={`${id}-box-width`}>
          First box width:
        </label>
        <input
          id={`${id}-box-width`}
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={(event) => {
            setBoxWidth(Number(event.target.value));
          }}
        />
      </section>
    </>
  );
}

export default Demo02;
