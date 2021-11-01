let python = {
    name: 'Python',
    universality: 'high',
    complexity: 'low',
    threshold: 'low',
    relevance: 'high',
    power: 'medium',
    logo: 'logos/python.jpg',
    basic: 'Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ.'
}

let cpp = {
    name: 'C++',
    universality: 'high',
    complexity: 'high',
    threshold: 'medium',
    relevance: 'high',
    power: 'high',
    logo: 'logos/cpp.jpg',
    basic: 'C++ — компилируемый, статически типизированный язык программирования общего назначения. Поддерживает такие парадигмы программирования, как процедурное программирование, объектно-ориентированное программирование, обобщённое программирование.'
}

let csharp = {
    name: 'C#',
    universality: 'low',
    complexity: 'high',
    threshold: 'medium',
    relevance: 'high',
    power: 'high',
    logo: 'logos/csharp.jpg',
    basic: 'C# — объектно-ориентированный язык программирования. Разработан в 1998—2001 годах группой инженеров компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота как язык разработки приложений для платформы Microsoft.NET Framework. Впоследствии был стандартизирован как ECMA-334 и ISO/IEC 23270. C# относится к семье языков с C-подобным синтаксисом, из них его синтаксис наиболее близок к C++ и Java.'
}

let c = {
    name: 'C',
    universality: 'medium',
    complexity: 'high',
    threshold: 'high',
    relevance: 'high',
    power: 'high',
    logo: 'logos/c.jpg',
    basic: 'Си — компилируемый статически типизированный язык программирования общего назначения, разработанный в 1969—1973 годах сотрудником Bell Labs Деннисом Ритчи как развитие языка Би. Первоначально был разработан для реализации операционной системы UNIX, но впоследствии был перенесён на множество других платформ.'
}

let java = {
    name: 'Java',
    universality: 'high',
    complexity: 'medium',
    threshold: 'low',
    relevance: 'high',
    power: 'medium',
    logo: 'logos/java.jpg',
    basic: 'Java — строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems. Разработка ведётся сообществом, организованным через Java Community Process; язык и основные реализующие его технологии распространяются по лицензии GPL.'
}

let javascript = {
    name: 'JavaScript',
    universality: 'high',
    complexity: 'medium',
    threshold: 'low',
    relevance: 'high',
    power: 'medium',
    logo: 'logos/js.jpg',
    basic: 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
}

let kotlin = {
    name: 'Kotlin',
    universality: 'low',
    complexity: 'medium',
    threshold: 'medium',
    relevance: 'medium',
    power: 'medium',
    logo: 'logos/kotlin.jpg',
    basic: 'Kotlin — статически типизированный, объектно-ориентированный язык программирования, работающий поверх Java Virtual Machine и разрабатываемый компанией JetBrains. Также компилируется в JavaScript и в исполняемый код ряда платформ через инфраструктуру LLVM.'
}

let ruby = {
    name: 'Ruby',
    universality: 'low',
    complexity: 'high',
    threshold: 'medium',
    relevance: 'low',
    power: 'high',
    logo: 'logos/ruby.jpg',
    basic: 'Ruby — динамический, рефлективный, интерпретируемый высокоуровневый язык программирования. Язык обладает независимой от операционной системы реализацией многопоточности, сильной динамической типизацией, сборщиком мусора и многими другими возможностями.'
}

let php = {
    name: 'php',
    universality: 'low',
    complexity: 'low',
    threshold: 'low',
    relevance: 'medium',
    power: 'medium',
    logo: 'logos/php.jpg',
    basic: 'PHP — скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.'
}

let swift = {
    name: 'Swift',
    universality: 'medium',
    complexity: 'medium',
    threshold: 'medium',
    relevance: 'high',
    power: 'medium',
    logo: 'logos/swift.jpg',
    basic: 'Swift — это надёжный и интуитивно понятный язык программирования от Apple, при помощи которого можно создавать приложения для iOS, Mac, Apple TV и Apple Watch. Он предоставляет разработчикам небывалую свободу творчества. Благодаря этому простому и удобному языку с открытым кодом вам достаточно просто интересной идеи, чтобы создать нечто невероятное.'
}

let html = {
    name: 'HTML',
    universality: 'low',
    complexity: 'low',
    threshold: 'low',
    relevance: 'high',
    power: 'high',
    logo: 'logos/html.jpg',
    basic: 'HTML — стандартизированный язык разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.'
}

let visualbasic = {
    name: 'Visual Basic',
    universality: 'low',
    complexity: 'low',
    threshold: 'low',
    relevance: 'medium',
    power: 'low',
    logo: 'logos/vb.jpg',
    basic: 'Microsoft Visual Basic — язык программирования, а также интегрированная среда разработки программного обеспечения, разрабатываемые корпорацией Microsoft. Язык Visual Basic унаследовал дух, стиль и отчасти синтаксис своего предка — языка BASIC, у которого есть немало диалектов.'
}

let sql = {
    name: 'SQL',
    universality: 'low',
    complexity: 'medium',
    threshold: 'medium',
    relevance: 'high',
    power: 'high',
    logo: 'logos/sql.jpg',
    basic: 'SQL — декларативный язык программирования, применяемый для создания, модификации и управления данными в реляционной базе данных, управляемой соответствующей системой управления базами данных. Является, прежде всего, информационно-логическим языком, предназначенным для описания, изменения и извлечения данных, хранимых в реляционных базах данных.'
}

let obj_c = {
    name: 'Objective-C',
    universality: 'low',
    complexity: 'high',
    threshold: 'medium',
    relevance: 'low',
    power: 'medium',
    logo: 'logos/obj-c.jpg',
    basic: 'Objective-C — компилируемый объектно-ориентированный язык программирования, используемый корпорацией Apple, построенный на основе языка Си и парадигм Smalltalk. В частности, объектная модель построена в стиле Smalltalk — то есть объектам посылаются сообщения.'
}

let css = {
    name: 'CSS',
    universality: 'low',
    complexity: 'low',
    threshold: 'low',
    relevance: 'high',
    power: 'high',
    logo: 'logos/css.jpg',
    basic: 'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL.'
}

let GAMES = [];
let SITES = [];
let IOS = [];
let ANDROID = [];
let MACOS = [];
let WINDOWS = [];
let LINUX = [];
let MICRO = [];
let BASE = [];
let IIMO = [];