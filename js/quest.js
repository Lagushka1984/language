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
        pushPythonPascal
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

let q6 = {
    type: 'radio',
    length: 2,
    quest: 'Знаете ли вы чем низкоуровневое программирование отличается от высокоуровнего?',
    answer: [
        'Да',
        'Нет'
    ],
    vls: [
        levelPlus2,
        levelMinus2
    ]
}

let q7 = {
    type: 'radio',
    length: 2,
    quest: 'Что важнее универсальность языка или его мощность?',
    answer: [
        'Универсальность',
        'Мощность',
        'Равнозначны'
    ],
    vls: [
        main = 'universality',
        main = 'power',
        dodge
    ]
}

let q8 = {
    type: 'checkbox',
    length: 10,
    quest: 'Выберите интересующие вас темы:',
    answer: [
        'Игры',
        'Сайты',
        'Приложения под IOS',
        'Приложения под Android',
        'Программы под MACOS',
        'Программы под Windows',
        'Программы под Linux',
        'Робототехника',
        'Базы данных',
        'Исскуственный интелект и машинное обучение'
    ],
    vls: [
        appGames,
        appSites,
        appIOS,
        appAndroid,
        appMACOS,
        appWindows,
        appLinux,
        appMicro,
        appBase,
        appIIMO
    ]
}

let QQ = [];
QQ.push(q1);
QQ.push(q3);
QQ.push(q4);
QQ.push(q5);
QQ.push(q6);
QQ.push(q7);
QQ.push(q8);