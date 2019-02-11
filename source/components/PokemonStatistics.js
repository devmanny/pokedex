import React from 'react';
import { shape, string } from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import SpritePokemon from './SpritePokemon';

const styles = StyleSheet.create({
    twoColumns: {
        flexDirection: 'row',
    },
    oneColumn: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 0,
        fontSize: 28,
    },
    description: {
        marginBottom: 5,
        marginTop: 0,
        fontSize: 15,
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 10,
    },
});

const PokemonStatistics = ({ name, data, language }) => {
    let description;
    try {
        description = data.flavor_text_entries[language].flavor_text.replace(/\n/g, ' ');
    } catch (error) {
        description = '';
    }
    return (
        <View>
            <View style={styles.twoColumns}>
                <View style={styles.oneColumn}>
                    <SpritePokemon size={150} pokemonId={data.id} />
                </View>
                <View style={styles.oneColumn}>
                    <Text>
                        {`#${data.id}`}
                    </Text>
                    <Text numberOfLines={1} style={styles.name}>{name}</Text>
                    <View style={styles.twoColumns}>
                        <Text style={styles.bold}>Height:</Text>
                        <Text>{`${(data.height / 10).toFixed(1)}m`}</Text>
                    </View>
                    <View style={styles.twoColumns}>
                        <Text style={styles.bold}>Weight:</Text>
                        <Text>{`${(data.weight / 10).toFixed(1)}kg`}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.oneColumn}>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};
PokemonStatistics.defaultProps = {
    name: 'Bulbasaur',
    language: 'en',
    data: null,
};

PokemonStatistics.propTypes = {
    name: string,
    language: string,
    data: shape({}),
};


export default PokemonStatistics;
