
/* eslint import/order: 0 */

import 'react-native';
import React from 'react';
import Bar from '../source/components/Bar';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({
    adapter: new Adapter(),
});

describe('Testing max value on bar and Caps', () => {
    test('Base stat: 230', () => {
        const data = {
            base_stat: 230,
            stat: {
                name: 'HP',
            },
        };

        const wrapper = shallow(
            <Bar data={data} />,
        );

        const label = wrapper.findWhere(node => node.prop('testID') === 'bar-label-name');
        const value = wrapper.findWhere(node => node.prop('testID') === 'bar-value');

        expect(label.contains('HP')).toBe(true);
        expect(value.contains('200')).toBe(true);
        expect(value.contains('230')).toBe(false);
    });

    test('Base stat: 30, and Hp => HP', () => {
        const data = {
            base_stat: 30,
            stat: {
                name: 'Hp',
            },
        };

        const wrapper = shallow(
            <Bar data={data} />,
        );

        const label = wrapper.findWhere(node => node.prop('testID') === 'bar-label-name');
        const value = wrapper.findWhere(node => node.prop('testID') === 'bar-value');

        expect(label.contains('HP')).toBe(true);
        expect(value.contains('30')).toBe(true);
        expect(value.contains('230')).toBe(false);
    });

    test('Base stat: 200 and Speed => SPEED', () => {
        const data = {
            base_stat: 200,
            stat: {
                name: 'Speed',
            },
        };

        const wrapper = shallow(
            <Bar data={data} />,
        );

        const label = wrapper.findWhere(node => node.prop('testID') === 'bar-label-name');
        const value = wrapper.findWhere(node => node.prop('testID') === 'bar-value');

        expect(label.contains('HP')).toBe(false);
        expect(label.contains('Speed')).toBe(false);
        expect(label.contains('SPEED')).toBe(true);
        expect(value.contains('200')).toBe(true);
        expect(value.contains('0')).toBe(false);
    });
});
