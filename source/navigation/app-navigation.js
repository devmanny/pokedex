import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
} from 'react-navigation';

import Home from '../screens/Home';
import Loading from '../screens/Loading';
import PokemonDetails from '../screens/PokemonDetails';
import Settings from '../screens/Settings';

import Logo from '../components/Logo';
import PokemonIcon from '../components/PokemonIcon';
import SettingsIcon from '../components/SettingsIcon';

import { redColor, whiteColor } from '../util';

const AppTabsNav = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: PokemonIcon,
                tabBarLabel: 'Pokemons',
            },
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarIcon: SettingsIcon,
                tabBarLabel: 'Settings',
            },
        },
    },
    {
        initialRouteName: 'Home',

    },
);

const AppStackNav = createStackNavigator(
    {
        Tabs: AppTabsNav,
        PokemonDetails,
    },
    {
        navigationOptions: () => ({
            // headerBackTitle: 'Back',
            headerTitle: Logo,
            gesturesEnabled: true,
            headerStyle: {
                backgroundColor: redColor,
            },
            headerTintColor: whiteColor,
        }),
    },
);


const switchNav = createSwitchNavigator(
    {
        App: { screen: AppStackNav },
        Loading,
    },
    {
        initialRouteName: 'Loading',
    },
);

export default switchNav;
