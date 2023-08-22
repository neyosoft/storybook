import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StatusBar, ScrollView, KeyboardAvoidingView} from 'react-native';

import {colors} from 'theme';
import {SearchIcon} from 'icons';
import {styles} from './MyLocation.styles';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';
import {Button, AppText, BackButton, GoogPlacesTextField} from 'components';

export const MyLocation = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.MyLocation>) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topCenter}>
          <BackButton />
          <AppText
            variant="semi-bold"
            style={styles.title}
            color={colors.white}>
            My Location
          </AppText>
          <AppText style={styles.description} color={colors.white}>
            Confirm if your location is correct. Kindly note that CareItator is
            a location based application
          </AppText>
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.formWrapper}>
          <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <GoogPlacesTextField
              left={<SearchIcon />}
              activeLeft={<SearchIcon color={colors.secondary} />}
              placeholder="Enter your location"
            />
            <Button
              label="Verify"
              onPress={() =>
                navigation.navigate(IntroRoutes.IdentityVerification)
              }
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
