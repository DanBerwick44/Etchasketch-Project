buildEtchasketch(size){
    for (let i = 0; i < size ; i++){
    var container = document.getElementById("container");
    document.createElement("div").appendChild(container).id = "div" + i;

    }
}