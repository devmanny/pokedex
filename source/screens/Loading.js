import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import { whiteColor } from '../util';
import Intro from '../assets/animations/intro';

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: whiteColor,
        flex: 1,
    },
});

const Loading = () => (
    <SafeAreaView style={styles.conatiner}>
        <LottieView resizeMode="contain" source={Intro} autoPlay loop />
    </SafeAreaView>
);

export default Loading;
