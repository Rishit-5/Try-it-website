var firebaseConfig = {
    apiKey: "AIzaSyBlTVYdKivk0KrHreXwrJ6YA8VxTVHbIJs",
    authDomain: "athlead-67a40.firebaseapp.com",
    databaseURL: "https://athlead-67a40-default-rtdb.firebaseio.com",
    projectId: "athlead-67a40",
    storageBucket: "athlead-67a40.appspot.com",
    messagingSenderId: "45769101298",
    appId: "1:45769101298:web:5ec9ec7a1e38cb4362e56b",
    measurementId: "G-GWLT1C4SZ0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var nameV,rollV,secV,genV;
// function Ready(){
//     nameV = document.getElementById('namebox').value;
//     rollV = document.getElementById('rollbox').value;
//     secV = document.getElementById('secbox').value;
//     genV = document.getElementById('genbox').value;
//
// }
//
// document.getElementById('insert').onclick = function(){
//     Ready();
//     firebase.database().ref('student/'+nameV).set({
//         nameOfStudent: nameV,
//         RollNo: rollV,
//         Section: secV,
//         Gender: genV,
//     });
// }
//
// document.getElementById("select").onclick = function(){
//     Ready();
//     firebase.database().ref('student/' + rollV).on('value',function(snapshot){
//         document.getElementById("namebox").value = snapshot.val().nameOfStudent;
//         document.getElementById('secbox').value = snapshot.val().Section;
//         document.getElementById('genbox').value = snapshot.val().Gender;
//
//
//
//
//     });
// }
//
// document.getElementById('update').onclick = function(){
//     Ready();
//     firebase.database().ref('student/'+rollV).update({
//         nameOfStudent: nameV,
//         Section: secV,
//         Gender: genV
//     });
// }
//
// document.getElementById('delete').onclick = function(){
//     Ready();
//     firebase.database().ref('student/'+rollV).remove();
// }


document.getElementById("enterBtn").onclick = function () {
    document.getElementById("signinScreen").hidden = true;
    document.getElementById("app").hidden = false;
    hideMainDivs();
    document.getElementById("homePage").hidden = true;
}

document.getElementById("homeBtn").onclick = function () {
    hideMainDivs();
    document.getElementById("homePage").hidden = false;
}

document.getElementById("searchBtn").onclick = function () {
    hideMainDivs();
    document.getElementById("searchPage").hidden = false;
}

document.getElementById("myprofileBtn").onclick = function () {
    hideMainDivs();
    document.getElementById("myprofilePage").hidden = false;
}

document.getElementById("postBtn").onclick = function () {
    document.getElementById("myprofile").hidden = true;
    document.getElementById("postingPage").hidden = false;
}

document.getElementById("quoteBtn").onclick = function () {
    hidePostOps();
    document.getElementById("quote").hidden = false;
}

document.getElementById("recipeBtn").onclick = function () {
    hidePostOps();
    document.getElementById("recipe").hidden = false;
}

document.getElementById("workoutBtn").onclick = function () {
    hidePostOps();
    document.getElementById("workout").hidden = false;
}

document.getElementById("postBackBtn").onclick = function () {
    document.getElementById("myprofile").hidden = false;
    document.getElementById("postingPage").hidden = true;
}

function hidePostOps() {
    document.getElementById("quote").hidden = true;
    document.getElementById("recipe").hidden = true;
    document.getElementById("workout").hidden = true;
}

function hideMainDivs() {
    document.getElementById("searchPage").hidden = true;
    document.getElementById("homePage").hidden = true;
    document.getElementById("myprofilePage").hidden = true;
}
