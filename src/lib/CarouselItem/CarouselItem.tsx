import React from 'react';

interface Props {
  title: string;
}

const CarouselItem = ({ title }: Props) => {
  return (
    <div style={{ borderStyle: 'solid' }}>
      <h2>{title}</h2>
    </div>
  );
};

export default CarouselItem;
