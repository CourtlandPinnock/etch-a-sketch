function gridForm() {
    const container = document.getElementById('container')
    for (i = 0; i < 256; i++){
       const div = document.createElement('div');
       div.style.width = '100px';
       div.style.height = '100px';
       divList = div.classList;
       divList.add('grid')
       div.id = (i + 1);
       container.appendChild(div);
    }
}

gridForm();

function hover() {
    const div1 = document.getElementById('1');
    div1.addEventListener('mouseover', () => {
        div1.setAttribute('style', 'background-color:green;');
    })
    document.addEventListener('mouseover', (e) => {
        console.log(e.target.id);
    })

}
hover();