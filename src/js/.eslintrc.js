module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
    "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
        "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
    }
},
    "plugins": [
    "react"
],

    "rules": {
        "react/prefer-stateless-function": "off",
    "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 1,
        "no-unexpected-multiline": "warn"
},
    "settings": {
    "react": {
        "pragma": "React",
            "version": "15.6.1"
    }
}
};