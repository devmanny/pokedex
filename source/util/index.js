import { Platform } from 'react-native';

export const API_DOMAIN = '---';

export const redColor = Platform.select({
    android: '#FC123E',
    default: '#FC123E',
});

export const redColorTransparent = Platform.select({
    android: '#C62D5F05',
    default: '#F52D5605',
});

export const blackColor = '#000000';
export const grayColor = '#C1C0C9';
export const grayClearColor = '#F4f4f4';
export const grayTabColor = '#C8C7CC';
export const redTabColor = redColor;
export const semiBlackColor = 'rgba(0,0,0,0.7)';
export const whiteColor = '#FFFFFF';
