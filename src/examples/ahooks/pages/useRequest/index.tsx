import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import { Button } from 'antd';

export default function UseRequest() {
  const [num, setNum] = useState(0);
  console.log(useRequest);
  return (
    <>
      <div>useRequest{num}</div>
      <Button onClick={() => setNum(num => num + 1)}>点击</Button>
    </>
  )
}