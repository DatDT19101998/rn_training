import React from 'react';
import {Text, View} from 'react-native';

const ProfileScreen = ({route}: any) => {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};

export default ProfileScreen;
