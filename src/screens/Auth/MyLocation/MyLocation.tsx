import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StatusBar, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
  GooglePlacesAutocompleteProps,
} from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';

import {colors} from 'theme';
import {LocationMapIcon, SearchIcon} from 'icons';
import {styles} from './MyLocation.styles';
import {IntroRoutes, IntroStackRoutes} from 'types/navigation';
import {Button, AppText, BackButton, GoogPlacesTextField} from 'components';

const textInputProps = {
  left: <SearchIcon />,
  isFocused: true,
  clearButtonMode: 'never',
  InputComp: GoogPlacesTextField,
  activeLeft: <SearchIcon color={colors.secondary} />,
};

const componentStyles: GooglePlacesAutocompleteProps['styles'] = {
  container: {
    flex: 1,
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
  separator: {
    backgroundColor: '#F2F2F2',
    height: StyleSheet.hairlineWidth,
  },
};

const renderRow = (rowData: any) => (
  <View style={styles.mapItemRowContainer}>
    <LocationMapIcon />
    <View>
      <AppText variant="semi-bold">
        {rowData.description || rowData.formatted_address || rowData.name}
      </AppText>
      <AppText style={styles.mapItemRowSubtitle}>Ibadan, Oyo State</AppText>
    </View>
  </View>
);

export const MyLocation = ({
  navigation,
}: IntroStackRoutes<IntroRoutes.MyLocation>) => {
  const googlePlaceRef = useRef<GooglePlacesAutocompleteRef>(null);
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
          <View style={styles.mapContainer}>
            <GooglePlacesAutocomplete
              ref={googlePlaceRef}
              renderRow={renderRow}
              suppressDefaultStyles={true}
              textInputProps={textInputProps}
              placeholder="Enter your location"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              minLength={2}
              enablePoweredByContainer={false}
              query={{
                language: 'en',
                components: 'country:ng',
                key: Config.GOOGLE_MAPS_API_KEY,
              }}
              onFail={() => {
                console.log('Request failed.');
              }}
              onNotFound={() => {
                console.log('Request not found.');
              }}
              onTimeout={() => {
                console.log('Request timed out.');
              }}
              styles={componentStyles}
            />

            <Button
              label="Verify"
              onPress={() =>
                navigation.navigate(IntroRoutes.IdentityVerification)
              }
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
