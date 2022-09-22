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
    // Remove all childrens of grid container by setting textContent to empty string
    gridContainer.textContent = '';
    for(let rowNo = 1; rowNo <= numberRows; rowNo++) {
        for(let columnNo = 1; columnNo <= numberColumns; columnNo++) {
            gridContainer.appendChild(createGridCell(rowNo, columnNo));
        }
    }
}

const gridSizeChooseBtn = document.querySelector("#gridSize")
gridSizeChooseBtn.addEventListener("click", (event)=> {
    let numberCellsPerSide = parseInt(prompt("Enter number of squares per side beteen 1 and 100."));
    if(isNaN(numberCellsPerSide) || numberCellsPerSide <= 0 || numberCellsPerSide > 100) {
        alert("Wrong Input");
    }
    else {
        createGrid(numberCellsPerSide, numberCellsPerSide);
    }
})

createGrid(16, 16);








