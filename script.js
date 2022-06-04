// gridForm generates a 16x16 grid of divs as children of the container element.
function gridForm() {
    // Store the container element in the variable container.
    const container = document.getElementById('container')
    //container.style.height = 960;
    // To populate a 16x16 grid we need 256 elements. So iterate from 0 to 256.
    const wh = prompt('Enter number of squares.', 'Number will be squared.');
    total = wh * wh;
    // User sets number of squares squared.
    // If the user enters 64. It will create 64 x 64 grid. 4096 squares
    // We want the size of the squares to scale, beacuse the canvas is always the same size no matter how many squares.
    // 960 * 960 = 921,600px. squareArea(225) = 921,600px / total(4096)
    // divWidth && divHeight = squareroot(squareArea)

    const totalArea = 960 * 960;
    const squareArea = totalArea / total;
    divWidth = Math.sqrt(squareArea);
    divHeight = Math.sqrt(squareArea);
    console.log('total:',total);
    console.log('divHeight:',divHeight);
    console.log('divWidth:',divWidth);
    console.log('squareArea:',squareArea);
    


    for (i = 0; i < total; i++){
        // Each time we create a div. divHeight * divWidth;
       const div = document.createElement('div');
       //let divSize = document.getElementById(i);
      

       // Add class 'grid' to each div we create
       divList = div.classList;
       divList.add('grid')
       div.style.height = divHeight + 'px';
       div.style.width = divWidth + 'px';
       
       // Add an id to each div of their position in the grid. i + 1 so first div is 1 and not 0, where our loop starts form.
       div.id = (i + 1);
       //console.log('id',div)
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
