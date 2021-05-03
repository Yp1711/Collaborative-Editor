
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAKxu3EnZPxBfkYzEBYHLyNbHIX1sVFzHE",
    authDomain: "collaborative-editor-61d17.firebaseapp.com",
    projectId: "collaborative-editor-61d17",
    storageBucket: "collaborative-editor-61d17.appspot.com",
    messagingSenderId: "784356278803",
    appId: "1:784356278803:web:5015cefc53c401df4ef5e6",
    measurementId: "G-7FHC1E968W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    //document.location.href="Collobarative Editor.html"
    
  }


  //signOut

  function signOut(){
  
    auth.signOut();
    alert("SignOut Successfully from System");
    
   
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);
      document.location.href="Collobarative Editor.html"
      

    }else{
      alert("No Active user Found")
    }
  })
