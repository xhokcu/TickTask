import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';
import { ISvgProps } from './SvgProps';

const ArrowDown = (props: ISvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 14.975c-.133 0-.258-.02-.375-.062a.866.866 0 01-.325-.213l-4.6-4.6a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7a.948.948 0 01.7-.275c.283 0 .517.092.7.275l3.9 3.9 3.9-3.9a.948.948 0 01.7-.275c.283 0 .517.092.7.275a.948.948 0 01.275.7.948.948 0 01-.275.7l-4.6 4.6c-.1.1-.208.171-.325.213a1.081 1.081 0 01-.375.062z"
      fill={props.color || '#000'}
    />
  </Svg>
);
const Memo = memo(ArrowDown);
export default Memo;
