
  var firebaseConfig = {
    apiKey: "AIzaSyCCgn0yjyezKqeZjeB0O97xxEQ4TI5-u9E",
    authDomain: "blog-data-363eb.firebaseapp.com",
    projectId: "blog-data-363eb",
    storageBucket: "blog-data-363eb.appspot.com",
    messagingSenderId: "662791942977",
    appId: "1:662791942977:web:ab4edd706228be1018e7c0",
    measurementId: "G-5QFSFGM8C8"
  };


  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var name1,email,insta,topic,blog,key;

function fetch()
{
    name1=document.getElementById("demo-name").value;
    email=document.getElementById("demo-email").value;
    insta=document.getElementById("demo-topic").value;
    topic=document.getElementById("demo-insta").value;
    blog=document.getElementById("demo-message").value;
    key=name1+"  "+topic;

    console.log(name1,email,insta,topic,blog);

}

function insert(){
    fetch();
    firebase.database().ref('blogdata/'+key).set({
        name: name1,
        email: email,
        topic: topic,
        instagram: insta,
        blog: blog
        
    });
    var x=name1+" your response has been recorded than you for submitting a blog";
    alert(x);
}
