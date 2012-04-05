/*
 * Render.js
 * Helper function to create html with a template and a object based data
 */

/*
 var mydata = {
    "name": "John",
    "age": "32"
 };
 var mytpl = 'My name is {{name}} and I'm {{age}}.'
 
 render(mytpl, mydata);
 >> 'My name is John and I'm 32.'
 
 */
var render = function (tpl, datas) {
    var reg;
    for (var key in datas) {
        reg = new RegExp('{{' + key + '}}', 'g');
        tpl = tpl.replace(reg, datas[key]);
    }
    return tpl;
};