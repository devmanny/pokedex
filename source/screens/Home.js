import React from 'react';
import KeyboardSpace from 'react-native-keyboard-spacer';

import List from '../components/List';
import Search from '../containers/Search';
import LayoutVertical from '../containers/LayoutVertical';

const Home = () => (
    <LayoutVertical>
        <Search />
        <List />
        <KeyboardSpace />
    </LayoutVertical>
);
export default Home;
