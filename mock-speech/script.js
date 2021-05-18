const output = document.getElementById("output")

document.getElementById("input").addEventListener("input", function(e) {
    const input_text = e.srcElement.value;
    output.value = mock_speak(input_text);
})

function mock_speak(input) {
    let output = "";
    let capitalize = false;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) == " ") {
            output += input.charAt(i);
            capitalize = false;
        } else if (capitalize) {
            output += input.charAt(i).toUpperCase();
            capitalize = false;
        } else {
            output += input.charAt(i).toLowerCase();
            capitalize = true;
        }
    }
    return output;
}