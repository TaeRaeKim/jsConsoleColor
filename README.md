# Javascript Color

날짜: 2024년 8월 8일
생성자: 태래 김
태그: 학습저장소

# **ColorConsole**

![Untitled](Javascript%20Color%20c2b6abc4fb954d4b9912e9604cd08a11/Untitled.png)

## What is this?

- nodejs javascript 모듈 입니다.
- Console Log의 Color출력을 쉽게 할 수 있도록 도와줍니다.

## How to use?

- 패키지에 jsConsoleColor를 설치합니다.
    - `npm install [https://github.com/TaeRaeKim/jsConsoleColor.git](https://github.com/TaeRaeKim/jsConsoleColor.git)`
- colorconsole을 import 하고 사용합니다.

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

![Untitled](Javascript%20Color%20c2b6abc4fb954d4b9912e9604cd08a11/Untitled%201.png)