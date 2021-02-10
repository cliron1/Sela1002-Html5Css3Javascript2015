let p = (success) => new Promise((resolve, reject) => {
    if (success)
        resolve('all good!');
    else
        reject('failed ):');
});

const div = document.getElementById('basic_result');

function invoke(outcome) {
    p(outcome)
        .then(res => div.innerHTML = `resolved: <b>${res}</b>`)
        .catch(err => div.innerHTML = `rejected: <b>${err}</b>`);
}