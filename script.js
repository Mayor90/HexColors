function changeColor(){
    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    var hex_code = "";

    for (let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * hex_numbers.length);
        hex_code += hex_numbers[index];
    }
    document.getElementById("hexcode").innerHTML = hex_code;
    document.body.style.background = "#"+hex_code;
}
