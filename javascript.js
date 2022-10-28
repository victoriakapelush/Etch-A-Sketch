const container = document.getElementById('grid-table');
const thirtyTwo = document.getElementById('32');
const fortyEight = document.getElementById('48');
const sixtyFour = document.getElementById('64');
const toggleGrid = document.getElementById('toggle-btn')
const black = document.getElementById('black-btn');
const rainbow = document.getElementById('rainbow-btn');
const clear = document.getElementById('clear-btn');
const erase = document.getElementById('erase-btn');

function defaultGrid() {
    for (let i = 0; i<256; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.style.border="0.5px solid black";
        div.classList.add('reload');

    toggleGrid.addEventListener('click', function() {
        div.style.borderColor = 'transparent';
    })

    black.addEventListener("click", function() {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = 'black';
        })
    })

    erase.addEventListener("click", function() {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "white";
        })
    })

    rainbow.addEventListener('click', function() {
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        })
    })
    }
    }


clear.addEventListener('click', function() {
    container.childNodes.forEach(element => element.style.backgroundColor = "white");
})

thirtyTwo.addEventListener('click', function() {
    remove();
    for (let i = 0; i<1024; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.style.border="0.5px solid black";
        container.setAttribute("id", "grid-table32");
        div.classList.add('reload');

    toggleGrid.addEventListener('click', function() {
        div.style.borderColor = 'transparent';
    })

    black.addEventListener("click", function() {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = 'black';
        })
    })

    erase.addEventListener("click", function() {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "white";
        })
    })

    rainbow.addEventListener('click', function() {
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        })
    })

    }
    document.getElementById('current-grid-size').textContent = "Current grid size is 32x32";
})

fortyEight.addEventListener('click', function() {
    remove();
    for (let i = 0; i<2304; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.style.border="0.5px solid black";
        container.setAttribute("id", "grid-table48");
        div.classList.add('reload');

    toggleGrid.addEventListener('click', function() {
        div.style.borderColor = 'transparent';
    })

    black.addEventListener("click", function() {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = 'black';
    })
    })

    erase.addEventListener("click", function() {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "white";
        })
    })

    rainbow.addEventListener('click', function() {
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        })
    })

    }
    document.getElementById('current-grid-size').textContent = "Current grid size is 48x48";
})

sixtyFour.addEventListener('click', function() {
    remove();
    for (let i = 0; i<4096; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.style.border="0.5px solid black";
        container.setAttribute("id", "grid-table64");
        div.classList.add('reload');

    toggleGrid.addEventListener('click', function() {
        div.style.borderColor = 'transparent';
    })

    black.addEventListener("click", function() {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = 'black';
    })
    })

    erase.addEventListener("click", function() {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "white";
        })
    })

    rainbow.addEventListener('click', function() {
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        })
    })

    }
    document.getElementById('current-grid-size').textContent = "Current grid size is 64x64";
})

function remove() {
    const selectAll = document.querySelectorAll('.reload');
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].remove();
    }
}

defaultGrid();
