let qq = 0;
let btnHTML = '<input type="button" value="Ответить" class="btn" onclick="next()"> &nbsp <input type="button" value="Сбросить" class="btn" onclick="reset()">';
let carefulHTML = ''
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
    form = form + carefulHTML + btnHTML;
    document.getElementById('qName').innerHTML = '<label class="qlabel">' + question.quest + '</label>';
    document.getElementById('question').innerHTML = form;
    qq++;
}

function genCheckbox(text, value) {
    let check = '<label class="check option"> <input class="check_input" type="checkbox" id="' + value + '"> <span class="check_box"></span> ' + text + ' </label>';
    return check;
}

function genRadio(text, value) {
    let radio = '<label class="rad option"> <input type="radio" name="same" class="rad_input" id="' + value + '"> <span class="rad_box"></span>' + text + '</label>';
    return radio;
}

function reset() {
    qq--;
    genQuestion();
}

function next() {
    console.log(level, longTime);
    if (check()) {
        if (finish == false) {
        genQuestion();
        }
        else {
            last();
        }
    }
    else {
        qq--;
        carefulHTML = '<div style=" margin-bottom: 10px"><label style="color: red; font-size: 16px;"> Выберите вариант ответа </label> <br> </div>';
        genQuestion();
        carefulHTML = '';
    }
}

function last() {
    document.getElementById('page-title').innerHTML = '<h1>Результат</h1>'
    document.getElementById('qName').innerHTML = '';
    if (!ignoreSort) sortLang();
    genResult();
    openLang(first);
    document.getElementById(first + '1').className = 'tablinks active';
}

function check() {
    let vls = [];
    question = QQ[qq - 1];
    for (let i = 0; i < question.length; i++) {
        vls.push(document.getElementById('' + i).checked);
    }
    for (let i = 0; i < vls.length; i++) {
        if (vls[i] == true) {
            question.vls[i]();
        }
    }
    if (vls.indexOf(true) != -1) {
        return true;
    }
    return false;
}