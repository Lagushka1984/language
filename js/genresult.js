let trig = true;
function genTab() {
    let tab = '<div class="tab">';
    let timeName = '';
    for (let i = 0; i < results.length; i++) {
        timeName = results[i].name;
        if (trig) { first = timeName; }
        trig = false;
        tab = tab + '<button class="tablinks" id="' + timeName + '1" onclick="openLang(' + "'" + timeName + "'" + ')">' + timeName + '</button>';
    }
    tab = tab + '</div>';
    return tab;
}
function genTabContent(lang) {
    let content = '<div id="' + lang.name + '" class="tabcontent">';
    content = content + '<h3>' + lang.name + '</h3>';
    content = content + '<img src="' + lang.logo + '">';
    content = content + '<div style="width: 0%; margin: 0 auto; margin-top: -6.3em;">';
    content = content + '<label style="margin-left: 0em;">Универсальность</label>';
    content = content + '<div id="' + lang.universality + '"></div>';
    content = content + '<label style="margin-left: 3em;">Сложность</label>';
    content = content + '<div id="' + lang.complexity + '"></div>';
    content = content + '<label style="margin-left: 2.4em; white-space: nowrap;">Порог входа</label>';
    content = content + '<div id="' + lang.threshold + '"></div>';
    content = content + '<label style="margin-left: 1.8em;">Актуальность</label>';
    content = content + '<div id="' + lang.relevance + '"></div>';
    content = content + '<label style="margin-left: 3.3em;">Мощность</label>';
    content = content + '<div id="' + lang.power + '"></div></div>';
    content = content + '<p>' + lang.basic + '</p>';
    content = content + '<p>' + lang.wide + '</p>';
    content = content + genLinks(lang);
    content = content + '</div>';
    return content;
}

function genResult() {
    let rs = '';
    rs = rs + genTab();
    for (let i = 0; i < results.length; i++) {
        rs = rs + genTabContent(results[i]);
    }
    document.getElementById('main').innerHTML = rs;
}

function genLinks(lang) {
    let link = '<p>Полезные ссылки </p><ul>';
    for (let i = 0; i < lang.links.length; i++) {
        link = link + '<li>' + '<a target="_blank" href="' + lang.links[i] + '">' + lang.links[i] + '</a>' + '</li>';
    }
    link = link + '</ul>';
    return link;
}