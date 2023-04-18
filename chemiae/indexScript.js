const firebaseConfig = {
apiKey: "AIzaSyC5P4An8O-A-3ZSme0fvqEV8lJsS2dPh40",
authDomain: "chemiae.firebaseapp.com",
projectId: "chemiae",
storageBucket: "chemiae.appspot.com",
messagingSenderId: "942176952217",
appId: "1:942176952217:web:fa9d3b722e1236784b3d08",
measurementId: "G-HKC5BTZMCH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
auth = firebase.auth(app);
let id = 0;

if(auth.currentUser == null){
    document.getElementById("after").classList.toggle("inactive");
}else{
    document.getElementById("before").classList.toggle("inactive");
}

let h1 = document.getElementById("name");
let p = document.getElementById("info");

function SignUp(){
    window.location.replace("SignUp.html");
}
function LogIn(){
    window.location.replace("Login.html");
}
function testPage(){
    window.location.replace("testPage.html");
}

function doGarbage(id){
    this.id = id;
    h1.innerText=elementName[id];
    p.innerText = elementInfo[id];
    document.getElementById("popUp").classList.toggle("active");
}
function returnInfo(id){
return elementInfo[id];
}
let elementName = ["blank","Hydrogen" ,"Helium" ,"Lithium" ,"Beryllium" ,"Boron" ,"Carbon" ,"Nitrogen" ,"Oxygen" ,"Fluorine" ,"Neon" ,"Sodium" ,"Magnesium" ,"Aluminum" ,"Silicon" ,"Phosphorus" ,"Sulfur" ,"Chlorine" ,"Argon" ,"Potassium" ,"Calcium" ,"Scandium" ,"Titanium" ,"Vanadium" ,"Chromium" ,"Manganese" ,"Iron" ,"Cobalt" ,"Nickel" ,"Copper" ,"Zinc" ,"Gallium" ,"Germanium" ,"Arsenic" ,"Selenium" ,"Bromine" ,"Krypton" ,"Rubidium" ,"Strontium" ,"Yttrium" ,"Zirconium" ,"Niobium" ,"Molybdenum" ,"Technetium" ,"Ruthenium" ,"Rhodium" ,"Palladium" ,"Silver" ,"Cadmium" ,"Indium" ,"Tin" ,"Antimony" ,"Tellurium" ,"Iodine" ,"Xenon" ,"Cesium" ,"Barium" ,"Lanthanum" ,"Cerium" ,"Praseodymium" ,"Neodymium" ,"Promethium" ,"Samarium" ,"Europium" ,"Gadolinium" ,"Terbium" ,"Dysprosium" ,"Holmium" ,"Erbium" ,"Thulium" ,"Ytterbium" ,"Lutetium" ,"Hafnium" ,"Tantalum" ,"Tungsten" ,"Rhenium" ,"Osmium" ,"Iridium" ,"Platinum" ,"Gold" ,"Mercury" ,"Thallium" ,"Lead" ,"Bismuth" ,"Polonium" ,"Astatine" ,"Radon" ,"Francium" ,"Radium" ,"Actinium" ,"Thorium" ,"Protactinium" ,"Uranium" ,"Neptunium" ,"Plutonium" ,"Americium" ,"Curium" ,"Berkelium" ,"Californium" ,"Einsteinium" ,"Fermium" ,"Mendelevium" ,"Nobelium" ,"Lawerencium" ,"Rutherfordium" ,"Dubnium" ,"Seaborgium" ,"Bohrium" ,"Hassium" ,"Meitnerium" ,"Darmstadtium" ,"Roentgenium" ,"Copernicium" ,"Nihonium" ,"Flerovium" ,"Moscovium" ,"Livermorium" ,"Tennessine" ,"Oganesson" ];
let elementInfo = ["blank","Hydrogen has a multitude of uses, like powering vehicles, generating electricity, and heating our homes and businesses. Hydrogen has the ability to make a huge difference on our carbon emissions and will be critical to achieving net zero.",
"Helium is most commonly thought of when filling balloons for a celebration. Though Helium actually has a multitude of other tangible uses, it is critical in manufacturing MRI magnets, high speed internet, Airbags, and much more.",
"Lithium is a versatile element, it can be used to treat mood disorders like mania, and also to manufacture technologies such as heat-resistant glass and ceramics, lithium grease lubricants, flux additives for iron, steel and aluminum production, lithium metal batteries, and lithium-ion batteries.",
"Mixing Beryllium with certain metals increases their thermal and electrical conductivity, which is why Beryllium is important in manufacturing gyroscopes, springs, electrical contacts, spot-welding electrodes and non-sparking tools.",
"Boron is used as a rocket fuel igniter and in pyrotechnic flares due to the bright green flames that it produces. By adding Boron to rocket fuel the element also increases the energy output of the solid fuel.",
"Carbon is one of the most important elements in the formation of life. Carbon is responsible for regulating the Earth’s temperature, making living organisms possible, is a key ingredient in the food we eat, and much more.",
"Nitrogen is vital to the chemistry industry. Nitrogen is reacted with hydrogen to create ammonia, therefore the element is important in manufacturing fertilizers, nitric acid, nylon, dyes and explosives.",
"Oxygen is one of the most important elements for all living organisms. Without oxygen our cells would not be able to create the energy they need to survive. Oxygen is also used for the manufacturing of chemicals controlled by oxidation.",
"Fluorine is critical in the production of nuclear material for nuclear power plants  and for the insulation of electric towers. It is used to make uranium hexafluoride, which is needed to separate uranium isotopes. Sulfur hexafluoride is a gas used to insulate high-power electricity transformers.",
"Neon is known mostly for its use in brightly colored signs that cover modern day cities, though the element has many other uses, such as its role in making high-voltage indicators and switching gear, lightning arresters, diving equipment and lasers.",
"Sodium is used by the human body to control blood pressure and blood volume. The body also needs sodium for your muscles and nerves to work properly. Sodium vapor is used in streetlights and produces a brilliant yellow light.",
"Magnesium plays a vital role for many processes in the body, including regulating muscle and nerve function, blood sugar levels, and blood pressure and making protein, bone, and DNA.",
"Aluminum is mostly known for being used in aluminum foil, though this soft and malleable metal has other uses due to its unique qualities. Aluminum is used by Architects due to the fact that it is both lightweight and strong.",
"Silicon is best known for its use in computer products, for example, semiconductors are widely used in familiar electric appliances such as personal computers, televisions, smartphones, digital cameras, IC cards, etc. The material most frequently used in semiconductors is Silicon.",
"Phosphorus is needed for the growth, maintenance, and repair of all tissues and cells, and for the production of the genetic building blocks, DNA and RNA. Phosphorus is also needed to help balance and use other vitamins and minerals, including vitamin D, iodine, magnesium, and zinc.",
"Sulfur is mostly used to create sulfuric acid, which is used in a multitude of products like explosives, glue, petroleum, refining, metal curing, and in lead-based car batteries.",
"Chlorine is used as a bleach in the manufacture of paper and cloth, to make pesticides (insect killers), rubber, and solvents. Chlorine is used in drinking water and swimming pool water to kill harmful bacteria.",
"Argon is often used when an inert atmosphere is needed. It is used in this way for the production of titanium and other reactive elements. It is also used by welders to protect the weld area and in incandescent light bulbs to stop oxygen from corroding the filament.",
"Potassium helps your nerves to function and muscles to contract. It helps your heartbeat stay regular. It also helps move nutrients into cells and waste products out of cells.",
"Calcium is a mineral most often associated with healthy bones and teeth, although it also plays an important role in blood clotting, helping muscles to contract, and regulating normal heart rhythms and nerve functions",
"Scandium is used primarily in aluminum-scandium alloys. These alloys can be found in aerospace industry components and for sports equipment such as bicycle frames, fishing rods, golf iron shafts and baseball bats.",
"Titanium metal connects well with bone, so it has found surgical applications such as in joint replacements, and tooth implants. The largest use of titanium is in the form of titanium oxide. It is extensively used as a pigment in house paint, artists' paint, plastics, enamels and paper.",
"Vanadium is an important element in the production of steel alloys, for use in aerospace engineering, nuclear reactors, and even aircraft carriers. Vanadium can be utilized in ceramics as a pigment.",
"Chromium is an essential ingredient in the manufacturing of insulin. Without it, insulin would be unable to regulate the blood sugar levels in the body of someone who has diabetes.",
"Manganese helps the body form connective tissue, bones, blood clotting factors, and sex hormones. Manganese is also necessary for normal brain and nerve function.",
"Iron is a key component in the manufacturing of steel, without it we would be unable to build most buildings we see in our day to day lives.  Your body uses iron to make hemoglobin, a protein in red blood cells that carries oxygen from the lungs to all parts of the body, and myoglobin, a protein that provides oxygen to muscles",
"Cobalt salts have been used for centuries to produce brilliant blue colors in paint, porcelain, glass, pottery and enamels. Radioactive cobalt-60 is used to treat cancer and, in some countries, to irradiate food to preserve it",
"Since nickel is such a sturdy and corrosion-resistant material, it is an excellent metal for coin-making. The first coin to include the metal nickel was the one-cent piece Flying Eagle, an American coin made of 12 percent nickel and 88 percent copper.",
"Most copper is used in electrical equipment such as wiring and motors. This is because it conducts both heat and electricity very well, and can be drawn into wires for electronics.",
"Zinc plays an important role in the body as it assists in the creation of DNA, growth of cells, building of proteins, healing damaged tissue, and supporting a healthy immune system.",
"Gallium is mostly used in electronics, It has important uses in Blu-ray technology, mobile phones, blue and green LEDs and pressure sensors for touch switches due to its malleable nature.",
"The largest use of germanium is in the semiconductor industry. When combined with small amounts of arsenic, gallium, indium, antimony or phosphorus, germanium is used to make transistors for use in electronic devices. Germanium is also used to create alloys and as a phosphor in fluorescent lamps.",
"Arsenic is used industrially as an alloying agent for lead, as well as in the processing of glass, pigments, textiles, paper, metal adhesives, wood preservatives and ammunition. Arsenic is also used in the hide tanning process and, to a limited extent, in pesticides, feed additives and pharmaceuticals.",
"Selenium is an essential component of various enzymes and proteins, called selenoproteins, that help to make DNA and protect against cell damage and infections; these proteins are also involved in reproduction and the metabolism of thyroid hormones.",
"Bromine compounds are effective pesticides, used both as soil fumigants in agriculture, particularly fruit-growing, and as a fumigant to prevent pests from attacking stored grain and other produce.",
"Krypton gas is used in industry leading flashlight bulbs because it allows the filament to run at a higher temperature, and hence more efficiently. Krypton is also used in the fanciest, most energy-efficient double-pane insulated windows. Krypton is 12 times denser than air, and is therefore a more effective insulator.",
"Rubidium is used in vacuum tubes as a getter, a material that combines with and removes trace gasses from vacuum tubes. Since rubidium is easily ionized, it might be used as a propellant in ion engines on spacecraft.",
"Strontium is best known for the brilliant reds its salts give to fireworks and flares. Though the compound strontium chloride is used in toothpaste for sensitive teeth since it forms a barrier over microscopic tubules in the dentin containing nerve endings that have become exposed by gum recession.",
"Yttrium is often used as an additive in alloys. It increases the strength of aluminum and magnesium alloys. It is also used in the making of microwave filters for radar and has been used as a catalyst in ethene polymerisation. Yttrium-aluminum garnet (YAG) is used in lasers that can cut through metals.",
"It is used to make crucibles that will withstand heat-shock, furnace linings, foundry bricks, abrasives and by the glass and ceramics industries. Zirconium is so strong that even scissors and knives can be made from it.",
"Niobium is used in alloys including stainless steel. It improves the strength of the alloys, particularly at low temperatures. Alloys containing niobium are used in jet engines and rockets, beams and girders for buildings and oil rigs, and oil and gas pipelines.",
"Most molybdenum is used to make alloys. It is used in steel alloys to increase strength, hardness, electrical conductivity and resistance to corrosion and wear. These 'moly steel' alloys are used in parts of engines.",
"Technetium is used as a radioactive tracer for nuclear medicine; which is a form of medical imaging that assesses how particular parts of our body are working or functioning.",
"Ruthenium compounds can be used in solar cells, which absorbs light energy, then it creates electrical charges that move in response to an internal electrical field in the cell, causing electricity to flow.",
"The major use of rhodium is in catalytic converters for cars. It reduces nitrogen oxides in exhaust gasses by 80%, reducing the effects of the harmful gasses released by the cars on the environment.",
"Palladium can be employed as a substitute for platinum in fuel cell catalysts,  the catalyst facilitates the reaction of oxygen and hydrogen. Palladium is also used in proton exchange membrane fuel cells used in transportation applications",
"Metals are the most commonly used mirror coatings. Because of their reflectivity, layers of  silver are often used. Silver is the most reflective across the visible spectrum, reflecting 95 percent of light.",
"Cadmium became an important metal in the production of nickel-cadmium (Ni-Cd) rechargeable batteries and as a sacrificial corrosion-protection coating for iron and steel.",
"Indium is used to dope germanium to make transistors. Indium is also used to make other electrical components such as rectifiers, thermistors and photoconductors, all of which have military purposes as well.",
"Tin can be found in a multitude of day to day products around the world. Tin is widely used for plating steel cans used as food containers, in metals used for bearings, and in solder.",
"Antimony finds use in small arms bullets (and tracer rounds) and cable sheathing among others. Whilst too brittle to be of use in its pure form, antimony makes an excellent alloying material for other metals, providing increased hardness and mechanical strength.",
"A relatively new consumer of tellurium is in rewritable CDs, DVDs and Blu-ray discs, where tellurium suboxide is used in the media layer of these discs. Tellurium is also used in new phase change memory chips developed by Intel™",
"Iodine is needed to make the thyroid hormones thyroxine and triodothyronine, which assist with the creation of proteins and enzyme activity, as well as regulating normal metabolism.",
"Xenon is used in certain specialized light sources. It produces a beautiful blue glow when excited by an electrical discharge. Xenon lamps have applications as high-speed electronic flash bulbs used by photographers, sunbed lamps and bactericidal lamps used in food preparation and processing.",
"The most common use for caesium compounds is as a drilling fluid. The functions of drilling fluid, which are critical to the drilling process, are: aid formation stability and productivity, clean the bottom of the hole, and to lift formation cuttings to the surface.",
"Barium compounds are used by the oil and gas industries to make drilling mud. Drilling mud simplifies drilling through rocks by lubricating the drill and therefore making it easier to cut through rock and stone.",
"Lanthanum is used to reduce blood levels of phosphate in people with kidney disease. High levels of phosphate in the blood can cause bone problems. Lanthanum is in a class of medications called phosphate binders.",
"Cerium sulfide is a non-toxic compound that is a rich red color. It is used as a pigment. Cerium is also used in flat-screen TVs, low-energy light bulbs and floodlights. Cerium has no known biological role.",
"Praseodymium is used in a variety of alloys. The high-strength alloy it forms with magnesium is used in aircraft engines. Mischmetal is an alloy containing about 5% praseodymium and is used to make flints for cigarette lighters. Praseodymium is also used in alloys for permanent magnets.",
"The most important use for neodymium is in an alloy with iron and boron to make very strong permanent magnets. This discovery, in 1983, made it possible to miniaturize many electronic devices, including mobile phones, microphones, loudspeakers and electronic musical instruments.",
"Most promethium is used for research purposes. It can be used as a beta radiation source in luminous paint, in nuclear batteries for guided missiles, watches, pacemakers and rados, and as a light source for signals.",
"Samarium is used to dope calcium chloride crystals for use in optical lasers. It is also used in infrared absorbing glass and as a neutron absorber in nuclear reactors. Samarium oxide finds specialized use in glass and ceramics.",
"Europium is excellent at absorbing neutrons, making it valuable in control rods for nuclear reactors. Europium-doped plastic has been used as a laser material. It is also used in making thin superconducting alloys. Europium has no known biological role.",
"Gadolinium has useful properties in alloys. As little as 1% gadolinium can improve the workability of iron and chromium alloys, and their resistance to high temperatures and oxidation. It is also used in alloys for making magnets, electronic components and data storage disks.",
"Terbium is used to dope calcium fluoride, calcium tungstate and strontium molybdate, all used in solid-state devices. It is also used in low-energy lightbulbs and mercury lamps. It has been used to improve the safety of medical x-rays by allowing the same quality image to be produced with a much shorter exposure time.",
"Dysprosium compounds can be magnetized, which makes them of use in computer hard disk drives, ergo dysprosium is vital in the realm of electronics.",
"Holmium can absorb neutrons, so it is used in nuclear reactors to keep a chain reaction under control. A magnetic pole piece with magnetic iron powder to demonstrate that Holmium has the highest magnetic strength of any element. Holmium is used in alloys for the production of magnets.",
"Erbium finds little use as a metal because it slowly tarnishes in air and is attacked by water. When alloyed with metals such as vanadium, erbium lowers their hardness and improves their workability. Erbium oxide is occasionally used in infrared absorbing glass, for example safety glasses for welders and metal workers.",
"It is used for laser manufacturing and for surgical purposes. Thulium is used as a source of radiation from portable X-ray devices and in nuclear reactions. Despite being slightly expensive, superconductors of high-temperature use thulium.",
"Ytterbium is beginning to find a variety of uses, such as in memory devices and tunable lasers. It can also be used as an industrial catalyst and is increasingly being used to replace other catalysts considered to be too toxic and polluting. Ytterbium has no known biological role. It has low toxicity.",
"A silvery-white, hard, dense metal. Lutetium is little used outside research. One of its few commercial uses is as a catalyst for cracking hydrocarbons in oil refineries. Lutetium has no known biological role.",
"Hafnium is a good absorber of neutrons and is used to make control rods, such as those found in nuclear submarines. It also has a very high melting point and because of this is used in plasma welding torches.",
"Tantalum is a very versatile element, it has found use in making surgical appliances because it's completely immune to body liquids, The element is also used to make chemical process equipment, nuclear reactors, aircraft and missile parts.",
"Tungsten is commonly used in heavy metal alloys such as high speed steel, from which cutting tools are manufactured. It is also used in the so-called 'superalloys' to form wear resistant coatings",
"Rhenium wire is used in photoflash lamps. Rhenium is also used as an electrical contact material because it has good wear resistance and withstands arc corrosion.",
"It is used to produce very hard alloys for fountain pen tips, instrument pivots, needles and electrical contacts. It is also used in the chemical industry as a catalyst.",
"Iridium has a very high density and melting point. It is the most corrosion-resistant material known, therefore Iridium is commonly used as a hardening agent for platinum.",
"The electronics industry uses platinum for computer hard disks and thermocouples. Platinum is also used to make optical fibers and LCDs, turbine blades, spark plugs, pacemakers and dental fillings. Platinum compounds are important chemotherapy drugs used to treat cancers.",
"Gold, being a very good conductor and resistant to corrosion, is used as an alloy or electroplated, for use in relay and switch contacts, connecting wires and joints. These are highly reliable and are used in cellphones, television sets, calculators, and GPS units.",
"Mercury can be used to make thermometers, barometers and other scientific instruments. Mercury conducts electricity and is used to make silent, position dependent switches. Mercury vapor is used in streetlights, fluorescent lamps and advertising signs.",
"Thallium has not been produced in the United States since 1984, but is imported for use in the manufacture of electronics, low temperature thermometers, optical lenses, and imitation precious jewels.",
"A large proportion of the lead used today serves the automobile industry in components such as storage batteries, radiators and solder for joints. Lead is an important part of chemical tank liners and of radiation shields in telephone and power cable conduit.",
"Bismuth subsalicylate is the main ingredient in Pepto-Bismol. This medicine is used for heartburn and acid reflux, indigestion, diarrhea and feeling sick (nausea). It works by protecting your stomach and the lower part of your food pipe from stomach acid.",
"Polonium is an alpha-emitter, hence it is used in antistatic devices and for research purposes. It is used to eliminate static electricity produced during processes such as rolling paper, wire and sheet metal.",
"There are currently no uses for astatine outside of research. The half-life of the most stable isotope is only 8 hours, and only tiny amounts have ever been produced. A mass spectrometer has been used to confirm that astatine behaves chemically like other halogens, particularly iodine.",
"Radon decays into radioactive polonium and alpha particles. This emitted radiation made radon useful in cancer therapy. Radon was used in some hospitals to treat tumors by sealing the gas in minute tubes, and implanting these into the tumor, treating the disease.",
"Francium has no uses, having a half life of only 22 minutes. Francium has no known biological role. It is toxic due to its radioactivity. Francium is obtained by the neutron bombardment of radium in a nuclear reactor.",
"Radium was once used as a portable source of neutrons. Radium is used in medicine to produce radon gas, used for cancer treatment. Radium used to be used in a variety of cosmetic products until it was discovered to be dangerous.",
"As a radioactive element, the primary use of actinium is as a source of radiation. It is also used to produce bismuth-213, a radioactive isotope used in radioimmunotherapy. Actinium-225 is sometimes used in cancer treatments and actinium-227 is sometimes used to study the movement of fluids in oceans.",
"Thorium is used to make ceramics, welding rods, camera and telescope lenses, fire brick, heat resistant paint and metals used in the aerospace industry, as well as in nuclear reactions. Thorium has the potential to be used as a fuel for generating nuclear energy.",
"Due to its scarcity, high radioactivity and toxicity, there are currently no uses for protactinium outside of basic scientific research.",
"Uranium “enriched” into U-235 concentrations can be used as fuel for nuclear power plants and the nuclear reactors that run naval ships and submarines. It also can be used in nuclear weapons.",
"Plutonium – 238 is used in thermal generators, spacecrafts, military applications and as an – emitter. It is used in nuclear fuel as well. Neptunium – 237 is used for detection of high energy neutrons. It can be used in nuclear reactors and nuclear weapons.",
"Plutonium-238 generates significant heat through its radioactive decay process, which makes it useful as a heat source for sensitive electrical components in satellites, as well as a power source (for example, battery power) for satellites. Plutonium-239 is used to make nuclear weapons.",
"Americium is commonly used in smoke alarms, but has few other uses. It has the potential to be used in spacecraft batteries in the future.",
"Curium has two main uses: as a fuel for Radioisotope Thermal Generators (RTGs) on board satellites, deep space probes, planetary surface rovers and in heart pacemakers, and as a alpha emitter for alpha particle X-Ray spectrometry, again particularly in space applications.",
"Because it is so rare, berkelium has no commercial or technological use at present. Berkelium has no known biological role. It is toxic due to its radioactivity. Less than a gram of berkelium is made each year.",
"Californium is a radioactive metal. Californium is a very strong neutron emitter. It is used in portable metal detectors, for identifying gold and silver ores, to identify water and oil layers in oil wells and to detect metal fatigue and stress in airplanes.",
"Einsteinium has no uses outside research. Einsteinium has no known biological role. It is toxic due to its radioactivity. Einsteinium can be obtained in milligram quantities from the neutron bombardment of plutonium in a nuclear reactor.",
"Fermium has no uses outside research. Fermium has no known biological role. It is toxic due to its radioactivity. Fermium can be obtained, in microgram quantities, from the neutron bombardment of plutonium in a nuclear reactor.",
"A radioactive metal, of which only a few atoms have ever been created. Mendelevium is used only for research. Mendelevium has no known biological or industrial role.",
"Nobelium has no uses outside research. Nobelium has no known biological role. It is toxic due to its radioactivity. Nobelium is made by bombarding curium with carbon in a device called a cyclotron.",
"Lawrencium has no uses outside research. Lawrencium has no known biological role. Lawrencium does not occur naturally. It is produced by bombarding californium with boron.",
"Rutherfordium's most stable isotope, rutherfordium-263, has a half-life of about 10 minutes and decays through spontaneous fission. In 1964, workers at the Joint Nuclear Research Institute at Dubna (U.S.S.R.) bombarded plutonium with accelerated 113 to 115 MeV neon ions. Rutherfordium has a half life of 10 minutes.",
"Dubnium is only used in research. It has no known biological role. Dubnium does not occur naturally. It is a transuranium element created by bombarding californium-249 with nitrogen-15 nuclei. Dubnium has a half life of 32 hours.",
"Seaborgium is only used in research. Seaborgium has no known biological role. Seaborgium is a transuranium element. It is created by bombarding californium-249 with oxygen-18 nuclei.,",
"There are no known uses outside of research for bohrium. Because of this, it is only used to study its physical properties and synthesize isotopes of other elements.",
"A highly radioactive metal, of which only a few atoms have ever been made. At present it is only used in research. Hassium has no known biological or industrial role.",
"A highly radioactive metal, of which only a few atoms have ever been made. At present it is only used in research. Meitnerium has no known biological or industrial role.",
"Presently, there are no uses or applications of Darmstadtium. It is only used for research purposes. Its biological or industrial use is yet to be known.",
"Roentgenium is only used for research purposes in scientific studies, to better understand its properties, and to create heavier elements.",
"Copernicium is present, it is only used in research. It has no known biological or industrial role. It is a man-made element of which only a few atoms have ever been made.",
"Nihonium is highly radioactive metal, of which only a few atoms have ever been made. At present, it is only used in research. It has no known biological or industrial role.",
"Flerovium is a highly radioactive metal, of which only a few atoms have ever been made. At present, it is only used in research. It has no known biological or industrial role.",
"Moscovium is a highly radioactive metal, of which only a few atoms have ever been made. At present, it is only used in research. It has no known biological or industrial role.",
"Livermorium is only used in research. It has no known biological or industrial role. Livermorium does not occur naturally. It is made by bombarding curium atoms with calcium.",
"Since only a few atoms of tennessine have ever been produced, it currently has no uses outside of basic scientific research.",
"Oganesson is a highly radioactive metal, of which only a few atoms have ever been made. At present, it is only used in research. It has no known biological or industrial role."];
