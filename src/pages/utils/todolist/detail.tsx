import React from 'react';
interface Props {
  data?: any;
}
function Detail({ data }: Props) {
  return <div>{data}</div>;
}

export default Detail;
