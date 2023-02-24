module.exports = {
    // parserOptions: {
    //     parser: 'babel-eslint'
    // },
    root: true, //默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果发现配置文件中有 “root”: true，它就会停止在父级目录中寻找。
    env: {
        es6: true,
        browser: true, // 
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    "extends": [
        "eslint:recommended"
    ],
    rules: {
        //警告等级
        'no-console': 'off',
    }
}