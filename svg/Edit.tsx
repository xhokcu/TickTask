import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';
import { ISvgProps } from './SvgProps';

const Edit = (props: ISvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 19h1.425L16.2 9.225 14.775 7.8 5 17.575V19zm-1 2a.965.965 0 01-.712-.288A.972.972 0 013 20v-2.425a1.978 1.978 0 01.575-1.4L16.2 3.575c.2-.183.421-.325.663-.425.242-.1.496-.15.762-.15s.524.05.775.15c.25.1.467.25.65.45L20.425 5c.2.183.346.4.437.65a2.129 2.129 0 010 1.513 1.875 1.875 0 01-.437.662l-12.6 12.6a1.976 1.976 0 01-1.4.575H4zM15.475 8.525l-.7-.725L16.2 9.225l-.725-.7z"
      fill={props.color || '#000'}
    />
  </Svg>
);
const Memo = memo(Edit);
export default Memo;
