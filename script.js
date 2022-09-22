const gridContainer = document.querySelector(".grid-container")

const createGridCell = (rowNo, columnNo)=> {
    divEle = document.createElement('div');
    divEle.classList.add("grid-item");
    divEle.style.gridRow = rowNo;
    divEle.style.gridColumn = columnNo;
    return divEle;
}

const createGrid = (numberRows, numberColumns)=> {
    for(let rowNo = 1; rowNo <= numberRows; rowNo++) {
        for(let columnNo = 1; columnNo <= numberColumns; columnNo++) {
            gridContainer.appendChild(createGridCell(rowNo, columnNo));
        }
    }
}

createGrid(32, 32);





