const container = document.querySelector('.container');
let number = 10;

const addParagraph = () => {
    if (number >= 1) {
        const paragraph = document.createElement('p');
        paragraph.textContent = number;
        container.appendChild(paragraph);
        number -= 1;
    } else {
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Endlich feierabend';
        container.appendChild(paragraph);
        clearInterval(timer);
    }
};

const timer = setInterval(addParagraph, 1000);
