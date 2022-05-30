function gridForm() {
    const container = document.getElementById('container')
    for (i = 0; i < 256; i++){
       const div = document.createElement('div');
       div.style.width = '100px';
       div.style.height = '100px';
       divList = div.classList;
       divList.add('grid')
       container.appendChild(div);
    }
}
gridForm();