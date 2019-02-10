import { Platform } from 'react-native';

export const API_PATH = 'https://pokeapi.co/api/v2';
export const IMAGES_PATH = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export const redColor = Platform.select({
    android: '#FC123E',
    default: '#FC123E',
});

export const redColorTransparent = Platform.select({
    android: '#C62D5F05',
    default: '#F52D5605',
});

export const blackColor = '#000000';
export const transparentColor = 'transparent';
export const grayColor = '#78909c';
export const grayClearColor = '#F4f4f4';
export const grayTabColor = '#C8C7CC';
export const redTabColor = redColor;
export const semiBlackColor = 'rgba(0,0,0,0.7)';
export const whiteColor = '#FFFFFF';

/**
 * converts an array of objects into an object for fast access
 *
 * @param {*} array of objects
 * @param {*} key to create an index / list
 */
export const indexing = (array, key) => array.reduce((accumulator, iterator) => {
    accumulator[iterator[key]] = iterator;
    return accumulator;
}, {});

export const TRY_AGAIN_TEXT = 'Try again';

/**
 * autoCapitalize first letter of a string
 *
 * @param {*} string
 */
export const capitalizeFirst = string => string.charAt(0).toUpperCase() + string.slice(1);
