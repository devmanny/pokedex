import React from 'react';
import LottieView from 'lottie-react-native';
import Intro from './source/animations/intro.json'

export default class BasicExample extends React.Component {
  render() {
    return (
      <LottieView
        source={Intro}
        autoPlay
        loop
      />
    );
  }
}