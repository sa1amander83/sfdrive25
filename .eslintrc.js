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
"plugins": ["react",  "react-hooks"]
,
       "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error" ,
           "react/prefer-stateless-function": "off",
    "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 1,
        "no-unexpected-multiline": "warn",
        "react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
        "react-hooks/exhaustive-deps": "warn" // Проверяем зависимости эффекта
},
    "settings": {
    "react": {
        "pragma": "React",
            "version": "15.6.1"
    }
}
};