import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SearchIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      opacity={0.2}
      d="M15.5625 9.0625C15.5625 12.6524 12.6524 15.5625 9.0625 15.5625C5.47265 15.5625 2.5625 12.6524 2.5625 9.0625C2.5625 5.47265 5.47265 2.5625 9.0625 2.5625C12.6524 2.5625 15.5625 5.47265 15.5625 9.0625Z"
      fill={props?.color ?? '#E0E0E0'}
      stroke={props?.color ?? '#E0E0E0'}
      strokeWidth={0.125}
    />
    <Path
      d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
      stroke={props?.color ?? '#E0E0E0'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.7031 13.7031L17.5 17.5"
      stroke={props?.color ?? '#E0E0E0'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
