import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ProfileInputActiveIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z"
      fill="#00AEEF"
      stroke="#00AEEF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.42188 16.875C3.18979 15.5446 4.2944 14.4398 5.62465 13.6717C6.9549 12.9036 8.46392 12.4993 10 12.4993C11.5361 12.4993 13.0451 12.9036 14.3753 13.6717C15.7056 14.4398 16.8102 15.5446 17.5781 16.875"
      stroke="#00AEEF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);