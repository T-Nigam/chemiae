const firebaseConfig = {
    apiKey: "AIzaSyC5P4An8O-A-3ZSme0fvqEV8lJsS2dPh40",
    authDomain: "chemiae.firebaseapp.com",
    projectId: "chemiae",
    storageBucket: "chemiae.appspot.com",
    messagingSenderId: "942176952217",
    appId: "1:942176952217:web:fa9d3b722e1236784b3d08",
    measurementId: "G-HKC5BTZMCH"
    };
    
    let uid = "";
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth(app);

    function signUpOpen(){
        document.getElementById("signUpPage").classList.toggle("active");
    }
    
    function logInOpen(){
        document.getElementById("logInPage").classList.toggle("active");
    }

    function testOpen(){
        document.getElementById("testPage").classList.toggle("active");
    }

    function loginUser(){
        let email = document.getElementById("email").value;
        console.log(email);
        let password = document.getElementById("password").value;
        console.log(password)
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            uid = userCredential.user.uid;
            document.getElementById("before").className = "hide"; 
            document.getElementById("after").className = "row"; 
            console.log(userCredential);
            console.log(uid);
            logInOpen();
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            });
    }
    
    function createAccount(){
        let email = document.getElementById("email").value;
        console.log(email);
        let password = document.getElementById("password").value;
        console.log(password);
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            uid = userCredential.user.uid;
            document.getElementById("before").className = "hide"; 
            document.getElementById("after").className = "row"; 
            console.log(userCredential);
            console.log(uid);
            signUpOpen();
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
            });  
    }

    function reset(){
        uid = "";
        console.log(uid);
        document.getElementById("before").className = "row"; 
        document.getElementById("after").className = "hide"; 
    }
    
    document.getElementById("signUp").addEventListener('click',createAccount);
    
    document.getElementById("login").addEventListener('click', loginUser);

    document.getElementById("signOut").addEventListener('click', reset);

    

    