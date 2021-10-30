let q1 = {
    type: 'radio',
    length: 3,
    quest: 'Вопрос №1',
    answer: [
        'Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3'
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
    ]
}

let q3 = {
    type: 'checkbox',
    length: 2,
    quest: 'Вопрос №3',
    answer: [
        'Да',
        'Нет'
    ]
}

let QQ = []
QQ.push(q1);
QQ.push(q2);
QQ.push(q3)
let qq = 0;
let btnHTML = '<input type="button" value="Ответить" class="btn" onclick="next()"> &nbsp <input type="button" value="Сбросить" class="btn" onclick="reset()">';
function genQuestion() {
    let ln = QQ.length;
    if (ln == qq) {
        last();
        return null;
    }
    question = QQ[qq];
    let form = '';
    if (question.type == 'checkbox') {
        for (let i = 0; i < question.length; i++) {
            form = form + genCheckbox(question.answer[i], i);
        }
    }
    if (question.type == 'radio') {
        for (let i = 0; i < question.length; i++) {
            form = form + genRadio(question.answer[i], i);
        }
    }
    form = form + btnHTML;
    document.getElementById('qName').innerHTML = '<label class="qlabel">' + question.quest + '</label>';
    document.getElementById('question').innerHTML = form;
    qq++;
}

function genCheckbox(text, value) {
    let check = '<label class="check option"> <input class="check_input" type="checkbox" value="' + value + '"> <span class="check_box"></span> ' + text + ' </label>';
    return check;
}

function genRadio(text, value) {
    let radio = '<label class="rad option"> <input type="radio" name="same" class="rad_input" value="' + value + '"> <span class="rad_box"></span>' + text + '</label>';
    return radio;
}

function reset() {
    qq--;
    genQuestion();
}

function next() {
    genQuestion();
}

function last() {
    document.getElementById('qName').innerHTML = '';
    document.getElementById('question').innerHTML = '<h4>Вопросы закончились</h4>';
}