<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <base target = "_top">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link rel = "stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>MainPage</title>
    <style>
        .hi {
            padding: 0px 0px 0px 67px;
        }
        .popup  .overlay{
            position:fixed;
            top:0px;
            left: 0px;
            width:100vw;
            height: 100vh;
            background: rgba(0,0,0,0.7);
            z-index: 1;
            display: none;
        }
        .popup .content{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%)  scale(0);
            background: #fff;
            width: 600px;
            height: 500px;
            z-index:2;
            text-align: center;
            padding:20px;
            box-sizing: border-box;
        }
        .popup .close-btn{
            position: absolute;
            right: 20px;
            top:20px;
            width:30px;
            height: 30px;
            background: #222;
            color: #fff;
            font-size: 25px;
            font-weight: 600;
            line-height: 30px;
            text-align: center;
            border-radius: 50%;
        }
        .popup.active .overlay{
            display: block;
        }

        .popup.active .content{
            transition: all 300ms ease-in-out;
            transform:translate(-50%,-50%)scale(1);
        }

        .hide{display:none;}
    </style>
    
</head>
<html>
    <body>
        
        <div class = "container">
            <div class = "row" id = "before">
                <h8>Chemiae by Educatio</h8>
                    <h10>&nbsp</h10>
                    <div class = "right">
                        <button id="SignIn" class = "btn waves-effect waves-deep purple" onclick="signUpOpen();">Sign Up</button>
                        <button id ="Login" class = "btn waves-effect waves-deep purple" onclick="logInOpen();">Log in</button>
                    </div>
            </div>
            <div class = "hide" id = "after">
                <h8>Chemiae by Educatio</h8>
                    <h10>&nbsp</h10>
                    <div class = "right">
                        <button id="test" class = "btn waves-effect waves-deep purple" >Take Test</button>
                        <button id ="signOut" class = "btn waves-effect waves-deep purple" >Sign Out</button>
                    </div>
            </div>


           <div class = "row">
               <!---Row 1--->
               <img src="elements/1_Hydrogen.jpg" alt="Hydrogen" width = "67" height="67" id="1" onclick="doGarbage(1);">
               <div class ="right">
                   <img src="elements/2_Helium.jpg" alt="helium" width = "67" height="67" id="2" onclick="doGarbage(2);">
               </div>
           </div>
            <div class = "row">
                <!---Row 2--->
                <img src="elements/3_lithuim.jpg." alt="Lithium" width = "67" height="67" id="3" onclick="doGarbage(3);">
                <img src="elements/4_Beryllium.jpg" alt="Beryllium" width = "67" height="67" id="4" onclick="doGarbage(4);">
                <div class = "right">
                    <img src="elements/5_Boron.jpg" alt="Boron" width = "67" height="67" id="5" onclick="doGarbage(5);">
                    <img src="elements/6_Carbon.jpg" alt="Carbon" width = "67" height="67" id="6" onclick="doGarbage(6);">
                    <img src="elements/7_Nitrogen.jpg" alt="Nitrogen" width = "67" height="67" id="7" onclick="doGarbage(7);">
                    <img src="elements/8_Oxygen.jpg" alt="Oxygen" width = "67" height="67" id="8" onclick="doGarbage(8);">
                    <img src="elements/9_Fluorine.jpg" alt="Fluorine" width = "67" height="67" id="9" onclick="doGarbage(9);">
                    <img src="elements/10_Neon.jpg" alt="Neon" width = "67" height="67" id="10" onclick="doGarbage(10);">
                </div>
            </div>
            <div class= "row">

                <img src="elements/11_sodium.jpg" alt="Sodium" width = "67" height="67" id="11" onclick="doGarbage(11);">
                <img src="elements/12_Magnesium.jpg" alt="Magnesium" width = "67" height="67" id="12" onclick="doGarbage(12);">
                <div class = "right">
                    <img src="elements/13_Aluminum.jpg" alt="Aluminum" width = "67" height="67" id="13" onclick="doGarbage(13);">
                    <img src="elements/14_Silicon.jpg" alt="Silicon" width = "67" height="67" id="14" onclick="doGarbage(14);">
                    <img src="elements/15_Phpsphorus.jpg" alt = "Phpsphorus" width="67" height = "67" id = "15" onclick="doGarbage(15);">
                    <img src="elements/16_Sulfer.jpg" alt = "Sulfur" width="67" height = "67" id = "16" onclick="doGarbage(16);">
                    <img src = "elements/17_Chlorine.jpg" alt = "Chlorine" width = "67" height = "67" id="17" onclick="doGarbage(17);">
                    <img src = "elements/18_Argon.jpg" alt = "Argon" width = "67" height = "67" id="18" onclick="doGarbage(18);">
                </div>
            </div>

            <div class = "row">
                <!---Row 4--->
                <img src="elements/19_Potassium.jpg" alt="Potassium" width = "67" height="67" id="19" onclick="doGarbage(19);">
                <img src="elements/20_Calcium.jpg" alt="Calcium" width = "67" height="67" id="20" onclick="doGarbage(20);">
                <img src="elements/21_Scandium.jpg" alt="Scandium" width = "67" height="67" id="21" onclick="doGarbage(21);">
                <img src="elements/22_Titanuim.jpg" alt="Titanium" width = "67" height="67" id="22" onclick="doGarbage(22);">
                <img src="elements/23_Vanadium.jpg" alt="Vanadium" width = "67" height="67" id="23" onclick="doGarbage(23);">
                <img src="elements/24_Chromium.jpg" alt="Chromium" width = "67" height="67" id="24" onclick="doGarbage(24);">
                <img src="elements/25_Maganese.jpg" alt="Maganese" width = "67" height="67" id="25" onclick="doGarbage(25);">
                <img src="elements/26_Iron.jpg" alt="Iron" width = "67" height="67" id="26" onclick="doGarbage(26);">
                <img src="elements/27_Cobalt.jpg" alt="Cobalt" width = "67" height="67" id="27" onclick="doGarbage(27);">
                <img src="elements/28_Nickel.jpg" alt="Nickel" width = "67" height="67" id="28" onclick="doGarbage(28);">
                <img src="elements/29_Copper.jpg" alt="Copper" width = "67" height="67" id="29" onclick="doGarbage(29);">
                <img src="elements/30_Zinc.jpg" alt="Zinc" width = "67" height="67" id="30" onclick="doGarbage(30);">
                <img src="elements/31_Gallium.jpg" alt="Gallium" width = "67" height="67" id="31" onclick="doGarbage(31);">
                <img src="elements/32_Germanium.jpg" alt="Germanium" width = "67" height="67" id="32" onclick="doGarbage(32);">
                <img src="elements/33_Arsenic.jpg" alt="Arsenic" width = "67" height="67" id="33" onclick="doGarbage(33);">
                <img src="elements/34_Selenium.jpg" alt="Selenium" width = "67" height="67" id="34" onclick="doGarbage(34);">
                <img src="elements/35_Bromine.jpg" alt="Bromine" width = "67" height="67" id="35" onclick="doGarbage(35);">
                <img src="elements/36_Krypton.jpg" alt="Krypton" width = "67" height="67" id="36" onclick="doGarbage(36);">
            </div>
            <div class = "row">
                <!---Row 5--->
                <img src="elements/37_Rubidium.jpg" alt="Rubidium" width = "67" height="67" id="37" onclick="doGarbage(37);">
                <img src="elements/38_Estrontium.jpg" alt="Estrontium" width = "67" height="67" id="38" onclick="doGarbage(38);">
                <img src="elements/39_Yttrium.jpg" alt="Yttrium" width = "67" height="67" id="39" onclick="doGarbage(39);">
                <img src="elements/40_Zirconium.jpg" alt="Ziconium" width = "67" height="67" id="40" onclick="doGarbage(40);">
                <img src="elements/41_Niobium.jpg" alt="Niobium" width = "67" height="67" id="41" onclick="doGarbage(41);">
                <img src="elements/42_Molybdenum.jpg" alt="Chromium" width = "67" height="67" id="42" onclick="doGarbage(42);">
                <img src="elements/43_Technetium.jpg" alt="Technetium" width = "67" height="67" id="43" onclick="doGarbage(43);">
                <img src="elements/44_Ruthenium.jpg" alt="Ruthenium" width = "67" height="67" id="44" onclick="doGarbage(44);">
                <img src="elements/45_Rhodium.jpg" alt="Rhodium" width = "67" height="67" id="45" onclick="doGarbage(45);">
                <img src="elements/46_Palladium.jpg" alt="Palladium" width = "67" height="67" id="46" onclick="doGarbage(46);">
                <img src="elements/47_Silver.jpg" alt="Silver" width = "67" height="67" id="47" onclick="doGarbage(47);">
                <img src="elements/48_Cadmium.jpg" alt="Cadmium" width = "67" height="67" id="48" onclick="doGarbage(48);">
                <img src="elements/49_Indium.jpg" alt="Indium" width = "67" height="67" id="49" onclick="doGarbage(49);">
                <img src="elements/50_Tin.jpg" alt="Tin" width = "67" height="67" id="50" onclick="doGarbage(50);">
                <img src="elements/51_Antimony.jpg" alt="Antimony" width = "67" height="67" id="51" onclick="doGarbage(51);">
                <img src="elements/52_Tellurium.jpg" alt="Tellurium" width = "67" height="67" id="52" onclick="doGarbage(52);">
                <img src="elements/53_Iodine.jpg" alt="Iodine" width = "67" height="67" id="53" onclick="doGarbage(53);">
                <img src="elements/54_Xenon.jpg" alt="Xenon" width = "67" height="67" id="54" onclick="doGarbage(54);">
            </div>
            <div class = "row">
                <!---Row 6--->
                <img src="elements/55_Cesium.jpg" alt="Cesium" width = "67" height="67" id="55" onclick="doGarbage(55);">
                <img src="elements/56_Barium.jpg" alt="Barium" width = "67" height="67" id="56" onclick="doGarbage(56);">
                <img src="elements/57-71_Lanthanide_Elements.jpg" alt="Lanthanide_Elements" width = "67" height="67" id="57-71">
                <img src="elements/72_Hafnium.jpg" alt="Hafnium" width = "67" height="67" id="72" onclick="doGarbage(72);">
                <img src="elements/73_Tantalum.jpg" alt="Tantalum" width = "67" height="67" id="73" onclick="doGarbage(73);">
                <img src="elements/74_Tungsten.jpg" alt="Tungsten" width = "67" height="67" id="74" onclick="doGarbage(74);">
                <img src="elements/75_Rhenium.jpg" alt="Rhenium" width = "67" height="67" id="75" onclick="doGarbage(75);">
                <img src="elements/76_Osmiun.jpg" alt="Osmium" width = "67" height="67" id="76" onclick="doGarbage(76);">
                <img src="elements/77_Iridium.jpg" alt="Iridium" width = "67" height="67" id="77" onclick="doGarbage(77);">
                <img src="elements/78_Platinum.jpg" alt="Platinum" width = "67" height="67" id="78" onclick="doGarbage(78);">
                <img src="elements/79_Gold.jpg" alt="Gold" width = "67" height="67" id="79" onclick="doGarbage(79);">
                <img src="elements/80_Mercury.jpg" alt="Mercury" width = "67" height="67" id="80" onclick="doGarbage(80);">
                <img src="elements/81_Thallium.jpg" alt="Thallium" width = "67" height="67" id="81" onclick="doGarbage(81);">
                <img src="elements/82_Lead.jpg" alt="Lead" width = "67" height="67" id="82" onclick="doGarbage(82);">
                <img src="elements/83_Bismouth.jpg" alt="Bismuth" width = "67" height="67" id="83" onclick="doGarbage(83);">
                <img src="elements/84_Polonium.jpg" alt="Polonium" width = "67" height="67" id="84" onclick="doGarbage(84);">
                <img src="elements/85_Astatine.jpg" alt="Astatine" width = "67" height="67" id="85" onclick="doGarbage(85);">
                <img src="elements/86_Radon.jpg" alt="Radon" width = "67" height="67" id="86" onclick="doGarbage(86);">
            </div>
            <div class = "row">
                <!---Row 7--->
                <img src="elements/87_Francium.jpg" alt="Francium" width = "67" height="67" id="87" onclick="doGarbage(87);">
                <img src="elements/88_Radium.jpg" alt="Radium" width = "67" height="67" id="88" onclick="doGarbage(88);">
                <img src="elements/89-103_Actinide_Elements.jpg" alt="Actinide_Elements" width = "67" height="67" id="89-103">
                <img src="elements/104_Rutherforedium.jpg" alt="Rutherfordium" width = "67" height="67" id="104" onclick="doGarbage(104);">
                <img src="elements/105_Dubnium.jpg" alt="Dubnium" width = "67" height="67" id="105" onclick="doGarbage(105);">
                <img src="elements/106_Seaborgium.jpg" alt="Seaborgium" width = "67" height="67" id="106" onclick="doGarbage(106);">
                <img src="elements/107_Bohrium.jpg" alt="Bohrium" width = "67" height="67" id="107" onclick="doGarbage(107);">
                <img src="elements/108_Hassium.jpg" alt="Hassium" width = "67" height="67" id="108" onclick="doGarbage(108);">
                <img src="elements/109_Meitnerium.jpg" alt="Meitnerium" width = "67" height="67" id="109" onclick="doGarbage(109);">
                <img src="elements/110_Darmstadtium.jpg" alt="Darmstadtium" width = "67" height="67" id="110" onclick="doGarbage(110);">
                <img src="elements/112_Copermicium.jpg" alt="Copermicium" width = "67" height="67" id="112" onclick="doGarbage(111);">
                <img src="elements/111_Roentgenium.jpg" alt="Roentgenium" width = "67" height="67" id="111" onclick="doGarbage(112);">
                <img src="elements/113_Nihonium.jpg" alt="Nihonium" width = "67" height="67" id="113" onclick="doGarbage(113);">
                <img src="elements/114_Flerovium.jpg" alt="Flerovium" width = "67" height="67" id="114" onclick="doGarbage(114);">
                <img src="elements/115_Moscovium.jpg" alt="Moscovium" width = "67" height="67" id="115" onclick="doGarbage(115);">
                <img src="elements/116_Livermorium.jpg" alt="Livermorium" width = "67" height="67" id="116" onclick="doGarbage(116);">
                <img src="elements/117_Tennessine.jpg" alt="Tennessine" width = "67" height="67" id="117" onclick="doGarbage(117);">
                <img src="elements/118_Oganesson.jpg" alt="Oganesson" width = "67" height="67" id="118" onclick="doGarbage(118);">
            </div>

            <div class = "center">
                <img src="elements/57_Lanthanium.jpg" alt="Lanthanium" width = "67" height="67" id="57" onclick="doGarbage(57);">
                <img src="elements/58_Cerium.jpg" alt="Cerium" width = "67" height="67" id="58" onclick="doGarbage(58);">
                <img src="elements/59_Praseodymium.jpg" alt="Praseodymium" width = "67" height="67" id="59" onclick="doGarbage(59);">
                <img src="elements/60_Neodymium.jpg" alt="Neodymium" width = "67" height="67" id="60" onclick="doGarbage(60);">
                <img src="elements/61_Promethium.jpg" alt="Promethium" width = "67" height="67" id="61" onclick="doGarbage(61);">
                <img src="elements/62_Samarium.jpg" alt="Samarium" width = "67" height="67" id="62" onclick="doGarbage(62);">
                <img src="elements/63_Europium.jpg" alt="Europium" width = "67" height="67" id="63" onclick="doGarbage(63);">
                <img src="elements/64_Gadolinium.jpg" alt="Gadolinium" width = "67" height="67" id="64" onclick="doGarbage(64);">
                <img src="elements/65_Terbium.jpg" alt="Terbium" width = "67" height="67" id="65" onclick="doGarbage(65);">
                <img src="elements/66_Dysprosium.jpg" alt="Dysprosium" width = "67" height="67" id="66" onclick="doGarbage(66);">
                <img src="elements/67_Holmium.jpg" alt="Holmium" width = "67" height="67" id="67" onclick="doGarbage(67);">
                <img src="elements/68_Erbium.jpg" alt="Erbium" width = "67" height="67" id="68" onclick="doGarbage(68);">
                <img src="elements/69_Thulium.jpg" alt="Thulium" width = "67" height="67" id="69" onclick="doGarbage(69);">
                <img src="elements/70_Ytterbium.jpg" alt="Ytterbium" width = "67" height="67" id="70" onclick="doGarbage(70);">
                <img src="elements/71_Lutetium.jpg" alt="Lutetium" width = "67" height="67" id="71" onclick="doGarbage(71);">
            </div>
            <div class = "center">
                <img src="elements/89_Actinium.jpg" alt="Actinium" width = "67" height="67" id="89" onclick="doGarbage(89);">
                <img src="elements/90_Thorium.jpg" alt="Thorium" width = "67" height="67" id="90" onclick="doGarbage(90);">
                <img src="elements/91_Protactinium.jpg" alt="Protactinium" width = "67" height="67" id="91" onclick="doGarbage(91);">
                <img src="elements/92_Uranium.jpg" alt="Uranium" width = "67" height="67" id="92" onclick="doGarbage(92);">
                <img src="elements/93_Neptunium.jpg" alt="Neptunium" width = "67" height="67" id="93" onclick="doGarbage(93);">
                <img src="elements/94_Plutonium.jpg" alt="Plutonium" width = "67" height="67" id="94" onclick="doGarbage(94);">
                <img src="elements/95_Americium.jpg" alt="Americium" width = "67" height="67" id="95" onclick="doGarbage(95);">
                <img src="elements/96_Curium.jpg" alt="Curium" width = "67" height="67" id="96" onclick="doGarbage(96);">
                <img src="elements/97_Berkelium.jpg" alt="Berkelium" width = "67" height="67" id="97" onclick="doGarbage(97);">
                <img src="elements/98_Californium.jpg" alt="Californium" width = "67" height="67" id="98" onclick="doGarbage(98);">
                <img src="elements/99_Einsteinium.jpg" alt="Einsteinium" width = "67" height="67" id="99" onclick="doGarbage(99);">
                <img src="elements/100_Fermium.jpg" alt="Fermium" width = "67" height="67" id="100" onclick="doGarbage(100);">
                <img src="elements/101_Mendelevium.jpg" alt="Mendelevium" width = "67" height="67" id="101" onclick="doGarbage(101);">
                <img src="elements/102_Nobelium.jpg" alt="Nobelium" width = "67" height="67" id="102" onclick="doGarbage(102);">
                <img src="elements/103_Lawrencium.jpg" alt="Lawrencium" width = "67" height="67" id="103"onclick="doGarbage(103);">
            </div>
        </div>
        <div class="popup" id="popUp">
            <div class = "overlay"></div>
            <div class="content">
                <div class="close-btn" onclick="doGarbage();">&times</div>
                <h1 id = "name"> </h1>
                <p id = "info">

                </p>
            </div>
        </div>
        

        

        <SCRIPT src = "indexScript.js"></SCRIPT>
        <!---Page navigation: https://stackoverflow.com/questions/24903148/navigate-between-html-files --->
        <!---Pop-up V2: https://www.youtube.com/watch?v=f8mL0_4GeV0--->
    </body>
    <meta charset="UTF-8">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <base target = "_top">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link rel = "stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
   
    <style>
        input[type=radio] {
            accent-color: green;
         }
    </style>
    <body>
        <div class="popup" id="logInPage">
            <div class = "overlay"></div>
            <div class="content">
                <div class="close-btn" onclick="logInOpen();">&times</div>
                    <div class = "container">
                        <h5>Welcome</h5>
                        <div class="row">
                            <div class="input-field col s6">
                            <input id="emailLog" type="text" class="validate" required>
                            <label for="emailLog">Email</label>
                            </div>
                            <div class="input-field col s6">
                            <input id="passwordLog" type="password" class="validate">
                            <label for="passwordLog">Password</label>
                            </div>
                        </div>
                        <div class = "row">
                            <button id = "login" class = "btn waves-effect waves-light amber darken-4">Log In</button>
                        </div>
                    
                    </div>
            </div>
        </div>
        <div class="popup" id="signUpPage">
            <div class = "overlay"></div>
            <div class="content">
                <div class="close-btn" onclick="signUpOpen();">&times</div>
                    <div class = "container">
                        <h5>Sign Up a New Account</h5>
                        <div class="row">
                            <div class="input-field col s6">
                            <input id="emailSign" type="text" class="validate" required>
                            <label for="emailSign">Email</label>
                            </div>
                            <div class="input-field col s6">
                            <input id="passwordSign" type="password" class="validate">
                            <label for="passwordSign">Password</label>
                            </div>
                        </div>
                        <div class = "row">
                            <button id = "signUp" class = "btn waves-effect waves-light amber darken-4">Create Account</button>
                        </div>
                    
                    </div>
            </div>
        </div>

        <div class="popup" id="testPage">
            <div class = "overlay"></div>
            <div class="content">
                <div class="close-btn" onclick="testOpen();">&times</div>
                <div class = "container">
                    <h5>Testing for quiz</h5>
                    <h6>Who is the best</h6>
                    <div class = "row">
                            <input name="group1" id ="a" type="radio" checked />
                            <h5 id = "6"></h5>
                            <img src = "images/checkmark.png" class = "hide" width = "10" height = "10" id = "1">
                            <img src = "images/wrong.png" class = "hide" width = "10" height = "10" id = "w">
                    </div>
                    <div class = "row">
                            <input name="group1" id = "b" type="radio" />
                            <h5 id = "7"></h5>
                            <img src = "images/checkmark.png" class = "hide" width = "10" height = "10" id = "2">
                            <img src = "images/wrong.png" class = "hide" width = "10" height = "10" id = "x">
                    </div>
                    <div class = "row">
                            <input name="group1" id = "c" type="radio" checked />
                            <h5 id = "8"></h5>
                            <img src = "images/checkmark.png" class = "hide" width = "10" height = "10" id = "3">
                            <img src = "images/wrong.png" class = "hide" width = "10" height = "10" id = "y">
                    </div>
                    <div class = " row">
                          <p>
                            <input name="group1" id = "d" type="radio" />
                            <h5 id = "8"></h5>
                            <img src = "images/checkmark.png" class = "hide" width = "10" height = "10" id = "4">
                            <img src = "images/wrong.png" class = "hide" width = "10" height = "10" id = "z">
                          </p>
                    </div>    
                    <div class="row">
                        
                    </div>
                </div>
            </div>
        </div>
        
    </body>
    <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-auth.js"></script>
    <SCRIPT src = "IndexScriptTwo.js"></SCRIPT>
</html>

