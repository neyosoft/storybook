import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const EmailInputIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M16.875 15.0625H16.9375V15V5.79687V5.65482L16.8328 5.7508L10.3797 11.6648C10.276 11.7597 10.1405 11.8123 10 11.8123C9.85946 11.8123 9.72401 11.7597 9.62031 11.6648L3.16723 5.7508L3.0625 5.65482V5.79687V15V15.0625H3.125H16.875ZM2.5 3.8125H17.5C17.6492 3.8125 17.7923 3.87176 17.8977 3.97725C18.0032 4.08274 18.0625 4.22582 18.0625 4.375V15C18.0625 15.3149 17.9374 15.617 17.7147 15.8397C17.492 16.0624 17.1899 16.1875 16.875 16.1875H3.125C2.81006 16.1875 2.50801 16.0624 2.28531 15.8397C2.06261 15.617 1.9375 15.3149 1.9375 15V4.375C1.9375 4.22582 1.99676 4.08274 2.10225 3.97725C2.20774 3.87176 2.35082 3.8125 2.5 3.8125Z"
      fill={props?.color ?? '#E0E0E0'}
      stroke={props?.color ?? '#E0E0E0'}
      strokeWidth={0.125}
    />
  </Svg>
);
