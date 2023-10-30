

function buildEtchasketch(size){
    console.log("Button Press Detected")
    const container = document.getElementById("container");
    const columnArray = []
    for (let i = 0; i < Math.sqrt(size); i++){ //Creates the grid columns
        let activeColumn = document.createElement("span")
        activeColumn.appendChild(container).class = "col" + i;
        columnArray.push(activeColumn)
        console.log("Column created!")
        for (let n = 0; n < Math.sqrt(size); n++){
            let activeDiv = document.createElement("div");
            activeDiv.classList.add("row");
            activeDiv.appendChild(container);
            console.log("Row segment created!");
        }
    
    }
}

