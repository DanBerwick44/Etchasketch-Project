function buildEtchasketch(size){

    const container = document.getElementById("container");

    for (let i = 0; i < Math.sqrt(size); i++){ //Creates the grid columns
        document.createElement("span").appendChild(container).id = "col" + i;
        for (let n = 0; n < Math.sqrt(size); n++){
            document.createElement("div").appendChild(container).id = "row" + n;
        }
    
    }
    for (let i = 0; i <= Math.sqrt(size);i++){ //Creaes columns for the grid
        container.style.columns
    }
}

