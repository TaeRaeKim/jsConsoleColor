# **ColorConsole**

![Untitled](https://github.com/user-attachments/assets/d993dad9-2f66-4e97-9268-4a8b34885579)

## What is this?

- nodejs javascript 모듈 입니다.
- Console Log의 Color출력을 쉽게 할 수 있도록 도와줍니다.

## How to use?

- 패키지에 jsConsoleColor를 설치합니다.
    - `npm install https://github.com/TaeRaeKim/jsConsoleColor.git`
- ColorConsole을 import 하고 사용합니다.

```jsx
const Color = require('colorconsole')

const hi = "Hello Wolrd";

Color.print(hi, Color.Text_Color.Green)
console.log(Color.colorText(hi, Color.Bg_Color.Cyan));
```

## Type

- Text_Color
    - Black
    - Red
    - Green
    - Yellow
    - Blue
    - Magenta
    - Cyan
    - White
- Bg_Color
    - Black
    - Red
    - Green
    - Yellow
    - Blue
    - Magenta
    - Cyan
    - White

### Result

![Untitled 1](https://github.com/user-attachments/assets/b8beda91-7b43-4542-a63d-cac98d1ea705)
