const firebaseConfig = {
    apiKey: "AIzaSyC5P4An8O-A-3ZSme0fvqEV8lJsS2dPh40",
    authDomain: "chemiae.firebaseapp.com",
    databaseURL: "https://chemiae-default-rtdb.firebaseio.com",
    projectId: "chemiae",
    storageBucket: "chemiae.appspot.com",
    messagingSenderId: "942176952217",
    appId: "1:942176952217:web:fa9d3b722e1236784b3d08",
    measurementId: "G-HKC5BTZMCH"
    };
    
    let uid = "";
    // Initialize Firebase
    let correctAnswer = "";
    let question = "";
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth(app);
    const database = firebase.database(app);
    var counter=0;


    document.getElementById("signUp").addEventListener('click', createAccount);
    
    document.getElementById("login").addEventListener('click', loginUser);

    document.getElementById("signOut").addEventListener('click', reset);

    document.getElementById('test').addEventListener('click', testOpen);

    function signUpOpen(){
        document.getElementById("signUpPage").classList.toggle("active");
    }
    
    function logInOpen(){
        document.getElementById("logInPage").classList.toggle("active");
    }

    function testOpen(){
        newQuestion();
        document.getElementById("testPage").classList.toggle("active");
    }

    function loginUser(){
        let email = document.getElementById("emailLog").value;
        console.log(email);
        let password = document.getElementById("passwordLog").value;
        console.log(password)
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
                // Signed in 
                uid = userCredential.user.uid;
                document.getElementById("before").className = "hide"; 
                document.getElementById("after").className = "row"; 
                document.getElementById("emailLog").value  = "";
                document.getElementById("passwordLog").value  = "";
                console.log(userCredential);
                console.log(uid);
                logInOpen();
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                M.toast(errorMessage);
            });
    }
    
    function createAccount(){
        let email = document.getElementById("emailSign").value;
        console.log(email);
        let password = document.getElementById("passwordSign").value;
        console.log(password);
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
                // Signed in 
                uid = userCredential.user.uid;
                document.getElementById("before").className = "hide"; 
                document.getElementById("after").className = "row"; 
                document.getElementById("emailSign").value  = "";
                document.getElementById("passwordSign").value  = "";
                console.log(userCredential);
                console.log(uid);
                signUpOpen();
                database.ref("users/"+uid).set({
                   email: email,
                   key: password
                });
                
                for(var i = 1; i<answerChoices.length;i++){
                    database.ref("users/"+uid+"/"+answerChoices[i]).set({
                        one:"",
                        two:"",
                        three:"",
                        four:""
                     });
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                M.toast({html: errorMessage});
            });  
    }


    let random;
    function generateQuestion() {
        resetButtons();
        let key = Math.floor(Math.random() * questions.length);
        let num = Math.floor(Math.random() * 4);
        altVal(num);
        document.getElementById("question").innerHTML = questions[key];
        if (num == 0) {
            document.getElementById("op_1").innerHTML = answerChoices[key];
        } else if (num == 1) {
            document.getElementById("op_2").innerHTML = answerChoices[key];
        } else if (num == 2) {
            document.getElementById("op_3").innerHTML = answerChoices[key];
        } else {
            document.getElementById("op_4").innerHTML = answerChoices[key];
        }
        let list_1 = [];
        let list_2 = [];
        for (let i = 0; i < key; i++) {
            list_1[i] = answerChoices[i];
        }
        if ((answerChoices.length - key - 1) > 0) {
            for (let i = 1; i < (answerChoices.length - key); i++) {
                list_2[i - 1] = answerChoices[i + key];
            }
        }

        let new_list = [];
        for (let i = 0; i < list_1.length; i++) {
            new_list[i] = list_1[i];
        }
        let j = new_list.length;
        if (list_2.length > 0) {
            for (let i = 0; i < list_2.length; i++) {
                new_list[i + j] = list_2[i];
            }
        }
        randomize(new_list);
        if (num == 0) {
            document.getElementById("op_2").innerText = new_list[0];
            document.getElementById("op_3").innerText = new_list[1];
            document.getElementById("op_4").innerText = new_list[2];
        } else if (num == 1) {
            document.getElementById("op_1").innerText = new_list[0];
            document.getElementById("op_3").innerText = new_list[1];
            document.getElementById("op_4").innerText = new_list[2];
        } else if (num == 2) {
            document.getElementById("op_1").innerText = new_list[0];
            document.getElementById("op_2").innerText = new_list[1];
            document.getElementById("op_4").innerText = new_list[2];
        } else {
            document.getElementById("op_1").innerText = new_list[0];
            document.getElementById("op_2").innerText = new_list[1];
            document.getElementById("op_3").innerText = new_list[2];
        }
    }

    function randomize(values) {
        let index = values.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (index != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * index);
            index--;

            // And swap it with the current element.
            [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
        }

        return values;
    }
    function altVal(int){
        random = int;
    }
    function check(answer){
        counter++;
        console.log(counter);
        var a;
        var b;
        var c;
        var d;
        database.ref('users/' + uid + '/'+answerChoices[random]+"/one").on('value', (snapshot) => {
            a = snapshot.val();
            console.log(a);
        });
        database.ref('users/' + uid + '/'+answerChoices[random]+"/two").on('value', (snapshot) => {
            b = snapshot.val();
            console.log(b);
        });
        database.ref('users/' + uid + '/'+answerChoices[random]+"/three").on('value', (snapshot) => {
            c = snapshot.val();
            console.log(c);
        });
        database.ref('users/' + uid + '/'+answerChoices[random]+"/four").on('value', (snapshot) => {
            d = snapshot.val();
            console.log(d);
        });
        if(random == answer){
            if(counter = 1){
                if(a == null||a==""){
                    database.ref('users/' + uid +"/" +answerChoices[random]).update({
                        one:"correct"
                    });
                }else if((a != null && b != null &&c!= null)||(a != '' && b != '' &&c!= '')){
                    database.ref('users/' + uid +"/" +answerChoices[random]).update({
                        four: three,
                        three:two,
                        two: one,
                        one:"correct"
                    });
                }else if((a != null && b != null)||(a != '' && b != '')){
                    database.ref('users/' + uid +"/" +answerChoices[random]).update({
                        three:two,
                        two: one,
                        one:"correct"
                    });
                }else if(a != null|| a!=''){
                    database.ref('users/' + uid +"/" +answerChoices[random]).update({
                        two: one,
                        one:"correct"
                    });
                }
            }
            correct(answer);
            database.ref('users/' + uid + '/'+answerChoices[random]+"/one").on('value', (snapshot) => {
                console.log(a);
            });
            database.ref('users/' + uid + '/'+answerChoices[random]+"/two").on('value', (snapshot) => {
                console.log(b);
            });
            database.ref('users/' + uid + '/'+answerChoices[random]+"/three").on('value', (snapshot) => {
                console.log(c);
            });
            database.ref('users/' + uid + '/'+answerChoices[random]+"/four").on('value', (snapshot) => {
                console.log(d);
            });
        }else{
            if(counter == 1){
                if(a == null||a==""){
                    database.ref('users/' + uid +"/" +answerChoices[random]).update({
                        one:"incorrect"
                    });
                }else if((a != null && b != null &&c!= null)||(a != '' && b != '' &&c!= '')){
                    database.ref('users/' + uid +"/" +answerChoices[random]).update({
                        four: three,
                        three:two,
                        two: a,
                        one:"incorrect"
                    });
                }else if((a != null && b != null)||(a != '' && b != '')){
                    database.ref('users/' + uid +"/" +answerChoices[random]).update({
                        three:two,
                        two: one,
                        one:"incorrect"
                    });
                }else if(a != null|| a!=''){
                    database.ref('users/' + uid +"/" +answerChoices[random]).update({
                        two: one,
                        one:"incorrect"
                    });
                }
            }
            database.ref('users/' + uid + '/'+answerChoices[random]+"/one").on('value', (snapshot) => {
                console.log(a);
            });
            database.ref('users/' + uid + '/'+answerChoices[random]+"/two").on('value', (snapshot) => {
                console.log(b);
            });
            database.ref('users/' + uid + '/'+answerChoices[random]+"/three").on('value', (snapshot) => {
                console.log(c);
            });
            database.ref('users/' + uid + '/'+answerChoices[random]+"/four").on('value', (snapshot) => {
                console.log(d);
            });
            incorrect(answer);
        }


    }
    function correct(int){
        document.getElementById('op_1').style.backgroundColor = 'Red';
        document.getElementById('op_2').style.backgroundColor = 'Red';
        document.getElementById('op_3').style.backgroundColor = 'Red';
        document.getElementById('op_4').style.backgroundColor = 'Red';
        document.getElementById('op_1').style.color = 'White';
        document.getElementById('op_2').style.color = 'White';
        document.getElementById('op_3').style.color = 'White';
        document.getElementById('op_4').style.color = 'White';
        document.getElementById("op_1").disabled = true;
        document.getElementById("op_2").disabled = true;
        document.getElementById("op_3").disabled = true;
        document.getElementById("op_4").disabled = true;
        if(int === 0){
            document.getElementById('op_1').style.backgroundColor = '#76ff03';
            document.getElementById('op_1').style.color = 'Black';
        }else if(int === 1){
            document.getElementById('op_2').style.backgroundColor = '#76ff03';
            document.getElementById('op_2').style.color = 'Black';
        }else if(int === 2){
            document.getElementById('op_3').style.backgroundColor = '#76ff03';
            document.getElementById('op_3').style.color = 'Black';
        }else{
            document.getElementById('op_4').style.backgroundColor = '#76ff03';
            document.getElementById('op_4').style.color = 'Black';
        }
        
        document.getElementById("next").hidden = false;
    }
    function incorrect(int){
        document.getElementById('op_1').style.backgroundColor = 'White';
        document.getElementById('op_2').style.backgroundColor = 'White';
        document.getElementById('op_3').style.backgroundColor = 'White';
        document.getElementById('op_4').style.backgroundColor = 'White';
        document.getElementById('op_1').style.color = '#9c27b0';
        document.getElementById('op_2').style.color = '#9c27b0';
        document.getElementById('op_3').style.color = '#9c27b0';
        document.getElementById('op_4').style.color = '#9c27b0';
        if(int === 0){
            document.getElementById('op_1').style.backgroundColor = 'Red';
            document.getElementById('op_1').style.color = 'White';
        }else if(int === 1){
            document.getElementById('op_2').style.backgroundColor = 'Red';
            document.getElementById('op_2').style.color = 'White';
        }else if(int === 2){
            document.getElementById('op_3').style.backgroundColor = 'Red';
            document.getElementById('op_3').stylecolor = 'White';
        }else{
            document.getElementById('op_4').style.backgroundColor = 'Red';
            document.getElementById('op_4').style.color = 'White';
        }
    }
    function newQuestion(){
        counter=0
        resetButtons();
        generateQuestion();
    }
    function resetButtons(){
        document.getElementById("next").hidden = true;
        document.getElementById('op_1').style.backgroundColor = 'White';
        document.getElementById('op_2').style.backgroundColor = 'White';
        document.getElementById('op_3').style.backgroundColor = 'White';
        document.getElementById('op_4').style.backgroundColor = 'White';
        document.getElementById('op_1').style.color = '#9c27b0';
        document.getElementById('op_2').style.color = '#9c27b0';
        document.getElementById('op_3').style.color = '#9c27b0';
        document.getElementById('op_4').style.color = '#9c27b0';
        document.getElementById("op_1").disabled = false;
        document.getElementById("op_2").disabled = false;
        document.getElementById("op_3").disabled = false;
        document.getElementById("op_4").disabled = false;
    }

    function reset(){
        uid = "";
        console.log(uid);
        document.getElementById("before").className = "row"; 
        document.getElementById("after").className = "hide";
    }

    
    let answerChoices = ["Hydrogen" ,"Helium" ,"Lithium" ,"Beryllium" ,"Boron" ,"Carbon" ,"Nitrogen" ,"Oxygen" ,"Fluorine" ,"Neon" ,"Sodium" ,"Magnesium" ,"Aluminum" ,"Silicon" ,"Phosphorus" ,"Sulfur" ,"Chlorine" ,"Argon" ,"Potassium" ,"Calcium" ,"Scandium" ,"Titanium" ,"Vanadium" ,"Chromium" ,"Manganese" ,"Iron" ,"Cobalt" ,"Nickel" ,"Copper" ,"Zinc" ,"Gallium" ,"Germanium" ,"Arsenic" ,"Selenium" ,"Bromine" ,"Krypton" ,"Rubidium" ,"Strontium" ,"Yttrium" ,"Zirconium" ,"Niobium" ,"Molybdenum" ,"Technetium" ,"Ruthenium" ,"Rhodium" ,"Palladium" ,"Silver" ,"Cadmium" ,"Indium" ,"Tin" ,"Antimony" ,"Tellurium" ,"Iodine" ,"Xenon" ,"Cesium" ,"Barium" ,"Lanthanum" ,"Cerium" ,"Praseodymium" ,"Neodymium" ,"Promethium" ,"Samarium" ,"Europium" ,"Gadolinium" ,"Terbium" ,"Dysprosium" ,"Holmium" ,"Erbium" ,"Thulium" ,"Ytterbium" ,"Lutetium" ,"Hafnium" ,"Tantalum" ,"Tungsten" ,"Rhenium" ,"Osmium" ,"Iridium" ,"Platinum" ,"Gold" ,"Mercury" ,"Thallium" ,"Lead" ,"Bismuth" ,"Polonium" ,"Astatine" ,"Radon" ,"Francium" ,"Radium" ,"Actinium" ,"Thorium" ,"Protactinium" ,"Uranium" ,"Neptunium" ,"Plutonium" ,"Americium" ,"Curium" ,"Berkelium" ,"Californium" ,"Einsteinium" ,"Fermium" ,"Mendelevium" ,"Nobelium" ,"Lawerencium" ,"Rutherfordium" ,"Dubnium" ,"Seaborgium" ,"Bohrium" ,"Hassium" ,"Meitnerium" ,"Darmstadtium" ,"Roentgenium" ,"Copernicium" ,"Nihonium" ,"Flerovium" ,"Moscovium" ,"Livermorium" ,"Tennessine" ,"Oganesson" ];
    let questions = ["_____ is used to reduce the iron pellets into sponge iron, metallic iron that can then be processed to form steel.",
    "_____ is used to provide a pure atmosphere for the manufacturing of fiber optic cables, therefore preventing the formation of air bubbles.",
    "_____ is used to strengthen nerve cell connections in brain regions that are involved in regulating mood, thinking and behavior.",
    "_____ is used to strengthen the thermal and electrical conductivity of copper or nickel",
    "_____ is used to increase the energy output of solid rocket fuel.",
    "_____ is used to regulate the Earth's temperature and to support living organisms.",
    "_____ is used to create fertilizers for global food production",
    "_____ is used to be absorbed by our cells and converted into energy.",
    "_____ is used to insulate high-power electricity transformers for nuclear power plants.",
    "_____ is used  to make high-voltage indicators and switching gears, components that are vital in the production of modern day electronics.",
    "_____ is used to control blood pressure and blood volume in the human body.",
    "_____ is used to make protein, bones, and DNA in the body.",
    "_____ is used to construct structural components due to its lightweight and strong properties.",
    "_____ is used to create semiconductors.",
    "_____ is used to assist in the growth, maintenance, and repair of all tissues and cells in the body.",
    "_____ is used to create sulfuric acid.",
    "_____ is used to be put into swimming pool water to kill harmful bacteria.",
    "_____ is used to stop oxygen from corroding the filament in incandescent light bulbs.",
    "_____ is used to help move nutrients into cells and waste products out of cells.",
    "_____ is used to help muscles contract.",
    "_____ is used to create frames for aerospace industry components.",
    "_____ is used to make a pigment in house paint, artists’ paint, place, enamels, and paper.",
    "_____ is used to manufacture steel alloys for aerospace engineering.",
    "_____ is used to regulate blood sugar levels in the body by being a key component in insulin.",
    "_____ is used to help the body form sex hormones.",
    "_____ is used to create hemoglobin in the body.",
    "_____ is used to treat cancer and to irradiate food to preserve it",
    "_____ is used to create coins.",
    "_____ is used to conduct heat and electricity in electrical equipment.",
    "_____ is used to heal damaged tissue in the body.",
    "_____ is used in electronics due to its malleable nature.",
    "_____ is used to be combined with metal alloys to make transistors in electronic devices.",
    "_____ is used to be used industrially as an alloying agent for lead.",
    "_____ is used to be used by the body to make selenoproteins.",
    "_____ is used as pesticides for fruit growing.",
    "_____ is used for double-pane insulated windows since it is 12 times denser than air.",
    "_____ is used as a propellant in ion engines.",
    "_____ is used to give fireworks and flares a brilliant red color.",
    "_____ is used as an additive to increase the strength of aluminum alloys.",
    "_____ is used to make crucibles that can withstand heat-shock.",
    "_____ is used  to strengthen steel alloys for jet engines and rockets.",
    "_____ is used to strengthen, harden, and increase the electrical conductivity of steel.",
    "_____ is used in nuclear medicine to see how parts of our body are working.",
    "_____ is used  in the manufacturing of solar cells for solar panels.",
    "_____ is used in catalytic converters for cars.",
    "_____ is used as a substitute for platinum in fuel cell catalysts.",
    "_____ is used in mirrors to reflect light.", 
    "_____ is used as a sacrificial corrosion-protection coating for steel.",
    "_____ is used to dope germanium to make transistors.",
    "_____ is used for plating steel cans used as food containers.",
    "_____ is used in tracer rounds for guns.",
    "_____ is used in new phase change memory chips developed by Intel™.", 
    "_____ is used to make thyroid hormones which regulate metabolism.",
    "_____ is used in lamps that glow a beautiful blue.",
    "_____ is used as a drilling fluid.",
    "_____ is used for making drilling mud.",
    "_____ is used to reduce blood levels of phosphate in people with kidney disease.",
    "_____ is used as a rich red pigment",
    "_____ is used as a high-strength alloy for aircraft engines.",
    "_____ is used to make very strong permanent magnets for electronics.",
    "_____ is used as a beta radiation source in luminous paint.",
    "_____ is used to doe calcium chloride crystals for use in optical lasers.",
    "_____ is used as a control rod for nuclear reactors.",
    "_____ is used to improve the workability of iron and chromium alloys.",
    "_____ is used to dope calcium fluoride and many other compounds to be used in solid-state drives.",
    "_____ is used in computer hard disk drives.", 
    "_____ is used in nuclear reactors to keep a chain reaction under control.",
    "_____ is used in infrared absorbing glass in safety glasses.",
    "_____ is used in laser manufacturing and for surgical purposes.",
    "_____ is used as an industrial catalyst due to its low toxicity.",
    "_____ is used as a catalyst for cracking hydrocarbons in oil refineries.",
    "_____ is used in control rods for nuclear submarines.",
    "_____ is used in making surgical appliances immune to body liquids.",
    "_____ is used in manufacturing heavy metal alloys such as high speed steel.",
    "_____ is used in photoflash lamps.",
    "_____ is used in manufacturing very hard alloys for fountain pen tips.",
    "_____ is used as a hardening agent for platinum.",
    "_____ is used as a compound in chemotherapy drugs used to treat cancers.",
    "_____ is used in GPS units as a corrosion resistant conductor.",
    "_____ is used in barometers and other scientific instruments.", 
    "_____ is used  in the production of low temperature thermometers.",
    "_____ is used in the automobile industries in components such as storage batteries.", 
    "_____ is used to be the main ingredient in Pepto-Bismol.",
    "_____ is used to eliminate static electricity produced during processes such as rolling wire.",
    "_____ is used for nothing since its halflife is only 8 hours at most.",
    "_____ is used in emitting radiation into tumors to treat cancer.", 
    "_____ is used for nothing since its half life is only 22 minutes.",
    "_____ is used to produce radon gas for cancer treatment.",
    "_____ is used as a source of radiation to produce other elements.",
    "_____ is used as a potential fuel for generating nuclear energy.",
    "_____ is used for nothing since the element is scarce, highly radioactive, and is toxic.",
    "_____ is used as the main source of energy in a variety of nuclear projects, such as reactors and weapons.",
    "_____ is used in military applications as an emitter of nuclear energy.",
    "_____ is used as a heat source for sensitive electrical components in satellites.",
    "_____ is used in smoke alarms to protect buildings.",
    "_____ is used as a Radioisotope Thermal Generator on board satellites and deep space probes.", 
    "_____ is used for nothing due to its toxic radioactivity and due to the fact that less than a gram is made each year.",
    "_____ is used in metal detectors for identifying gold and silver ores.",
    "_____ is used for nothing due to the fact that it can only be obtained in milligram quantities from the neutron bombardment of plutonium in a reactor.",
    "_____ is used or nothing due to the fact that it can only be obtained in milligram quantities from the neutron bombardment of plutonium in a reactor.",
    "_____ is used for nothing due to the fact that only a few atoms have ever been created.",
    "_____ is used for nothing due to the fact that only trace amounts of it can be made by bombarding curium with carbon.",
    "_____ is used for nothing since only trace amounts of it can be made by bombarding californium with boron.",
    "_____ is used for nothing since its half life is only 10 minutes.",
    "_____ is used for nothing since its half life is only 32 hours.",
    "_____ is used for nothing since its half life is only 2 minutes and 24 seconds long.",
    "_____ is used for nothing since its half life is only 61 seconds.",
    "_____ is used for nothing since its half life of 12 minutes.",
    "_____ is used for nothing since its half life is 1.7 milliseconds.",
    "_____ is used for nothing since its half life is 20 seconds.",
    "_____ is used for nothing since its half life is 26 seconds.",
    "_____ is used for nothing since its half life is 30 seconds.",
    "_____ is used for nothing since its half life is 19 seconds.",
    "_____ is used for nothing since its half life is .97 seconds.",
    "_____ is used for nothing since its half life is 220 milliseconds",  
    "_____ is used for nothing since its half life is 53 milliseconds.",
    "_____ is used for nothing since its half life is 80 milliseconds.",
    "_____ is used for nothing since its half life is .93 milliseconds."];
