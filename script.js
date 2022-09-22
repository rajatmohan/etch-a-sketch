const divMouseEnter = (event)=> {
    const divEle = event.target;
    divEle.style.backgroundColor = 'black';
}

const createGridCell = (rowNo, columnNo)=> {
    divEle = document.createElement('div');
    divEle.classList.add("grid-item");
    
    divEle.style.gridRow = rowNo;
    divEle.style.gridColumn = columnNo;

    divEle.addEventListener("mouseenter",divMouseEnter);
    
    return divEle;
}

const createGrid = (numberRows, numberColumns)=> {
    const gridContainer = document.querySelector(".grid-container");
    for(let rowNo = 1; rowNo <= numberRows; rowNo++) {
        for(let columnNo = 1; columnNo <= numberColumns; columnNo++) {
            gridContainer.appendChild(createGridCell(rowNo, columnNo));
        }
    }
}

createGrid(32, 32);





