import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TextInput, Image, View, StyleSheet,
} from 'react-native';
import { func, string } from 'prop-types';
import { transparentColor, grayTabColor } from '../util';

import SearchIcon from '../assets/images/icons8-search_filled.png';
import MicIcon from '../assets/images/icons8-microphone.png';

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: grayTabColor,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 7,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    micIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    input: {
        backgroundColor: transparentColor,
        height: 35,
        padding: 5,
        flex: 1,
    },
});

class SmartInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.search,
        };
        this.counter = null;
    }

    handleChangeText = (value) => {
        const { onChangeText } = this.props;

        this.setState({
            value,
        });

        if (this.counter) {
            clearTimeout(this.counter);
        }

        this.counter = setTimeout(() => onChangeText(value), 500);
    }

    handleSubmit = () => {
        const { onChangeText } = this.props;
        const { value } = this.state;
        onChangeText(value);
    }

    render() {
        const { value } = this.state;
        return (
            <View style={styles.inputContainer}>
                <Image
                    style={styles.searchIcon}
                    source={SearchIcon}
                />

                <TextInput
                    onSubmitEditing={this.handleSubmit}
                    value={value}
                    clearButtonMode="while-editing"
                    style={styles.input}
                    onChangeText={this.handleChangeText}
                />

                <Image
                    style={styles.micIcon}
                    source={MicIcon}
                />
            </View>
        );
    }
}

SmartInput.defaultProps = {
    onChangeText: () => {},
    search: '',
};

SmartInput.propTypes = {
    onChangeText: func,
    search: string,
};

const mapStateToProps = state => ({
    search: state.pokemons.search,
});

export default connect(mapStateToProps)(SmartInput);
