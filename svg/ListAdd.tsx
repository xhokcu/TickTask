import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';
import { ISvgProps } from './SvgProps';

const ListAdd = (props: ISvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 16v-2h7v2H3zm0-4v-2h11v2H3zm0-4V6h11v2H3zm13 12v-4h-4v-2h4v-4h2v4h4v2h-4v4h-2z"
      fill={props.color || '#000'}
    />
  </Svg>
);
const Memo = memo(ListAdd);
export default Memo;
