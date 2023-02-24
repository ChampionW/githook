import { isNum } from '../utils/isNumber'
import './common_css/global.css'

document.getElementById('app').addEventListener('click', function () {
    import(/* webpackChunkName: 'ImportFuncDemo' */ '../utils/sort').then((module) => {
        console.log(module)
        const { sortFun } = module
        var data = [1, 2, 4, 3, 6, 5];
        console.log(sortFun(data));
    })
    console.log(isNum("12312"))
}, true)