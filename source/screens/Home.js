import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import List from '../components/List';

const Home = () => (
    <SafeAreaView>
        <View>
            <Text>Search</Text>
        </View>
        <List />
    </SafeAreaView>
);
export default Home;
