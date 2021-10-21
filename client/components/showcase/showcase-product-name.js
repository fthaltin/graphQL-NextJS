import React from 'react';
import Truncate from 'react-truncate';

export default function ProductName({ name }) {
  return (
    <Truncate lines={2} width={204}>
      {name}
    </Truncate>
  );
}
