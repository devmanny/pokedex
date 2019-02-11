import React from 'react';
import { func } from 'prop-types';
import {
    ScrollView, View, Text, Image, StyleSheet, Dimensions, Button,
} from 'react-native';
import imageNoContent from '../assets/images/no-content.png';
import { grayColor, TRY_AGAIN_TEXT } from '../util';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        margin: 10,
    },
    image: {
        width: width - 20,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        color: grayColor,
        fontWeight: 'bold',
    },
    text: {
        color: grayColor,
    },
});

const NoContent = (props) => {
    const { onHandlePress } = props;
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.title}>A sleeping pokemon blocks the road.</Text>
                <Image style={styles.image} source={imageNoContent} />
                <Text style={styles.text}>You need the Poké Flute to continue.</Text>
                <Text style={styles.text}>(Internet connection)</Text>
                <Button onPress={onHandlePress} title={TRY_AGAIN_TEXT} />
            </View>
        </ScrollView>
    );
};

NoContent.defaultProps = {
    onHandlePress: () => {},
};

NoContent.propTypes = {
    onHandlePress: func,
};

export default NoContent;
