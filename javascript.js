const container = document.getElementById('grid-table');
const sixteen = document.getElementById('16');
const thirtyTwo = document.getElementById('32');
const fortyEight = document.getElementById('48');
const sixtyFour = document.getElementById('64');
const toggleGrid = document.getElementById('toggle-btn')
const erase = document.getElementById('erase-btn');
const black = document.getElementById('black-btn');
const clear = document.getElementById('clear-btn');

clear.addEventListener('click', function() {
    document.location.reload();
})

sixteen.addEventListener('click', function() {
    for (let i = 0; i<256; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
        container.setAttribute("id", "grid-table");
        div.style.border="0.5px solid black";
    }
})

thirtyTwo.addEventListener('click', function() {
    for (let i = 0; i<1024; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.style.border="0.5px solid black";
        container.setAttribute("id", "grid-table32");
    }
})

fortyEight.addEventListener('click', function() {
    for (let i = 0; i<2304; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.style.border="0.5px solid black";
        container.setAttribute("id", "grid-table48");
    }
})

sixtyFour.addEventListener('click', function() {
    for (let i = 0; i<4096; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.style.border="0.5px solid black";
        container.setAttribute("id", "grid-table64");
    }
})

function mouseHover() {
    
}