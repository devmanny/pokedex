import React from 'react';
import LottieView from 'lottie-react-native';
import Intro from '../assets/animations/intro';

const Loading = () => <LottieView resizeMode="contain" source={Intro} autoPlay loop />;
export default Loading;
