import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import {
    Button, SafeAreaView, StyleSheet, ScrollView, View, Text,
} from 'react-native';
import { whiteColor } from '../util';
import SettingsIcon from '../components/SettingsIcon';

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    scroll: {
        flex: 1,
    },
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: whiteColor,
    },

    twoColumns: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    column: {
        marginLeft: 15,
    },
});

const getTitle = (language = 'en') => {
    const titles = {
        en: 'Select a language',
        es: 'Selecciona un idioma',
    };
    return titles[language];
};

class Settings extends PureComponent {
  handleLanguageChange = (language) => {
      const { dispatch } = this.props;
      dispatch({
          type: 'SET_LANGUAGE',
          payload: language,
      });
  }

  render() {
      const {
          language,
      } = this.props;
      return (
          <SafeAreaView style={styles.safeAreaView}>
              <ScrollView style={styles.scroll}>
                  <View style={styles.container}>
                      <Text>{getTitle(language)}</Text>
                      <View style={styles.twoColumns}>
                          <View style={styles.column}>
                              <Button
                                  style={styles.button}
                                  onPress={() => this.handleLanguageChange('en')}
                                  title="English"
                              />
                          </View>
                          <View style={styles.column}>
                              <Button
                                  style={styles.button}
                                  onPress={() => this.handleLanguageChange('es')}
                                  title="Español"
                              />
                          </View>
                      </View>
                  </View>
              </ScrollView>
          </SafeAreaView>
      );
  }
}

Settings.defaultProps = {
    language: 'en',
    dispatch: () => {},
};

Settings.propTypes = {
    language: string,
    dispatch: func,
};


const mapStateToProps = state => ({
    language: state.settings.language,
});

export default connect(mapStateToProps)(Settings);
