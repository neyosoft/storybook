import React from 'react';
import {View} from 'react-native';

import {AppText} from 'components/AppText';
import {styles} from './OnboardingSnapCard.styles';
import {colors} from 'theme';

export interface OnboardingSnapCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const OnboardingSnapCard = ({
  icon,
  title,
  description,
}: OnboardingSnapCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>{icon}</View>
      <View>
        <AppText variant="bold" size="large" color={colors.dark}>
          {title}
        </AppText>
        <AppText size="xlarge">{description}</AppText>
      </View>
    </View>
  );
};
