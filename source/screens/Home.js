import React from 'react';

import List from '../components/List';
import Search from '../containers/Search';
import LayoutVertical from '../containers/LayoutVertical';

const Home = () => (
    <LayoutVertical>
        <Search />
        <List />
    </LayoutVertical>
);
export default Home;
