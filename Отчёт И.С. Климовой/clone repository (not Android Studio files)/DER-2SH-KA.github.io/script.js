// function AddNewWebPage() {
//     var pageName = prompt("Введите название для новой кнопки");
//     var pageSource = prompt("Введите ссылку на сайт");

//     const $textNode = document.createTextNode(String(pageName));

//     const $DIV = document.createElement('div');
//     $DIV.className = "use_link";

//     const $Anchor = document.createElement('a');
//     $Anchor.appendChild($textNode);
//     $Anchor.href = String(pageSource);

//     $DIV.appendChild($Anchor);
    
//     const $links = document.querySelector('#links');
//     $links.appendChild($DIV);
// }

let randomInt = function() {
    let welcomeText = ["Welcome Back!", "С Возвращением!", "Давно не виделись!", "Здравствуйте!", "Hello!", "Доброго Дня!", "Иисус"];
    let a = Math.floor(Math.random() * (welcomeText.length - 1));
    let b = welcomeText[Number(a)];
    return String(b);
}

function ChooseTabName() {

    randomInt();
    
    document.getElementById('welcomeText').innerHTML = randomInt();
    console.log("Текст применён")

}