let q1 = {
    type: 'radio',
    length: 2,
    quest: 'Вы уже знакомы с программированием?',
    answer: [
        'Да',
        'Нет'
    ],
    vls: [
        addQ2,
        dodge,
    ]
}

let q2 = {
    type: 'radio',
    length: 6,
    quest: 'Как вы оцениваете свои навыки?',
    answer: [
        'Отлично',
        'Хорошо',
        'Средне',
        'Неплохо',
        'Плохо',
        'Нет навыков'
    ],
    vls: [
        levelSet30,
        levelSet24,
        levelSet18, 
        levelSet12,
        levelSet6,
        levelSet0
    ]
}

let q3 = {
    type: 'radio',
    length: 3,
    quest: 'Вас интересует программирование в долгосрочной перспективе?',
    answer: [
        'Да',
        'Нет',
        'Только для ЕГЭ/ОГЭ'
    ],
    vls: [
        setLongTimeTrue,
        setLongTimeFalse,
        pushPython
    ]
}

let q4 = {
    type: 'radio',
    length: 2,
    quest: 'Вы готовы столкнуться с трудностями?',
    answer: [
        'Да',
        'Нет'
    ],
    vls: [
        levelPlus5,
        levelMinus5
    ]
}

let q5 = {
    type: 'radio',
    length: 5,
    quest: 'Как вы оцениваете свои знания в математике?',
    answer: [
        'Отлично',
        'Хорошо',
        'Средне',
        'Неплохо',
        'Плохо'
    ],
    vls: [
        levelPlus3,
        levelPlus2,
        levelPlus1, 
        levelMinus1,
        levelMinus2
    ]
}

let QQ = [];
QQ.push(q1);
QQ.push(q3);
QQ.push(q4);
QQ.push(q5);