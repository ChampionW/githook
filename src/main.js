// import { sortFun } from '../utils/sort.js'
import { isNum } from '../utils/isNumber.ts'
// var { sortFun } = require('../utils/sort');



document.getElementById('app').addEventListener('click', function () {
    import(/* webpackChunkName: 'ImportFuncDemo' */ '../utils/sort.js').then((module) => {
        console.log(module)
        const { sortFun } = module
        var data = [1, 2, 4, 3, 6, 5];
        console.log(sortFun(data));
    })
    // import(/* webpackChunkName: 'ImportFuncDemo' */ 'uniq').then((module) => {
    //     // const { sortFun } = module
    //     var data = [1, 2, 4, 3, 6, 5];
    //     console.log(module.default(data));
    // })

    // var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

    // console.log(sortFun(data));
    console.log(isNum("12312"))

}, true)