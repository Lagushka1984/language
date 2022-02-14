function dodge() {}

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

function addQ2() {QQ.splice(1, 0, q2);}
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
        if (results.indexOf(group[i]) == -1 ) {
            results.push(group[i]);
        }
    }
}

function appGames() { appendGroup(GAMES); }
function appSites() { appendGroup(SITES); }
function appIOS() { appendGroup(IOS); }
function appAndroid() { appendGroup(ANDROID); }
function appMACOS() { appendGroup(MACOS); }
function appWindows() { appendGroup(WINDOWS); }
function appLinux() { appendGroup(LINUX); }
function appMicro() { appendGroup(MICRO); }
function appBase() { appendGroup(BASE); }
function appIIMO() { appendGroup(IIMO); }