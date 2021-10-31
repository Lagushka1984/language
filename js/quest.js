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
    length: 5,
    quest: 'Как вы оцениваете свои навыки?',
    answer: [
        'Отлично',
        'Хорошо',
        'Средне',
        'Неплохо',
        'Плохо'
    ],
    vls: [
        levelPlus5,
        levelPlus4,
        levelPlus3, 
        levelPlus2,
        dodge
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
        dodge,
        dodge,
        dodge
    ]
}

let QQ = [];
QQ.push(q1);
QQ.push(q3);