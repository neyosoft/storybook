import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from 'theme';
import {AppText} from 'components';

interface QuickTipBadgeProps {
  label: string;
  selected?: boolean;
  onPress: () => void;
}

export const QuickTipBadge = ({
  label,
  onPress,
  selected,
}: QuickTipBadgeProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selected ? styles.selected : undefined]}>
      <AppText style={styles.label} color={colors.white}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF1A',
  },
  label: {
    fontSize: 13,
    lineHeight: 24,
  },
  selected: {
    backgroundColor: colors.secondary,
  },
});
