// Demo04.tsx
import React, { FC } from "react";
import { useHistory } from "react-router";
import { Button } from "antd";

import Counter from "./components/Counter";

const Demo04: FC = () => {
  const history = useHistory();
  return (
    <>
      <Counter />
      <Button onClick={() => history.push("/demo/03")}>Go Demo03 Page</Button>
    </>
  );
};

export default Demo04;
