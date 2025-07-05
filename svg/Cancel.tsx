import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';
import { ISvgProps } from './SvgProps';

const Cancel = (props: ISvgProps) => (
  <Svg
    width={props.width ?? '10'}
    height={props.height ?? '10'}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/s"
    {...props}
  >
    <Path
      d="M1 9L9 1M1 1L9 9"
      stroke="#333B47"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
const Memo = memo(Cancel);
export default Memo;
