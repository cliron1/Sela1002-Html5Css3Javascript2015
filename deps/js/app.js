// IIFE
(function() {
    const preElem = document.getElementById('code');
    //debugger;
    //console.log('data', data);
    const json = JSON.stringify(data, undefined, 2);
    //console.log('json', json);
    preElem.innerHTML = json;
})();