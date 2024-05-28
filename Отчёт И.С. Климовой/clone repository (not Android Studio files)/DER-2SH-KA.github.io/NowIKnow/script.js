let searchQuery = "";
let themes = ['Персональные компьютеры', 'Периферия', 'Мониторы'];

let readInputSearch = function() {
    searchQuery = String(document.getElementById('inputSearch').value);
    
    if (searchQuery == "") {
        searchQuery = 'Null';
    }

    if (searchQuery === "Null") {
        document.getElementById('inputSearch').style.borderColor = "#f00";
        setTimeout(() => { 
            document.getElementById('inputSearch').style.borderColor = "#fff";
         }, 1000);
        
    } else {

        for (let item = 0; item < themes.length;) {
            if (String(searchQuery) == String(themes[item])) {
                alert(themes[item]);
                break;
            } else {
                console.log('Нет такой темы');
                item++;
            }

            if (item == themes.length) {
                alert("На данный момент нет статьи на вашу тему...");
            }

        }
    }


}