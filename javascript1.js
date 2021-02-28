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

var nameV,rollV,secV,genV;
function Ready(){
    nameV = document.getElementById('namebox').value;
    rollV = document.getElementById('rollbox').value;
    secV = document.getElementById('secbox').value;
    genV = document.getElementById('genbox').value;

}

document.getElementById('insert').onclick = function(){
    Ready();
    firebase.database().ref('student/'+nameV).set({
        nameOfStudent: nameV,
        RollNo: rollV,
        Section: secV,
        Gender: genV,
    });
}

document.getElementById("select").onclick = function(){
    Ready();
    firebase.database().ref('student/' + rollV).on('value',function(snapshot){
        document.getElementById("namebox").value = snapshot.val().nameOfStudent;
        document.getElementById('secbox').value = snapshot.val().Section;
        document.getElementById('genbox').value = snapshot.val().Gender;




    });
}

document.getElementById('update').onclick = function(){
    Ready();
    firebase.database().ref('student/'+rollV).update({
        nameOfStudent: nameV,
        Section: secV,
        Gender: genV
    });
}

document.getElementById('delete').onclick = function(){
    Ready();
    firebase.database().ref('student/'+rollV).remove();
}
