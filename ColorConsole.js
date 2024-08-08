const Text_Color = {
    "Black": 30,
    "Red": 31,
    "Green": 32,
    "Yellow": 33,
    "Blue": 34,
    "Magenta": 35,
    "Cyan": 36,
    "White": 37,
}

const Bg_Color = {
    "Black": 40,
    "Red": 41,
    "Green": 42,
    "Yellow": 43,
    "Blue": 44,
    "Magenta": 45,
    "Cyan": 46,
    "White": 47
}

function print(text, color){
    if(!Number(color) || color < 30 || color > 47 || (color>37 && color <40)) color = Text_Color.White;
    const lines = text.split('\n');
    lines.forEach(line => console.log(`\x1b[${color}m ${line} \x1b[0m`));
    
}
function colorText(text, color){
    return `\x1b[${color}m ${text} \x1b[0m`;
}

module.exports = {
    Text_Color,
    Bg_Color,
    print,
    colorText
}

/*
example

print("부스트캠프 웹·모바일 9기 챌린지", Text_Color.Blue);
console.log(colorText("J070 김태래", Text_Color.Cyan))
*/
