

function buildEtchasketch(){
    function chooseSize(){
        var size = parseInt(prompt("Choose a size"))
        console.log("size recognized as " + typeof size)
        if ((size > 100) || (size < 0) || (typeof size != "number")){
            var size = chooseSize()
        }
        return size
    }
    let size = chooseSize()
    console.log("Button Press Detected")
    console.log("Button passed size " + size + " grid")
    const container = document.getElementById("container");
    const columnArray = []
    for (let i = 0; i < size; i++){ //Creates the grid columns
        let activeColumn = document.createElement("div")
        container.appendChild(activeColumn)
        activeColumn.classList.add("column");
        columnArray.push(activeColumn)
        console.log("Column created!")
        for (let n = 0; n < size; n++){
            let activeDiv = document.createElement("div");
            activeDiv.classList.add("row");
            activeColumn.appendChild(activeDiv);
            console.log("Row segment created!");
        }
    
    }
}

