import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {colors} from 'theme';
import {styles} from './QuickTip.styles';
import {QuickTipBadge} from './components';
import {AppText, Button} from 'components';

const list = [
  'Support Services',
  'Healthcare Infastructures',
  'Electronic health record',
  'Happy Managers',
  'Adequate Sickbay',
  'Cafeterias',
  'Staff Break',
  'Team Work',
  'Lab',
  'Compensations',
  'I love everything',
  'Plenty Workload',
];

export const QuickTip = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelection = (tip: string) => {
    if (selected.includes(tip)) {
      setSelected(selected.filter(item => item !== tip));
    } else {
      setSelected(prevList => [...prevList, tip]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topCenter}>
          <AppText color={colors.secondary}>Fun Fact 🤩</AppText>
          <AppText
            variant="semi-bold"
            style={styles.title}
            color={colors.white}>
            What Excite you about a healthcare facility
          </AppText>
          <AppText color={colors.white50}>
            You can only select 5 most important
          </AppText>
        </View>

        <View style={styles.tipRow}>
          {list.map(tip => (
            <QuickTipBadge
              key={tip}
              label={tip}
              selected={selected.includes(tip)}
              onPress={() => handleSelection(tip)}
            />
          ))}
        </View>

        <Button label="Get Started" style={styles.getStartedBtn} />
      </View>
    </SafeAreaView>
  );
};
