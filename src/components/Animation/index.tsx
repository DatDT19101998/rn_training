import React from 'react';
import {Alert, View} from 'react-native';

const index = () => {
  return (
    <View
      accessible={true}
      accessibilityActions={[
        {name: 'cut', label: 'cut'},
        {name: 'copy', label: 'copy'},
        {name: 'paste', label: 'paste'},
      ]}
      onAccessibilityAction={event => {
        switch (event.nativeEvent.actionName) {
          case 'cut':
            Alert.alert('Alert', 'cut action success');
            break;
          case 'copy':
            Alert.alert('Alert', 'copy action success');
            break;
          case 'paste':
            Alert.alert('Alert', 'paste action success');
            break;
        }
      }}
    />
  );
};

export default index;
