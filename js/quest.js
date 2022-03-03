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
    length: 3,
    quest: 'Что важнее универсальность языка или его мощность?',
    answer: [
        'Универсальность',
        'Мощность',
        'Равнозначны'
    ],
    vls: [
        setUniversality,
        setPower,
        dodge
    ]
}

let q8 = {
    type: 'radio',
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

let g1 = {
    type: 'radio',
    length: 2,
    quest: '2D или 3D?',
    answer: [
        '2D',
        '3D'
    ],
    vls: [
        dodge,
        only3D
    ]
}

let g2 = {
    type: 'radio',
    length: 4,
    quest: 'На какие платформы вы хотите делать игры?',
    answer: [
        'Мобильные',
        'ПК',
        'Консоли',
        'Веб-игры'
    ],
    vls: [
        dodge,
        dodge,
        dodge,
        dodge
    ]
}

let g3 = {
    type: 'radio',
    length: 2,
    quest: 'Необходимость онлайна?',
    answer: [
        'Нужна',
        'Необязательно'
    ],
    vls: [
        onlyOnline,
        dodge
    ]
}

let g4 = {
    type: 'radio',
    length: 2,
    quest: 'Возможность портирования на другие платформы?',
    answer: [
        'Нужна',
        'Необязательна'
    ],
    vls: [
        onlyCross,
        dodge
    ]
}

let s1 = {
    type: 'radio',
    length: 2,
    quest: 'Backend или Frontend?',
    answer: [
        'Backend',
        'Frontend'
    ],
    vls: [
        onlyBack,
        onlyFront
    ]
}

let a1 = {
    type: 'radio',
    length: 2,
    quest: 'Возможность портирования приложений на ПК?',
    answer: [
        'Нужна',
        'Необязательна'
    ],
    vls: [
        onlyCross,
        dodge
    ]
}

let pc1 = {
    type: 'radio',
    length: 2,
    quest: 'Возможность создавать .exe .dmg .deb?',
    answer: [
        'Нужна',
        'Необязательна'
    ],
    vls: [
        onlyCross,
        dodge
    ]
}

let pc2 = {
    type: 'radio',
    length: 2,
    quest: 'Графическая состовляющая?',
    answer: [
        'Нужна',
        'Необязательна'
    ],
    vls: [
        onlyGraph,
        dodge
    ]
}