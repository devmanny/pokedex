import React from 'react';
import { View, Text } from 'react-native';

const Card = props => (
    <View>
        <Text>{JSON.stringify(props)}</Text>
    </View>
);

export default Card;
