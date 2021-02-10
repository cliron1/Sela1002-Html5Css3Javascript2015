import aaa from './data.js';

const preElem = document.getElementById('code');
//debugger;
//console.log('data', data);
const json = JSON.stringify(aaa, undefined, 2);
//console.log('json', json);
preElem.innerHTML = json;