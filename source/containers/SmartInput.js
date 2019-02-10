import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { func, string } from 'prop-types';

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

    render() {
        const { value } = this.state;
        return (<TextInput value={value} onChangeText={this.handleChangeText} />);
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

export default SmartInput;
