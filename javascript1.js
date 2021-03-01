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
var files = [];
var imgName, imgUrl;
var reader;
function Ready(){
    nameV = document.getElementById('namebox1').value;
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
        document.getElementById("namebox1").value = snapshot.val().nameOfStudent;
        document.getElementById('secbox').value = snapshot.val().Section;
        document.getElementById('genbox').value = snapshot.val().Gender;




    });
}
document.getElementById("simage").onclick = function(){
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
        files = e.target.files;
        reader = new FileReader();
        reader.onload = function(){
            document.getElementById("myimg").src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    input.click();


}
document.getElementById("retrieve").onclick = function(){
    imgName = document.getElementById('namebox1').value;
    firebase.database().ref('Pictures/'+imgName).on('value', function(snapshot){
        document.getElementById('myimg').src = snapshot.val().Link;
    });


}

document.getElementById('up').onclick = function(){
    imgName = document.getElementById("namebox1").value;
    var uploadTask = firebase.storage().ref('Image/'+imgName+".png").put(files[0]);

    uploadTask.on('state_changed', function (snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById('upProgress').innerHTML = 'Upload' + progress+'%';
        },
        function(error){
            alert('error')
        },
        function(){
            uploadTask.snapshot.ref.getDownloadURL().then(function(url){
                    imgUrl = url;

                    firebase.database().ref('Pictures/'+imgName).set({
                        Name: imgName,
                        Link: imgUrl
                    });
                    alert('image added successfully');
                }
            );
        });
}
document.getElementById('delete').onclick = function(){
    Ready();
    firebase.database().ref('student/'+rollV).remove();
}
document.getElementById('update').onclick = function(){
    Ready();
    firebase.database().ref('student/'+rollV).update({
        nameOfStudent: nameV,
        Section: secV,
        Gender: genV
    });
}
