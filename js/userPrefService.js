const KEY = 'userData'
let gUsers;
let gRndAstros;

function addBgColor() {
    var color = document.querySelector('.form-color').value;
    var hexColor =  convert(color);
    document.body.style.backgroundColor = hexColor
    event.preventDefault();
}

function showAstro(){
    
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}

function _createUserPref(color, birthday) {
    return {
        color,
        birthday,
        astro: getRandomAstro(idx)
    }
}

function _createRandomAstro() {
    var rndAstros = [];
    for (var i = 0; i < 3; i++) {
        var astro = makeLorem();
        rndAstros.push(astro)
    }
    gRndAstros = rndAstros
    _saveBooksToStorage
}

function getRandomAstro(idx){
    return gRndAstros[idx];
}

// function _createUserPrefs(color){

//     var userPrefs = loadFromStorage(KEY)
//     if (!userPrefs || !userPrefs.length) {
//         userPrefs = []
//         for (let i = 0; i < userInfo.length; i++) {
//             userPrefs.push( _createUserPref(userInfo.color, userInfo.birthday))
//         }
//     }
//  re   gUsers = userPrefs;
//     _saveBooksToStorage();
// }