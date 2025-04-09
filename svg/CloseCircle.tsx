import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';
import { ISvgProps } from './SvgProps';

const CloseCircle = (props: ISvgProps) => {
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
        d="M14 8A6 6 0 112 8a6 6 0 0112 0zM6.182 6.182a.45.45 0 01.636 0L8 7.364l1.182-1.182a.45.45 0 01.636.636L8.636 8l1.182 1.182a.45.45 0 11-.636.636L8 8.636 6.818 9.818a.45.45 0 01-.636-.636L7.364 8 6.182 6.818a.45.45 0 010-.636z"
        fill={props.color ?? '#8595AB'}
      />
    </Svg>
  );
};

const Memo = memo(CloseCircle);
export default Memo;
