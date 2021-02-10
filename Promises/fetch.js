async function do_fetch() {
    const url = document.getElementById('fetch_url').value;
    const url2 = '';
    const ul = document.getElementById('fetch_result');

    ul.innerHTML = '';

    try {
        let f1 = fetch('url1');
        // do stuff not related to f1;
        let f2 = fetch('url2');
        // do stuff not related to f1 && f2;

        await f1;
        await f2;

        let f3 = await fetch('url3?f1&f2');

        // do COOL stuff that ARE related to f1 && f2 && f3;


        const p = await fetch(url);
        var data = await p.json();

        // const p2 = await fetch(url2);
        // var data2 = await p2.json();

        data.forEach(item => {
            let li = document.createElement('li');
            li.innerHTML = `${item.id}: <b>${item.name}</b>`;
            ul.appendChild(li);
        });

    } catch (error) {
        let li = document.createElement('li');
        li.innerText = err
        ul.appendChild(li);
        return;
    }

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         myData = data;
    //         //console.log(data)
    //         data.forEach(item => {
    //             let li = document.createElement('li');
    //             li.innerHTML = `${item.id}: <b>${item.name}</b>`;
    //             ul.appendChild(li);
    //         });
    //     })
    //     .catch((err) => {
    //         let li = document.createElement('li');
    //         li.innerText = err
    //         ul.appendChild(li);
    //     });
}