import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const OnboardingLocationIcon = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M12.5 14H9.40625C9.92803 13.537 10.4187 13.0401 10.875 12.5125C12.5938 10.5437 13.5 8.4625 13.5 6.5C13.5 5.04131 12.9205 3.64236 11.8891 2.61091C10.8576 1.57946 9.45869 1 8 1C6.54131 1 5.14236 1.57946 4.11091 2.61091C3.07946 3.64236 2.5 5.04131 2.5 6.5C2.5 8.4625 3.40625 10.5437 5.125 12.5125C5.58132 13.0401 6.07197 13.537 6.59375 14H3.5C3.36739 14 3.24021 14.0527 3.14645 14.1464C3.05268 14.2402 3 14.3674 3 14.5C3 14.6326 3.05268 14.7598 3.14645 14.8536C3.24021 14.9473 3.36739 15 3.5 15H12.5C12.6326 15 12.7598 14.9473 12.8536 14.8536C12.9473 14.7598 13 14.6326 13 14.5C13 14.3674 12.9473 14.2402 12.8536 14.1464C12.7598 14.0527 12.6326 14 12.5 14ZM8 4.5C8.39556 4.5 8.78224 4.6173 9.11114 4.83706C9.44004 5.05682 9.69638 5.36918 9.84776 5.73463C9.99913 6.10009 10.0387 6.50222 9.96157 6.89018C9.8844 7.27814 9.69392 7.63451 9.41421 7.91421C9.13451 8.19392 8.77814 8.3844 8.39018 8.46157C8.00222 8.53874 7.60009 8.49913 7.23463 8.34776C6.86918 8.19638 6.55682 7.94004 6.33706 7.61114C6.1173 7.28224 6 6.89556 6 6.5C6 5.96957 6.21071 5.46086 6.58579 5.08579C6.96086 4.71071 7.46957 4.5 8 4.5Z"
      fill="#00AEEF"
    />
  </Svg>
);