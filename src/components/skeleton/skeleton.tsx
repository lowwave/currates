import React from 'react';

import { SkeletonStyled, SkeletonStyleProps } from './skeleton.styled';

type Props = SkeletonStyleProps & React.HTMLAttributes<HTMLDivElement>;

export const Skeleton = ({ height, mx, my, radius, width, ...rest }: Props) => {
  return (
    <SkeletonStyled
      height={height}
      mx={mx}
      my={my}
      radius={radius}
      width={width}
      {...rest}
    />
  );
};
