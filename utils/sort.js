import { b } from '../src/demo'
console.log("加载sort.js")
console.log(b)
export const sortFun = (data) => {
    return data.sort((a, b) => a - b)
}
// module.exports = {
//     sortFun
// }