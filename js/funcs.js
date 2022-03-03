function dodge() { }

function levelPlus1() { level = level + 1; }
function levelPlus2() { level = level + 2; }
function levelPlus3() { level = level + 3; }
function levelPlus4() { level = level + 4; }
function levelPlus5() { level = level + 5; }

function levelMinus1() { level = level - 1; }
function levelMinus2() { level = level - 2; }
function levelMinus3() { level = level - 3; }
function levelMinus4() { level = level - 4; }
function levelMinus5() { level = level - 5; }

function levelSet30() { level = 30; }
function levelSet24() { level = 24; }
function levelSet18() { level = 18; }
function levelSet12() { level = 12; }
function levelSet6() { level = 6; }
function levelSet0() { level = 0; }

function addQ2() { QQ.splice(1, 0, q2); }
function pushPythonPascal() {
    python.wide = 'Этот язык хорошо подойтет для сдачи ЕГЭ/ОГЭ. Он довольно прост в изучении, и благодаря этому можно довольно быстро подготовиться к необходимым заданиям.';
    results.push(python);
    results.push(pascal);
    finish = true;
}

function setLongTimeTrue() {
    longTime = true;
}

function setLongTimeFalse() {
    longTime = false;
}

function appendGroup(group) {
    for (let i = 0; i < group.length; i++) {
        if (results.indexOf(group[i]) == -1) {
            results.push(group[i]);
        }
    }
}

function setPower() {
    priority = 'power'
}

function setUniversality () {
    priority = 'universality'
}

function appGames() { 
    appendGroup(GAMES); 
    QQ.push(g1);
    QQ.push(g2);
    QQ.push(g3);
    QQ.push(g4);
}

function appSites() { 
    appendGroup(SITES); 
    QQ.push(s1);
}

function appIOS() { appendGroup(IOS); }
function appAndroid() { 
    appendGroup(ANDROID); 
    QQ.push(a1);
}

function appMACOS() { 
    appendGroup(MACOS); 
    QQ.push(pc1);
    QQ.push(pc2);
}

function appWindows() { 
    appendGroup(WINDOWS); 
    QQ.push(pc1);
    QQ.push(pc2);
}

function appLinux() { 
    appendGroup(LINUX); 
    QQ.push(pc1);
    QQ.push(pc2);
}

function appMicro() { appendGroup(MICRO); }
function appBase() { appendGroup(BASE); }
function appIIMO() { appendGroup(IIMO); }

function deleteLang(lang) {
    let id = results.indexOf(lang);
    if (id == -1) return null;
    try {
        results.splice(id, 1);
    } catch(err) {
        return err;
    }
}

function only3D() {
    deleteLang(python);
    deleteLang(java);
    deleteLang(javascript);
    deleteLang(kotlin);
}

function onlyOnline() {
    deleteLang(python);
    deleteLang(java);
    deleteLang(kotlin);
    deleteLang(c);
}

function onlyCross() {
    deleteLang(python);
    deleteLang(kotlin);
    deleteLang(swift);
}

function onlyBack() {
    deleteLang(css);
    deleteLang(html);
    deleteLang(php);
}

function onlyFront() {
    deleteLang(python);
    deleteLang(javascript);
    deleteLang(java);
    deleteLang(ruby);
}

function onlyGraph() {
    deleteLang(pascal);
    deleteLang(ruby);
}

function sortLang() {
    if (level > 20) {
        deleteLang(python);
        deleteLang(php);
        deleteLang(html);
        deleteLang(pascal);
    }
    if (level <= 20) {
        deleteLang(cpp);
        deleteLang(csharp);
        deleteLang(c);
        deleteLang(ruby);
        deleteLang(obj_c);
    }
    if (level <= 10) {
        deleteLang(cpp);
        deleteLang(csharp);
        deleteLang(c);
        deleteLang(ruby);
        deleteLang(obj_c);
        deleteLang(java);
        deleteLang(javascript);
        deleteLang(kotlin);
        deleteLang(swift);
        deleteLang(sql);
    }
}