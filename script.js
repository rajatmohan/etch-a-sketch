// generateRandomNo will generate random no between 0 (including) and n (excluding)
const generateRandomNo = (n) => {
    return Math.floor(Math.random()*n);
}

const generateRandomColor = () => {
    // Color maximum value in hexadecimal would be 0xFFFFFF
    // One Number greater than maximum color would be 0x1000000
    // toString(16) convert number into hexadecimal string representation 
    return '#'+generateRandomNo(0x1000000).toString(16);;
}

const divMouseEnter = (event)=> {
    const divEle = event.target;
    divEle.classList.add("visited");
    divEle.style.backgroundColor = generateRandomColor();
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








