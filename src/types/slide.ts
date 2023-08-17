import {ViewStyle} from 'react-native';

export interface Slide {
  image: any;
  title: string;
  cardTitle: string;
  description: string;
  imageTopMargin: number;
  cardDescription: string;
  cardPosition?: ViewStyle;
  background: React.JSX.Element;
}
