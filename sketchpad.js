const container= document.getElementById('container');
const rowSize = document.getElementById('rows');
const colSize = document.getElementById('cols');
const gridButton = document.getElementById('generate-grid');


function generateGrid(rows,cols){

container.innerHTML ='';
const itemSize = 50;
container.style.display = 'flex';
container.style.flexWrap = 'wrap';  
container.style.width = `${itemSize * cols}px`;    
container.style.margin = '20px auto';


for(let i =0; i<rows; i++){
    for(let j = 0 ; j<cols ;j++){
        const newDiv = document.createElement("div");

        newDiv.classList.add('my-div');

        newDiv.innerHTML = 'Div' ;

        container.appendChild(newDiv);
    }
    //const lineBreak = document.createElement("br");
    //container.appendChild(lineBreak);
}
}
gridButton.addEventListener('click',function(){
    const rows = parseInt(rowSize.value);
    const cols = parseInt(colSize.value);
    generateGrid(rows,cols);
})
