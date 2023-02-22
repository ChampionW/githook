module.exports = {
    // parserOptions: {
    //     parser: 'babel-eslint'
    // },
    env: {
        es6: true,
        browser: true, // 
        node: true
    },
    "extends": [
        "eslint:recommended"
    ],
    rules: {
        //警告等级
        'no-console': 'error',
    }
}