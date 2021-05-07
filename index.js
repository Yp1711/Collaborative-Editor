
  var firebaseConfig = {
    apiKey: "AIzaSyBYpnf-hSPnXQslw-fhuWjM-uBzXdgTgLw",
    authDomain: "text-editor-7fa34.firebaseapp.com",
    projectId: "text-editor-7fa34",
    storageBucket: "text-editor-7fa34.appspot.com",
    messagingSenderId: "696052743170",
    appId: "1:696052743170:web:08ecd2c0fce4c6199e3b1b",
    measurementId: "G-1Y652WRD4J"
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
