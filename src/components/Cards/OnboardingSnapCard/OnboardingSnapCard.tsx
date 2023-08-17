import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {colors} from 'theme';
import {AppText} from 'components/AppText';
import {styles} from './OnboardingSnapCard.styles';

export interface OnboardingSnapCardProps {
  title: string;
  icon: JSX.Element;
  description: string;
  style?: StyleProp<ViewStyle>;
}

export const OnboardingSnapCard = ({
  icon,
  style,
  title,
  description,
}: OnboardingSnapCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconWrapper}>{icon}</View>
      <View>
        <AppText variant="bold" size="large" color={colors.dark}>
          {title}
        </AppText>
        <AppText size="small">{description}</AppText>
      </View>
    </View>
  );
};
