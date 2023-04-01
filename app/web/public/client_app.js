
function httpGet (api) {
    return fetch(api).then (res => {
        return res.json();
    })
}
function updateHello() {
    const hello = document.getElementById('hello');
    httpGet('/api/get/hello').then(res => hello.append(JSON.stringify(res.hello)));
}

function updateDate() {
    const hello = document.getElementById('date');
    httpGet('/api/get/date').then(res => hello.append(JSON.stringify(res.date)));
}
