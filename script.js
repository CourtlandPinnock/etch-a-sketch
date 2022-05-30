// gridForm generates a 16x16 grid of divs as children of the container element.
function gridForm() {
    // Store the container element in the variable container.
    const container = document.getElementById('container')
    // To populate a 16x16 grid we need 256 elements. So iterate from 0 to 256.
    for (i = 0; i < 256; i++){
        // Each time we create a div. 60px x 60px.
       const div = document.createElement('div');
       div.style.width = '60px';
       div.style.height = '60px';
       // Add class 'grid' to each div we create
       divList = div.classList;
       divList.add('grid')
       // Add an id to each div of their position in the grid. i + 1 so first div is 1 and not 0, where our loop starts form.
       div.id = (i + 1);
       // Add the div to the dom.
       container.appendChild(div);
    }
}

gridForm();

// Each div will be 'highlighted' when cursor enters the div and 'unhighlighted' when cursor leaves.
function hover() {
    // Listen for the cursor over the div.
    document.addEventListener('mouseover', (e) => {
        // Get the id of the current div the cursor is hovering over.
        ci = e.target.id;
        // Make sure not to affect the container div and reset button.
        if (ci !== 'container' && ci !== 'resetbtn'){
            // Store the element from the id of the div the cursor is currently over.
            currentDiv = document.getElementById(ci);
            // Add the class .live to the current element(div).
            currentDiv.classList.add('live');
        }
    })
    // Listen for the cursor leaving the highlighted div.
    /*document.addEventListener('mouseout', (e) => {
        // Remove the .live class to un-highlight the div.
        currentDiv.classList.remove('live');
    })**/

}

function clear() {
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => {
        div.remove();
    })
    gridForm();
}

const reset = document.getElementById('resetbtn');
reset.addEventListener('click',clear)

hover();
