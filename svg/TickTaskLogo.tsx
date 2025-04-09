import * as React from 'react';
import { memo } from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { ISvgProps } from './SvgProps';

function TickTaskLogo(props: ISvgProps) {
  return (
    <Svg
      width={101}
      height={100}
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={4.5} y={4} width={92} height={92} rx={46} stroke="#192F71" strokeWidth={8} />
      <Path
        d="M26.5 32l8.325 4.914c2.585 1.526 2.631 5.25.084 6.838L26.5 49M73.5 49l-7.836-4.981c-2.435-1.548-2.48-5.087-.085-6.696L73.5 32M63.39 57H35.696c-2.284 0-4.122 1.928-3.543 4.138C33.82 67.506 38.836 75 49.858 75c10.526 0 15.419-7.835 17.022-13.948C67.45 58.874 65.64 57 63.39 57z"
        stroke="#192F71"
        strokeWidth={6}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const Memo = memo(TickTaskLogo);
export default Memo;
