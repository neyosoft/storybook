import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';

export const NavigationBackIcon = (props: SvgProps) => (
  <Svg width={44} height={44} viewBox="0 0 44 44" fill="none" {...props}>
    <Rect width={44} height={44} rx={22} fill="#092C60" />
    <Path
      d="M18.25 23.875L14.5 20.125L18.25 16.375"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M29.5 27.625C29.5 25.6359 28.7098 23.7282 27.3033 22.3217C25.8968 20.9152 23.9891 20.125 22 20.125H14.5"
      stroke="white"
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
