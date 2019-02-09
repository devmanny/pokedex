module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "react-native/react-native": true,
        "node": true,
        "es6": true
    }
    "plugins": [
        "react-native",
        "react",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "destructuring": true,
            "arrowFunctions": true,
            "classes": true,
            "objectLiteralShorthandMethods": true,
            "spread": true
        }
    }
    "rules": {
        "indent": [ "error", 4 ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "single" ],
        "semi": [ "error", "always" ],
        "react-native/no-unused-styles": ["error"],
        "react-native/split-platform-components": ["error"],
        "react-native/no-inline-styles": ["error"],
        "react-native/no-color-literals": ["error"],
        "react-native/no-raw-text": ["error"],
    }
};