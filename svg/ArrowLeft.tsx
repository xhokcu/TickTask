import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';
import { ISvgProps } from './SvgProps';

const ArrowLeft = (props: ISvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.667 7.333H2.943l3.529-3.528a.667.667 0 10-.943-.943L.862 7.529a.667.667 0 000 .942l4.667 4.667a.667.667 0 00.943-.943l-3.53-3.528h11.725a.667.667 0 000-1.334z"
      fill="#000"
    />
  </Svg>
);
const Memo = memo(ArrowLeft);
export default Memo;
