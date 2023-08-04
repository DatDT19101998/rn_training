import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    w: 100,
    h: 100,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15});
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[styles.box, {width: this.state.w, height: this.state.h}]}
        />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// import React, {useRef} from 'react';
// import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';

// const PanResponderAnimation = () => {
//   const pan = useRef(new Animated.ValueXY()).current;
//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
//       onPanResponderRelease: () => {
//         Animated.spring(pan, {
//           toValue: {x: 0, y: 0},
//           useNativeDriver: true,
//         }).start();
//       },
//     }),
//   ).current;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Drag & Release this box!</Text>
//       <Animated.View
//         style={{
//           transform: [{translateX: pan.x}, {translateY: pan.y}],
//         }}
//         {...panResponder.panHandlers}>
//         <View style={styles.box} />
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: 'bold',
//   },
//   box: {
//     height: 150,
//     width: 150,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
// });

// export default PanResponderAnimation;
