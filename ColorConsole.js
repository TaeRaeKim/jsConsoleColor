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
    const lines = text.split('\n');
    color = isValid(color);
    lines.forEach(line => console.log(`\x1b[${color}m ${line} \x1b[0m`));
}

function colorText(text, color){
    color = isValid(color);
    return `\x1b[${color}m${text}\x1b[0m`;
}

function isValid(color){
    if(!Number(color) || color < 30 || color > 47 || (color>37 && color <40)) return Text_Color.White;
    return color;
}

module.exports = {
    Text_Color,
    Bg_Color,
    print,
    colorText
}
