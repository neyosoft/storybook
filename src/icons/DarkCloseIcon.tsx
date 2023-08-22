import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';

export const DarkCloseIcon = (props: SvgProps) => (
  <Svg width={44} height={44} viewBox="0 0 44 44" fill="none" {...props}>
    <Rect width={44} height={44} rx={22} fill="#F3F3F3" />
    <Path
      d="M27.625 16.375L16.375 27.625"
      stroke="#010D26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M27.625 27.625L16.375 16.375"
      stroke="#010D26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x={0.5}
      y={0.5}
      width={43}
      height={43}
      rx={21.5}
      stroke="white"
      strokeOpacity={0.1}
    />
  </Svg>
);
