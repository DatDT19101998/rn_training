import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const MyButton = React.forwardRef<View, {label: string}>((props, ref) => (
  <View {...props} ref={ref} style={{marginTop: 50}}>
    <Text>{props.label}</Text>
  </View>
));

const ForwardNativeProps = () => (
  <TouchableOpacity>
    <MyButton label="Press me!" />
  </TouchableOpacity>
);

export default ForwardNativeProps;
