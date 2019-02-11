module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "react-native/react-native": true,
        "node": true,
        "es6": true
    },
    "plugins": [
        "react-native",
        "react",
    ],
    "rules": {
        "indent": [ "error", 4 ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "single" ],
        "semi": [ "error", "always" ],
        "react/jsx-indent": [ "error", 4 ],
        "react/jsx-indent-props": [ "error", 4 ],
        "react/jsx-filename-extension": 0,
        "react-native/no-unused-styles": ["error"],
        "react-native/split-platform-components": ["error"],
        "react-native/no-inline-styles": ["error"],
        "react-native/no-color-literals": ["error"],
        "react-native/no-raw-text": ["error"],
    }
};