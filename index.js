// text file data
let textButton = document.querrySelector('#text-btn');
textButton.addEventListener('click', function () {

    // create an ajax request
    let xhr = newHttpRequest();

    // prepare the request
    xhr.open('GET', 'message.text', true);

    //send request the request
    xhr.send();

    // process the request
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.respionseText;
            displayTextData(data);
        }
    }
})

// display text data
let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querrySelector('#text-card').innerHTML = htmlTemplate;
}