import { isNum } from '../utils/isNumber'
import style from './common_css/global.css'
// import styleless from './common_css/bg.less'
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/testbutton'
import React from 'react';

document.getElementById('app').addEventListener('click', function () {
    import(/* webpackChunkName: 'ImportFuncDemo' */ '../utils/sort').then((module) => {
        // console.log(module)
        console.log(style)
        // console.log(styleless)
        // console.log(style.div)
        const { sortFun } = module
        var data = [1, 2, 4, 3, 6, 5];
        console.log(sortFun(data));
        import('./common_css/bg.less').then((cssmodule)=>{
            console.log(cssmodule)
        })
    })
    console.log(isNum("12312"))
}, true)

const root = createRoot(document.getElementById('app'));
root.render(<App />);

