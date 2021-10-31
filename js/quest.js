let q1 = {
    type: 'radio',
    length: 3,
    quest: 'Вопрос №1',
    answer: [
        'Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3'
    ],
    vls: [
        dodge,
        dodge,
        del
    ]
}

let q2 = {
    type: 'checkbox',
    length: 4,
    quest: 'Вопрос №2',
    answer: [
        'Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3',
        'Вариант ответа №4'
    ],
    vls: [
        del,
        dodge,
        dodge, 
        del
    ]
}

let q3 = {
    type: 'radio',
    length: 2,
    quest: 'Вопрос №3',
    answer: [
        'Да',
        'Нет'
    ],
    vls: [
        dodge,
        del
    ]
}

let QQ = [];
QQ.push(q1);
QQ.push(q2);
QQ.push(q3)