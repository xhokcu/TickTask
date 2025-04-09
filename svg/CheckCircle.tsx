import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';
import { ISvgProps } from './SvgProps';

const CheckCircle = (props: ISvgProps) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8A6 6 0 112 8a6 6 0 0112 0zm-3.582-1.818a.45.45 0 010 .636l-3 3a.45.45 0 01-.636 0l-1.2-1.2a.45.45 0 01.636-.636l.882.882 1.34-1.341 1.342-1.341a.45.45 0 01.636 0z"
        fill={props.color}
      />
    </Svg>
  );
};

const Memo = memo(CheckCircle);
export default Memo;
