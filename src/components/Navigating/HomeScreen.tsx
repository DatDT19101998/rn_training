import React from 'react';
import {Button, View} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </View>
  );
};

export default HomeScreen;
