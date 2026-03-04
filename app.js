const TEST_TIME_SECONDS = 1200;
const PASS_PERCENTAGE = 75;
const QUESTIONS_PER_TEST = 30;

/* USERS */
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = null;

/* QUESTION BANK */
const questionBanks = {
  knowledge: [
{
  question: "Care este considerată 'leagănul civilizației' datorită apariției primelor orașe-stat și a scrierii cuneiforme?",
  options: [
    "Valea Nilului",
    "Valea Indului",
    "Mesopotamia",
    "Mesoamerica"
  ],
  correctIndex: 2
},
{
  question: "Ce demonstrează celebra ecuație a lui Einstein, E = mc²?",
  options: [
    "Legea atracției universale",
    "Viteza sunetului în vid",
    "Echivalența dintre masă și energie",
    "Mișcarea eliptică a planetelor"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost regele dac care a unificat pentru prima dată triburile geto-dace în secolul I î.Hr.?",
  options: [
    "Decebal",
    "Dromichetes",
    "Burebista",
    "Deceneu"
  ],
  correctIndex: 2
},
{
  question: "Care este cel mai abundent gaz din atmosfera Pământului?",
  options: [
    "Oxigenul",
    "Dioxidul de carbon",
    "Hidrogenul",
    "Azotul"
  ],
  correctIndex: 3
},
{
  question: "Ce reformă religioasă majoră a încercat faraonul Amenhotep al IV-lea (Akhenaton)?",
  options: [
    "Trecerea la monoteism",
    "Introducerea cultului morților",
    "Interzicerea preoțimii",
    "Adoptarea zeilor greci"
  ],
  correctIndex: 0
},
{
  question: "Cea mai adâncă groapă oceanică cunoscută este:",
  options: [
    "Groapa Puerto Rico",
    "Groapa Marianelor",
    "Groapa Japoniei",
    "Groapa Java"
  ],
  correctIndex: 1
},
{
  question: "Ce a presupus Retragerea Aureliană din perioada 271–275 d.Hr.?",
  options: [
    "O nouă ofensivă romană în nordul Dunării",
    "Abandonarea completă a populației civile",
    "Cucerirea Daciei de către vizigoți",
    "Retragerea armatei și administrației romane la sud de Dunăre"
  ],
  correctIndex: 3
},
{
  question: "Simbolul chimic 'Au' desemnează metalul:",
  options: [
    "Argint",
    "Aur",
    "Cupru",
    "Aluminiu"
  ],
  correctIndex: 1
},
{
  question: "Tehnica „sfumato” din pictura Mona Lisa se referă la:",
  options: [
    "Utilizarea culorilor stridente",
    "Tranziții imperceptibile între culori și tonuri",
    "Aplicarea vopselei cu cuțitul",
    "Forme geometrice riguroase"
  ],
  correctIndex: 1
},
{
  question: "Care a fost cauza principală a Războiului Peloponesiac?",
  options: [
    "Invazia persană",
    "Răscoala sclavilor",
    "Cuceririle lui Alexandru cel Mare",
    "Rivalitatea hegemonică dintre Atena și Sparta"
  ],
  correctIndex: 3
},
{
  question: "Ce măsoară un an-lumină?",
  options: [
    "Timpul",
    "Distanța",
    "Luminozitatea",
    "Viteza"
  ],
  correctIndex: 1
},
{
  question: "Fluviul cu cel mai mare debit de apă din lume este:",
  options: [
    "Nilul",
    "Mississippi",
    "Amazonul",
    "Yangtze"
  ],
  correctIndex: 2
},
{
  question: "Termenul istoriografic de 'Descălecat' se referă la:",
  options: [
    "Întemeierea statelor medievale Țara Românească și Moldova",
    "Invazia mongolă",
    "Colonizarea sașilor",
    "Retragerea romană"
  ],
  correctIndex: 0
},
{
  question: "Marie Curie a câștigat Premii Nobel în:",
  options: [
    "Fizică și Chimie",
    "Medicină și Pace",
    "Literatură și Chimie",
    "Fizică și Matematică"
  ],
  correctIndex: 0
},
{
  question: "Ce eveniment din anul 476 d.Hr. marchează sfârșitul Antichității?",
  options: [
    "Depunerea ultimului împărat roman de Apus",
    "Căderea Constantinopolului",
    "Împărțirea Imperiului Roman",
    "Încoronarea lui Carol cel Mare"
  ],
  correctIndex: 0
},
{
  question: "Principiul lui Arhimede explică:",
  options: [
    "Căderea corpurilor",
    "Forța ascensională într-un fluid",
    "Refracția luminii",
    "Conservarea energiei"
  ],
  correctIndex: 1
},
{
  question: "Curentul artistic Impresionism își ia numele de la o pictură semnată de:",
  options: [
    "Vincent van Gogh",
    "Claude Monet",
    "Edvard Munch",
    "Paul Cézanne"
  ],
  correctIndex: 1
},
{
  question: "Bătălia de la Rovine a fost purtată de:",
  options: [
    "Ștefan cel Mare",
    "Mihai Viteazul",
    "Mircea cel Bătrân",
    "Vlad Țepeș"
  ],
  correctIndex: 2
},
{
  question: "Strâmtoarea Gibraltar separă:",
  options: [
    "Europa de Asia",
    "Africa de Asia",
    "Europa de Africa",
    "America de Nord de Asia"
  ],
  correctIndex: 2
},
{
  question: "Diamantul și grafitul sunt forme alotropice ale:",
  options: [
    "Siliciului",
    "Fierului",
    "Carbonului",
    "Calciului"
  ],
  correctIndex: 2
},
{
  question: "Marea Schismă din 1054 a reprezentat ruptura dintre:",
  options: [
    "Catolici și Protestanți",
    "Sunniți și Șiiți",
    "Roma și Constantinopol",
    "Creștini și evrei"
  ],
  correctIndex: 2
},
{
  question: "Teoria Big Bang explică:",
  options: [
    "Apariția vieții",
    "Formarea găurilor negre",
    "Originea Universului",
    "Extincția dinozaurilor"
  ],
  correctIndex: 2
},
{
  question: "Iancu de Hunedoara este cunoscut pentru victoria din 1456 la:",
  options: [
    "Vaslui",
    "Belgrad",
    "Călugăreni",
    "Constantinopol"
  ],
  correctIndex: 1
},
{
  question: "Viteza luminii în vid este aproximativ:",
  options: [
    "340 m/s",
    "1 milion km/h",
    "300.000 km/s",
    "100.000 km/s"
  ],
  correctIndex: 2
},
{
  question: "Magna Carta (1215) este importantă deoarece:",
  options: [
    "A abolit monarhia",
    "A declarat independența coloniilor",
    "A limitat puterile regelui",
    "A instituit votul universal"
  ],
  correctIndex: 2
},
{
  question: "Ce indică o valoare de 7 pe scara pH?",
  options: [
    "O substanță puternic acidă",
    "O substanță neutră",
    "O bază puternică",
    "Absența apei"
  ],
  correctIndex: 1
},
{
  question: "Cel mai mic stat independent din lume este:",
  options: [
    "Monaco",
    "Liechtenstein",
    "Vatican",
    "San Marino"
  ],
  correctIndex: 2
},
{
  question: "Cine a realizat prima unire politică a celor trei țări române în anul 1600?",
  options: [
    "Mihai Viteazul",
    "Alexandru Ioan Cuza",
    "Matei Basarab",
    "Constantin Brâncoveanu"
  ],
  correctIndex: 0
},
{
  question: "Ce reprezintă 'Zero Absolut' în termodinamică?",
  options: [
    "Temperatura de îngheț a apei",
    "Temperatura la care mișcarea termică a atomilor încetează",
    "Temperatura medie din spațiul cosmic",
    "Punctul de fierbere al azotului"
  ],
  correctIndex: 1
},
{
  question: "Renașterea a debutat în Italia având ca trăsătură centrală:",
  options: [
    "Umanismul și redescoperirea Antichității",
    "Teocentrismul",
    "Industrializarea timpurie",
    "Goticul târziu"
  ],
  correctIndex: 0
},
{
  question: "Cine sunt considerați fondatorii Cubismului?",
  options: [
    "Salvador Dalí și René Magritte",
    "Pablo Picasso și Georges Braque",
    "Henri Matisse și André Derain",
    "Gustav Klimt și Egon Schiele"
  ],
  correctIndex: 1
},
{
  question: "Domnia lui Constantin Brâncoveanu s-a remarcat în principal prin:",
  options: [
    "Războaie continue",
    "O înflorire culturală și diplomație abilă",
    "Secularizarea averilor",
    "Alianță militară cu Rusia"
  ],
  correctIndex: 1
},
{
  question: "Trecerea directă a unei substanțe din stare solidă în stare gazoasă se numește:",
  options: [
    "Evaporare",
    "Condensare",
    "Sublimare",
    "Solidificare"
  ],
  correctIndex: 2
},
{
  question: "Pacea de la Westfalia (1648) este importantă deoarece:",
  options: [
    "A unit Germania",
    "A pus capăt Războiului de 30 de Ani și a consacrat suveranitatea statelor",
    "A învins Imperiul Otoman",
    "A creat Liga Națiunilor"
  ],
  correctIndex: 1
},
{
  question: "Experimentul mental „Pisica lui Schrödinger” ilustrează paradoxurile din:",
  options: [
    "Mecanica fluidelor",
    "Termodinamică",
    "Mecanica cuantică",
    "Optică geometrică"
  ],
  correctIndex: 2
},
{
  question: "Ce a însemnat regimul fanariot pentru Țările Române?",
  options: [
    "Obținerea independenței",
    "Revenirea la domniile pământene",
    "Unirea cu Rusia",
    "Numirea domnitorilor de către Poarta Otomană"
  ],
  correctIndex: 3
},
{
  question: "„Cercul de Foc al Pacificului” este caracterizat prin:",
  options: [
    "Temperaturi extreme",
    "Activitate seismică și vulcanică intensă",
    "Recife de corali",
    "Furtuni tropicale"
  ],
  correctIndex: 1
},
{
  question: "Care filosof iluminist a teoretizat separarea puterilor în stat?",
  options: [
    "Voltaire",
    "Jean-Jacques Rousseau",
    "John Locke",
    "Montesquieu"
  ],
  correctIndex: 3
},
{
  question: "Numărul lui Avogadro reprezintă:",
  options: [
    "Numărul de particule dintr-un mol",
    "Viteza luminii",
    "Numărul elementelor chimice",
    "Vârsta Pământului"
  ],
  correctIndex: 0
},
{
  question: "Tavanul Capelei Sixtine a fost pictat de:",
  options: [
    "Rafael Sanzio",
    "Donatello",
    "Michelangelo Buonarroti",
    "Leonardo da Vinci"
  ],
  correctIndex: 2
},
{
  question: "Revoluția Industrială a început în Marea Britanie prin:",
  options: [
    "Descoperirea electricității",
    "Producția de automobile",
    "Mecanizarea industriei textile și motorul cu abur",
    "Industria chimică"
  ],
  correctIndex: 2
},
{
  question: "Care au fost obiectivele Revoluției de la 1848 în Țările Române?",
  options: [
    "Restaurarea regimului fanariot",
    "Cucerirea Constantinopolului",
    "Drepturi cetățenești, împroprietărire și unitate națională",
    "Alianță cu Imperiul Habsburgic"
  ],
  correctIndex: 2
},
{
  question: "O gaură neagră este:",
  options: [
    "O stea stinsă",
    "O regiune cu gravitație extremă",
    "Un nor de praf cosmic",
    "O planetă gazoasă"
  ],
  correctIndex: 1
},
{
  question: "Care este elementul chimic esențial care întreține arderea?",
  options: [
    "Heliu",
    "Clor",
    "Oxigen",
    "Hidrogen"
  ],
  correctIndex: 2
},
{
  question: "Congresul de la Viena (1815) a avut ca scop:",
  options: [
    "Promovarea democrației",
    "Unificarea Italiei",
    "Restaurarea ordinii conservatoare",
    "Împărțirea Africii"
  ],
  correctIndex: 2
},
{
  question: "Cea mai mare insulă de pe glob este:",
  options: [
    "Madagascar",
    "Noua Guinee",
    "Marea Britanie",
    "Groenlanda"
  ],
  correctIndex: 3
},
{
  question: "Unitatea de măsură pentru forță în SI este:",
  options: [
    "Watt",
    "Joule",
    "Newton",
    "Pascal"
  ],
  correctIndex: 2
},
{
  question: "Cum s-a realizat Mica Unire de la 1859?",
  options: [
    "Prin dubla alegere a lui Alexandru Ioan Cuza",
    "Prin război",
    "Prin decizia Marilor Puteri",
    "Prin intervenție militară franceză"
  ],
  correctIndex: 0
},
{
  question: "Pictura „Fata cu cercel de perlă” aparține lui:",
  options: [
    "Rembrandt",
    "Johannes Vermeer",
    "Jan van Eyck",
    "Hieronymus Bosch"
  ],
  correctIndex: 1
},
{
  question: "Care a fost scânteia care a declanșat Primul Război Mondial?",
  options: [
    "Atentatul de la Sarajevo",
    "Invazia Poloniei",
    "Scufundarea navei Lusitania",
    "Revoluția Bolșevică"
  ],
  correctIndex: 0
},
{
  question: "Bronzul este un aliaj format în principal din:",
  options: [
    "Fier și carbon",
    "Aluminiu și zinc",
    "Aur și argint",
    "Cupru și staniu"
  ],
  correctIndex: 3
},
{
  question: "Cea mai mare planetă din Sistemul Solar este:",
  options: [
    "Pământul",
    "Saturn",
    "Jupiter",
    "Neptun"
  ],
  correctIndex: 2
},
{
  question: "Doctrina Truman (1947) viza:",
  options: [
    "Izolaționismul SUA",
    "Colaborarea cu URSS",
    "Îndiguirea expansiunii comunismului",
    "Dezarmarea nucleară"
  ],
  correctIndex: 2
},
{
  question: "În urma cărui conflict a fost recunoscută independența României?",
  options: [
    "Războiul Crimeii",
    "Războiul Ruso-Turc din 1877–1878",
    "Al Doilea Război Balcanic",
    "Primul Război Mondial"
  ],
  correctIndex: 1
},
{
  question: "Fenomenul descompunerii luminii albe printr-o prismă se numește:",
  options: [
    "Reflexie",
    "Difracție",
    "Dispersie",
    "Absorbție"
  ],
  correctIndex: 2
},
{
  question: "Canalul Panama face legătura între:",
  options: [
    "Marea Mediterană și Marea Roșie",
    "Oceanul Atlantic și Oceanul Pacific",
    "Marea Nordului și Marea Baltică",
    "Marea Neagră și Marea Marmara"
  ],
  correctIndex: 1
},
{
  question: "Tratatul de la Maastricht (1992) este fundamental pentru:",
  options: [
    "Crearea NATO",
    "Căderea Zidului Berlinului",
    "Reunificarea Germaniei",
    "Formarea Uniunii Europene"
  ],
  correctIndex: 3
},
{
  question: "Gazele nobile se disting prin:",
  options: [
    "Inflamabilitate ridicată",
    "Reactivitate chimică scăzută",
    "Stare solidă",
    "Miros puternic"
  ],
  correctIndex: 1
},
{
  question: "Salvador Dalí este figura centrală a curentului:",
  options: [
    "Dadaism",
    "Futurism",
    "Suprarealism",
    "Expresionism abstract"
  ],
  correctIndex: 2
},
{
  question: "Unde a avut loc Marea Adunare Națională din 1918?",
  options: [
    "Iași",
    "București",
    "Alba Iulia",
    "Chișinău"
  ],
  correctIndex: 2
},
{
  question: "Ce eveniment a marcat sfârșitul Războiului Rece?",
  options: [
    "Războiul din Coreea",
    "Dizolvarea URSS",
    "Criza Rachetelor",
    "Războiul din Vietnam"
  ],
  correctIndex: 1
},
{
  question: "Efectul Doppler explică modificarea:",
  options: [
    "Culorii cerului",
    "Frecvenței unei unde percepute",
    "Vitezei luminii",
    "Masei unui corp"
  ],
  correctIndex: 1
},
{
  question: "Planeta Marte este roșie datorită:",
  options: [
    "Temperaturilor ridicate",
    "Oxidului de fier",
    "Vegetației",
    "Vulcanilor activi"
  ],
  correctIndex: 1
},
{
  question: "Declarația Drepturilor Omului (1789) a stabilit că:",
  options: [
    "Regele are drepturi divine",
    "Oamenii sunt liberi și egali în drepturi",
    "Puterea aparține Bisericii",
    "Proprietatea este interzisă"
  ],
  correctIndex: 1
},
{
  question: "Constituția României din 1923 este recunoscută pentru:",
  options: [
    "Caracterul democratic",
    "Dictatură regală",
    "Limitarea minorităților",
    "Model sovietic"
  ],
  correctIndex: 0
},
{
  question: "Legea conservării masei a fost enunțată de:",
  options: [
    "Antoine Lavoisier",
    "Isaac Newton",
    "Louis Pasteur",
    "Alfred Nobel"
  ],
  correctIndex: 0
},
{
  question: "Marea Moartă este renumită pentru:",
  options: [
    "Adâncime extremă",
    "Lipsa malurilor",
    "Altitudine joasă și salinitate ridicată",
    "Apă dulce"
  ],
  correctIndex: 2
},
{
  question: "Andy Warhol este asociat cu:",
  options: [
    "Art Nouveau",
    "Bauhaus",
    "Pop Art",
    "Art Deco"
  ],
  correctIndex: 2
},
{
  question: "Codul Civil al lui Napoleon este important deoarece:",
  options: [
    "A reintrodus sclavia",
    "A interzis divorțul",
    "A stat la baza dreptului modern",
    "A militarizat statul"
  ],
  correctIndex: 2
},
{
  question: "Ce a reprezentat actul de la 23 August 1944?",
  options: [
    "Intrarea României în război",
    "Întoarcerea armelor împotriva Germaniei",
    "Abdicarea regelui",
    "Semnarea păcii"
  ],
  correctIndex: 1
},
{
  question: "Inerția reprezintă:",
  options: [
    "Forța gravitațională",
    "Tendința de a menține starea de mișcare sau repaus",
    "Viteza de reacție",
    "Frecarea"
  ],
  correctIndex: 1
},
{
  question: "Rolul unui catalizator este să:",
  options: [
    "Oprească reacția",
    "Mărească viteza reacției fără a se consuma",
    "Schimbe culoarea",
    "Scadă temperatura"
  ],
  correctIndex: 1
},
{
  question: "Galaxia noastră se numește:",
  options: [
    "Andromeda",
    "Triangulum",
    "Calea Lactee",
    "Sombrero"
  ],
  correctIndex: 2
},
{
  question: "Primăvara Națiunilor (1848) a însemnat:",
  options: [
    "Pacea europeană",
    "Revoluții liberale și naționale",
    "Colonizarea Africii",
    "Inventarea telegrafului"
  ],
  correctIndex: 1
},
{
  question: "Ce organ al corpului uman produce insulină?",
  options: [
    "Ficatul",
    "Pancreasul",
    "Rinichii",
    "Splina"
  ],
  correctIndex: 1
},
{
  question: "Renașterea a avut ca valoare centrală:",
  options: [
    "Teocentrismul",
    "Feudalismul",
    "Umanismul",
    "Absolutismul"
  ],
  correctIndex: 2
},
{
  question: "Ce fenomen explică existența anotimpurilor?",
  options: [
    "Distanța Pământ–Soare",
    "Forma eliptică a orbitei",
    "Înclinarea axei Pământului",
    "Rotația Lunii"
  ],
  correctIndex: 2
},
{
  question: "Care stat a fost fondator al ONU?",
  options: [
    "Germania",
    "Italia",
    "Japonia",
    "Statele Unite ale Americii"
  ],
  correctIndex: 3
},
{
  question: "Acidul clorhidric se găsește în mod natural în:",
  options: [
    "Plămâni",
    "Sânge",
    "Stomac",
    "Creier"
  ],
  correctIndex: 2
},
{
  question: "Ce scriere a fost inventată prima?",
  options: [
    "Alfabetică",
    "Hieroglifică",
    "Cuneiformă",
    "Latină"
  ],
  correctIndex: 2
},
{
  question: "Care este unitatea de măsură pentru intensitatea curentului electric?",
  options: [
    "Volt",
    "Ohm",
    "Watt",
    "Amper"
  ],
  correctIndex: 3
},
{
  question: "Cine a pictat Capela Sixtină?",
  options: [
    "Leonardo da Vinci",
    "Rafael",
    "Michelangelo",
    "Donatello"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Canadei?",
  options: [
    "Toronto",
    "Montreal",
    "Vancouver",
    "Ottawa"
  ],
  correctIndex: 3
},
{
  question: "Ce eveniment a marcat începutul Revoluției Franceze?",
  options: [
    "Execuția regelui",
    "Lovitura de stat",
    "Căderea Bastiliei",
    "Proclamarea republicii"
  ],
  correctIndex: 2
},
{
  question: "Oxigenul este esențial pentru:",
  options: [
    "Digestie",
    "Respirație celulară",
    "Fotosinteză animală",
    "Reproducere"
  ],
  correctIndex: 1
},
{
  question: "Cine a formulat legea gravitației universale?",
  options: [
    "Galileo Galilei",
    "Albert Einstein",
    "Isaac Newton",
    "Johannes Kepler"
  ],
  correctIndex: 2
},
{
  question: "Care munte este cel mai înalt din lume?",
  options: [
    "K2",
    "Mont Blanc",
    "Everest",
    "Kilimanjaro"
  ],
  correctIndex: 2
},
{
  question: "Ce reprezintă ADN-ul?",
  options: [
    "Un tip de proteină",
    "Material genetic",
    "O enzimă digestivă",
    "Un hormon"
  ],
  correctIndex: 1
},
{
  question: "Imperiul Roman de Apus a căzut în anul:",
  options: [
    "313",
    "395",
    "476",
    "565"
  ],
  correctIndex: 2
},
{
  question: "Ce tip de energie produce un panou fotovoltaic?",
  options: [
    "Termică",
    "Eoliană",
    "Electrică",
    "Nucleară"
  ],
  correctIndex: 2
},
{
  question: "Care este cea mai mică unitate a materiei?",
  options: [
    "Molecula",
    "Atomul",
    "Celula",
    "Ionul"
  ],
  correctIndex: 1
},
{
  question: "Ce ocean este cel mai mare?",
  options: [
    "Atlantic",
    "Indian",
    "Arctic",
    "Pacific"
  ],
  correctIndex: 3
},
{
  question: "Ce filozof grec a fost elevul lui Platon?",
  options: [
    "Socrate",
    "Aristotel",
    "Epicur",
    "Heraclit"
  ],
  correctIndex: 1
},
{
  question: "Care este scopul Constituției?",
  options: [
    "Control economic",
    "Stabilirea structurii statului și a drepturilor cetățenilor",
    "Impunerea religiei",
    "Crearea armatei"
  ],
  correctIndex: 1
},
{
  question: "Ce gaz este responsabil pentru efectul de seră?",
  options: [
    "Oxigen",
    "Azot",
    "Dioxid de carbon",
    "Heliu"
  ],
  correctIndex: 2
},
{
  question: "Care este viteza aproximativă a luminii?",
  options: [
    "300.000 km/s",
    "150.000 km/s",
    "30.000 km/s",
    "3.000 km/s"
  ],
  correctIndex: 0
},
{
  question: "Ce formă de guvernământ are România?",
  options: [
    "Monarhie",
    "Republică",
    "Imperiu",
    "Dictatură"
  ],
  correctIndex: 1
},
{
  question: "Ce rol au globulele roșii?",
  options: [
    "Apărare",
    "Coagulare",
    "Transportul oxigenului",
    "Digestie"
  ],
  correctIndex: 2
},
{
  question: "Ce reprezintă Revoluția Industrială?",
  options: [
    "Un război european",
    "Trecerea la producția mecanizată",
    "Colonizarea Americii",
    "Destrămarea imperiilor"
  ],
  correctIndex: 1
},
{
  question: "Care este simbolul chimic al aurului?",
  options: [
    "Ag",
    "Au",
    "Fe",
    "Cu"
  ],
  correctIndex: 1
},
{
  question: "Cine a fost primul om care a pășit pe Lună?",
  options: [
    "Buzz Aldrin",
    "Yuri Gagarin",
    "Neil Armstrong",
    "Michael Collins"
  ],
  correctIndex: 2
},
{
  question: "Ce tip de climă caracterizează zona ecuatorială?",
  options: [
    "Temperată",
    "Aridă",
    "Rece",
    "Calda și umedă"
  ],
  correctIndex: 3
},
{
  question: "Care este capitala Japoniei?",
  options: [
    "Kyoto",
    "Osaka",
    "Tokyo",
    "Hiroshima"
  ],
  correctIndex: 2
},
{
  question: "Ce funcție are mitocondria în celulă?",
  options: [
    "Sinteza proteinelor",
    "Stocarea apei",
    "Producerea energiei",
    "Protecția nucleului"
  ],
  correctIndex: 2
},
{
  question: "Care război a fost declanșat în urma asasinării arhiducelui Franz Ferdinand?",
  options: [
    "Războiul de Independență",
    "Al Doilea Război Mondial",
    "Primul Război Mondial",
    "Războiul Rece"
  ],
  correctIndex: 2
},
{
  question: "Ce planetă este cunoscută drept „Planeta Roșie”?",
  options: [
    "Jupiter",
    "Venus",
    "Marte",
    "Mercur"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Australiei?",
  options: [
    "Sydney",
    "Melbourne",
    "Canberra",
    "Perth"
  ],
  correctIndex: 2
},
{
  question: "Ce element chimic este esențial pentru respirație?",
  options: [
    "Hidrogen",
    "Azot",
    "Oxigen",
    "Carbon"
  ],
  correctIndex: 2
},
{
  question: "Cine a scris opera „Hamlet”?",
  options: [
    "Charles Dickens",
    "William Shakespeare",
    "Johann Goethe",
    "Molière"
  ],
  correctIndex: 1
},
{
  question: "Ce sistem politic se bazează pe separarea puterilor în stat?",
  options: [
    "Dictatura",
    "Monarhia absolută",
    "Democrația",
    "Feudalismul"
  ],
  correctIndex: 2
},
{
  question: "Care este cea mai lungă fluviu din lume?",
  options: [
    "Amazon",
    "Nil",
    "Yangtze",
    "Mississippi"
  ],
  correctIndex: 1
},
{
  question: "Ce rol are clorofila?",
  options: [
    "Respirația plantelor",
    "Fotosinteza",
    "Reproducerea",
    "Transportul apei"
  ],
  correctIndex: 1
},
{
  question: "Ce formă de energie folosește o turbină eoliană?",
  options: [
    "Solară",
    "Hidraulică",
    "Eoliană",
    "Termică"
  ],
  correctIndex: 2
},
{
  question: "Cine a descoperit America în 1492?",
  options: [
    "Amerigo Vespucci",
    "Ferdinand Magellan",
    "Cristofor Columb",
    "James Cook"
  ],
  correctIndex: 2
},
{
  question: "Ce este un tsunami?",
  options: [
    "Erupție vulcanică",
    "Cutremur submarin și valuri uriașe",
    "Furtună tropicală",
    "Alunecare de teren"
  ],
  correctIndex: 1
},
{
  question: "Ce organ coordonează sistemul nervos?",
  options: [
    "Inima",
    "Creierul",
    "Plămânii",
    "Ficatul"
  ],
  correctIndex: 1
},
{
  question: "Ce limbă oficială se vorbește în Brazilia?",
  options: [
    "Spaniolă",
    "Portugheză",
    "Engleză",
    "Franceză"
  ],
  correctIndex: 1
},
{
  question: "Care este cea mai mare planetă din Sistemul Solar?",
  options: [
    "Saturn",
    "Neptun",
    "Jupiter",
    "Uranus"
  ],
  correctIndex: 2
},
{
  question: "Ce este o republică?",
  options: [
    "Stat condus de rege",
    "Stat condus de un lider ales",
    "Stat religios",
    "Stat militar"
  ],
  correctIndex: 1
},
{
  question: "Ce fenomen natural produce fulgerele?",
  options: [
    "Frecarea norilor",
    "Diferența de temperatură",
    "Descărcarea electrică",
    "Presiunea atmosferică"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Spaniei?",
  options: [
    "Barcelona",
    "Valencia",
    "Madrid",
    "Sevilla"
  ],
  correctIndex: 2
},
{
  question: "Ce este un ecosistem?",
  options: [
    "Un tip de climă",
    "Un sistem economic",
    "Interacțiunea dintre organisme și mediu",
    "Un lanț trofic simplu"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost fondatorul Imperiului Mongol?",
  options: [
    "Kublai Han",
    "Genghis Han",
    "Attila",
    "Timur Lenk"
  ],
  correctIndex: 1
},
{
  question: "Ce rol are sistemul circulator?",
  options: [
    "Digestia",
    "Apărarea organismului",
    "Transportul substanțelor",
    "Respirația"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Suediei?",
  options: [
    "Oslo",
    "Stockholm",
    "Helsinki",
    "Copenhaga"
  ],
  correctIndex: 1
},
{
  question: "Ce tip de guvernare exista în Roma Antică înainte de Imperiu?",
  options: [
    "Monarhie absolută",
    "Republică",
    "Teocrație",
    "Democrație directă"
  ],
  correctIndex: 1
},
{
  question: "Care gaz este principalul responsabil pentru efectul de seră?",
  options: [
    "Oxigen",
    "Azot",
    "Dioxid de carbon",
    "Hidrogen"
  ],
  correctIndex: 2
},
{
  question: "Ce continent are cea mai mare suprafață?",
  options: [
    "Africa",
    "America de Nord",
    "Asia",
    "Europa"
  ],
  correctIndex: 2
},
{
  question: "Cine a pictat Capela Sixtină?",
  options: [
    "Leonardo da Vinci",
    "Rafael",
    "Michelangelo",
    "Donatello"
  ],
  correctIndex: 2
},
{
  question: "Ce este ADN-ul?",
  options: [
    "O proteină",
    "Un tip de celulă",
    "Material genetic",
    "Un hormon"
  ],
  correctIndex: 2
},
{
  question: "Care este cel mai mare ocean al lumii?",
  options: [
    "Atlantic",
    "Indian",
    "Pacific",
    "Arctic"
  ],
  correctIndex: 2
},
{
  question: "Ce oraș este considerat leagănul democrației?",
  options: [
    "Roma",
    "Sparta",
    "Atena",
    "Corint"
  ],
  correctIndex: 2
},
{
  question: "Ce organ produce insulina?",
  options: [
    "Ficatul",
    "Pancreasul",
    "Rinichii",
    "Stomacul"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Argentinei?",
  options: [
    "Montevideo",
    "Santiago",
    "Buenos Aires",
    "Lima"
  ],
  correctIndex: 2
},
{
  question: "Ce invenție este atribuită lui Johannes Gutenberg?",
  options: [
    "Busola",
    "Tiparul",
    "Praful de pușcă",
    "Ceasul mecanic"
  ],
  correctIndex: 1
},
{
  question: "Care este cea mai mare deșert din lume?",
  options: [
    "Sahara",
    "Gobi",
    "Kalahari",
    "Antarctica"
  ],
  correctIndex: 3
},
{
  question: "Ce parte a plantei realizează fotosinteza?",
  options: [
    "Rădăcina",
    "Tulpina",
    "Frunza",
    "Floarea"
  ],
  correctIndex: 2
},
{
  question: "Ce stat a declanșat Al Doilea Război Mondial?",
  options: [
    "Italia",
    "Japonia",
    "Germania",
    "URSS"
  ],
  correctIndex: 2
},
{
  question: "Ce este gravitația?",
  options: [
    "O reacție chimică",
    "O forță de atracție",
    "Un tip de energie",
    "Un fenomen electric"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Coreei de Sud?",
  options: [
    "Tokyo",
    "Phenian",
    "Seoul",
    "Hong Kong"
  ],
  correctIndex: 2
},
{
  question: "Ce sistem solar are Pământul?",
  options: [
    "Binar",
    "Trinar",
    "Cu o singură stea",
    "Artificial"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost primul împărat roman?",
  options: [
    "Cezar",
    "Nero",
    "Augustus",
    "Traian"
  ],
  correctIndex: 2
},
{
  question: "Ce este o constituție?",
  options: [
    "Un cod penal",
    "Legea fundamentală a statului",
    "Un decret militar",
    "Un tratat internațional"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Greciei?",
  options: [
    "Salonic",
    "Atena",
    "Patras",
    "Heraklion"
  ],
  correctIndex: 1
},
{
  question: "Ce planetă are cei mai mulți sateliți naturali?",
  options: [
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptun"
  ],
  correctIndex: 1
},
{
  question: "Ce rol are ficatul?",
  options: [
    "Respirația",
    "Digestia și detoxifierea",
    "Circulația sângelui",
    "Coordonarea nervoasă"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Egiptului?",
  options: [
    "Alexandria",
    "Giza",
    "Cairo",
    "Luxor"
  ],
  correctIndex: 2
},
{
  question: "Ce este o galaxie?",
  options: [
    "O stea",
    "Un sistem de planete",
    "Un grup de stele",
    "Un asteroid"
  ],
  correctIndex: 2
},
{
  question: "Cine a scris 'Divina Comedie'?",
  options: [
    "Petrarca",
    "Boccaccio",
    "Dante Alighieri",
    "Machiavelli"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Libiei?",
  options: [
    "Tripoli",
    "Cairo",
    "Beirut",
    "Rabat"
  ],
  correctIndex: 0
},
{
  question: "Ce tip de celule transportă oxigenul în sânge?",
  options: [
    "Leucocite",
    "Trombocite",
    "Eritrocite",
    "Plasmă"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost autorul teoriei evoluției prin selecție naturală?",
  options: [
    "Gregor Mendel",
    "Charles Darwin",
    "Louis Pasteur",
    "Isaac Newton"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Belgiei?",
  options: [
    "Luxemburg",
    "Bruges",
    "Bruxelles",
    "Gent"
  ],
  correctIndex: 2
},
{
  question: "Ce metal este lichid la temperatura camerei?",
  options: [
    "Fier",
    "Mercur",
    "Aluminiu",
    "Cupru"
  ],
  correctIndex: 1
},
{
  question: "Ce munți separă Europa de Asia?",
  options: [
    "Alpii",
    "Carpații",
    "Munții Ural",
    "Pirineii"
  ],
  correctIndex: 2
},
{
  question: "Ce parte a creierului controlează echilibrul?",
  options: [
    "Cerebrul",
    "Hipotalamusul",
    "Cerebelul",
    "Trunchiul cerebral"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Australiei?",
  options: [
    "Sydney",
    "Melbourne",
    "Canberra",
    "Ottawa"
  ],
  correctIndex: 2
},
{
  question: "Ce invenție a făcut posibilă Revoluția Industrială?",
  options: [
    "Motorul cu abur",
    "Busola",
    "Tiparul",
    "Telegraful"
  ],
  correctIndex: 0
},
{
  question: "Care este cel mai lung fluviu din lume?",
  options: [
    "Amazon",
    "Nil",
    "Mississippi",
    "Volga"
  ],
  correctIndex: 0
},
{
  question: "Ce este fotosinteza?",
  options: [
    "Respirația plantelor",
    "Procesul prin care plantele produc energie folosind lumina",
    "Absorbția apei",
    "Reproducerea plantelor"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Irlandei?",
  options: [
    "Cork",
    "Belfast",
    "Dublin",
    "Galway"
  ],
  correctIndex: 2
},
{
  question: "Ce organ este responsabil pentru filtrarea sângelui?",
  options: [
    "Ficatul",
    "Plămânii",
    "Rinichii",
    "Inima"
  ],
  correctIndex: 2
},
{
  question: "Ce eveniment a marcat începutul Evului Mediu?",
  options: [
    "Descoperirea Americii",
    "Căderea Constantinopolului",
    "Căderea Imperiului Roman de Apus",
    "Revoluția Franceză"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Finlandei?",
  options: [
    "Stockholm",
    "Oslo",
    "Helsinki",
    "Tallinn"
  ],
  correctIndex: 2
},
{
  question: "Ce gaz este esențial pentru respirația umană?",
  options: [
    "Azot",
    "Hidrogen",
    "Oxigen",
    "Heliu"
  ],
  correctIndex: 2
},
{
  question: "Cine a fost primul om care a ajuns pe Lună?",
  options: [
    "Buzz Aldrin",
    "Yuri Gagarin",
    "Neil Armstrong",
    "Michael Collins"
  ],
  correctIndex: 2
},
{
  question: "Ce formă de guvernământ are România?",
  options: [
    "Republică",
    "Monarhie",
    "Imperiu",
    "Federație"
  ],
  correctIndex: 0
},
{
  question: "Care este capitala Cehiei?",
  options: [
    "Berna",
    "Praga",
    "Bratislava",
    "Vienna"
  ],
  correctIndex: 1
},
{
  question: "Ce știință studiază cutremurele?",
  options: [
    "Meteorologia",
    "Astronomia",
    "Geologia",
    "Seismologia"
  ],
  correctIndex: 3
},
{
  question: "Ce planetă este cunoscută ca „Planeta Albastră”?",
  options: [
    "Venus",
    "Pământul",
    "Neptun",
    "Uranus"
  ],
  correctIndex: 1
},
{
  question: "Care este capitala Ungariei?",
  options: [
    "Debrecen",
    "Szeged",
    "Budapesta",
    "Pécs"
  ],
  correctIndex: 2
},
{
  question: "Ce este o eclipsă de Lună?",
  options: [
    "Luna acoperă Soarele",
    "Pământul se află între Soare și Lună",
    "Soarele dispare temporar",
    "O furtună solară"
  ],
  correctIndex: 1
},
{
  question: "Cine a formulat legile mișcării?",
  options: [
    "Albert Einstein",
    "Galileo Galilei",
    "Isaac Newton",
    "Nikola Tesla"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Croației?",
  options: [
    "Rejkjavik",
    "Dubrovnik",
    "Zagreb",
    "Rijeka"
  ],
  correctIndex: 2
},
{
  question: "Care este capitala Turciei?",
  options: [
    "Istanbul",
    "Izmir",
    "Ankara",
    "Antalya"
  ],
  correctIndex: 2
},
{
  question: "Taj Mahal-ul a fost construit cu funcția de:",
  options: [
    "Palat regal",
    "Templu hindus",
    "Mausoleu",
    "Fortăreață"
  ],
  correctIndex: 2
},
{
  question: "Alianța Nord-Atlantică (NATO) este:",
  options: [
    "O organizație economică",
    "O alianță politico-militară defensivă a statelor democratice occidentale",
    "Un tribunal internațional",
    "O organizație culturală"
  ],
  correctIndex: 1
},
{
  question: "În ce context a rostit Iulius Cezar 'Zarurile au fost aruncate'?",
  options: [
    "La traversarea Rubiconului",
    "După cucerirea Galiei",
    "În momentul asasinării sale",
    "La încoronarea ca împărat"
  ],
  correctIndex: 0
},
{
  question: "Curentul electric alternativ a fost promovat de:",
  options: [
    "Thomas Edison",
    "Alessandro Volta",
    "Nikola Tesla",
    "James Watt"
  ],
  correctIndex: 2
},
{
  question: "Cea mai fierbinte planetă din Sistemul Solar este:",
  options: [
    "Mercur",
    "Venus",
    "Marte",
    "Jupiter"
  ],
  correctIndex: 1
},
{
  question: "Procesul de Decolonizare (post-1945) a dus la:",
  options: [
    "Extinderea imperiului britanic",
    "Apariția a zeci de state independente în Asia și Africa",
    "Colonizarea Antarcticii",
    "Dispariția ONU"
  ],
  correctIndex: 1
},
{
  question: "Care a fost factorul decisiv în succesul militar al lui Genghis Han?",
  options: [
    "Utilizarea mercenarilor europeni",
    "Diplomația pașnică",
    "Construirea de fortificații masive",
    "Mobilitatea cavaleriei și meritocrația militară"
  ],
  correctIndex: 3
},
{
  question: "Capitala Canadei este:",
  options: [
    "Toronto",
    "Montreal",
    "Ottawa",
    "Vancouver"
  ],
  correctIndex: 2
},
{
  question: "Orașul antic Petra este faimos pentru:",
  options: [
    "Piramidele sale de sticlă",
    "Structurile săpate direct în stâncă",
    "Grădinile plutitoare",
    "Zidurile sale de apărare"
  ],
  correctIndex: 1
},
{
  question: "Criza Rachetelor din Cuba (1962) este momentul în care:",
  options: [
    "Fidel Castro a fost înlăturat",
    "Omenirea a fost cel mai aproape de un război nuclear între SUA și URSS",
    "Cuba a devenit stat american",
    "S-a inventat internetul"
  ],
  correctIndex: 1
},
{
  question: "Otto von Bismarck a realizat unificarea Germaniei prin:",
  options: [
    "Diplomație culturală",
    "Realpolitik",
    "Liberalism economic",
    "Pacifism religios"
  ],
  correctIndex: 1
},
{
  question: "Hertz-ul (Hz) este unitatea de măsură pentru:",
  options: [
    "Putere",
    "Frecvență",
    "Tensiune",
    "Rezistență"
  ],
  correctIndex: 1
},
{
  question: "O eclipsă de Soare are loc atunci când:",
  options: [
    "Pământul se află între Soare și Lună",
    "Luna trece între Pământ și Soare",
    "Soarele își pierde intensitatea",
    "O altă planetă blochează lumina"
  ],
  correctIndex: 1
},
{
  question: "Căderea Zidului Berlinului (1989) simbolizează:",
  options: [
    "Începutul Războiului Rece",
    "Prăbușirea „Cortinei de Fier” și sfârșitul divizării Europei",
    "Construirea unei noi fortificații",
    "Separarea Germaniei"
  ],
  correctIndex: 1
},
{
  question: "Ce document fundamental a emis Abraham Lincoln în timpul Războiului Civil?",
  options: [
    "Declarația de Independență",
    "Proclamația de Emancipare",
    "Constituția Statelor Unite",
    "Tratatul de la Versailles"
  ],
  correctIndex: 1
},
{
  question: "Cine a descoperit radioactivitatea?",
  options: [
    "Albert Einstein",
    "Isaac Newton",
    "Henri Becquerel",
    "Galileo Galilei"
  ],
  correctIndex: 2
},
{
  question: "Capitala Braziliei este:",
  options: [
    "Rio de Janeiro",
    "São Paulo",
    "Brasilia",
    "Salvador"
  ],
  correctIndex: 2
},
{
  question: "Catedrala Sagrada Família este opera arhitectului:",
  options: [
    "Pablo Picasso",
    "Salvador Dalí",
    "Antoni Gaudí",
    "Santiago Calatrava"
  ],
  correctIndex: 2
},
{
  question: "Apartheidul din Africa de Sud a fost:",
  options: [
    "Un sistem de segregare rasială instituționalizată",
    "O reformă agrară",
    "Un tratat de pace cu vecinii",
    "Un festival cultural"
  ],
  correctIndex: 0
},
{
  question: "Discursul lui Winston Churchill de la Fulton a popularizat termenul:",
  options: [
    "Război Rece",
    "Cortina de Fier",
    "Planul Marshall",
    "Națiunile Unite"
  ],
  correctIndex: 1
},
{
  question: "Sputnik 1 a fost:",
  options: [
    "Primul om în spațiu",
    "Prima stație spațială",
    "Primul satelit artificial al Pământului",
    "Prima sondă pe Marte"
  ],
  correctIndex: 2
},
{
  question: "Atentatele de la 11 septembrie 2001 au declanșat:",
  options: [
    "Desființarea NATO",
    "„Războiul împotriva terorismului”",
    "Închiderea granițelor aeriene",
    "Pacea mondială"
  ],
  correctIndex: 1
},
{
  question: "Mustafa Kemal Atatürk este considerat părintele Turciei moderne deoarece:",
  options: [
    "A restaurat Imperiul Otoman",
    "A transformat țara într-o republică seculară",
    "A cucerit teritorii noi în Balcani",
    "A instaurat o teocrație islamică"
  ],
  correctIndex: 1
},
{
  question: "Capitala Elveției (de facto) este:",
  options: [
    "Zurich",
    "Geneva",
    "Berna",
    "Basel"
  ],
  correctIndex: 2
},
{
  question: "Marele Zid Chinezesc a fost construit pentru:",
  options: [
    "Delimitarea granițelor comerciale",
    "Protecția împotriva invaziilor triburilor nomade",
    "Prevenirea inundațiilor",
    "Ceremonii religioase"
  ],
  correctIndex: 1
},
{
question: "Ce înseamnă cuvântul românesc prolix?",
options: ["Scurt și concis", "Excesiv de lung în exprimare", "Ambiguu", "Neclar"],
correctIndex: 1
},
{
question: "Ce înseamnă cuvântul eretic?",
options: ["Tradiționalist", "Credincios devotat", "Care se abate de la dogmă", "Neutru religios"],
correctIndex: 2
},
{
question: "Ce semnifică termenul paradigmatic?",
options: ["Lipsit de sens", "Care servește drept model", "Contradictoriu", "Aleatoriu"],
correctIndex: 1
},
{
question: "Ce înseamnă cuvântul inefabil?",
options: ["Ușor de descris", "De neînțeles", "Care nu poate fi exprimat în cuvinte", "Lipsit de valoare"],
correctIndex: 2
},
{
question: "Ce înseamnă vetust?",
options: ["Modern", "Foarte vechi și uzat", "Fragil", "Strălucitor"],
correctIndex: 1
},
{
question: "Ce semnifică adjectivul laconic?",
options: ["Vorbește mult", "Ambiguu", "Se exprimă concis", "Nervos"],
correctIndex: 2
},
{
question: "Ce înseamnă cuvântul peremptoriu?",
options: ["Opțional", "Evitabil", "Imperativ, categoric", "Neclar"],
correctIndex: 2
},
{
question: "Ce sens are ubuesc?",
options: ["Realist", "Logic", "Absurd și grotesc", "Tragic"],
correctIndex: 2
},
{
question: "Ce înseamnă incongruent?",
options: ["Potrivit", "Care nu se potrivește", "Identic", "Simetric"],
correctIndex: 1
},
{
question: "Ce înseamnă termenul apodictic?",
options: ["Ipoteză", "Opinabil", "Demonstrat cu certitudine", "Subiectiv"],
correctIndex: 2
},

{
question: "What does the English word obfuscate mean?",
options: ["To clarify", "To simplify", "To deliberately make unclear", "To repeat"],
correctIndex: 2
},
{
question: "What is the meaning of ubiquitous?",
options: ["Rare", "Present everywhere", "Dangerous", "Temporary"],
correctIndex: 1
},
{
question: "What does esoteric refer to?",
options: ["Widely known", "Superficial", "Understood by a select few", "Obsolete"],
correctIndex: 2
},
{
question: "What does the word intransigent mean?",
options: ["Flexible", "Open-minded", "Unwilling to compromise", "Indecisive"],
correctIndex: 2
},
{
question: "What does ephemeral mean?",
options: ["Long-lasting", "Permanent", "Short-lived", "Repetitive"],
correctIndex: 2
},
{
question: "What does perspicacious describe?",
options: ["Careless", "Short-sighted", "Highly perceptive", "Stubborn"],
correctIndex: 2
},
{
question: "What is the meaning of pulchritude?",
options: ["Strength", "Beauty", "Complexity", "Wisdom"],
correctIndex: 1
},
{
question: "What does recalcitrant mean?",
options: ["Obedient", "Compliant", "Resistant to authority", "Cooperative"],
correctIndex: 2
},
{
question: "What does the word loquacious describe?",
options: ["Silent", "Talkative", "Angry", "Reserved"],
correctIndex: 1
},
{
question: "What does nefarious mean?",
options: ["Harmless", "Honorable", "Wicked or criminal", "Uncertain"],
correctIndex: 2
},
{
question: "Ce animal are cea mai mare inimă din regnul animal?",
options: ["Elefantul african", "Balena albastră", "Hipopotamul", "Rechinul-balenă"],
correctIndex: 1
},
{
question: "Ce specie de pasăre poate zbura înapoi?",
options: ["Rândunica", "Colibri", "Albatrosul", "Șoimul"],
correctIndex: 1
},
{
question: "Ce animal poate supraviețui în vidul spațiului pentru o perioadă scurtă?",
options: ["Acarianul", "Furnica", "Tardigradul", "Scorpionul"],
correctIndex: 2
},
{
question: "Ce mamifer marin doarme cu o jumătate de creier activă?",
options: ["Balena", "Delfinul", "Foca", "Lamantinul"],
correctIndex: 1
},
{
question: "Ce animal are sângele albastru datorită hemocianinei?",
options: ["Caracatița", "Peștele-spadă", "Meduza", "Rechinul"],
correctIndex: 0
},
{
question: "Ce specie poate detecta câmpul magnetic al Pământului?",
options: ["Ursul polar", "Porumbelul călător", "Câinele", "Broasca"],
correctIndex: 1
},
{
question: "Ce animal are cea mai mare forță relativă la greutatea sa?",
options: ["Leul", "Gândacul rinocer", "Furnica", "Cangurul"],
correctIndex: 2
},
{
question: "Ce reptilă are capacitatea de a-și schimba culoarea pentru camuflaj?",
options: ["Iguana", "Șarpele boa", "Cameleonul", "Gecko"],
correctIndex: 2
},
{
question: "Ce animal este cunoscut pentru memoria sa excepțională?",
options: ["Calul", "Delfinul", "Elefantul", "Ursul"],
correctIndex: 2
},
{
question: "Ce insectă comunică prin dans pentru a indica surse de hrană?",
options: ["Furnica", "Albina", "Viespea", "Lăcusta"],
correctIndex: 1
},

{
question: "Ce proces permite plantelor să producă energie folosind lumina solară?",
options: ["Respirația", "Transpirația", "Fotosinteza", "Fermentația"],
correctIndex: 2
},
{
question: "Ce pigment este responsabil pentru culoarea verde a plantelor?",
options: ["Carotenul", "Xantofila", "Clorofila", "Antocianina"],
correctIndex: 2
},
{
question: "Ce parte a plantei este responsabilă de absorbția apei și mineralelor?",
options: ["Tulpina", "Frunza", "Floarea", "Rădăcina"],
correctIndex: 3
},
{
question: "Ce tip de plante își pierd frunzele toamna?",
options: ["Conifere", "Plante perene", "Plante anuale", "Plante foioase"],
correctIndex: 3
},
{
question: "Ce gaz este absorbit de plante în timpul fotosintezei?",
options: ["Oxigen", "Azot", "Dioxid de carbon", "Hidrogen"],
correctIndex: 2
},
{
question: "Ce plantă este cunoscută pentru capacitatea de a prinde insecte?",
options: ["Feriga", "Floarea-soarelui", "Planta carnivoră", "Laleaua"],
correctIndex: 2
},
{
question: "Ce structură a florii produce semințele?",
options: ["Petala", "Stamina", "Sepala", "Ovarul"],
correctIndex: 3
},
{
question: "Ce tip de reproducere folosesc plantele cu flori?",
options: ["Asexuată", "Vegetativă", "Sexuată", "Clonare"],
correctIndex: 2
},
{
question: "Ce plantă este cea mai înaltă din lume?",
options: ["Sequoia", "Baobabul", "Eucaliptul", "Pinul"],
correctIndex: 0
},
{
question: "Ce rol au stomatele frunzelor?",
options: ["Fotosinteză", "Reproducere", "Schimb de gaze", "Depozitare"],
correctIndex: 2
},
{
question: "Care componentă a motorului transformă mișcarea liniară a pistonului în mișcare de rotație?",
options: ["Arborele cu came", "Volanta", "Arborele cotit", "Biela"],
correctIndex: 2
},
{
question: "Ce rol are turbocompresorul într-un motor?",
options: ["Reduce consumul de ulei", "Crește cantitatea de aer admisă", "Răcește motorul", "Reduce zgomotul"],
correctIndex: 1
},
{
question: "Ce tip de tracțiune oferă cea mai bună stabilitate pe drumuri alunecoase?",
options: ["Tracțiune față", "Tracțiune spate", "Tracțiune integrală", "Tracțiune hibridă"],
correctIndex: 2
},
{
question: "Ce componentă este responsabilă de oprirea vehiculului?",
options: ["Ambreiajul", "Sistemul de frânare", "Cutia de viteze", "Diferențialul"],
correctIndex: 1
},
{
question: "Ce se întâmplă dacă raportul aer–combustibil este prea bogat?",
options: ["Crește eficiența", "Scade consumul", "Crește consumul și emisiile", "Motorul se oprește instant"],
correctIndex: 2
},
{
question: "Care este rolul diferențialului?",
options: ["Schimbă treptele de viteză", "Permite roților să se rotească la viteze diferite", "Răcește transmisia", "Crește cuplul motor"],
correctIndex: 1
},
{
question: "Ce tip de motor este cel mai eficient din punct de vedere termic?",
options: ["Motor pe benzină", "Motor diesel", "Motor în doi timpi", "Motor electric"],
correctIndex: 1
},
{
question: "Ce senzor măsoară cantitatea de oxigen din gazele de eșapament?",
options: ["Senzor MAP", "Senzor MAF", "Senzor lambda", "Senzor ABS"],
correctIndex: 2
},
{
question: "Ce funcție are ambreiajul?",
options: ["Crește viteza maximă", "Leagă și separă motorul de transmisie", "Controlează frânarea", "Reduce vibrațiile"],
correctIndex: 1
},
{
question: "Ce tip de cutie de viteze schimbă automat treptele fără intervenția șoferului?",
options: ["Manuală", "CVT", "Automată", "Secvențială"],
correctIndex: 2
},

{
question: "Ce organizație este responsabilă de securitatea colectivă transatlantică?",
options: ["ONU", "UE", "NATO", "OSCE"],
correctIndex: 2
},
{
question: "Ce strâmtoare este esențială pentru transportul global de petrol?",
options: ["Gibraltar", "Bosfor", "Hormuz", "Malacca"],
correctIndex: 2
},
{
question: "Ce stat are cel mai mare număr de focoase nucleare?",
options: ["SUA", "China", "Franța", "Rusia"],
correctIndex: 3
},
{
question: "Ce concept descrie competiția pentru influență globală dintre marile puteri?",
options: ["Globalizare", "Echilibru de putere", "Izolaționism", "Federalism"],
correctIndex: 1
},
{
question: "Ce regiune este revendicată simultan de mai multe state asiatice?",
options: ["Marea Neagră", "Marea Chinei de Sud", "Marea Baltică", "Golful Persic"],
correctIndex: 1
},
{
question: "Ce alianță economică include Brazilia, Rusia, India, China și Africa de Sud?",
options: ["G7", "ASEAN", "BRICS", "NAFTA"],
correctIndex: 2
},
{
question: "Ce stat este considerat pivot geopolitic între Europa și Asia?",
options: ["Grecia", "Turcia", "Italia", "Spania"],
correctIndex: 1
},
{
question: "Ce document stabilește drepturile statelor asupra apelor maritime?",
options: ["Carta ONU", "Convenția de la Geneva", "UNCLOS", "Tratatul de la Maastricht"],
correctIndex: 2
},
{
question: "Ce conflict a început în 2014 prin anexarea Crimeei?",
options: ["Războiul din Siria", "Conflictul Rusia–Ucraina", "Războiul din Irak", "Conflictul din Caucaz"],
correctIndex: 1
},
{
question: "Ce putere este descrisă ca fiind „soft power”?",
options: ["Forța militară", "Influența culturală și diplomatică", "Controlul resurselor", "Supremația economică"],
correctIndex: 1
},

{
question: "Ce limbaj este utilizat în principal pentru dezvoltarea web frontend?",
options: ["Python", "Java", "JavaScript", "C++"],
correctIndex: 2
},
{
question: "Ce este un algoritm?",
options: ["Un limbaj de programare", "O bază de date", "Un set de pași pentru rezolvarea unei probleme", "Un sistem de operare"],
correctIndex: 2
},
{
question: "Ce protocol este folosit pentru securizarea comunicațiilor web?",
options: ["HTTP", "FTP", "SMTP", "HTTPS"],
correctIndex: 3
},
{
question: "Ce componentă hardware execută instrucțiunile unui program?",
options: ["RAM", "SSD", "CPU", "GPU"],
correctIndex: 2
},
{
question: "Ce înseamnă termenul „open-source”?",
options: ["Software gratuit", "Software fără licență", "Cod accesibil publicului", "Software offline"],
correctIndex: 2
},
{
question: "Ce tip de memorie se pierde la oprirea calculatorului?",
options: ["ROM", "SSD", "HDD", "RAM"],
correctIndex: 3
},
{
question: "Ce este o bază de date?",
options: ["Un limbaj de programare", "O colecție organizată de date", "Un sistem de operare", "Un server fizic"],
correctIndex: 1
},
{
question: "Ce rol are firewall-ul?",
options: ["Crește viteza internetului", "Stochează date", "Protejează rețeaua", "Actualizează software-ul"],
correctIndex: 2
},
{
question: "Ce companie a creat sistemul de operare Linux?",
options: ["Microsoft", "Apple", "Nicio companie", "IBM"],
correctIndex: 2
},
{
question: "Ce este inteligența artificială?",
options: ["Un tip de hardware", "Simularea inteligenței umane de către mașini", "Un limbaj de programare", "Un virus informatic"],
correctIndex: 1
},

{
question: "Care este cel mai mare animal terestru?",
options: ["Rinocerul", "Hipopotamul", "Elefantul african", "Girafa"],
correctIndex: 2
},
{
question: "Ce animal are cea mai mare speranță de viață?",
options: ["Elefantul", "Broasca țestoasă gigant", "Balena albastră", "Rechinul alb"],
correctIndex: 1
},
{
question: "Ce specie este cunoscută pentru folosirea uneltelor?",
options: ["Câinele", "Delfinul", "Leul", "Calul"],
correctIndex: 1
},
{
question: "Ce animal poate regenera membre pierdute?",
options: ["Șarpele", "Salamandra", "Crocodilul", "Țestoasa"],
correctIndex: 1
},
{
question: "Care este cel mai rapid animal terestru?",
options: ["Leopardul", "Antilopa", "Ghepardul", "Lupul"],
correctIndex: 2
},
{
question: "Ce animal are cea mai puternică mușcătură?",
options: ["Leul", "Rechinul alb", "Hipopotamul", "Crocodilul de Nil"],
correctIndex: 3
},
{
question: "Ce mamifer este capabil de zbor?",
options: ["Liliacul", "Veveța zburătoare", "Pasărea colibri", "Pterodactilul"],
correctIndex: 0
},
{
question: "Ce animal folosește ecolocația pentru orientare?",
options: ["Pisica", "Delfinul", "Elefantul", "Ursul"],
correctIndex: 1
},
{
question: "Ce specie este considerată cea mai inteligentă după om?",
options: ["Cimpanzeul", "Delfinul", "Elefantul", "Papagalul"],
correctIndex: 1
},
{
question: "Ce animal poate trăi cel mai mult fără apă?",
options: ["Cămila", "Șobolanul cangur", "Cobra", "Broasca de deșert"],
correctIndex: 1
},
  {
    question: "Ce proces celular permite formarea gameților?",
    options: [
      "Mitoza",
      "Meioza",
      "Apoptoza",
      "Diferențierea"
    ],
    correctIndex: 1
  },
  {
    question: "Care structură celulară este implicată direct în sinteza proteinelor?",
    options: [
      "Lizozomii",
      "Ribozomii",
      "Centriolii",
      "Aparatul Golgi"
    ],
    correctIndex: 1
  },
  {
    question: "Ce tip de legătură stabilizează structura secundară a proteinelor?",
    options: [
      "Legături ionice",
      "Legături covalente",
      "Legături de hidrogen",
      "Forțe Van der Waals"
    ],
    correctIndex: 2
  },
  {
    question: "Ce rol are enzima ADN-polimerază?",
    options: [
      "Transcrierea ARN",
      "Repararea proteinelor",
      "Replicarea ADN-ului",
      "Traducerea proteinelor"
    ],
    correctIndex: 2
  },
  {
    question: "Ce sistem al corpului uman este responsabil de homeostazie hormonală?",
    options: [
      "Nervos",
      "Digestiv",
      "Endocrin",
      "Limfatic"
    ],
    correctIndex: 2
  },
  {
    question: "Ce structură cerebrală este implicată în coordonarea mișcărilor?",
    options: [
      "Hipotalamus",
      "Trunchiul cerebral",
      "Cerebelul",
      "Amigdala"
    ],
    correctIndex: 2
  },
  {
    question: "Ce proces permite celulelor să obțină energie în absența oxigenului?",
    options: [
      "Respirația aerobă",
      "Fotosinteza",
      "Fermentația",
      "Oxidarea fosforilativă"
    ],
    correctIndex: 2
  },
  {
    question: "Care este funcția principală a hemoglobinei?",
    options: [
      "Digestia proteinelor",
      "Transportul oxigenului",
      "Apărarea imunitară",
      "Coagularea sângelui"
    ],
    correctIndex: 1
  },
  {
    question: "Ce organ este afectat în mod direct de ciroză?",
    options: [
      "Rinichiul",
      "Plămânul",
      "Ficatul",
      "Pancreasul"
    ],
    correctIndex: 2
  },
  {
    question: "Ce tip de mutație modifică cadrul de citire al unei gene?",
    options: [
      "Mutație punctuală",
      "Deleție sau inserție",
      "Rearanjare cromozomială",
      "Translocație"
    ],
    correctIndex: 1
  },
  {
    question: "Care oraș este considerat capitala financiară a Uniunii Europene?",
    options: [
      "Paris",
      "Frankfurt",
      "Bruxelles",
      "Amsterdam"
    ],
    correctIndex: 1
  },
  {
    question: "Petra a fost capitala antică a regatului:",
    options: [
      "Asirian",
      "Persan",
      "Nabateean",
      "Hitit"
    ],
    correctIndex: 2
  },
  {
    question: "Care oraș a fost construit pe aproximativ 118 insule interconectate prin canale?",
    options: [
      "Amsterdam",
      "Stockholm",
      "Veneția",
      "Sankt Petersburg"
    ],
    correctIndex: 2
  },
  {
    question: "Care dintre următoarele orașe a fost cunoscut în Antichitate ca Bizanț?",
    options: [
      "Atena",
      "Roma",
      "Istanbul",
      "Sofia"
    ],
    correctIndex: 2
  },
  {
    question: "Marele Zid Chinezesc a fost construit predominant în timpul dinastiei:",
    options: [
      "Han",
      "Tang",
      "Ming",
      "Qing"
    ],
    correctIndex: 2
  },
  {
    question: "Care oraș este considerat leagănul democrației?",
    options: [
      "Roma",
      "Sparta",
      "Atena",
      "Corint"
    ],
    correctIndex: 2
  },
  {
    question: "Angkor Wat a fost inițial dedicat zeului:",
    options: [
      "Buddha",
      "Shiva",
      "Vishnu",
      "Brahma"
    ],
    correctIndex: 2
  },
  {
    question: "Care oraș a fost distrus aproape complet de erupția Vezuviului din anul 79 d.Hr.?",
    options: [
      "Pompeii",
      "Neapolis",
      "Capua",
      "Syracuse"
    ],
    correctIndex: 0
  },
  {
    question: "Care oraș este cunoscut drept „Orașul Interzis” datorită palatului imperial?",
    options: [
      "Kyoto",
      "Beijing",
      "Seul",
      "Shanghai"
    ],
    correctIndex: 1
  },
  {
    question: "Care oraș a fost capitala Imperiului Inca?",
    options: [
      "Lima",
      "Quito",
      "Cusco",
      "La Paz"
    ],
    correctIndex: 2
  },
  {
    question: "Care macronutrient are cea mai mare densitate calorică?",
    options: [
      "Proteinele",
      "Carbohidrații",
      "Lipidele",
      "Alcoolul"
    ],
    correctIndex: 2
  },
  {
    question: "Ce rol are insulina în metabolism?",
    options: [
      "Crește glicemia",
      "Favorizează depozitarea glucozei în celule",
      "Inhibă sinteza proteinelor",
      "Activează arderea grăsimilor"
    ],
    correctIndex: 1
  },
  {
    question: "Care vitamină este esențială pentru coagularea sângelui?",
    options: [
      "Vitamina A",
      "Vitamina C",
      "Vitamina K",
      "Vitamina D"
    ],
    correctIndex: 2
  },
  {
    question: "Ce tip de acizi grași sunt considerați esențiali?",
    options: [
      "Saturați",
      "Mononesaturați",
      "Omega-3 și Omega-6",
      "Trans"
    ],
    correctIndex: 2
  },
  {
    question: "Ce mineral este implicat direct în transmiterea impulsului nervos și contracția musculară?",
    options: [
      "Fier",
      "Calciu",
      "Zinc",
      "Seleniu"
    ],
    correctIndex: 1
  },
  {
    question: "Care ramură de drept reglementează raporturile dintre stat și cetățean?",
    options: [
      "Drept civil",
      "Drept penal",
      "Drept constituțional",
      "Drept comercial"
    ],
    correctIndex: 2
  },
  {
    question: "Care este principiul fundamental al procesului penal?",
    options: [
      "Prezumpția de vinovăție",
      "Egalitatea pedepselor",
      "Prezumpția de nevinovăție",
      "Autoritatea absolută a statului"
    ],
    correctIndex: 2
  },
  {
    question: "Ce instituție este garantul Constituției într-un stat de drept?",
    options: [
      "Parlamentul",
      "Guvernul",
      "Curtea Constituțională",
      "Președinția"
    ],
    correctIndex: 2
  },
  {
    question: "Care este scopul principal al dreptului penal?",
    options: [
      "Reglementarea comerțului",
      "Protejarea ordinii sociale prin sancționarea infracțiunilor",
      "Stabilirea impozitelor",
      "Organizarea administrației publice"
    ],
    correctIndex: 1
  },
  {
    question: "Ce act juridic fundamental stă la baza drepturilor și libertăților cetățenești?",
    options: [
      "Codul Civil",
      "Codul Penal",
      "Constituția",
      "Hotărârile judecătorești"
    ],
    correctIndex: 2
  },
{
  question: "Care organ este principalul responsabil pentru detoxifierea organismului?",
  options: ["Ficatul", "Rinichiul", "Splina", "Pancreasul"],
  correctIndex: 0
},
{
  question: "Ce structură celulară este responsabilă de producerea ATP-ului?",
  options: ["Nucleul", "Aparatul Golgi", "Ribozomul", "Mitocondria"],
  correctIndex: 3
},
{
  question: "Ce tip de imunitate este dobândită prin vaccinare?",
  options: ["Imunitate activă artificială", "Imunitate pasivă naturală", "Imunitate înnăscută", "Imunitate pasivă artificială"],
  correctIndex: 0
},
{
  question: "Care hormon reglează în principal ritmul somn–veghe?",
  options: ["Adrenalină", "Cortizol", "Insulină", "Melatonină"],
  correctIndex: 3
},
{
  question: "Ce componentă a sângelui este responsabilă de coagulare?",
  options: ["Plasma", "Plachetele", "Eritrocitele", "Leucocitele"],
  correctIndex: 1
},
{
  question: "Ce tip de țesut permite contracția voluntară?",
  options: ["Muscular striat", "Muscular cardiac", "Muscular neted", "Epithelial"],
  correctIndex: 0
},
{
  question: "Care este rolul principal al ADN-ului?",
  options: ["Transmiterea informației genetice", "Digestia proteinelor", "Transportul oxigenului", "Producerea energiei"],
  correctIndex: 0
},
{
  question: "Ce organ produce bila?",
  options: ["Ficatul", "Vezica biliară", "Pancreasul", "Duodenul"],
  correctIndex: 0
},
{
  question: "Ce sistem al organismului coordonează răspunsurile rapide?",
  options: ["Sistemul nervos", "Sistemul endocrin", "Sistemul limfatic", "Sistemul digestiv"],
  correctIndex: 0
},
{
  question: "Ce tip de respirație celulară produce cea mai mare cantitate de ATP?",
  options: ["Respirația aerobă", "Fermentația alcoolică", "Fermentația lactică", "Respirația anaerobă"],
  correctIndex: 0
},

{
  question: "Ce vitamină este sintetizată în piele sub acțiunea razelor UV?",
  options: ["Vitamina A", "Vitamina D", "Vitamina C", "Vitamina K"],
  correctIndex: 1
},
{
  question: "Ce rol au fibrele alimentare?",
  options: ["Încetinesc digestia și tranzitul intestinal", "Cresc glicemia", "Furnizează energie rapidă", "Cresc masa musculară"],
  correctIndex: 0
},
{
  question: "Care macronutrient este esențial pentru sinteza hormonilor steroizi?",
  options: ["Lipidele", "Proteinele", "Carbohidrații", "Fibrele"],
  correctIndex: 0
},
{
  question: "Ce mineral este cel mai important pentru transportul oxigenului?",
  options: ["Calciu", "Magneziu", "Zinc", "Fier"],
  correctIndex: 3
},
{
  question: "Ce indice este folosit pentru evaluarea obezității?",
  options: ["IMC", "VO2 max", "Glicemia", "Colesterolul HDL"],
  correctIndex: 0
},
{
  question: "Ce tip de carbohidrați au absorbție lentă?",
  options: ["Carbohidrați complecși", "Zaharuri simple", "Carbohidrați rafinați", "Fructoză"],
  correctIndex: 0
},
{
  question: "Ce aminoacizi trebuie obținuți din alimentație?",
  options: ["Aromatici", "Esențiali", "Neesențiali", "Polari"],
  correctIndex: 1
},
{
  question: "Ce hormon stimulează senzația de foame?",
  options: ["Leptina", "Insulina", "Grelina", "Glucagonul"],
  correctIndex: 2
},
{
  question: "Ce nutrient este sursa principală de energie în efort intens?",
  options: ["Carbohidrații", "Lipidele", "Proteinele", "Vitaminele"],
  correctIndex: 0
},
{
  question: "Ce dezechilibru duce la diabetul de tip 2?",
  options: ["Rezistență la insulină", "Hipertiroidism", "Hipoglicemie cronică", "Deficit absolut de insulină"],
  correctIndex: 0
},

{
  question: "Ce ramură a dreptului reglementează relațiile patrimoniale?",
  options: ["Drept civil", "Drept penal", "Drept constituțional", "Drept administrativ"],
  correctIndex: 0
},
{
  question: "Ce infracțiune presupune intenția de a suprima viața?",
  options: ["Lovirea", "Vătămarea corporală", "Neglijența", "Omorul"],
  correctIndex: 3
},
{
  question: "Ce autoritate exercită puterea executivă?",
  options: ["Parlamentul", "Guvernul", "Instanțele", "Curtea Constituțională"],
  correctIndex: 1
},
{
  question: "Ce principiu garantează aplicarea egală a legii?",
  options: ["Legalitatea", "Separarea puterilor", "Egalitatea în fața legii", "Autoritatea statului"],
  correctIndex: 2
},
{
  question: "Ce răspundere intervine pentru încălcarea unui contract?",
  options: ["Penală", "Administrativă", "Civilă", "Constituțională"],
  correctIndex: 2
},
{
  question: "Cine adoptă legile?",
  options: ["Parlamentul", "Guvernul", "Președintele", "Instanțele"],
  correctIndex: 0
},
{
  question: "Ce este jurisprudența?",
  options: ["Legi scrise", "Decizii ale instanțelor", "Acte administrative", "Tratate internaționale"],
  correctIndex: 1
},
{
  question: "Ce sancțiune este specifică dreptului penal?",
  options: ["Despăgubirea", "Amenda contravențională", "Anularea unui act", "Închisoarea"],
  correctIndex: 3
},
{
  question: "Libertatea de exprimare este un:",
  options: ["Drept politic", "Drept social", "Drept economic", "Drept civil"],
  correctIndex: 0
},
{
  question: "Ce act stabilește organizarea statului?",
  options: ["Constituția", "Codul Civil", "Codul Penal", "Hotărârile guvernului"],
  correctIndex: 0
},
{
  question: "Ce oraș este cunoscut drept „Orașul celor Șapte Coline”?",
  options: ["Roma", "Atena", "Istanbul", "Lisabona"],
  correctIndex: 0
},
{
  question: "Unde se află Machu Picchu?",
  options: ["Chile", "Bolivia", "Peru", "Mexic"],
  correctIndex: 2
},
{
  question: "Ce oraș găzduiește Opera din Sydney?",
  options: ["Sydney", "Melbourne", "Canberra", "Perth"],
  correctIndex: 0
},
{
  question: "Turnul Eiffel a fost construit pentru:",
  options: ["O expoziție mondială", "Apărare militară", "Observator astronomic", "Locuință regală"],
  correctIndex: 0
},
{
  question: "„La Serenissima” se referă la:",
  options: ["Amsterdam", "Bruges", "Veneția", "Copenhaga"],
  correctIndex: 2
},
{
  question: "Unde se află Taj Mahal?",
  options: ["India", "Pakistan", "Iran", "Bangladesh"],
  correctIndex: 0
},
{
  question: "Capitala culturală tradițională a Japoniei este:",
  options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
  correctIndex: 1
},
{
  question: "Statuia lui Hristos Mântuitorul se află în:",
  options: ["Buenos Aires", "Rio de Janeiro", "Santiago", "Lisabona"],
  correctIndex: 1
},
{
  question: "Muzeul Luvru se află în:",
  options: ["Madrid", "Roma", "Viena", "Paris"],
  correctIndex: 3
},
{
  question: "Wall Street se află în:",
  options: ["New York", "Londra", "Tokyo", "Frankfurt"],
  correctIndex: 0
}
  ],
  meteorology: [
    {
      id: 1,
      question: "What clouds and weather may result from an humid and instable air mass, that is pushed against a chain of mountains by the predominant wind and forced to rise?",
      options: [
        "Embedded CB with thunderstorms and showers of hail and/or rain.",
        "Thin Altostratus and Cirrostratus clouds with light and steady precipitation.",
        "Overcast low stratus (high fog) with no precipitation.",
        "Smooth, unstructured NS cloud with light drizzle or snow (during winter)."
      ],
      correctIndex: 0
    },
    {
      id: 2,
      question: "What type of fog emerges if humid and almost saturated air is forced to rise upslope of hills or shallow mountains by the prevailing wind?",
      options: [
        "Orographic fog",
        "Steaming fog",
        "Radiation fog",
        "Advection fog"
      ],
      correctIndex: 0
    },
    {
      id: 3,
      question: "What situation is called 'over-development' in a weather report?",
      options: [
        "Vertical development of Cumulus clouds to rain showers",
        "Widespreading of Cumulus clouds below an inversion layer",
        "Change from blue thermals to cloudy thermals during the afternoon",
        "Development of a thermal low to a storm depression"
      ],
      correctIndex: 0
    },
    {
      id: 4,
      question: "What is the gas composition of 'air'?",
      options: [
        "Oxygen 21%, Water vapour 78%, Noble gases / carbon dioxide 1%",
        "Oxygen 78%, Water vapour 21%, Nitrogen 1%",
        "Nitrogen 21%, Oxygen 78%, Noble gases / carbon dioxide 1%",
        "Oxygen 21%, Nitrogen 78%, Noble gases / carbon dioxide 1%"
      ],
      correctIndex: 3
    },
    {
      id: 5,
      question: "Weather phenomena are most common to be found in which atmospheric layer?",
      options: [
        "Stratosphere",
        "Tropopause",
        "Thermosphere",
        "Troposphere"
      ],
      correctIndex: 3
    },
    {
      id: 6,
      question: "What is the mass of a 'cube of air' with the edges 1 m long, at MSL according ISA?",
      options: [
        "1,225 kg",
        "0,01225 kg",
        "0,1225 kg",
        "12,25 kg"
      ],
      correctIndex: 0
    },
    {
      id: 7,
      question: "At what rate does the temperature change with increasing height according to ISA within the troposphere?",
      options: [
        "Decreases by 2° C / 1000 ft",
        "Increases by 2° C / 1000 ft",
        "Decreases by 2° C / 100 m",
        "Increases by 2° C / 100 m"
      ],
      correctIndex: 0
    },
    {
      id: 8,
      question: "What is the mean height of the tropopause according to ISA?",
      options: [
        "18000 ft",
        "11000 ft",
        "11000 m",
        "36000 m"
      ],
      correctIndex: 2
    },
    {
      id: 9,
      question: "The term 'tropopause' is defined as...",
      options: [
        "the layer above the troposphere showing an increasing temperature.",
        "the boundary area between the mesosphere and the stratosphere.",
        "the boundary area between the troposphere and the stratosphere.",
        "the height above which the temperature starts to decrease."
      ],
      correctIndex: 2
    },
    {
      id: 10,
      question: "Temperatures will be given by meteorological aviation services in Europe in which unit?",
      options: [
        "Degrees Centigrade (° C)",
        "Kelvin",
        "Gpdam",
        "Degrees Fahrenheit"
      ],
      correctIndex: 0
    },
    {
      id: 11,
      question: "What is meant by 'inversion layer'?",
      options: [
        "An atmospheric layer where temperature decreases with increasing height",
        "A boundary area between two other layers within the atmosphere",
        "An atmospheric layer with constant temperature with increasing height",
        "An atmospheric layer where temperature increases with increasing height"
      ],
      correctIndex: 3
    },
    {
      id: 12,
      question: "What is meant by 'isothermal layer'?",
      options: [
        "An atmospheric layer where temperature increases with increasing height",
        "An atmospheric layer where temperature decreases with increasing height",
        "A boundary area between two other layers within the atmosphere",
        "An atmospheric layer with constant temperature with increasing height"
      ],
      correctIndex: 3
    },
    {
      id: 13,
      question: "The temperature lapse rate with increasing height within the troposphere according ISA is...",
      options: [
        "0.65° C / 100 m.",
        "3° C / 100 m.",
        "1° C / 100 m.",
        "0,6° C / 100 m."
      ],
      correctIndex: 0
    },
    {
      id: 14,
      question: "Which process may result in an inversion layer at about 5000 ft (1500 m) height?",
      options: [
        "Intensive sunlight insolation during a warm summer day",
        "Widespread descending air within a high pressure area",
        "Ground cooling by radiation during the night",
        "Advection of cool air in the upper troposphere"
      ],
      correctIndex: 1
    },
    {
      id: 15,
      question: "An inversion layer close to the ground can be caused by...",
      options: [
        "ground cooling during the night.",
        "large-scale lifting of air.",
        "intensifying and gusting winds.",
        "thickening of clouds in medium layers."
      ],
      correctIndex: 0
    },
    {
      id: 16,
      question: "What is the ISA standard pressure at FL 180 (5500 m)?",
      options: [
        "250 hPa",
        "300 hPa",
        "1013.25 hPa",
        "500 hPa"
      ],
      correctIndex: 3
    },
    {
      id: 17,
      question: "The pressure which is measured at a ground station and reduced to mean sea level (MSL) by means of the actual atmospheric conditions is called...",
      options: [
        "QNH.",
        "QNE.",
        "QFE.",
        "QFF."
      ],
      correctIndex: 3
    },
    {
      id: 18,
      question: "Which processes result in decreasing air density?",
      options: [
        "Decreasing temperature, increasing pressure",
        "Increasing temperature, decreasing pressure",
        "Increasing temperature, increasing pressure",
        "Decreasing temperature, decreasing pressure"
      ],
      correctIndex: 1
    },
    {
      id: 19,
      question: "The pressure at MSL in ISA conditions is...",
      options: [
        "113.25 hPa.",
        "15 hPa.",
        "1013.25 hPa.",
        "1123 hPa."
      ],
      correctIndex: 2
    },
    {
      id: 20,
      question: "The height of the tropopause of the International Standard Atmosphere (ISA) is at...",
      options: [
        "5500 ft.",
        "11000 ft.",
        "36000 ft.",
        "48000 ft."
      ],
      correctIndex: 2
    },
    {
      id: 21,
      question: "The barometric altimeter indicates height above...",
      options: [
        "a selected reference pressure level.",
        "mean sea level.",
        "standard pressure 1013.25 hPa.",
        "ground."
      ],
      correctIndex: 0
    },
    {
      id: 22,
      question: "The altimeter can be checked on the ground by setting...",
      options: [
        "QFE and comparing the indication with the airfield elevation.",
        "QNH and comparing the indication with the airfield elevation.",
        "QNE and checking that the indication shows zero on the ground.",
        "QFF and comparing the indication with the airfield elevation."
      ],
      correctIndex: 1
    },
    {
      id: 23,
      question: "The barometric altimeter with QFE setting indicates...",
      options: [
        "height above the pressure level at airfield elevation.",
        "true altitude above MSL.",
        "height above MSL.",
        "height above standard pressure 1013.25 hPa."
      ],
      correctIndex: 0
    },
    {
      id: 24,
      question: "The barometric altimeter with QNH setting indicates...",
      options: [
        "height above standard pressure 1013.25 hPa.",
        "height above the pressure level at airfield elevation.",
        "true altitude above MSL.",
        "height above MSL."
      ],
      correctIndex: 3
    },
    {
      id: 25,
      question: "Given: QNH 983 hPa, Altitude FL 85, OAT ISA - 10°. What is the true altitude? (rounded)",
      options: [
        "7900 ft",
        "9400 ft",
        "7300 ft",
        "7600 ft"
      ],
      correctIndex: 2
    },
    {
      id: 26,
      question: "How can wind speed and wind direction be derived from surface weather charts?",
      options: [
        "By alignment and distance of isobaric lines",
        "By alignment and distance of hypsometric lines",
        "By alignment of lines of warm- and cold fronts.",
        "By annotations from the text part of the chart"
      ],
      correctIndex: 0
    },
    {
      id: 27,
      question: "Which force causes 'wind'?",
      options: [
        "Centrifugal force",
        "Thermal force",
        "Coriolis force",
        "Pressure gradient force"
      ],
      correctIndex: 3
    },
    {
      id: 28,
      question: "Above the friction layer, with a prevailing pressure gradient, the wind direction is...",
      options: [
        "perpendicular to the isohypses.",
        "at an angle of 30° to the isobars towards low pressure.",
        "parallel to the isobars.",
        "perpendicular to the isobars."
      ],
      correctIndex: 2
    },
    {
      id: 29,
      question: "Which of the stated surfaces will reduce the wind speed most due to ground friction?",
      options: [
        "Flat land, deserted land, no vegetation",
        "Oceanic areas",
        "Mountainous areas, vegetation cover",
        "Flat land, lots of vegetation cover"
      ],
      correctIndex: 2
    },
    {
      id: 30,
      question: "The movement of air flowing together is called...",
      options: [
        "convergence.",
        "divergence.",
        "concordence.",
        "subsidence."
      ],
      correctIndex: 0
    },
    {
      id: 31,
      question: "The movement of air flowing apart is called...",
      options: [
        "convergence.",
        "concordence.",
        "divergence.",
        "subsidence."
      ],
      correctIndex: 2
    },
    {
      id: 32,
      question: "What weather development will result from convergence at ground level?",
      options: [
        "Descending air and cloud formation",
        "Ascending air and cloud dissipation",
        "Descending air and cloud dissipation",
        "Ascending air and cloud formation"
      ],
      correctIndex: 3
    },
    {
      id: 33,
      question: "When air masses meet each other head on, how is this referred to and what air movements will follow?",
      options: [
        "Convergence resulting in sinking air",
        "Divergence resulting in sinking air",
        "Convergence resulting in air being lifted",
        "Divergence resulting in air being lifted"
      ],
      correctIndex: 2
    },
    {
      id: 34,
      question: "What are the air masses that Central Europe is mainly influenced by?",
      options: [
        "Arctic and polar cold air",
        "Polar cold air and tropical warm air",
        "Equatorial and tropical warm air",
        "Tropical and arctic cold air"
      ],
      correctIndex: 1
    },
    {
      id: 35,
      question: "With regard to global circulation within the atmosphere, where does polar cold air meets subtropical warm air?",
      options: [
        "At the equator",
        "At the geographic poles",
        "At the subtropical high pressure belt",
        "At the polar front"
      ],
      correctIndex: 3
    },
    {
      id: 36,
      question: "Winds blowing uphill are defined as...",
      options: [
        "katabatic winds.",
        "anabatic winds.",
        "convergent winds.",
        "subsident winds."
      ],
      correctIndex: 1
    },
    {
      id: 37,
      question: "Winds blowing downhill are defined as...",
      options: [
        "anabatic winds.",
        "katabatic winds.",
        "convergent winds.",
        "subsident winds."
      ],
      correctIndex: 1
    },
    {
      id: 38,
      question: "Air descending behind a mountain range is defined as...",
      options: [
        "katabatic wind.",
        "convergent wind.",
        "anabatic wind.",
        "divergent wind."
      ],
      correctIndex: 0
    },
    {
      id: 39,
      question: "'Foehn' conditions usually develop with...",
      options: [
        "instability, widespread air blown against a mountain ridge.",
        "stability, widespread air blown against a mountain ridge.",
        "instability, high pressure area with calm wind.",
        "stability, high pressure area with calm wind."
      ],
      correctIndex: 1
    },
    {
      id: 40,
      question: "What type of turbulence is typically found close to the ground on the lee side during Foehn conditions?",
      options: [
        "Inversion turbulence",
        "Turbulence in rotors",
        "Clear-air turbulence (CAT)",
        "Thermal turbulence"
      ],
      correctIndex: 1
    },
    {
      id: 41,
      question: "Light turbulence always has to be expected...",
      options: [
        "above cumulus clouds due to thermal convection.",
        "below stratiform clouds in medium layers.",
        "when entering inversions.",
        "below cumulus clouds due to thermal convection."
      ],
      correctIndex: 3
    },
    {
      id: 42,
      question: "Moderate to severe turbulence has to be expected...",
      options: [
        "with the appearance of extended low stratus clouds (high fog).",
        "overhead unbroken cloud layers.",
        "below thick cloud layers on the windward side of a mountain range.",
        "on the lee side of a mountain range when rotor clouds are present."
      ],
      correctIndex: 3
    },
    {
      id: 43,
      question: "Which answer contains every state of water found in the atmosphere?",
      options: [
        "Liquid and solid",
        "Liquid, solid, and gaseous",
        "Gaseous and liquid",
        "Liquid"
      ],
      correctIndex: 1
    },
    {
      id: 44,
      question: "How do dew point and relative humidity change with decreasing temperature?",
      options: [
        "Dew point remains constant, relative humidity decreases",
        "Dew point decreases, relative humidity increases",
        "Dew point increases, relative humidity decreases",
        "Dew point remains constant, relative humidity increases"
      ],
      correctIndex: 3
    },
    {
      id: 45,
      question: "How do spread and relative humidity change with increasing temperature?",
      options: [
        "Spread increases, relative humidity decreases",
        "Spread remains constant, relative humidity decreases",
        "Spread increases, relative humidity increases",
        "Spread remains constant, relative humidity increases"
      ],
      correctIndex: 0
    },
    {
      id: 46,
      question: "The 'spread' is defined as...",
      options: [
        "relation of actual to maximum possible humidity of air.",
        "maximum amount of water vapour that can be contained in air.",
        "difference between dew point and condensation point.",
        "difference between actual temperature and dew point."
      ],
      correctIndex: 3
    },
    {
      id: 47,
      question: "With other factors remaining constant, decreasing temperature results in...",
      options: [
        "decreasing spread and decreasing relative humidity.",
        "increasing spread and decreasing relative humidity.",
        "increasing spread and increasing relative humidity.",
        "decreasing spread and increasing relative humidity."
      ],
      correctIndex: 3
    },
    {
      id: 48,
      question: "What process causes latent heat being released into the upper troposphere?",
      options: [
        "Descending air across widespread areas",
        "Stabilisation of inflowing air masses",
        "Cloud forming due to condensation",
        "Evaporation over widespread water areas"
      ],
      correctIndex: 2
    },
    {
      id: 49,
      question: "The saturated adiabatic lapse rate is...",
      options: [
        "lower than the dry adiabatic lapse rate.",
        "proportional to the dry adiabatic lapse rate.",
        "higher than the dry adiabatic lapse rate.",
        "equal to the dry adiabatic lapse rate."
      ],
      correctIndex: 0
    },
    {
      id: 50,
      question: "The dry adiabatic lapse rate has a value of...",
      options: [
        "1,0° C / 100 m.",
        "2° / 1000 ft.",
        "0,6° C / 100 m.",
        "0,65° C / 100 m."
      ],
      correctIndex: 0
    },
    {
      id: 51,
      question: "The saturated adiabatic lapse rate should be assumed with a mean value of:",
      options: [
        "1,0° C / 100 m.",
        "0° C / 100 m.",
        "0,6° C / 100 m.",
        "2° C / 1000 ft."
      ],
      correctIndex: 2
    },
    {
      id: 52,
      question: "What weather conditions may be expected during conditionally unstable conditions?",
      options: [
        "Layered clouds up to high levels, prolonged rain or snow",
        "Shallow cumulus clouds with base at medium levels",
        "Sky clear of clouds, sunshine, low winds",
        "Towering cumulus, isolated showers of rain or thunderstorms"
      ],
      correctIndex: 3
    },
    {
      id: 53,
      question: "Which conditions are likely for the formation of advection fog?",
      options: [
        "Cold, humid air moves over a warm ocean",
        "Warm, humid air moves over a cold surface",
        "Warm, humid air cools during a cloudy night",
        "Humidity evaporates from warm, humid ground into cold air"
      ],
      correctIndex: 1
    },
    {
      id: 54,
      question: "Clouds are basically distinguished by what types?",
      options: [
        "Stratiform and ice clouds",
        "Layered and lifted clouds",
        "Cumulus and stratiform clouds",
        "Thunderstorm and shower clouds"
      ],
      correctIndex: 2
    },
    {
      id: 55,
      question: "Clouds in high layers are referred to as...",
      options: [
        "Nimbo-.",
        "Strato-.",
        "Alto-.",
        "Cirro-."
      ],
      correctIndex: 3
    },
    {
      id: 56,
      question: "What weather phenomenon designated by '2' has to be expected on the lee side during 'Foehn' conditions?",
      img: "MET-001.png",
      options: [
        "Altocumulus Castellanus",
        "Nimbostratus",
        "Cumulonimbus",
        "Altocumulus lenticularis"
      ],
      correctIndex: 3
    },
    {
      id: 57,
      question: "What cloud type does the picture show?",
      img: "MET-002.png",
      options: [
        "Stratus",
        "Cumulus",
        "Altus",
        "Cirrus"
      ],
      correctIndex: 1
    },
    {
      id: 58,
      question: "What cloud type does the picture show?",
      img: "MET-004.png",
      options: [
        "Altocumulus",
        "Cumulus",
        "Stratus",
        "Cirrus"
      ],
      correctIndex: 3
    },
    {
      id: 59,
      question: "What factor may affect the top of cumulus clouds?",
      options: [
        "Relative humidity",
        "The spread",
        "The presence of an inversion layer",
        "The absolute humidity"
      ],
      correctIndex: 2
    },
    {
      id: 60,
      question: "What factors may indicate a tendency to fog formation?",
      options: [
        "Low pressure, increasing temperature",
        "Low spread, decreasing temperature",
        "Low spread, increasing temperature",
        "Strong winds, decreasing temperature"
      ],
      correctIndex: 1
    },
    {
      id: 61,
      question: "What condition may prevent the formation of 'radiation fog'?",
      options: [
        "Overcast cloud cover",
        "Calm wind",
        "Low spread",
        "Clear night, no clouds"
      ],
      correctIndex: 0
    },
    {
      id: 62,
      question: "What process results in the formation of 'advection fog'?",
      options: [
        "Cold, moist air is being moved across warm ground areas",
        "Warm, moist air is moved across cold ground areas",
        "Cold, moist air mixes with warm, moist air",
        "Prolonged radiation during nights clear of clouds"
      ],
      correctIndex: 1
    },
    {
      id: 63,
      question: "What process results in the formation of 'orographic fog' ('hill fog')?",
      options: [
        "Prolonged radiation during nights clear of clouds",
        "Warm, moist air is moved across a hill or a mountain range",
        "Cold, moist air mixes with warm, moist air",
        "Evaporation from warm, moist ground area into very cold air"
      ],
      correctIndex: 1
    },
    {
      id: 64,
      question: "What factors are required for the formation of precipitation in clouds?",
      options: [
        "High humidity and high temperatures",
        "The presence of an inversion layer",
        "Calm winds and intensive sunlight insolation",
        "Moderate to strong updrafts"
      ],
      correctIndex: 3
    },
    {
      id: 65,
      question: "The formation of medium to large precipitation particles requires...",
      options: [
        "a high cloud base.",
        "strong wind.",
        "an inversion layer.",
        "strong updrafts."
      ],
      correctIndex: 3
    },
    {
      id: 66,
      question: "Which type of cloud is associated with prolonged rain?",
      options: [
        "Cumulonimbus",
        "Cirrostratus",
        "Nimbostratus",
        "Altocumulus"
      ],
      correctIndex: 2
    },
    {
      id: 67,
      question: "Regarding the type of cloud, precipitation is classified as...",
      options: [
        "light and heavy precipitation.",
        "showers of snow and rain.",
        "prolonged rain and continuous rain.",
        "rain and showers of rain."
      ],
      correctIndex: 3
    },
    {
      id: 68,
      question: "How is an air mass described when moving to Central Europe via the Russian continent during winter?",
      options: [
        "Maritime tropical air",
        "Continental tropical air",
        "Continental polar air",
        "Maritime polar air"
      ],
      correctIndex: 2
    },
    {
      id: 69,
      question: "The character of an air mass is given by what properties?",
      options: [
        "Temperatures at origin and present region",
        "Wind speed and tropopause height",
        "Region of origin and track during movement",
        "Environmental lapse rate at origin"
      ],
      correctIndex: 2
    },
    {
      id: 70,
      question: "The symbol labeled (1) as shown in the picture is a / an...",
      img: "MET-005.png",
      options: [
        "front aloft.",
        "occlusion.",
        "warm front.",
        "cold front."
      ],
      correctIndex: 3
    },
    {
      id: 71,
      question: "The symbol labeled (2) as shown in the picture is a / an...",
      img: "MET-005.png",
      options: [
        "front aloft.",
        "cold front.",
        "warm front.",
        "occlusion."
      ],
      correctIndex: 2
    },
    {
      id: 72,
      question: "The symbol labeled (3) as shown in the picture is a / an...",
      img: "MET-005.png",
      options: [
        "front aloft.",
        "warm front.",
        "cold front.",
        "occlusion."
      ],
      correctIndex: 3
    },
    {
      id: 73,
      question: "What cloud sequence can typically be observed during the passage of a warm front?",
      options: [
        "In coastal areas during daytime wind from the coast and forming of cumulus clouds, dissipation of clouds during evening and night",
        "Wind becoming calm, dissipation of clouds and warming during summer; formation of extended high fog layers during winter",
        "Squall line with showers of rain and thunderstorms (Cb), gusting wind followed by cumulus clouds with isolated showers of rain",
        "Cirrus, thickening altostratus and altocumulus clouds, lowering cloud base with rain, nimbostratus"
      ],
      correctIndex: 3
    },
    {
      id: 74,
      question: "What clouds and weather can typically be observed during the passage of a cold front?",
      options: [
        "In coastal areas during daytime wind from the coast and forming of cumulus clouds, dissipation of clouds during evening and night",
        "Strongly developed cumulus clouds (Cb) with showers of rain and thunderstorms, gusting wind followed by cumulus clouds with isolated showers of rain",
        "Cirrus, thickening altostratus and altocumulus clouds, lowering cloud base with rain, nimbostratus",
        "Wind becoming calm, dissipation of clouds and warming during summer; formation of extended high fog layers during winter"
      ],
      correctIndex: 1
    },
    {
      id: 75,
      question: "What visual flight conditions can be expected within the warm sector of a polar front low during summer time?",
      options: [
        "Visibilty less than 1000 m, cloud-covered ground",
        "Good visibility, some isolated high clouds",
        "Moderate to good visibility, scattered clouds",
        "Moderate visibility, heavy showers and thunderstorms"
      ],
      correctIndex: 2
    },
    {
      id: 76,
      question: "What visual flight conditions can be expected after the passage of a cold front?",
      options: [
        "Scattered cloud layers, visbility more than 5 km, formation of shallow cumulus clouds",
        "Good visiblity, formation of cumulus clouds with showers of rain or snow",
        "Medium visibility with lowering cloud bases, onset of prolonged precipitation",
        "Poor visibility, formation of overcast or ground-covering stratus clouds, snow"
      ],
      correctIndex: 1
    },
    {
      id: 77,
      question: "A boundary between a cold polar air mass and a warm subtropical air mass showing no horizontal displacement is called...",
      options: [
        "cold front.",
        "warm front.",
        "occluded front.",
        "stationary front."
      ],
      correctIndex: 3
    },
    {
      id: 78,
      question: "What is the usual direction of movement of a polar front low?",
      options: [
        "To the northwest during winter, to the southwest during summer",
        "To the northeast during winter, to the southeast during summer",
        "Parallel to the warm front line to the south",
        "Parallel to the the warm-sector isobars"
      ],
      correctIndex: 3
    },
    {
      id: 79,
      question: "What pressure pattern can be observed during the passage of a polar front low?",
      options: [
        "Rising pressure in front of the warm front, constant pressure within the warm sector, rising pressure behind the cold front",
        "Falling pressure in front of the warm front, constant pressure within the warm sector, rising pressure behind the cold front",
        "Falling pressure in front of the warm front, constant pressure within the warm sector, falling pressure behind the cold front",
        "Rising pressure in front of the warm front, rising pressure within the warm sector, falling pressure behind the cold front"
      ],
      correctIndex: 1
    },
    {
      id: 80,
      question: "What pressure pattern can be observed when a cold front is passing?",
      options: [
        "Continually decreasing pressure",
        "Shortly decreasing, thereafter increasing pressure",
        "Continually increasing pressure",
        "Constant pressure pattern"
      ],
      correctIndex: 1
    },
    {
      id: 81,
      question: "What change of wind direction can be expected during the passage of a polar front low in Central Europe?",
      options: [
        "Backing wind during passage of the warm front, veering wind during passage of the cold front",
        "Backing wind during passage of the warm front, backing wind during passage of the cold front",
        "Veering wind during passage of the warm front, veering wind during passage of the cold front",
        "Veering wind during passage of the warm front, backing wind during passage of the cold front"
      ],
      correctIndex: 2
    },
    {
      id: 82,
      question: "Extensive high pressure areas can be found throughout the year ...",
      options: [
        "in areeas showing extensive lifting processes.",
        "in mid latitudes along the polar front",
        "over oceanic areas at latitues around 30°N/S.",
        "in tropical areas, close to the equator."
      ],
      correctIndex: 2
    },
    {
      id: 83,
      question: "What cloud type can typically be observed across widespread high pressure areas during summer?",
      options: [
        "Overcast low stratus",
        "Scattered Cu clouds",
        "Overcast Ns clouds",
        "Squall lines and thunderstorms"
      ],
      correctIndex: 1
    },
    {
      id: 84,
      question: "What pressure pattern may result from cold-air inflow in high tropospheric layers?",
      options: [
        "Formation of a low in the upper troposphere",
        "Formation of a high in the upper troposphere",
        "Formation of a large ground low",
        "Alternating pressure"
      ],
      correctIndex: 0
    },
    {
      id: 85,
      question: "Cold air inflow in high tropospheric layers may result in...",
      options: [
        "showers and thunderstorms.",
        "stabilisation and calm weather.",
        "frontal weather.",
        "calm weather and cloud dissipation."
      ],
      correctIndex: 0
    },
    {
      id: 86,
      question: "How does inflowing cold air affect the shape and vertical distance between pressure layers?",
      options: [
        "Increasing vertical distance, raise in height (high pressure)",
        "Decreasing vertical distance, raise in height (high pressure)",
        "Decrease in vertical distance, lowering in height (low pressure)",
        "Increase in vertical distance, lowering in height (low pressure)"
      ],
      correctIndex: 2
    },
    {
      id: 87,
      question: "What weather phenomena have to be expected around an upper-level trough?",
      options: [
        "Calm wind, forming of shallow cumulus clouds",
        "Calm weather, formation of lifted fog layers",
        "Formation of high stratus clouds, ground-covering cloud bases",
        "Development of showers and thunderstorms (Cb)"
      ],
      correctIndex: 3
    },
    {
      id: 88,
      question: "What frontal line divides subtropical air from polar cold air, in particular across Central Europe?",
      options: [
        "Occlusion",
        "Cold front",
        "Polar front",
        "Warm front"
      ],
      correctIndex: 2
    },
    {
      id: 89,
      question: "What weather conditions can be expected in high pressure areas during summer?",
      options: [
        "Changing weather with passing of frontal lines",
        "Squall lines and thunderstorms",
        "Calm winds and widespread areas with high fog",
        "Calm weather and cloud dissipation, few high Cu"
      ],
      correctIndex: 3
    },
    {
      id: 90,
      question: "What weather conditions in Central Europe are typically found in high pressure areas during summer?",
      options: [
        "Large isobar spacing with calm winds, formation of local wind systems",
        "Large isobar spacing with strong prevailing westerly winds",
        "Small isobar spacing with calm winds, formation of local wind systems",
        "Small isobar spacing with strong prevailing northerly winds"
      ],
      correctIndex: 0
    },
    {
      id: 91,
      question: "What weather conditions can be expected in high pressure areas during winter?",
      options: [
        "Changing weather with passing of frontal lines",
        "Calm weather and cloud dissipation, few high Cu",
        "Calm winds and widespread areas with high fog",
        "Squall lines and thunderstorms"
      ],
      correctIndex: 2
    },
    {
      id: 92,
      question: "What wind conditions can be expected in areas showing large distances between isobars?",
      options: [
        "Formation of local wind systems with strong prevailing westerly winds",
        "Strong prevailing easterly winds with rapid backing",
        "Strong prevailing westerly winds with rapid veering",
        "Variable winds, formation of local wind systems"
      ],
      correctIndex: 3
    },
    {
      id: 93,
      question: "What weather conditions can be expected during 'Foehn' on the windward side of a mountain range?",
      options: [
        "Dissipating clouds with unusual warming, accompanied by strong, gusty winds",
        "Scattered cumulus clouds with showers and thunderstorms",
        "Layered clouds, mountains obscured, poor visibility, moderate or heavy rain",
        "Calm wind and forming of high stratus clouds (high fog)"
      ],
      correctIndex: 2
    },
    {
      id: 94,
      question: "Which of the stated wind phenomena will increase in speed since its path is narrowed by mountains?",
      options: [
        "Bora",
        "Mistral",
        "Scirocco",
        "Passat"
      ],
      correctIndex: 1
    },
    {
      id: 95,
      question: "What is the name of the the cold, katabatic wind phenomena blowing from northeast into the Adriatic Sea?",
      options: [
        "Scirocco",
        "Mistral",
        "Bora",
        "Passat"
      ],
      correctIndex: 2
    },
    {
      id: 96,
      question: "Which of the following conditions are most favourable for ice accretion?",
      options: [
        "Temperatures between 0° C and -12° C, presence of supercooled water droplets (clouds)",
        "Temperaturs below 0° C, strong wind, sky clear of clouds",
        "Temperatures between +10° C and -30° C, presence of hail (clouds)",
        "Temperatures between -20° C and -40° C, presence of ice crystals (Ci clouds)"
      ],
      correctIndex: 0
    },
    {
      id: 97,
      question: "What temperatures are most dangerous with respect to airframe icing?",
      options: [
        "+5° to -10° C",
        "0° to -12° C",
        "-20° to -40° C",
        "+20° to -5° C"
      ],
      correctIndex: 1
    },
    {
      id: 98,
      question: "Which type of ice forms by very small water droplets and ice crystals hitting the front surfaces of an aircraft?",
      options: [
        "Clear ice",
        "Mixed ice",
        "Hoar frost",
        "Rime ice"
      ],
      correctIndex: 3
    },
    {
      id: 99,
      question: "Which type of ice forms by large, supercooled droplets hitting the front surfaces of an aircraft?",
      options: [
        "Hoar frost",
        "Clear ice",
        "Rime ice",
        "Mixed ice"
      ],
      correctIndex: 1
    },
    {
      id: 100,
      question: "What situation may result in the occurrence of severe wind shear?",
      options: [
        "Flying ahead of a warm front with visible Ci clouds",
        "Cross-country flying below Cu clouds with about 4 octas coverage",
        "During final approach, 30 min after a heavy shower has passed the airfield",
        "When a shower is visible close to the airfield"
      ],
      correctIndex: 2
    },
    {
      id: 101,
      question: "What conditions are favourable for the formation of thunderstorms?",
      options: [
        "Warm humid air, conditionally unstable environmental lapse rate",
        "Calm winds and cold air, overcast cloud cover with St or As.",
        "Clear night over land, cold air and patches of fog",
        "Warm and dry air, strong inversion layer"
      ],
      correctIndex: 0
    },
    {
      id: 102,
      question: "What conditions are mandatory for the formation of thermal thunderstorms?",
      options: [
        "Conditionally unstable atmosphere, low temperature and low humidity",
        "Absolutely stable atmosphere, high temperature and high humidity",
        "Absolutely stable atmosphere, high temperature and low humidity",
        "Conditionally unstable atmosphere, high temperature and high humidity"
      ],
      correctIndex: 3
    },
    {
      id: 103,
      question: "With regard to thunderstorms, strong up- and downdrafts appear during the...",
      options: [
        "initial stage.",
        "dissipating stage.",
        "mature stage.",
        "thunderstorm stage."
      ],
      correctIndex: 2
    },
    {
      id: 104,
      question: "Which stage of a thunderstorm is dominated by updrafts?",
      options: [
        "Dissipating stage",
        "Upwind stage",
        "Mature stage",
        "Cumulus stage"
      ],
      correctIndex: 3
    },
    {
      id: 105,
      question: "What danger is most immenent when an aircraft is hit by lightning?",
      options: [
        "Rapid cabin depressurization and smoke in the cabin",
        "Surface overheat and damage to exposed aircraft parts",
        "Explosion of electrical equipment in the cockpit",
        "Disturbed radio communication, static noise signals"
      ],
      correctIndex: 1
    },
    {
      id: 106,
      question: "Heavy downdrafts and strong wind shear close to the ground can be expected...",
      options: [
        "during cold, clear nights with the formation of radiation fog.",
        "near the rainfall areas of heavy showers or thunderstorms.",
        "during approach to an airfield at the coast with a strong sea breeze.",
        "during warm summer days with high, flatted Cu clouds."
      ],
      correctIndex: 1
    },
    {
      id: 107,
      question: "What phenomenon is caused by cold air downdrafts with precipitation from a fully developed thunderstorm cloud?",
      options: [
        "Electrical discharge",
        "Anvil-head top of Cb cloud",
        "Gust front",
        "Freezing Rain"
      ],
      correctIndex: 2
    },
    {
      id: 108,
      question: "What has to be considered when taking off in a ground inversion?",
      options: [
        "Climb should be performed with the lowest possible speed and maximum power",
        "Due to low temperatures close to the ground, icing has to be expected",
        "During climb, a sudden decrease in speed and climb performance has to be expected",
        "During the climb, a sudden increase in speed and climb performance has to be expected"
      ],
      correctIndex: 2
    },
    {
      id: 109,
      question: "What danger is most imminent during an approach to an airfield situated in a valley, with strong wind aloft blowing perpendicular to the mountain ridge?",
      options: [
        "Reduced visibilty, maybe loss of sight to the airfield during final approach",
        "Formation of medium to heavy clear ice on all aircraft surfaces",
        "Heavy downdrafts within rainfall areas below thunderstorm clouds",
        "Wind shear during descent, wind direction may change by 180°"
      ],
      correctIndex: 3
    },
    {
      id: 110,
      question: "What kind of reduction in visibility is not very sensitive to changes in temperature?",
      options: [
        "Haze (HZ)",
        "Patches of fog (BCFG)",
        "Radiation fog (FG)",
        "Mist (BR)"
      ],
      correctIndex: 0
    },
    {
      id: 111,
      question: "Information about pressure patterns and frontal situation can be found in which chart?",
      options: [
        "wind chart.",
        "surface weather chart.",
        "Significant Weather Chart (SWC).",
        "hypsometric chart."
      ],
      correctIndex: 1
    },
    {
      id: 112,
      question: "Which weather chart shows the actual air pressure as in MSL along with pressure centers and fronts?",
      options: [
        "Hypsometric chart",
        "Surface weather chart",
        "Prognostic chart",
        "Wind chart"
      ],
      correctIndex: 1
    },
    {
      id: 113,
      question: "What information can be obtained from satallite images?",
      options: [
        "Temperature and dew point of environmental air",
        "Turbulence and icing",
        "Flight visibility, ground visibility, and ground contact",
        "Overview of cloud covers and front lines"
      ],
      correctIndex: 3
    },
    {
      id: 114,
      question: "What chart shows areas of precipitation?",
      options: [
        "GAFOR",
        "Wind chart",
        "Satellite picture",
        "Radar picture"
      ],
      correctIndex: 3
    },
    {
      id: 115,
      question: "What information is NOT found on Low-Level Significant Weather Charts (LLSWC)?",
      options: [
        "Information about icing conditions",
        "Radar echos of precipitation",
        "Information about turbulence areas",
        "Front lines and frontal displacements"
      ],
      correctIndex: 1
    },
    {
      id: 116,
      question: "Measured pressure distribution in MSL and corresponding frontal systems are displayed by the...",
      options: [
        "prognostic chart.",
        "Significant Weather Chart (SWC).",
        "surface weather chart.",
        "hypsometric chart."
      ],
      correctIndex: 2
    },
    {
      id: 117,
      question: "In a METAR, 'heavy rain' is designated by the identifier...",
      options: [
        "RA.",
        "+SHRA.",
        "SHRA.",
        "+RA."
      ],
      correctIndex: 3
    },
    {
      id: 118,
      question: "In a METAR, '(moderate) showers of rain' are designated by the identifier...",
      options: [
        "+RA.",
        "SHRA.",
        "+TSRA.",
        "TS."
      ],
      correctIndex: 1
    },
    {
      id: 119,
      question: "What information can be found in the ATIS, but not in a METAR?",
      options: [
        "Information about current weather, for example types of precipitation",
        "Operational information such as runway in use and transition level",
        "Information about mean wind speeds, maximum speeds in gusts if applicable",
        "Approach information, such as ground visibility and cloud base"
      ],
      correctIndex: 1
    },
    {
      id: 120,
      question: "Weather and operational information about the destination aerodrome can be obtained during the flight by...",
      options: [
        "VOLMET.",
        "PIREP.",
        "ATIS.",
        "SIGMET."
      ],
      correctIndex: 2
    },
    {
      id: 121,
      question: "SIGMET warnings are issued for...",
      options: [
        "specific routings.",
        "airports.",
        "FIRs/UIRs.",
        "countries."
      ],
      correctIndex: 2
    },
    {
      id: 122,
      question: "An inversion is a layer ...",
      options: [
        "with increasing pressure with increasing height.",
        "with decreasing temperature with increasing height.",
        "with constant temperature with increasing height.",
        "with increasing temperature with increasing height."
      ],
      correctIndex: 3
    },
    {
      id: 123,
      question: "What can be expected for the prevailling wind with isobars on a surface weather chart showing large distances?",
      options: [
        "Strong pressure gradients resulting in strong prevailling wind",
        "Strong pressure gradients resulting in low prevailling wind",
        "Low pressure gradients resulting in strong prevailling wind",
        "Low pressure gradients resulting in low prevailling wind"
      ],
      correctIndex: 3
    },
    {
      id: 124,
      question: "What is referred to as mountain wind?",
      options: [
        "Wind blowing uphill from the valley during daytime.",
        "Wind blowing uphill from the valley during the night.",
        "Wind blowing down the mountain side during the night",
        "Wind blowing down the mountain side during daytime."
      ],
      correctIndex: 2
    },
    {
      id: 125,
      question: "Under which conditions 'back side weather' ('Rückseitenwetter') can be expected?",
      options: [
        "before passing of an occlusion",
        "During Foehn at the lee side",
        "After passing of a warm front",
        "After passing of a cold front"
      ],
      correctIndex: 3
    },
    {
      id: 126,
      question: "What wind is reportet as 225/15?",
      options: [
        "north-east wind with 15 kt",
        "south-west wind with 15 km/h",
        "north-east wind with 15 km/h",
        "south-west wind with 15 kt"
      ],
      correctIndex: 3
    },
    {
      id: 127,
      question: "How does air temperatur change in ISA from MSL to approx. 10.000 m height?",
      options: [
        "from +20° to -40° C",
        "from +30° to -40° C",
        "from -15° to 50° C",
        "from +15° to -50° C"
      ],
      correctIndex: 3
    },
    {
      id: 128,
      question: "What weather is likely to be experienced during 'Foehn' in the Bavarian area close to the alps?",
      options: [
        "High pressure area overhead Biskaya and low pressure area in Eastern Europe",
        "Cold, humid downhill wind on the lee side of the alps, flat pressure pattern",
        "Nimbostratus cloud in the northern alps, rotor clouds at the windward side, warm and dry wind",
        "Nimbostratus cloud in the southern alps, rotor clouds at the lee side, warm and dry wind"
      ],
      correctIndex: 3
    },
    {
      id: 129,
      question: "Mountain side updrafts can be intensified by ...",
      options: [
        "Solar irradiation on the windward side",
        "Solar irradiation on the lee side",
        "By warming of upper atmospheric layers",
        "thermal radiation of the windward side during the night"
      ],
      correctIndex: 0
    }
  ],
  navigation: [
    {
      id: 1,
      question: "The rotational axis of the Earth runs through the...",
      options: [
        "geographic North Pole and on the geographic South Pole.",
        "geographic North Pole and on the magnetic south pole.",
        "magnetic north pole and on the magnetic south pole.",
        "magnetic north pole and on the geographic South Pole."
      ],
      correctIndex: 0
    },
    {
      id: 2,
      question: "Which statement is correct with regard to the polar axis of the Earth?",
      options: [
        "The polar axis of the Earth crosses the geographic South Pole and the geographic North Pole and is perpendicular to the plane of the equator",
        "The polar axis of the Earth crosses the geographic South Pole and the geographic North Pole and is at an angle of 23.5° to the plane of the equator",
        "The polar axis of the Earth crosses the magnetic south pole and the magnetic north pole and is perpendicular to the plane of the equator",
        "The polar axis of the Earth crosses the magnetic south pole and the magnetic north pole and is at an angle of 66.5° to the plane of the equator"
      ],
      correctIndex: 0
    },
    {
      id: 3,
      question: "Which approximate, geometrical form describes the shape of the Earth best for navigation systems?",
      options: [
        "Sphere of ecliptical shape",
        "Ellipsoid",
        "Perfect sphere",
        "Flat plate"
      ],
      correctIndex: 1
    },
    {
      id: 4,
      question: "Which statement about a rhumb line is correct?",
      options: [
        "A rhumb line cuts each meridian at the same angle.",
        "The center of a complete cycle of a rhumb line is always the Earth's center.",
        "The shortest track between two points along the Earth's surface follows a rhumb line.",
        "A rhumb line is a great circle intersecting the equator with 45° angle."
      ],
      correctIndex: 0
    },
    {
      id: 5,
      question: "The shortest distance between two points on Earth is represented by a part of...",
      options: [
        "a great circle.",
        "a small circle.",
        "a rhumb line.",
        "a parallel of latitude."
      ],
      correctIndex: 0
    },
    {
      id: 6,
      question: "The circumference of the Earth at the equator is approximately...",
      img: "NAV-002.png",
      options: [
        "10800 km.",
        "40000 NM.",
        "12800 km.",
        "21600 NM."
      ],
      correctIndex: 3
    },
    {
      id: 7,
      question: "What is the difference in latitude between A (12°53'30\"N) and B (07°34'30\"S)?",
      options: [
        "20°28'00\"",
        "05,19°",
        "20,28°",
        "05°19'00\""
      ],
      correctIndex: 0
    },
    {
      id: 8,
      question: "Where are the two polar circles?",
      options: [
        "At a latitude of 20.5°S and 20.5°N",
        "23.5° north and south of the poles",
        "23.5° north and south of the equator",
        "20.5° south of the poles"
      ],
      correctIndex: 1
    },
    {
      id: 9,
      question: "What is the distance between the parallels of latitude 48°N and 49°N along a meridian line?",
      options: [
        "1 NM",
        "60 NM",
        "111 NM",
        "10 NM"
      ],
      correctIndex: 1
    },
    {
      id: 10,
      question: "What distance corresponds to one degree difference in latitude along any degree of longitude?",
      options: [
        "1 NM",
        "60 NM",
        "30 NM",
        "60 km"
      ],
      correctIndex: 1
    },
    {
      id: 11,
      question: "Point A on the Earth's surface lies exactly on the parallel of latitude of 47°50'27\"N. Which point is exactly 240 NM north of A?",
      options: [
        "43°50'27\"N",
        "53°50'27\"N",
        "49°50'27\"N",
        "51°50'27\"N"
      ],
      correctIndex: 3
    },
    {
      id: 12,
      question: "What is the distance between the two parallels of longitude 150°E and 151°E along the equator?",
      options: [
        "60 km",
        "111 NM",
        "60 NM",
        "1 NM"
      ],
      correctIndex: 2
    },
    {
      id: 13,
      question: "What is the great circle distance between two points A and B on the equator when the difference between the two associated meridians is exactly one degree of longitude?",
      options: [
        "60 NM",
        "400 NM",
        "120 NM",
        "216 NM"
      ],
      correctIndex: 0
    },
    {
      id: 14,
      question: "Assume two arbitrary points A and B on the same parallel of latitude, but not on the equator. Point A is located on 010°E and point B on 020°E. The rhumb line distance between A and B is always...",
      options: [
        "more than 600 NM.",
        "less than 600 NM.",
        "more than 300 NM.",
        "less than 300 NM."
      ],
      correctIndex: 1
    },
    {
      id: 15,
      question: "What is the difference in time when the sun moves 20° of longitude?",
      options: [
        "1:20 h",
        "0:20 h",
        "0:40 h",
        "1:00 h"
      ],
      correctIndex: 0
    },
    {
      id: 16,
      question: "What is the difference in time when the sun moves 10° of longitude?",
      options: [
        "0:30 h",
        "0:04 h",
        "0:40 h",
        "1:00 h"
      ],
      correctIndex: 2
    },
    {
      id: 17,
      question: "The sun moves 10° of longitude. What is the difference in time?",
      options: [
        "0.4 h",
        "1 h",
        "0.33 h",
        "0.66 h"
      ],
      correctIndex: 3
    },
    {
      id: 18,
      question: "With Central European Summer Time (CEST) given as UTC+2, what UTC time corresponds to 1600 CEST?",
      options: [
        "1600 UTC.",
        "1500 UTC.",
        "1700 UTC.",
        "1400 UTC."
      ],
      correctIndex: 3
    },
    {
      id: 19,
      question: "UTC is...",
      options: [
        "a zonal time.",
        "a local time in Central Europe.",
        "local mean time at a specific point on Earth.",
        "an obligatory time used in aviation."
      ],
      correctIndex: 3
    },
    {
      id: 20,
      question: "With Central European Time (CET) given as UTC+1, what UTC time corresponds to 1700 CET?",
      options: [
        "1600 UTC.",
        "1500 UTC.",
        "1700 UTC.",
        "1800 UTC."
      ],
      correctIndex: 0
    },
    {
      id: 21,
      question: "Vienna (LOWW) is located at 016° 34'E, Salzburg (LOWS) at 013° 00'E. The latitude of both positions can be considered as equal. What is the difference of sunrise and sunset times, expressed in UTC, between Wien and Salzburg?",
      options: [
        "In Vienna the sunrise and sunset are about 14 minutes earlier than in Salzburg",
        "In Vienna the sunrise is 14 minutes earlier and sunset is 14 minutes later than in Salzburg",
        "In Vienna the sunrise and sunset are about 4 minutes later than in Salzburg",
        "In Vienna the sunrise is 4 minutes later and sunset is 4 minutes earlier than in Salzburg"
      ],
      correctIndex: 0
    },
    {
      id: 22,
      question: "The term 'civil twilight' is defined as...",
      options: [
        "the period of time before sunrise or after sunset where the midpoint of the sun disk is 6 degrees or less below the true horizon.",
        "the period of time before sunrise or after sunset where the midpoint of the sun disk is 6 degrees or less below the apparent horizon.",
        "the period of time before sunrise or after sunset where the midpoint of the sun disk is 12 degrees or less below the true horizon.",
        "the period of time before sunrise or after sunset where the midpoint of the sun disk is 12 degrees or less below the apparent horizon."
      ],
      correctIndex: 0
    },
    {
      id: 23,
      question: "Given: WCA: -012°; TH: 125°; MC: 139°; DEV: 002°E. What are: TC, MH und CH?",
      options: [
        "TC: 113°. MH: 127°. CH: 129°",
        "TC: 137°. MH: 127°. CH: 125°",
        "TC: 137°. MH: 139°. CH: 125°",
        "TC: 113°. MH: 139°. CH: 129°"
      ],
      correctIndex: 1
    },
    {
      id: 24,
      question: "Given: TC: 179°; WCA: -12°; VAR: 004°E; DEV: +002°. What are MH and MC?",
      options: [
        "MH: 167°. MC: 175°.",
        "MH: 167°. MC: 161°.",
        "MH: 163°. MC: 175°.",
        "MH: 163°. MC: 161°."
      ],
      correctIndex: 0
    },
    {
      id: 25,
      question: "The angle between the true course and the true heading is called...",
      options: [
        "WCA.",
        "deviation.",
        "variation.",
        "inclination."
      ],
      correctIndex: 0
    },
    {
      id: 26,
      question: "The angle between the magnetic course and the true course is called...",
      options: [
        "deviation.",
        "WCA.",
        "variation.",
        "inclination."
      ],
      correctIndex: 2
    },
    {
      id: 27,
      question: "The term 'magnetic course' (MC) is defined as...",
      options: [
        "the angle between magnetic north and the course line.",
        "the angle between true north and the course line.",
        "the direction from an arbitrary point on Earth to the geographic North Pole.",
        "the direction from an arbitrary point on Earth to the magnetic north pole."
      ],
      correctIndex: 0
    },
    {
      id: 28,
      question: "The term 'True Course' (TC) is defined as...",
      options: [
        "the angle between magnetic north and the course line.",
        "the direction from an arbitrary point on Earth to the geographic North Pole.",
        "the angle between true north and the course line.",
        "the direction from an arbitrary point on Earth to the magnetic north pole."
      ],
      correctIndex: 2
    },
    {
      id: 29,
      question: "Given: TC: 183°; WCA: +011°; MH: 198°; CH: 200°. What are TH and VAR?",
      options: [
        "TH: 194°. VAR: 004° W",
        "TH: 194°. VAR: 004° E",
        "TH: 172°. VAR: 004° W",
        "TH: 172°. VAR: 004° E"
      ],
      correctIndex: 0
    },
    {
      id: 30,
      question: "Given: TC: 183°; WCA: +011°; MH: 198°; CH: 200°. What are the TH and the DEV?",
      options: [
        "TH: 172°. DEV: +002°.",
        "TH: 172°. DEV: -002°.",
        "TH: 194°. DEV: -002°.",
        "TH: 194°. DEV: +002°."
      ],
      correctIndex: 2
    },
    {
      id: 31,
      question: "Given: TC: 183°; WCA: +011°; MH: 198°; CH: 200°. What are the VAR and the DEV?",
      options: [
        "VAR: 004° W. DEV: +002°.",
        "VAR: 004° W. DEV: -002°.",
        "VAR: 004° E. DEV: +002°.",
        "VAR: 004° E. DEV: -002°."
      ],
      correctIndex: 1
    },
    {
      id: 32,
      question: "Where does the inclination reach its lowest value?",
      options: [
        "At the magnetic equator",
        "At the magnetic poles",
        "At the geographic equator",
        "At the geographic poles"
      ],
      correctIndex: 0
    },
    {
      id: 33,
      question: "The angle between compass north and magnetic north is called...",
      options: [
        "WCA.",
        "variation.",
        "inclination.",
        "deviation."
      ],
      correctIndex: 3
    },
    {
      id: 34,
      question: "Which direction corresponds to 'compass north' (CN)?",
      options: [
        "The most northerly part of the magnetic compass in the aircraft, where the reading takes place",
        "The direction from an arbitrary point on Earth to the geographical North Pole",
        "The angle between the aircraft heading and magnetic north",
        "The direction to which the direct reading compass aligns due to earth's and aircraft's magnetic fields"
      ],
      correctIndex: 3
    },
    {
      id: 35,
      question: "The term 'isogonal' or 'isogonic line' is defined as a line on an aeronautical chart, connecting all points with the same value of...",
      options: [
        "inclination.",
        "deviation.",
        "heading.",
        "variation."
      ],
      correctIndex: 3
    },
    {
      id: 36,
      question: "The term 'agonic line' is defined as a line on Earth or an aeronautical chart, connecting all points with the...",
      options: [
        "deviation of 0°.",
        "inclination of 0°.",
        "heading of 0°.",
        "variation of 0°."
      ],
      correctIndex: 3
    },
    {
      id: 37,
      question: "Which are the official basic units for horizontal distances used in aeronautical navigation and their abbreviations?",
      options: [
        "feet (ft), inches (in)",
        "Nautical miles (NM), kilometers (km)",
        "Yards (yd), meters (m)",
        "Land miles (SM), sea miles (NM)"
      ],
      correctIndex: 1
    },
    {
      id: 38,
      question: "1000 ft equal...",
      options: [
        "30 km.",
        "3000 m.",
        "300 m.",
        "30 m."
      ],
      correctIndex: 2
    },
    {
      id: 39,
      question: "5500 m equal...",
      options: [
        "7500 ft.",
        "18000 ft.",
        "10000 ft.",
        "30000 ft."
      ],
      correctIndex: 1
    },
    {
      id: 40,
      question: "Which of the items on the attached checklist are related to the direct reading compass?",
      img: "NAV-004.png",
      options: [
        "\"Turning Instruments\" only",
        "\"Gyro\" and \"Circuit Breaker\"",
        "\"Gyro\" and \"Turning Instruments\"",
        "\"Turning Instruments\" and \"Circuit Breaker\""
      ],
      correctIndex: 2
    },
    {
      id: 41,
      question: "What could be a reason for changing the runway indicators at aerodromes (e.g. from runway 06 to runway 07)?",
      options: [
        "The magnetic deviation of the runway location has changed",
        "The magnetic variation of the runway location has changed",
        "The direction of the approach path has changed",
        "The true direction of the runway alignment has changed"
      ],
      correctIndex: 1
    },
    {
      id: 42,
      question: "Electronic devices on board of an aeroplane have influence on the...",
      options: [
        "turn coordinator.",
        "airspeed indicator.",
        "artificial horizon.",
        "direct reading compass."
      ],
      correctIndex: 3
    },
    {
      id: 43,
      question: "Which are the properties of a Mercator chart?",
      options: [
        "The scale is constant, great circles are depicted as curved lines, rhumb lines are depicted as straight lines",
        "The scales increases with latitude, great circles are depicted as curved lines, rhumb lines are depicted as straight lines",
        "The scales increases with latitude, great circles are depicted as straight lines, rhumb lines are depicted as curved lines",
        "The scale is constant, great circles are depicted as straight lines, rhumb lines are depicted as curved lines"
      ],
      correctIndex: 1
    },
    {
      id: 44,
      question: "How are rhumb lines and great circles depicted on a direct Mercator chart?",
      options: [
        "Rhumb lines: curved lines. Great circles: straight lines",
        "Rhumb lines: curved lines. Great circles: curved lines",
        "Rhumb lines: straight lines. Great circles: curved lines",
        "Rhumb lines: straight lines. Great circles: straight lines"
      ],
      correctIndex: 2
    },
    {
      id: 45,
      question: "Which are the properties of a Lambert conformal chart?",
      options: [
        "Great circles are depicted as straight lines and the chart is an equal-area projection",
        "The chart is conformal and an equal-area projection",
        "The chart is conformal and nearly true to scale",
        "Rhumb lines are depicted as straight lines and the chart is conformal"
      ],
      correctIndex: 2
    },
    {
      id: 46,
      question: "Which lines have to be used by the pilot to determine the aircraft's position?",
      options: [
        "True bearings (QTE)",
        "Magnetic bearings (QDR)",
        "Relative bearings (RB)",
        "Magnetic headings (MH)"
      ],
      correctIndex: 1
    },
    {
      id: 47,
      question: "What is the radial from VOR Brünkendorf (BKD) (53°02'N 011°33'E) to Pritzwalk (EDBU) (53°11'N 12°11'E)?",
      img: "NAV-031.png",
      options: [
        "024°",
        "204°",
        "248°",
        "068°"
      ],
      correctIndex: 3
    },
    {
      id: 48,
      question: "The distance between two airports is 220 NM. On an aeronautical navigation chart the pilot measures 40.7 cm for this distance. The chart scale is...",
      options: [
        "1:250000.",
        "1:2000000.",
        "1:500000.",
        "1:1000000."
      ],
      correctIndex: 3
    },
    {
      id: 49,
      question: "Given the following information, what is the aircraft position at the cross bearing? VOR Hamburg (HAM) (53°41'N, 010°12'E): Radial 119°. VOR Brünkendorf (BKD) (53°02'N 011°33'E): Radial 320°.",
      img: "NAV-031.png",
      options: [
        "52°20'N, 10°10'E",
        "54°40'N, 12°50'E",
        "52°10'N, 10°20'E",
        "53°20'N 11°10'E"
      ],
      correctIndex: 3
    },
    {
      id: 50,
      question: "What is the distance from VOR Brünkendorf (BKD) (53°02'N, 011°33'E) to Pritzwalk (EDBU) (53°11'N, 12°11'E)?",
      img: "NAV-031.png",
      options: [
        "24 km",
        "42 NM",
        "24 NM",
        "42 km"
      ],
      correctIndex: 2
    },
    {
      id: 51,
      question: "A distance of 7.5 cm on an aeronautical chart represents a distance of 60.745 NM in reality. What is the chart scale?",
      options: [
        "1:500000",
        "1:1000000",
        "1:150000",
        "1:1500000"
      ],
      correctIndex: 3
    },
    {
      id: 52,
      question: "For a short flight from A to B the pilot extracts the following information from an aeronautical chart: True course: 245°; Magnetic variation: 7° W. The magnetic course (MC) equals...",
      options: [
        "252°.",
        "245°.",
        "007°.",
        "238°."
      ],
      correctIndex: 0
    },
    {
      id: 53,
      question: "An aircraft is flying with an indicated airspeed (IAS) of 150 kt at 8000 ft MSL. According to the rule of thumb, the true airspeed (TAS) equals...",
      options: [
        "174 kt.",
        "150 kt.",
        "142 kt.",
        "208 kt."
      ],
      correctIndex: 0
    },
    {
      id: 54,
      question: "Given: True course from A to B: 250°. Ground distance: 210 NM. TAS: 130 kt. Headwind component: 15 kt. Estimated time of departure (ETD): 0915 UTC. The estimated time of arrival (ETA) is...",
      options: [
        "1115 UTC.",
        "1105 UTC.",
        "1005 UTC.",
        "1052 UTC."
      ],
      correctIndex: 1
    },
    {
      id: 55,
      question: "Given: True course from A to B: 283°. Ground distance: 75 NM. TAS: 105 kt. Headwind component: 12 kt. Estimated time of departure (ETD): 1242 UTC. The estimated time of arrival (ETA) is...",
      options: [
        "1430 UTC",
        "1356 UTC",
        "1330 UTC",
        "1320 UTC"
      ],
      correctIndex: 2
    },
    {
      id: 56,
      question: "Given: True course from A to B: 352°. Ground distance: 100 NM. GS: 107 kt. Estimated time of departure (ETD): 0933 UTC. The estimated time of arrival (ETA) is...",
      options: [
        "1129 UTC.",
        "1029 UTC.",
        "1146 UTC.",
        "1045 UTC."
      ],
      correctIndex: 1
    },
    {
      id: 57,
      question: "An aircraft travels 100 km in 56 minutes. The ground speed (GS) equals...",
      options: [
        "58 km/h.",
        "198 kt.",
        "93 kt.",
        "107 km/h."
      ],
      correctIndex: 3
    },
    {
      id: 58,
      question: "An aircraft travels 110 NM within 01:25. The ground speed (GS) equals...",
      options: [
        "120 km/h.",
        "160 km/h.",
        "86 kt.",
        "78 kt."
      ],
      correctIndex: 3
    },
    {
      id: 59,
      question: "What is the required flight time for a distance of 236 NM with a ground speed of 134 kt?",
      options: [
        "1:34 h",
        "0:46 h",
        "1:46 h",
        "0:34 h"
      ],
      correctIndex: 2
    },
    {
      id: 60,
      question: "An aircraft is flying with a true airspeed (TAS) of 120 kt and experiences 35 kt tailwind. How much time is needed for a distance of 185 NM?",
      options: [
        "1 h 32 min",
        "0 h 50 min",
        "1 h 12 min",
        "2 h 11 min"
      ],
      correctIndex: 2
    },
    {
      id: 61,
      question: "An aircraft is flying with a true airspeed (TAS) of 180 kt and a headwind component of 25 kt for 2 hours and 25 minutes. The distance flown equals...",
      options: [
        "693 NM.",
        "435 NM.",
        "375 NM.",
        "202 NM."
      ],
      correctIndex: 2
    },
    {
      id: 62,
      question: "Given: Calibrated airspeed (CAS): 155 kt. Flight level (FL) 80. Outside air temperature (OAT): +15° C. The true airspeed (TAS) equals...",
      options: [
        "155 kts.",
        "170 kts.",
        "180 kts.",
        "134 kts."
      ],
      correctIndex: 2
    },
    {
      id: 63,
      question: "What is the true course (TC) from Uelzen (EDVU) (52°59'N, 10°28'E) to Neustadt (EDAN) (53°22'N 011°37'E)?",
      img: "NAV-031.png",
      options: [
        "241°",
        "235°",
        "061°",
        "055°"
      ],
      correctIndex: 2
    },
    {
      id: 64,
      question: "An aircraft is flying at a FL 75 with an outside air temperature (OAT) of -9°C. The QNH altitude is 6500 ft. The true altitude equals...",
      options: [
        "6500 ft.",
        "6750 ft.",
        "7000 ft.",
        "6250 ft."
      ],
      correctIndex: 3
    },
    {
      id: 65,
      question: "What is the distance from Neustadt (EDAN) (53°22'N, 011°37'E) to Uelzen (EDVU) (52°59'N 10°28'E)?",
      img: "NAV-031.png",
      options: [
        "46 NM",
        "78 km",
        "46 km",
        "78 NM"
      ],
      correctIndex: 0
    },
    {
      id: 66,
      question: "An aircraft is flying at a pressure altitude of 7000 feet with an outside air temperature (OAT) of +11°C. The QNH altitude is 6500 ft. The true altitude equals...",
      options: [
        "6500 ft.",
        "7000 ft.",
        "6750 ft.",
        "6250 ft."
      ],
      correctIndex: 2
    },
    {
      id: 67,
      question: "An aircraft is flying at a pressure altitude of 7000 feet with an outside air temperature (OAT) of +21°C. The QNH altitude is 6500 ft. The true altitude equals...",
      options: [
        "6750 ft.",
        "6250 ft.",
        "7000 ft.",
        "6500 ft."
      ],
      correctIndex: 2
    },
    {
      id: 68,
      question: "Given: True course: 255°. TAS: 100 kt. Wind: 200°/10 kt. The true heading equals...",
      options: [
        "245°.",
        "275°",
        "265°",
        "250°"
      ],
      correctIndex: 3
    },
    {
      id: 69,
      question: "Given: True course: 165°. TAS: 90 kt. Wind: 130°/20 kt. Distance: 153 NM. The true heading equals...",
      options: [
        "126°",
        "158°",
        "152°",
        "165°."
      ],
      correctIndex: 1
    },
    {
      id: 70,
      question: "Given: Ground speed (GS): 160 kt. True course (TC): 177°. Wind vector (W/WS): 140°/20 kt. The true heading (TH) equals...",
      options: [
        "169°",
        "173°.",
        "184°.",
        "180°"
      ],
      correctIndex: 1
    },
    {
      id: 71,
      question: "An aircraft is following a true course (TC) of 220° at a constant TAS of 220 kt. The wind vector is 270°/50 kt. The ground speed (GS) equals...",
      options: [
        "170 kt.",
        "185 kt.",
        "255 kt.",
        "135 kt."
      ],
      correctIndex: 1
    },
    {
      id: 72,
      question: "An aircraft is following a true course (TC) of 040° at a constant true airspeed (TAS) of 180 kt. The wind vector is 350°/30 kt. The groundspeed (GS) equals...",
      options: [
        "172 kt.",
        "159 kt.",
        "155 kt.",
        "168 kt."
      ],
      correctIndex: 1
    },
    {
      id: 73,
      question: "An aircraft is following a true course (TC) of 040° at a constant true airspeed (TAS) of 180 kt. The wind vector is 350°/30 kt. The wind correction angle (WCA) equals...",
      options: [
        "+5°",
        "+11°",
        "-7°",
        "-9°"
      ],
      correctIndex: 2
    },
    {
      id: 74,
      question: "Given: True course: 270°. TAS: 100 kt. Wind: 090°/25 kt. Distance: 100 NM. The ground speed (GS) equals...",
      options: [
        "125 kt.",
        "117 kt.",
        "120 kt.",
        "131 kt."
      ],
      correctIndex: 0
    },
    {
      id: 75,
      question: "Given: True course: 270°. TAS: 100 kt. Wind: 090°/25 kt. Distance: 100 NM. The flight time equals...",
      options: [
        "62 Min.",
        "37 Min.",
        "48 Min.",
        "84 Min."
      ],
      correctIndex: 2
    },
    {
      id: 76,
      question: "An aircraft is following a true course (TC) of 040° at a constant true airspeed (TAS) of 180 kt. The wind vector is 350°/30 kt. The wind correction angle (WCA) equals...",
      options: [
        "7° left.",
        "3° right.",
        "3° left.",
        "7° right."
      ],
      correctIndex: 0
    },
    {
      id: 77,
      question: "Given: True course: 120°. TAS: 120 kt. Wind: 150°/12 kt. The WCA equals...",
      options: [
        "6° to the right.",
        "3° to the left.",
        "3° to the right.",
        "6° to the left."
      ],
      correctIndex: 2
    },
    {
      id: 78,
      question: "The distance from 'A' to 'B' measures 120 NM. At a distance of 55 NM from 'A' the pilot realizes a deviation of 7 NM to the right. What approximate course change must be made to reach 'B' directly?",
      options: [
        "8° left",
        "6° left",
        "15° left",
        "14° left"
      ],
      correctIndex: 3
    },
    {
      id: 79,
      question: "An aeroplane has a heading of 090°. The distance which has to be flown is 90 NM. After 45 NM the aeroplane is 4.5 NM north of the planned flight path. What is the corrected heading to reach the arrival aerodrome directly?",
      options: [
        "18° to the right",
        "12° to the right",
        "6° to the right",
        "9° to the right"
      ],
      correctIndex: 1
    },
    {
      id: 80,
      question: "What is the meaning of the 1:60 rule?",
      options: [
        "6 NM lateral offset at 1° drift after 10 NM",
        "60 NM lateral offset at 1° drift after 1 NM",
        "1 NM lateral offset at 1° drift after 60 NM",
        "10 NM lateral offset at 1° drift after 60 NM"
      ],
      correctIndex: 2
    },
    {
      id: 81,
      question: "An aircraft is flying from 'A' to 'B' (distance 220 NM) at an average ground speed (GS) of 120 kt. It departs 'A' at 1200 UTC. After 70 NM along the course from 'A', the aircraft is 5 min ahead of the planned schedule. Using the actual GS, what is the revised estimated time of arrival (ETA) at B?",
      options: [
        "1335 UTC",
        "1340 UTC",
        "1345 UTC",
        "1330 UTC"
      ],
      correctIndex: 0
    },
    {
      id: 82,
      question: "Assume calm wind and an aircraft descending from 9000 ft to 1500 ft. The rate of descent (ROD) equals 1200 ft/min. The elapsed time will be...",
      options: [
        "6 min.",
        "15 min.",
        "12 min.",
        "8 min."
      ],
      correctIndex: 0
    },
    {
      id: 83,
      question: "Assume zero wind and an aircraft descending from 7500 ft to 1200 ft with an average true airspeed (TAS) during the descent of 105 kt. The rate of descent (ROD) equals 800 ft/min. The elapsed time will be...",
      options: [
        "6 Min.",
        "8 Min.",
        "15 Min.",
        "12 Min."
      ],
      correctIndex: 1
    },
    {
      id: 84,
      question: "Which answer completes the flight plan (marked cells)?",
      img: "NAV-014.png",
      options: [
        "TH: 185°. MH: 185°. MC: 180°",
        "TH: 185°. MH: 184°. MC: 178°",
        "TH: 173°. MH: 174°. MC: 178°",
        "TH: 173°. MH: 184°. MC: 178°"
      ],
      correctIndex: 1
    },
    {
      id: 85,
      question: "What radio navigation aid can be received with the attached aerial?",
      img: "NAV-017.png",
      options: [
        "VOR",
        "DME",
        "NDB",
        "VDF"
      ],
      correctIndex: 2
    },
    {
      id: 86,
      question: "The approximate propagation speed of electromagnetic waves is...",
      options: [
        "300000 km/s",
        "300000 10 m/s.",
        "300000 NM/s.",
        "30000 ft/s."
      ],
      correctIndex: 0
    },
    {
      id: 87,
      question: "Radio waves within the LF and MF range (e.g. NDB) travel as...",
      options: [
        "sky wave.",
        "sky wave and as ground/surface wave.",
        "ground / surface wave.",
        "space wave (quasi-optical)."
      ],
      correctIndex: 1
    },
    {
      id: 88,
      question: "Radio waves within the VHF range (e.g. VOR) travel as...",
      options: [
        "sky wave and ground / surface wave.",
        "ground / surface wave.",
        "sky wave.",
        "space wave (quasi-optical)."
      ],
      correctIndex: 3
    },
    {
      id: 89,
      question: "Quasi-optical waves travel...",
      options: [
        "along the surface of the earth.",
        "through the air directly from the transmitter to the receiver.",
        "through the air and are influenced (e.g. reflected) by the ionosphere.",
        "along the surface of the earth, but are absorbed by the sea."
      ],
      correctIndex: 1
    },
    {
      id: 90,
      question: "A VHF direction finder (VDF) can determine...",
      options: [
        "slant ranges.",
        "magnetic bearings.",
        "approach speeds.",
        "true courses."
      ],
      correctIndex: 1
    },
    {
      id: 91,
      question: "Which equipment is needed on board of an aircraft to use a VHF direction finder (VDF)?",
      options: [
        "At least two VHF aerials",
        "A VHF radio",
        "A relative bearing indicator (RBI)",
        "A VDF receiver"
      ],
      correctIndex: 1
    },
    {
      id: 92,
      question: "Given: QDM: 138°; VAR: 10° E. The QUJ equals...",
      options: [
        "168°",
        "318°",
        "328°.",
        "148°"
      ],
      correctIndex: 3
    },
    {
      id: 93,
      question: "Given: QTE: 229°; VAR: 10° W. The QDM equals...",
      options: [
        "039°.",
        "059°",
        "239°.",
        "049°."
      ],
      correctIndex: 1
    },
    {
      id: 94,
      question: "Given: QDR: 022°; VAR: 10°E. The QTE equals...",
      options: [
        "212°.",
        "202°.",
        "052°.",
        "032°."
      ],
      correctIndex: 3
    },
    {
      id: 95,
      question: "Given: QDM: 248°; VAR: 10° W. The QTE is...",
      options: [
        "238°",
        "078°.",
        "058°",
        "258°"
      ],
      correctIndex: 2
    },
    {
      id: 96,
      question: "Given: QDR: 067°; VAR: 5° E. The QDM equals...",
      options: [
        "247°.",
        "072°",
        "252°.",
        "257°."
      ],
      correctIndex: 0
    },
    {
      id: 97,
      question: "Given: QDR: 152°; VAR: 5°W; DEV: 5°E. The QUJ equals...",
      options: [
        "332°.",
        "147°.",
        "327°",
        "317°"
      ],
      correctIndex: 2
    },
    {
      id: 98,
      question: "Given: QTE: 203°; VAR: 10°E. The QDR equals...",
      options: [
        "023°",
        "213°.",
        "193°.",
        "013°."
      ],
      correctIndex: 2
    },
    {
      id: 99,
      question: "Given: QTE: 248°; VAR: 10°V. The QDR equals...",
      options: [
        "068°.",
        "238°.",
        "258°",
        "078°."
      ],
      correctIndex: 2
    },
    {
      id: 100,
      question: "Given: QDM: 134°; VAR: 5° W. The QTE equals...",
      options: [
        "314°.",
        "299°",
        "129°",
        "309°"
      ],
      correctIndex: 3
    },
    {
      id: 101,
      question: "The pilot receives a QDR of 225° from the VDF ground station. Where is the aircraft located in relation to the ground station?",
      options: [
        "Southeast",
        "Northeast",
        "Southwest",
        "Northwest"
      ],
      correctIndex: 2
    },
    {
      id: 102,
      question: "The term QDR means...",
      options: [
        "magnetic bearing from the station to the aircraft.",
        "true bearing from the aircraft to the station.",
        "magnetic bearing from the aircraft to the station.",
        "true bearing from the station to the aircraft."
      ],
      correctIndex: 0
    },
    {
      id: 103,
      question: "The term QTE means...",
      options: [
        "magnetic bearing from the station to the aircraft.",
        "magnetic bearing from the aircraft to the station.",
        "true bearing from the station to the aircraft.",
        "true bearing from the aircraft to the station."
      ],
      correctIndex: 2
    },
    {
      id: 104,
      question: "A pilot receives a QDR of 135° from the VDF ground station. Where is the aircraft located in relation to the ground station?",
      options: [
        "Northwest",
        "Southeast",
        "Southwest.",
        "Northeast"
      ],
      correctIndex: 1
    },
    {
      id: 105,
      question: "A pilot receives a QDR of 315° from the VDF ground station. Where is the aircraft located in relation to the ground station?",
      options: [
        "Northwest",
        "Northeast",
        "Southeast",
        "Southwest"
      ],
      correctIndex: 0
    },
    {
      id: 106,
      question: "The VDF range depends on...",
      options: [
        "the aircraft's speed.",
        "the condition of the ionosphere.",
        "the range of the ground / surface wave.",
        "the aircraft's altitude."
      ],
      correctIndex: 3
    },
    {
      id: 107,
      question: "Which equipment is needed on board of an aircraft to receive signals from a non-directional beacon (NDB)?",
      options: [
        "Course deviation indicator (CDI)",
        "Horizontal situation indicator (HSI)",
        "Automatic direction finder (ADF)",
        "Secondary surveillance radar (SSR)"
      ],
      correctIndex: 2
    },
    {
      id: 108,
      question: "Non-directional beacons (NDBs) transmit within which frequency band?",
      options: [
        "Very low frequency (VLF) and low frequency (LF)",
        "Low frequency (LF) and medium frequency (MF)",
        "High frequency (HF)",
        "Very high frequency (VHF)"
      ],
      correctIndex: 1
    },
    {
      id: 109,
      question: "A pilot wants to approach an NDB on QDM 090°. The aircraft flies for about 5 minutes with a magnetic heading (MH) of 095° and the RBI indication of 355°. After 6 minutes the RBI indicates 358°. Which statement is correct?",
      options: [
        "The crosswind component increased; the pilot has to increase the MH",
        "The crosswind component increased; the pilot has to decrease the MH",
        "The crosswind component decreased; the pilot has to increase the MH",
        "The crosswind component decreased; the pilot has to decrease the MH"
      ],
      correctIndex: 1
    },
    {
      id: 110,
      question: "The pilot wants to proceed directly to the beacon. The wind is calm. The pilot should follow a QDM of...",
      img: "NAV-019.png",
      options: [
        "080°",
        "200°",
        "260°",
        "230°"
      ],
      correctIndex: 2
    },
    {
      id: 111,
      question: "What is the difference between a locator beacon and a non-directional beacon (NDB)?",
      options: [
        "Locator beacons transmit more precisely",
        "Locator beacons have a higher range than NDBs",
        "Locator beacons transmit on request only",
        "Locator beacons have a lower range than NDBs"
      ],
      correctIndex: 3
    },
    {
      id: 112,
      question: "The range of NDBs transmitting in the medium frequency range is greatest...",
      options: [
        "before midday.",
        "at night.",
        "on midday.",
        "in the daytime."
      ],
      correctIndex: 1
    },
    {
      id: 113,
      question: "The shoreline effect is greatest with radio wave propagation...",
      options: [
        "at a right angle to the coast; aircraft below 6000 ft.",
        "at an acute angle to the coast; aircraft above 6000 ft.",
        "at an acute angle to the coast; aircraft below 6000 ft.",
        "at a right angle to the coast; aircraft above 6000 ft."
      ],
      correctIndex: 2
    },
    {
      id: 114,
      question: "Fading in LF/MF frequency range occurs mainly...",
      options: [
        "in the late afternoon.",
        "at midday.",
        "during the night.",
        "in the daytime."
      ],
      correctIndex: 2
    },
    {
      id: 115,
      question: "The progress of an electromagnetic oscillation can be described by the...",
      options: [
        "phase angle.",
        "amplitude angle.",
        "wave angle.",
        "frequency angle."
      ],
      correctIndex: 0
    },
    {
      id: 116,
      question: "When transmitter and receiver are moving towards each other...",
      options: [
        "the frequency varies, but the wavelength remains constant.",
        "the perceived frequency equals the transmitted frequency.",
        "the perceived frequency increases.",
        "the perceived frequency decreases."
      ],
      correctIndex: 2
    },
    {
      id: 117,
      question: "When transmitter and receiver are moving away from each other...",
      options: [
        "the perceived frequency increases.",
        "the perceived frequency decreases.",
        "the frequency varies, but the wavelength remains constant.",
        "the perceived frequency equals the transmitted frequency."
      ],
      correctIndex: 1
    },
    {
      id: 118,
      question: "VOR radials are defined based on the principle of...",
      options: [
        "phase comparison of two signals.",
        "frequency comparison of two signals.",
        "pulse comparison of two signals.",
        "amplitude comparison of two signals."
      ],
      correctIndex: 0
    },
    {
      id: 119,
      question: "A VOR radial corresponds to the...",
      options: [
        "QTE.",
        "QUJ.",
        "QDR.",
        "QDM."
      ],
      correctIndex: 2
    },
    {
      id: 120,
      question: "Full deflection of the course deviation indicator (CDI) means that the aircraft is located at least...",
      options: [
        "2 NM beside the selected course.",
        "10 NM beside the selected course.",
        "2° beside the selected course.",
        "10° beside the selected course."
      ],
      correctIndex: 3
    },
    {
      id: 121,
      question: "Where is the aircraft located in relation to the VOR?",
      img: "NAV-022.png",
      options: [
        "Northeast",
        "Southeast",
        "Southwest",
        "Northwest"
      ],
      correctIndex: 1
    },
    {
      id: 122,
      question: "The aircraft is on radial...",
      img: "NAV-024.png",
      options: [
        "066°",
        "234°.",
        "060°",
        "246°"
      ],
      correctIndex: 1
    },
    {
      id: 123,
      question: "The range of a VOR is affected by...",
      options: [
        "daylight interference.",
        "reflected sky waves.",
        "multipath propagation of the ground wave.",
        "transmitter and receiver altitude."
      ],
      correctIndex: 3
    },
    {
      id: 124,
      question: "The distance measuring equipment (DME) determines the distance based on the principle of...",
      options: [
        "time measurement.",
        "Doppler.",
        "laser measurement.",
        "phase comparison."
      ],
      correctIndex: 0
    },
    {
      id: 125,
      question: "The DME reading is a...",
      options: [
        "ground distance.",
        "air range.",
        "radial distance.",
        "slant range."
      ],
      correctIndex: 3
    },
    {
      id: 126,
      question: "The differenz between indicated DME slant range and horizontal distance from the DME station increases...",
      options: [
        "when circling around the DME station.",
        "when descending.",
        "when departing the DME station.",
        "when approaching the DME station."
      ],
      correctIndex: 3
    },
    {
      id: 127,
      question: "Using primary ground radar, the direction of the aeroplane in relation to the antenna is determined by...",
      options: [
        "the pulse pair interval.",
        "the orientation of the antenna.",
        "the frequency shift of the received pulse.",
        "time measurement."
      ],
      correctIndex: 1
    },
    {
      id: 128,
      question: "Which instantaneous information can be obtained from ground radar equipment?",
      options: [
        "Distance and direction",
        "Airspeed (TAS) and distance",
        "Airspeed (TAS) and heading",
        "Direction and airspeed (TAS)"
      ],
      correctIndex: 0
    },
    {
      id: 129,
      question: "The on-board equipment of the secondary surveillance radar (SSR) is called...",
      options: [
        "course indicator.",
        "transponder.",
        "interrogator.",
        "decoder."
      ],
      correctIndex: 1
    },
    {
      id: 130,
      question: "What is the difference between primary and secondary radar?",
      options: [
        "The pulses of a primary radar are variably pulse-modulated, the pulses of a secondary radar are statically amplitude-modulated",
        "The pulses of a primary radar are variably amplitude-modulated, the pulses of a secondary radar are statically pulse-modulated",
        "The primary radar is displayed on a computer screen, the secondary radar on a radar strip",
        "The pulses of a primary radar are reflected by the aircraft's surface, the pulses of a secondary radar system are answered by a transponder"
      ],
      correctIndex: 3
    },
    {
      id: 131,
      question: "The transponder code in case of hi-jacking is...",
      options: [
        "7000.",
        "7600.",
        "7500.",
        "7700."
      ],
      correctIndex: 2
    },
    {
      id: 132,
      question: "The transponder code in case of a radio communication failure is...",
      options: [
        "7700.",
        "7500.",
        "7000.",
        "7600."
      ],
      correctIndex: 3
    },
    {
      id: 133,
      question: "Which altitude is transmitted by the transponder in mode C?",
      options: [
        "QFE altitude",
        "Pressure altitude",
        "QNH altitude",
        "Radio altitude"
      ],
      correctIndex: 1
    },
    {
      id: 134,
      question: "How many satellites are necessary for a precise and verified three-dimensional determination of the position?",
      options: [
        "Two",
        "Three",
        "Five",
        "Four"
      ],
      correctIndex: 3
    },
    {
      id: 135,
      question: "When using a GPS for tracking to the next waypoint, a deviation indication is shown by a vertical bar and dots to the left and to the right of the bar. What statement describes the correct interpretation of the display?",
      options: [
        "The deviation of the bar from the center indicates the track error as angular distance in degrees; the scale for full deflection depends on the operating mode of the GPS.",
        "The deviation of the bar from the center indicates the track error as angular distance in degrees; the scale for full deflection is +-10°",
        "The deviation of the bar from the center indicates the track error as absolute distance in NM; the scale for full deflection is +-10 NM.",
        "The deviation of the bar from the center indicates the track error as absolute distance in NM; the scale for full deflection depends on the operating mode of the GPS."
      ],
      correctIndex: 3
    },
    {
      id: 136,
      question: "What is meant by the term 'terrestrial navigation'?",
      options: [
        "Orientation by ground celestial object during visual flight",
        "Orientation by ground features during visual flight",
        "Orientation by GPS during visual flight",
        "Orientation by instrument readings during visual flight"
      ],
      correctIndex: 1
    },
    {
      id: 137,
      question: "What ground features should preferrably be used for orientation during visual flight?",
      options: [
        "Border lines",
        "Farm tracks and creeks",
        "Power lines",
        "Rivers, railroads, highways"
      ],
      correctIndex: 3
    }
  ],
  airlaw: [
    {
      id: 1,
      question: "Which of the following documents have to be on board for an international flight?\n a) Certificate of aircraft registration\n b) Certificate of airworthiness\n c) Airworthiness review certificate\n d) EASA Form-1\n e) Airplane logbook\n f) Appropriate papers for every crew member\n g) Technical logbook",
      options: [
        "a, b, c, d, e, f, g",
        "a, b, c, e, f",
        "a, b, e, g",
        "d, f, g"
      ],
      correctIndex: 1
    },
    {
      id: 2,
      question: "Which area could be crossed with certain restrictions?",
      options: [
        "No-fly zone",
        "Restricted area",
        "Prohibited area",
        "Dangerous area"
      ],
      correctIndex: 1
    },
    {
      id: 3,
      question: "Where can the type of restriction for a restricted airspace be found?",
      options: [
        "NOTAM",
        "AIC",
        "ICAO chart 1:500000",
        "AIP"
      ],
      correctIndex: 3
    },
    {
      id: 4,
      question: "What is the status of the rules and procedures created by the EASA? (e.g. Part-SFCL, Part-MED)",
      options: [
        "They have the same status as ICAO Annexes",
        "Only after a ratification by individual EU member states they are legally binding",
        "They are not legally binding, they only serve as a guide",
        "They are part of the EU regulation and legally binding to all EU member states"
      ],
      correctIndex: 3
    },
    {
      id: 5,
      question: "Which validity does the 'Certificate of Airworthiness' have?",
      options: [
        "6 months",
        "12 years",
        "Unlimited",
        "12 months"
      ],
      correctIndex: 2
    },
    {
      id: 6,
      question: "What is the meaning of the abbreviation 'ARC'?",
      options: [
        "Airworthiness Recurring Control",
        "Airspace Rulemaking Committee",
        "Airspace Restriction Criteria",
        "Airworthiness Review Certificate"
      ],
      correctIndex: 3
    },
    {
      id: 7,
      question: "The 'Certificate of Airworthiness' is issued by the state...",
      options: [
        "in which the aircraft is registered.",
        "of the residence of the owner.",
        "in which the aircraft is constructed.",
        "in which the airworthiness review is done."
      ],
      correctIndex: 0
    },
    {
      id: 8,
      question: "A pilot license issued in accordance with ICAO Annex 1 is valid in...",
      options: [
        "those countries that have accepted this license on application.",
        "the country where the license was issued.",
        "all ICAO countries.",
        "the country where the license was acquired."
      ],
      correctIndex: 2
    },
    {
      id: 9,
      question: "What is the subject of ICAO Annex 1?",
      options: [
        "Air traffic services",
        "Flight crew licensing",
        "Rules of the air",
        "Operation of aircraft"
      ],
      correctIndex: 1
    },
    {
      id: 10,
      question: "What is the period of validity of a private pilot license (PPL)?",
      options: [
        "Unlimited",
        "24 months",
        "48 months",
        "60 months"
      ],
      correctIndex: 0
    },
    {
      id: 11,
      question: "What is the minimum age to obtain a private pilot license?",
      options: [
        "17 years",
        "21 years",
        "16 years",
        "18 years"
      ],
      correctIndex: 0
    },
    {
      id: 12,
      question: "What are the minimum requirements among others to acquire a rating for VFR night flights?",
      options: [
        "At least 10 additional flight hours at night, three of them with a flight instructor",
        "At least 5 additional flight hours at night, four of them with a flight instructor",
        "At least 5 additional flight hours at night, 3 with instructor, 1 XC, 5 solo landings",
        "At least 5 additional flight hours at night, 3 with instructor, 1 XC, 10 solo landings"
      ],
      correctIndex: 2
    },
    {
      id: 13,
      question: "The validity of a medical examination certificate class 2 for a 62 years old pilot is...",
      options: [
        "60 Months.",
        "48 Months.",
        "24 Months.",
        "12 Months."
      ],
      correctIndex: 3
    },
    {
      id: 14,
      question: "In which way is a SEP (land) rating renewed if you do not meet the required flight time?",
      options: [
        "A proficiency check with an examiner",
        "Several training flights under supervision of an ATO",
        "The ATO can renew the rating after a training flight",
        "Accumulate flight experience under supervision of a flight instructor"
      ],
      correctIndex: 0
    },
    {
      id: 15,
      question: "The possession of a european PPL(A) entitles the holder to...",
      options: [
        "act as pilot on a commercial flight when there are at most 4 people on board.",
        "act as pilot in commercial and non-commercial flights with single engine aircraft.",
        "act as PIC, and only for flights with MTOW max 2000 kg a compensation may be obtained.",
        "act as PIC on non-commercial flights without compensation (unless Flight Instructor)."
      ],
      correctIndex: 3
    },
    {
      id: 16,
      question: "What is the minimum age to start a private pilot training at a flight school?",
      options: [
        "16 years",
        "21 years",
        "17 years",
        "18 years"
      ],
      correctIndex: 0
    },
    {
      id: 17,
      question: "What is the meaning of the abbreviation 'SERA'?",
      options: [
        "Selective Radar Altimeter",
        "Standardized European Rules of the Air",
        "Specialized Radar Approach",
        "Standard European Routes of the Air"
      ],
      correctIndex: 1
    },
    {
      id: 18,
      question: "What is the meaning of the abbreviation 'TRA'?",
      options: [
        "Temporary Reserved Airspace",
        "Temporary Radar Routing Area",
        "Transponder Area",
        "Terminal Area"
      ],
      correctIndex: 0
    },
    {
      id: 19,
      question: "What has to be considered when entering an RMZ?",
      options: [
        "To permanently monitor the radio and if possible to establish radio contact",
        "To obtain a clearance from the local aviation authority",
        "The transponder has to be switched on Mode C and squawk 7000",
        "To obtain a clearance to enter this area"
      ],
      correctIndex: 0
    },
    {
      id: 20,
      question: "What condition has to be met during a Special VFR flight?",
      options: [
        "Visual reference to the terrain",
        "Speed not above 115 kt IAS",
        "At least 500 m ground visibility",
        "A minimum distance to clouds of 2000 m"
      ],
      correctIndex: 0
    },
    {
      id: 21,
      question: "What has to be done before entering a TMZ?",
      options: [
        "Switch on the transponder and activate mode A and C or mode S",
        "Request a clearance before entering",
        "Switch on the transponder, activate mode A, and squawk 'IDENT'",
        "File a flight plan before the flight"
      ],
      correctIndex: 0
    },
    {
      id: 22,
      question: "What is the meaning of an area marked as 'TMZ'?",
      options: [
        "Transportation Management Zone",
        "Touring Motorglider Zone",
        "Traffic Management Zone",
        "Transponder Mandatory Zone"
      ],
      correctIndex: 3
    },
    {
      id: 23,
      question: "What is the meaning of the abbreviation 'IFR'?",
      options: [
        "Instrument Flight Rules",
        "Instrument Meteorological Conditions",
        "Bad Weather Flight Rules",
        "Commercial Flight Rules"
      ],
      correctIndex: 0
    },
    {
      id: 24,
      question: "A flight is called a 'visual flight', if the...",
      options: [
        "visibility in flight is more than 8 km.",
        "flight is conducted under visual flight rules.",
        "visibility in flight is more than 5 km.",
        "flight is conducted in visual meteorological conditions."
      ],
      correctIndex: 1
    },
    {
      id: 25,
      question: "What is the meaning of the abbreviation 'VMC'?",
      options: [
        "Instrument flight conditions",
        "Variable meteorological conditions",
        "Visual meteorological conditions",
        "Visual flight rules"
      ],
      correctIndex: 2
    },
    {
      id: 26,
      question: "Two engine-driven aircraft are flying on crossing courses at the same altitude. Which one has to divert?",
      options: [
        "The lighter one has to climb",
        "Both have to divert to the right",
        "The heavier one has to climb",
        "Both have to divert to the left"
      ],
      correctIndex: 1
    },
    {
      id: 27,
      question: "Two aeroplanes are flying on crossing tracks. Which one has to divert?",
      options: [
        "The aircraft which flies from left to right has the right of priority",
        "Both have to divert to the right",
        "The aircraft which flies from right to left has the right of priority",
        "Both have to divert to the left"
      ],
      correctIndex: 2
    },
    {
      id: 28,
      question: "In airspace 'D' a Boeing 737 and a Cessna 152 are flying on crossing courses. Which aeroplane has to divert?",
      options: [
        "The Cessna 152, because IFR and commercial flights have priority",
        "The air traffic control (ATC) has to decide which one has to divert",
        "The aeroplane flying from right to left has priority, the other one has to divert",
        "The Boeing 737, because an airliner has greater power reserves"
      ],
      correctIndex: 2
    },
    {
      id: 29,
      question: "Which of the following options is NOT a sufficient reason to fly below the required minimum height?",
      options: [
        "Take-off or landing at an aerodrome",
        "An approach without landing at an aerodrome",
        "Bad weather conditions in the vicinity of an aerodrome",
        "The drop of towed objects at an aerodrome"
      ],
      correctIndex: 2
    },
    {
      id: 30,
      question: "A single-engine piston and a turboprop aeroplane are approaching each other opposite at the same altitude. Which aeroplane has to change its track to avoid a collision?",
      options: [
        "The turboprop aircraft has to give way",
        "Both aircraft have to alter their tracks to the left",
        "Both aircraft have to alter their tracks to the right",
        "The single-engine piston aircraft has to give way"
      ],
      correctIndex: 2
    },
    {
      id: 31,
      question: "Which distances to clouds have to be maintained during a VFR flight in airspaces C, D and E?",
      options: [
        "1500 m horizontally, 1000 ft vertically",
        "1500 m horizontally, 1000 m vertically",
        "1000 m horizontally, 1500 ft vertically",
        "1000 m horizontally, 300 m vertically"
      ],
      correctIndex: 0
    },
    {
      id: 32,
      question: "The minimum flight visibility at 5000 ft MSL in airspace B for VFR flights is...",
      options: [
        "8000 m.",
        "3000 m.",
        "1500 m.",
        "5000 m."
      ],
      correctIndex: 3
    },
    {
      id: 33,
      question: "What is the minimum flight visibility in airspace 'C' for an aircraft operating under VFR at 5000 ft MSL?",
      options: [
        "8000 m",
        "1500 m",
        "3000 m",
        "5000 m"
      ],
      correctIndex: 3
    },
    {
      id: 34,
      question: "What is the minimum flight visibility in airspace 'E' for an aircraft operating under VFR at FL75?",
      options: [
        "8000 m",
        "1500 m",
        "3000 m",
        "5000 m"
      ],
      correctIndex: 3
    },
    {
      id: 35,
      question: "What is the minimum flight visibility in airspace 'C' for an aircraft operating under VFR at FL110?",
      options: [
        "5000 m",
        "1500 m",
        "3000 m",
        "8000 m"
      ],
      correctIndex: 3
    },
    {
      id: 36,
      question: "What is the minimum flight visibility in airspace 'C' for an aircraft operating under VFR at FL125?",
      options: [
        "5000 m",
        "3000 m",
        "1500 m",
        "8000 m"
      ],
      correctIndex: 3
    },
    {
      id: 37,
      question: "What are the minimum distances to clouds for a VFR flight in airspace 'B'?",
      options: [
        "Horizontally 1.500 m, vertically 1.000 m",
        "Horizontally 1.500 m, vertically 300 m",
        "Horizontally 1.000 m, vertically 1.500 ft",
        "Horizontally 1.000 m, vertically 300 m"
      ],
      correctIndex: 1
    },
    {
      id: 38,
      question: "What is the minimum flight visibility in airspace 'C' below FL 100 for an aircraft operating under VFR?",
      options: [
        "5 km",
        "10 km",
        "1.5 km",
        "8 km"
      ],
      correctIndex: 0
    },
    {
      id: 39,
      question: "What is the minimum flight visibility in airspace 'C' at and above FL 100 for an aircraft operating under VFR?",
      options: [
        "1.5 km",
        "5 km",
        "10 km",
        "8 km"
      ],
      correctIndex: 3
    },
    {
      id: 40,
      question: "The term 'ceiling' is defined as the...",
      options: [
        "altitude of the base of the lowest layer covering > half sky below 20000 ft.",
        "height of the base of the lowest layer covering > half sky below 10000 ft.",
        "height of the base of the highest layer covering > half sky below 20000 ft.",
        "height of the base of the lowest layer covering > half sky below 20000 ft."
      ],
      correctIndex: 3
    },
    {
      id: 41,
      question: "Being intercepted at daytime: Alternating movement of ailerons, followed by a smooth turn to the left. Meaning?",
      options: [
        "Prepare for a safety landing",
        "You are entering a restricted area",
        "Follow me",
        "You are clear of restricted airspaces"
      ],
      correctIndex: 2
    },
    {
      id: 42,
      question: "Being intercepted at daytime: Sudden heading change of 90 degrees or more and a pull-up. Meaning?",
      options: [
        "You are entering a restricted area",
        "You may continue your flight",
        "Follow me",
        "Prepare for a safety landing"
      ],
      correctIndex: 1
    },
    {
      id: 43,
      question: "The altimeter is switched from local QNH to 1013.25 hPa...",
      options: [
        "at the decision height.",
        "at 4000 ft.",
        "when climbing above the transition altitude.",
        "when descending below FL 100."
      ],
      correctIndex: 2
    },
    {
      id: 44,
      question: "During a flight at FL 80, the altimeter setting has to be...",
      options: [
        "1030.25 hPa.",
        "1013.25 hPa.",
        "local QFE.",
        "local QNH."
      ],
      correctIndex: 1
    },
    {
      id: 45,
      question: "What is the purpose of the semi-circular rule?",
      options: [
        "To avoid collisions by reducing the probability of opposing traffic at the same altitude",
        "To fly without a filed flight plan in prescribed zones",
        "To allow safe climbing or descending in a holding pattern",
        "To avoid collisions by suspending turning manoeuvres"
      ],
      correctIndex: 0
    },
    {
      id: 46,
      question: "Which of the following options are possible SSR-Transponder modes?",
      options: [
        "A, C, S",
        "A, C, R",
        "B, C, V",
        "B, R, S"
      ],
      correctIndex: 0
    },
    {
      id: 47,
      question: "A transponder with the ability to send the current pressure level is a...",
      options: [
        "pressure-decoder.",
        "mode C or S transponder.",
        "mode A transponder.",
        "transponder approved for airspace 'B'."
      ],
      correctIndex: 1
    },
    {
      id: 48,
      question: "Which transponder code indicates a loss of radio communication?",
      options: [
        "2000",
        "7700",
        "7000",
        "7600"
      ],
      correctIndex: 3
    },
    {
      id: 49,
      question: "Which transponder code should be set during a radio failure without any request?",
      options: [
        "7600",
        "7700",
        "7000",
        "7500"
      ],
      correctIndex: 0
    },
    {
      id: 50,
      question: "Which transponder code has to be set unrequested during an emergency?",
      options: [
        "7600",
        "7700",
        "7000",
        "7500"
      ],
      correctIndex: 1
    },
    {
      id: 51,
      question: "Which air traffic service is responsible for the safe conduct of flights?",
      options: [
        "ALR (alerting service)",
        "FIS (flight information service)",
        "ATC (air traffic control)",
        "AIS (aeronautical information service)"
      ],
      correctIndex: 2
    },
    {
      id: 52,
      question: "Air traffic control service is conducted by which services?",
      options: [
        "TWR, APP, ACC",
        "APP, ACC, FIS",
        "ALR, SAR, TWR",
        "FIS, AIS, AFS"
      ],
      correctIndex: 0
    },
    {
      id: 53,
      question: "Which answer is correct with regard to separation in airspace 'E'?",
      options: [
        "IFR traffic is separated only from VFR traffic",
        "VFR traffic is separated from VFR and IFR traffic",
        "VFR traffic is separated only from IFR traffic",
        "VFR traffic is not separated from any other traffic"
      ],
      correctIndex: 3
    },
    {
      id: 54,
      question: "Which air traffic services can be expected within an FIR (flight information region)?",
      options: [
        "ATC, FIS",
        "FIS, ALR",
        "AIS, SAR",
        "ATC, AIS"
      ],
      correctIndex: 1
    },
    {
      id: 55,
      question: "A pilot can contact FIS (flight information service)...",
      options: [
        "via telephone.",
        "via internet.",
        "by a personal visit.",
        "via radio communication."
      ],
      correctIndex: 3
    },
    {
      id: 56,
      question: "What is the correct phrase with respect to wake turbulence to indicate that a light aircraft is following an aircraft of a higher wake turbulence category?",
      options: [
        "Danger jet blast",
        "Be careful wake winds",
        "Attention propwash",
        "Caution wake turbulence"
      ],
      correctIndex: 3
    },
    {
      id: 57,
      question: "Which of the following options states a correct position report?",
      options: [
        "DEABC reaching 'N'",
        "DEABC over 'N' in FL 2500 ft",
        "DEABC, 'N', 2500 ft",
        "DEABC over 'N' at 35"
      ],
      correctIndex: 2
    },
    {
      id: 58,
      question: "What is the meaning of the abbreviation 'AIREP'?",
      options: [
        "Aircraft report",
        "Aeronautical instrument requirement report",
        "Automatic identification report",
        "Aeronautical information report"
      ],
      correctIndex: 0
    },
    {
      id: 59,
      question: "What information is provided in the general part (GEN) of the AIP?",
      options: [
        "Table of content, classification of airfields, approach charts, taxi charts",
        "Map icons, radio nav aids, sunrise/sunset, fees",
        "Warnings for aviation, ATS airspaces, restricted airspaces",
        "Access restrictions, passenger controls, license samples"
      ],
      correctIndex: 1
    },
    {
      id: 60,
      question: "Which are the different parts of the Aeronautical Information Publication (AIP)?",
      options: [
        "GEN, MET, RAC",
        "GEN, COM, MET",
        "GEN, AGA, COM",
        "GEN, ENR, AD"
      ],
      correctIndex: 3
    },
    {
      id: 61,
      question: "What information is provided in the part 'AD' of the AIP?",
      options: [
        "Warnings for aviation, ATS airspaces and routes",
        "Table of content, classification of airfields, maps, approach/taxi charts",
        "Map icons, radio nav aids, sunrise/sunset, fees",
        "Access restrictions, passenger controls, license samples"
      ],
      correctIndex: 1
    },
    {
      id: 62,
      question: "The shown NOTAM is valid until... A1024/13 A) LOWW B) 1305211200 C) 1305211400",
      options: [
        "21/05/2013 14:00 UTC.",
        "13/10/2013 00:00 UTC.",
        "13/05/2013 12:00 UTC.",
        "21/05/2014 13:00 UTC."
      ],
      correctIndex: 0
    },
    {
      id: 63,
      question: "A Pre-Flight Information Bulletin (PIB) is a presentation of current...",
      options: [
        "ICAO information prepared after the flight.",
        "AIP information prepared prior to flight.",
        "AIC information prepared after the flight.",
        "NOTAM information of operational significance prepared prior to flight."
      ],
      correctIndex: 3
    },
    {
      id: 64,
      question: "The term 'aerodrome elevation' is defined as...",
      options: [
        "the highest point of the landing area.",
        "the lowest point of the landing area.",
        "the highest point of the apron.",
        "the average value of the height of the manoeuvring area."
      ],
      correctIndex: 0
    },
    {
      id: 65,
      question: "The term 'runway' is defined as a...",
      options: [
        "round area on an aerodrome.",
        "rectangular area on a land aerodrome prepared for landing/take-off of aircraft.",
        "rectangular area on land or water prepared for landing/take-off of aircraft.",
        "rectangular area on land prepared for landing/take-off of helicopters."
      ],
      correctIndex: 1
    },
    {
      id: 66,
      question: "Which statement is correct with regard to the term 'taxi holding point'?",
      options: [
        "An area where the aircraft must stop unless further permission is given",
        "Only to be observed for IFR traffic",
        "The point at which the aircraft must stop unless further permission to proceed is given",
        "Indicates the beginning of the safety area and may be crossed"
      ],
      correctIndex: 2
    },
    {
      id: 67,
      question: "What does the reported runway condition 'WET' mean?",
      options: [
        "Some water patches are visible",
        "Surface soaked, no significant patches of standing water",
        "A large part of the surface is flooded",
        "The runway is clear of water, ice, and snow"
      ],
      correctIndex: 1
    },
    {
      id: 68,
      question: "What does the reported runway condition 'DAMP' mean?",
      options: [
        "Wet surface, but no significant puddles",
        "Change of colour on the surface due to moisture",
        "The runway is clear of water, ice, and snow",
        "A large part of the surface is flooded"
      ],
      correctIndex: 1
    },
    {
      id: 69,
      question: "What does 'WATER PATCHES' mean regarding the reported runway condition?",
      options: [
        "A large part of the surface is flooded",
        "Patches of standing water are visible",
        "Wet surface, but no significant patches are visible",
        "The runway is clear of water, ice, and snow"
      ],
      correctIndex: 1
    },
    {
      id: 70,
      question: "How can a wind direction indicator be marked for better visibility?",
      options: [
        "Mounted on top of the control tower.",
        "Made from green materials.",
        "Surrounded by a white circle.",
        "Located on a big black surface."
      ],
      correctIndex: 2
    },
    {
      id: 71,
      question: "What is the meaning of a flashing red light signal at a controlled aerodrome directed to an aircraft in flight?",
      options: [
        "Airport unsafe, do not land",
        "Return for landing, followed by steady green",
        "Cleared to land",
        "Give way to other aircraft and continue circling"
      ],
      correctIndex: 0
    },
    {
      id: 72,
      question: "What is the meaning of a flashing green light signal at a controlled aerodrome directed to an aircraft in flight?",
      options: [
        "Return for landing, followed by steady green at the appropriate time",
        "Cleared to land",
        "Give way to other aircraft and continue circling",
        "Airport unsafe, do not land"
      ],
      correctIndex: 0
    },
    {
      id: 73,
      question: "What is the meaning of a steady green light signal at a controlled aerodrome directed to an aircraft in flight?",
      options: [
        "Give way to other aircraft and continue circling",
        "Cleared to land",
        "Return for landing, followed by steady green",
        "Airport unsafe, do not land"
      ],
      correctIndex: 1
    },
    {
      id: 74,
      question: "What is the meaning of a flashing white light signal at a controlled aerodrome directed to an aircraft on ground?",
      options: [
        "Cleared to taxi",
        "Clear the taxiway / runway",
        "Cleared for take-off",
        "Return to starting point"
      ],
      correctIndex: 3
    },
    {
      id: 75,
      question: "What is the meaning of a flashing red light signal at a controlled aerodrome directed to an aircraft on ground?",
      options: [
        "Cleared for take-off",
        "Cleared to taxi",
        "Immediately taxi clear of runway in use",
        "Return to starting point"
      ],
      correctIndex: 2
    },
    {
      id: 76,
      question: "What is the meaning of a flashing green light signal at a controlled aerodrome directed to an aircraft on ground?",
      options: [
        "Cleared to taxi",
        "Return to starting point",
        "Land at this airport and proceed to the apron",
        "Cleared for take-off"
      ],
      correctIndex: 0
    },
    {
      id: 77,
      question: "Of what shape is a landing direction indicator?",
      options: [
        "L",
        "A straight arrow",
        "An angled arrow",
        "T"
      ],
      correctIndex: 3
    },
    {
      id: 78,
      question: "What is the purpose of the signal square at an aerodrome?",
      options: [
        "It contains special symbols to indicate the conditions at the aerodrome visually to over-flying aircraft",
        "It is an illuminated area on which search and rescue vehicles are placed",
        "Aircraft taxi to this square to get light signals",
        "It is a specially marked area to pick up or drop towing objects"
      ],
      correctIndex: 0
    },
    {
      id: 79,
      question: "In which way should a pilot confirm received light signals in flight?",
      options: [
        "Apply some changes of RPM",
        "Apply some changes of the rudder",
        "Rock the wings (in the daytime)",
        "Apply some fast pitch changes"
      ],
      correctIndex: 2
    },
    {
      id: 80,
      question: "What is the meaning of a steady red light signal at a controlled aerodrome directed to an aircraft on ground?",
      options: [
        "Land at this airport and proceed to apron",
        "Clear the taxiway / runway",
        "Return to starting point",
        "Stop"
      ],
      correctIndex: 3
    },
    {
      id: 81,
      question: "How are two parallel runways designated?",
      options: [
        "Left gets 'L', right gets 'R'",
        "Left gets 'L', right remains unchanged",
        "Left gets '-1', right '-2'",
        "Left remains unchanged, right increased by 1"
      ],
      correctIndex: 0
    },
    {
      id: 82,
      question: "According to ICAO Annex 14, which is the colour marking of a runway?",
      options: [
        "Blue",
        "White",
        "Yellow",
        "Green"
      ],
      correctIndex: 1
    },
    {
      id: 83,
      question: "What is indicated by a pattern of longitudinal stripes of uniform dimensions disposed symmetrically about the centerline of a runway?",
      options: [
        "At this point the glide path of an ILS hits the runway",
        "Do not touch down before them",
        "Do not touch down behind them",
        "A ground roll could be started from this position"
      ],
      correctIndex: 1
    },
    {
      id: 84,
      question: "Which runway designators are correct for 2 parallel runways?",
      options: [
        "06L and 06R",
        "18 and 18-2",
        "26 and 26R",
        "24 and 25"
      ],
      correctIndex: 0
    },
    {
      id: 85,
      question: "What is a 'PAPI' (Precision Approach Path Indicator)?",
      options: [
        "Visual aid for tower controller",
        "Visual aid providing guidance information to help a pilot acquire and maintain the correct glidepath",
        "Instrumental aid for approach",
        "Visual aid for departure track"
      ],
      correctIndex: 1
    },
    {
      id: 86,
      question: "An aerodrome beacon (ABN) is a...",
      options: [
        "rotating beacon indicating location to pilots from the ground.",
        "rotating beacon at the final approach indicating location.",
        "rotating beacon indicating location to aircraft pilots from the air.",
        "fixed beacon indicating location."
      ],
      correctIndex: 2
    },
    {
      id: 87,
      question: "Which is the colour of runway edge lights?",
      options: [
        "Red",
        "White",
        "Blue",
        "Green"
      ],
      correctIndex: 1
    },
    {
      id: 88,
      question: "Which is the colour of runway end lights?",
      options: [
        "Red",
        "White",
        "Blue",
        "Green"
      ],
      correctIndex: 0
    },
    {
      id: 89,
      question: "What is shown on the printed sign? (Yellow 'A' on black)",
      img: "ALW-019.png",
      options: [
        "Point A on a taxiway",
        "Part A of the runway",
        "Taxiway A",
        "Parking position A"
      ],
      correctIndex: 2
    },
    {
      id: 90,
      question: "What is shown on the printed sign? (Arrow + 2500m)",
      img: "ALW-020.png",
      options: [
        "2500 m till parking",
        "From this intersection the available runway length is 2500 m",
        "Complete length is 2500 m",
        "2500 m till departure point"
      ],
      correctIndex: 1
    },
    {
      id: 91,
      question: "What is the meaning of this sign at an aerodrome? (Double white cross)",
      img: "ALW-011.png",
      options: [
        "Landing prohibited",
        "Glider flying is in progress",
        "Caution, manoeuvring area is poor",
        "Turns to the right"
      ],
      correctIndex: 1
    },
    {
      id: 92,
      question: "What is the meaning of the illustrated ground signal? (Right angle arrow)",
      img: "ALW-012.png",
      options: [
        "Caution, manoeuvring area is poor",
        "Prohibition on landing",
        "After take-off and before landing all turns have to be made to the right",
        "Ground movement restricted"
      ],
      correctIndex: 2
    },
    {
      id: 93,
      question: "What is the meaning of 'DETRESFA'?",
      options: [
        "Uncertainty phase",
        "Rescue phase",
        "Distress phase",
        "Alerting phase"
      ],
      correctIndex: 2
    },
    {
      id: 94,
      question: "Who provides search and rescue service?",
      options: [
        "Only military organisations",
        "International approved organisations",
        "Only civil organisations",
        "Both military and civil organisations"
      ],
      correctIndex: 3
    },
    {
      id: 95,
      question: "How can a pilot confirm a search and rescue signal on ground in flight?",
      options: [
        "Rock the wings",
        "Push the rudder",
        "Fly parabolic path",
        "Deploy flaps"
      ],
      correctIndex: 0
    },
    {
      id: 96,
      question: "With respect to aircraft accident and incident investigation, what are the three categories regarding aircraft occurrences?",
      options: [
        "Event, Crash, Disaster",
        "Happening, Event, Serious event",
        "Incident, Serious incident, Accident",
        "Event, Serious event, Accident"
      ],
      correctIndex: 2
    },
    {
      id: 97,
      question: "What is the primary purpose of an aircraft accident investigation?",
      options: [
        "Determine the guilty party",
        "Clarify liability",
        "Identify reasons and work out safety recommendations",
        "Work for public prosecutor"
      ],
      correctIndex: 2
    }
],
hp: [
    {
      id: 1,
      question: "The majority of aviation accidents are caused by...",
      options: [
        "technical failure.",
        "meteorological influences.",
        "geographical influences.",
        "human failure."
      ],
      correctIndex: 3
    },
    {
      id: 2,
      question: "The \"swiss cheese model\" can be used to explain the...",
      options: [
        "error chain.",
        "procedure for an emergency landing.",
        "optimal problem solution.",
        "state of readiness of a pilot."
      ],
      correctIndex: 0
    },
    {
      id: 3,
      question: "What is the percentage of oxygen in the atmosphere at 6000 ft?",
      options: [
        "21%",
        "12%",
        "78%",
        "18.9%"
      ],
      correctIndex: 0
    },
    {
      id: 4,
      question: "What is the percentage of nitrogen in the atmosphere?",
      options: [
        "1%",
        "21%",
        "78%",
        "0.1%"
      ],
      correctIndex: 2
    },
    {
      id: 5,
      question: "At which altitude is the atmospheric pressure approximately half the MSL value (1013 hPa)?",
      options: [
        "18000 ft",
        "5000 ft",
        "10000 ft",
        "22000 ft"
      ],
      correctIndex: 0
    },
    {
      id: 6,
      question: "Air consists of oxygen, nitrogen and other gases. What is the approximate percentage of other gases?",
      options: [
        "0.1%",
        "78%",
        "1%",
        "21%"
      ],
      correctIndex: 2
    },
    {
      id: 7,
      question: "Carbon monoxide poisoning can be caused by...",
      options: [
        "little sleep.",
        "alcohol.",
        "smoking.",
        "unhealthy food."
      ],
      correctIndex: 2
    },
    {
      id: 8,
      question: "What does the term \"Red-out\" mean?",
      options: [
        "\"Red vision\" during negative g-loads",
        "Rash during decompression sickness",
        "Anaemia caused by an injury",
        "Falsified colour perception during sunrise and sunset"
      ],
      correctIndex: 0
    },
    {
      id: 9,
      question: "Carbon monoxide poisoning can be caused by...",
      options: [
        "fuel or hydraulic fluids.",
        "generator failure.",
        "cracks in the heat exchanger.",
        "Pitot icing."
      ],
      correctIndex: 2
    },
    {
      id: 10,
      question: "Which of the following is NOT a symptom of hyperventilaton?",
      options: [
        "Cyanose",
        "Tingling",
        "Spasm",
        "Disturbance of consciousness"
      ],
      correctIndex: 0
    },
    {
      id: 11,
      question: "Which of the following symptoms may indicate hypoxia?",
      options: [
        "Joint pain in knees and feet",
        "Muscle cramps in the upper body area",
        "Blue discolouration of lips and fingernails",
        "Blue marks all over the body"
      ],
      correctIndex: 2
    },
    {
      id: 12,
      question: "Which of the human senses is most influenced by hypoxia?",
      options: [
        "The oltfactory perception (smell)",
        "The tactile perception (sense of touch)",
        "The auditory perception (hearing)",
        "The visual perception (vision)"
      ],
      correctIndex: 3
    },
    {
      id: 13,
      question: "From which altitude on does the body usually react to the decreasing atmospheric pressure?",
      options: [
        "2000 feet",
        "7000 feet",
        "10000 feet",
        "12000 feet"
      ],
      correctIndex: 1
    },
    {
      id: 14,
      question: "Which altitude marks the lower limit where the the body is unable to completely compensate the effects of the low atmospheric pressure?",
      options: [
        "12000 feet",
        "22000 feet",
        "5000 feet",
        "7000 feet"
      ],
      correctIndex: 0
    },
    {
      id: 15,
      question: "What is the function of the red blood cells (erythrocytes)?",
      options: [
        "Oxygen transport",
        "Blood coagulation",
        "Immune defense",
        "Blood sugar regulation"
      ],
      correctIndex: 0
    },
    {
      id: 16,
      question: "Which of the following is responsible for the blood coagulation?",
      options: [
        "Capillaries of the arteries",
        "Red blood cells (erythrocytes)",
        "White blood cells (leucocytes)",
        "Blood plates (thrombocytes)"
      ],
      correctIndex: 3
    },
    {
      id: 17,
      question: "What is the function of the white blood cells (leucocytes)?",
      options: [
        "Oxygen transport",
        "Blood coagulation",
        "Blood sugar regulation",
        "Immune defense"
      ],
      correctIndex: 3
    },
    {
      id: 18,
      question: "What is the function of the blood platelets (thrombocytes)?",
      options: [
        "Immune defense",
        "Blood coagulation",
        "Blood sugar regulation",
        "Oxygen transport"
      ],
      correctIndex: 1
    },
    {
      id: 19,
      question: "Which of the following is NOT a risk factor for hypoxia?",
      options: [
        "Smoking",
        "Menstruation",
        "Blood donation",
        "Diving"
      ],
      correctIndex: 3
    },
    {
      id: 20,
      question: "Anemic hypoxia can be caused by...",
      options: [
        "carbon monoxide poisoning.",
        "low pressure.",
        "high altitudes.",
        "alcohol."
      ],
      correctIndex: 0
    },
    {
      id: 21,
      question: "What is an appropriate reaction when a passenger during cruise flight suddenly feels uncomfortable?",
      options: [
        "Adjust cabin temperature and prevent excessive bank",
        "Give additional oxygen and avoid low load factors",
        "Avoid conversation and choose a higher airspeed",
        "Switch on the heater blower and provide thermal blankets"
      ],
      correctIndex: 0
    },
    {
      id: 22,
      question: "What ist the correct term for an involuntary and stereotypical reaction of an organism to the stimulation of a receptor?",
      options: [
        "Reduction",
        "Virulence",
        "Coherence",
        "Reflex"
      ],
      correctIndex: 3
    },
    {
      id: 23,
      question: "What is the correct term for the system which, among others, controls breathing, digestion, and heart frequency?",
      options: [
        "Critical nervous system",
        "Autonomic nervous system",
        "Automatical nervous system",
        "Compliant nervous system"
      ],
      correctIndex: 1
    },
    {
      id: 24,
      question: "What is the parallax error?",
      options: [
        "Long-sightedness due to aging especially during night",
        "Wrong interpretation of instruments caused by the angle of vision",
        "Misperception of speed during taxiing",
        "A decoding error in communication between pilots"
      ],
      correctIndex: 1
    },
    {
      id: 25,
      question: "Which characteristic is important when choosing sunglasses used by pilots?",
      options: [
        "Non-polarised",
        "No UV filter",
        "Curved sidepiece",
        "Unbreakable"
      ],
      correctIndex: 0
    },
    {
      id: 26,
      question: "Which part of the visual system is responsible for colour vision?",
      options: [
        "Cones",
        "Rods",
        "Macula",
        "Blind spot"
      ],
      correctIndex: 0
    },
    {
      id: 27,
      question: "The connection between middle ear and nose and throat region is called...",
      options: [
        "eardrum.",
        "cochlea.",
        "inner ear.",
        "eustachian tube."
      ],
      correctIndex: 3
    },
    {
      id: 28,
      question: "In which situation is it NOT possible to achieve a pressure compensation between the middle ear and the environment?",
      options: [
        "During a light and slow climb",
        "All windows are completely closed",
        "Breathing takes place using the mouth only",
        "The eustachien tube is blocked"
      ],
      correctIndex: 3
    },
    {
      id: 29,
      question: "Wings level after a longer period of turning can lead to the impression of...",
      options: [
        "starting a descent.",
        "starting a climb.",
        "steady turning in the same direction as before.",
        "turning into the opposite direction."
      ],
      correctIndex: 3
    },
    {
      id: 30,
      question: "Which of the following options does NOT stimulate motion sickness (disorientation)?",
      options: [
        "Head movements during turns",
        "Flying under the influence of alcohol",
        "Non-accelerated straight and level flight",
        "Turbulence in level flight"
      ],
      correctIndex: 2
    },
    {
      id: 31,
      question: "An acceleration during a straight horizontal flight can lead to the illusion of...",
      options: [
        "a descent.",
        "a climb.",
        "an inverted flight.",
        "a bank."
      ],
      correctIndex: 1
    },
    {
      id: 32,
      question: "A deceleration during a straight horizontal flight can lead to the illusion of...",
      options: [
        "a climb.",
        "a descent.",
        "a bank.",
        "an inverted flight."
      ],
      correctIndex: 1
    },
    {
      id: 33,
      question: "Which optical illusion might be caused by a runway with an upslope during the approach?",
      options: [
        "The pilot has the feeling that the approach is too fast and reduces the speed below the normal approach speed",
        "The pilot has the feeling that the approach is too high and therefore descents below the regular glide slope",
        "The pilot has the feeling that the approach is too slow and speeds up above the normal approach speed",
        "The pilot has the feeling that the approach is too low and therefore approaches the runway above the regular glide slope"
      ],
      correctIndex: 1
    },
    {
      id: 34,
      question: "What impression may be caused when approaching a runway with an upslope?",
      options: [
        "A landing beside the centerline",
        "A hard landing",
        "An undershoot",
        "An overshoot"
      ],
      correctIndex: 2
    },
    {
      id: 35,
      question: "The occurence of a vertigo is most likely when moving the head...",
      options: [
        "during a straight horizontal flight.",
        "during a turn.",
        "during a descent.",
        "during a climb."
      ],
      correctIndex: 1
    },
    {
      id: 36,
      question: "A Grey-out is the result of...",
      options: [
        "hypoxia.",
        "tiredness.",
        "positive g-forces.",
        "hyperventilation."
      ],
      correctIndex: 2
    },
    {
      id: 37,
      question: "Visual illusions are mostly caused by...",
      options: [
        "rapid eye movements.",
        "misinterpretation of the brain.",
        "colour blindness.",
        "binocular vision."
      ],
      correctIndex: 1
    },
    {
      id: 38,
      question: "The average decrease of blood alcohol level for an adult in one hour is approximately...",
      options: [
        "0.1 percent.",
        "0.01 percent.",
        "0.03 percent.",
        "0.3 percent."
      ],
      correctIndex: 1
    },
    {
      id: 39,
      question: "Which answer states a risk factor for diabetes?",
      options: [
        "Overweight",
        "Smoking",
        "Sleep deficiency",
        "Alcohol consumption"
      ],
      correctIndex: 0
    },
    {
      id: 40,
      question: "A risk factor for decompression sickness is...",
      options: [
        "smoking.",
        "sports.",
        "scuba diving prior to flight.",
        "100 % oxygen after decompression."
      ],
      correctIndex: 2
    },
    {
      id: 41,
      question: "Which statement is correct with regard to the short-term memory?",
      options: [
        "It can store 10 (±5) items for 30 to 60 seconds",
        "It can store 7 (±2) items for 10 to 20 seconds",
        "It can store 3 (±1) items for 5 to 10 seconds",
        "It can store 5 (±2) items for 1 to 2 minutes"
      ],
      correctIndex: 1
    },
    {
      id: 42,
      question: "For what approximate time period can the short-time memory store information?",
      options: [
        "35 to 50 seconds",
        "30 to 40 seconds",
        "3 to 7 seconds",
        "10 to 20 seconds"
      ],
      correctIndex: 3
    },
    {
      id: 43,
      question: "What is a latent error?",
      options: [
        "An error which is made by the pilot actively and consciously",
        "An error which only has consequences after landing",
        "An error which remains undetected in the system for a long time",
        "An error which has an immediate effect on the controls"
      ],
      correctIndex: 2
    },
    {
      id: 44,
      question: "What does the term \"confirmation bias\" mean?",
      options: [
        "The feedback loop in a closed communication",
        "The preference to find arguments to proof the own mental model",
        "The bias to confirm each radio call",
        "The critical check of ambiguous situations in flight"
      ],
      correctIndex: 1
    },
    {
      id: 45,
      question: "The ongoing process to monitor the current flight situation is called...",
      options: [
        "constant flight check.",
        "situational thinking.",
        "anticipatory check procedure.",
        "situational awareness."
      ],
      correctIndex: 3
    },
    {
      id: 46,
      question: "Regarding the communication model, how can the use of the same code during radio communication be ensured?",
      options: [
        "By the use of radio phraseology",
        "By using radios certified for aviation use only",
        "By the use of proper headsets",
        "By a particular frequency allocation"
      ],
      correctIndex: 0
    },
    {
      id: 47,
      question: "In what different ways can a risk be handled appropriately?",
      options: [
        "Extrude, avoid, palliate, transfer",
        "Ignore, accept, transfer, extrude",
        "Avoid, reduce, transfer, accept",
        "Avoid, ignore, palliate, reduce"
      ],
      correctIndex: 2
    },
    {
      id: 48,
      question: "Under which circumstances is it more likely to accept higher risks?",
      options: [
        "If there is not enough information available",
        "During check flights due to a high level of nervousness",
        "During flight planning when excellent weather is forecast",
        "Due to group-dynamic effects"
      ],
      correctIndex: 3
    },
    {
      id: 49,
      question: "What is the meaning of \"risky shift\"?",
      options: [
        "Crossing of rudder and ailerons on short final",
        "The tendency to accept higher risks in groups",
        "Spontaneous change of landing direction when the runway has an upslope",
        "Seat adjustment in flight"
      ],
      correctIndex: 1
    },
    {
      id: 50,
      question: "Which dangerous attitudes are often combined?",
      options: [
        "Macho and invulnerability",
        "Impulsivity and carefulness",
        "Invulnerability and self-abandonment",
        "Self-abandonment and macho"
      ],
      correctIndex: 0
    },
    {
      id: 51,
      question: "What is an indication for a macho attitude?",
      options: [
        "Careful walkaround procedure",
        "Comprehensive risk assessment when faced with unfamiliar situations",
        "Risky flight maneuvers to impress spectators on ground",
        "Quick resignation in complex and critical situations"
      ],
      correctIndex: 2
    },
    {
      id: 52,
      question: "Which factor can lead to human error?",
      options: [
        "Double check of relevant actions",
        "Proper use of checklists",
        "To be doubtful if something looks unclear or ambiguous",
        "The bias to see what we expect to see"
      ],
      correctIndex: 3
    },
    {
      id: 53,
      question: "What is the best combination of traits with respect to the individual attitude and behaviour for a pilot?",
      options: [
        "Introverted - unstable",
        "Introverted - stable",
        "Extroverted - unstable",
        "Extroverted - stable"
      ],
      correctIndex: 3
    },
    {
      id: 54,
      question: "Complacency is a risk due to...",
      options: [
        "the high number of mistakes normally made by humans.",
        "increased cockpit automation.",
        "the high error rate of technical systems.",
        "better training options for young pilots."
      ],
      correctIndex: 1
    },
    {
      id: 55,
      question: "The ideal level of arousal is at which point in the diagram? See figure (HPL-002)",
      img: "HPL-002.png",
      options: [
        "Point A",
        "Point D",
        "Point C",
        "Point B"
      ],
      correctIndex: 3
    },
    {
      id: 56,
      question: "At which point in the diagram will a pilot find himself to be overstrained? See figure (HPL-002)",
      img: "HPL-002.png",
      options: [
        "Point D",
        "Point B",
        "Point C",
        "Point A"
      ],
      correctIndex: 0
    },
    {
      id: 57,
      question: "Which of the following qualities are influenced by stress? 1. Attention 2. Concentration 3. Responsiveness 4. Memory",
      options: [
        "2, 4",
        "1",
        "1, 2, 3, 4",
        "1, 2, 3"
      ],
      correctIndex: 2
    },
    {
      id: 58,
      question: "Which answer is correct concerning stress?",
      options: [
        "Stress can occur if there seems to be no solution for a given problem",
        "Training and experience have no influence on the occurence of stress",
        "Stress and its different symptoms are irrelevant for flight safety",
        "Everybody reacts to stress in the same manner"
      ],
      correctIndex: 0
    }
  ],
communication: [
    {
      id: 1,
      question: "In which situations should a pilot use blind transmissions?",
      options: [
        "When no radio communication can be established with the appropriate aeronautical station, but when evidence exists that transmissions are received at that ground unit",
        "When a pilot has flown into cloud or fog unintentionally and therefore would like to request navigational assistance from a ground unit",
        "When a transmission containing important navigational or technical information is to be sent to several stations at the same time",
        "When the traffic situation at an airport allows the transmission of information which does not need to be acknowledged by the ground station"
      ],
      correctIndex: 0
    },
    {
      id: 2,
      question: "Leaving a control frequency (except when reaching the final parking position)...",
      options: [
        "is not mandatory to be reported.",
        "must be approved twice.",
        "must be approved.",
        "must be reported."
      ],
      correctIndex: 2
    },
    {
      id: 3,
      question: "Which abbreviation is used for the term \"abeam\"?",
      options: [
        "ABM",
        "ABB",
        "ABA",
        "ABE"
      ],
      correctIndex: 0
    },
    {
      id: 4,
      question: "Which abbreviation is used for the term \"visual flight rules\"?",
      options: [
        "VFS",
        "VFR",
        "VRU",
        "VMC"
      ],
      correctIndex: 1
    },
    {
      id: 5,
      question: "Which abbreviation is used for the term \"obstacle\"?",
      options: [
        "OBTC",
        "OBST",
        "OST",
        "OBS"
      ],
      correctIndex: 1
    },
    {
      id: 6,
      question: "What does the abbreviation \"FIS\" stand for?",
      options: [
        "Flashing information service",
        "Flight information system",
        "Flashing information system",
        "Flight information service"
      ],
      correctIndex: 3
    },
    {
      id: 7,
      question: "What does the abbreviaton \"FIR\" stand for?",
      options: [
        "Flight integrity receiver",
        "Flow information radar",
        "Flight information region",
        "Flow integrity required"
      ],
      correctIndex: 2
    },
    {
      id: 8,
      question: "What does the abbreviation \"H24\" stand for?",
      options: [
        "Sunrise to sunset",
        "24 h service",
        "No specific opening times",
        "Sunset to sunrise"
      ],
      correctIndex: 1
    },
    {
      id: 9,
      question: "What does the abbreviation \"HX\" stand for?",
      options: [
        "No specific opening hours",
        "Sunrise to sunset",
        "Sunset to sunrise",
        "24 h service"
      ],
      correctIndex: 0
    },
    {
      id: 10,
      question: "The altimeter has to be set to what value in order to show zero on ground?",
      options: [
        "QNH",
        "QNE",
        "QTE",
        "QFE"
      ],
      correctIndex: 3
    },
    {
      id: 11,
      question: "Which altitude is displayed on the altimeter when set to a specific QNH?",
      options: [
        "Altitude in relation to the 1013.25 hPa datum",
        "Altitude in relation to mean sea level",
        "Altitude in relation to the air pressure at the reference airfield",
        "Altitude in relation to the highest elevation within 10 km"
      ],
      correctIndex: 1
    },
    {
      id: 12,
      question: "Which altitude is displayed on the altimeter when set to a specific QFE?",
      options: [
        "Altitude in relation to the 1013.25 hPa datum",
        "Altitude in relation to the air pressure at the reference airfield",
        "Altitude in relation to the highest elevation within 10 km",
        "Altitude in relation to mean sea level"
      ],
      correctIndex: 1
    },
    {
      id: 13,
      question: "What does the abbreviation \"QDR\" stand for?",
      options: [
        "True bearing from the station",
        "Magnetic bearing from the station",
        "Magnetic bearing to the station",
        "True bearing to the station"
      ],
      correctIndex: 1
    },
    {
      id: 14,
      question: "What does the abbreviation \"QUJ\" stand for?",
      options: [
        "True bearing from the station",
        "True bearing to the station",
        "Magnetic bearing to the station",
        "Magnetic bearing from the station"
      ],
      correctIndex: 1
    },
    {
      id: 15,
      question: "What does the abbreviation \"QTE\" stand for?",
      options: [
        "Magnetic bearing to the station",
        "Magnetic bearing from the station",
        "True bearing from the station",
        "True bearing to the station"
      ],
      correctIndex: 2
    },
    {
      id: 16,
      question: "Which Q-code is used for the magnetic bearing from the station?",
      options: [
        "QUJ",
        "QTE",
        "QDM",
        "QDR"
      ],
      correctIndex: 3
    },
    {
      id: 17,
      question: "Which Q-code is used for the true bearing from the station?",
      options: [
        "QDR",
        "QUJ",
        "QDM",
        "QTE"
      ],
      correctIndex: 3
    },
    {
      id: 18,
      question: "Which Q-code is used for the true bearing to the station?",
      options: [
        "QDR",
        "QDM",
        "QTE",
        "QUJ"
      ],
      correctIndex: 3
    },
    {
      id: 19,
      question: "Which of the listed radiotelephony messages has a higher priority than a flight safety message?",
      options: [
        "Communication related to direction finding",
        "Flight regularity message",
        "Meteorological message",
        "Aircraft position report message"
      ],
      correctIndex: 0
    },
    {
      id: 20,
      question: "What is the correct term for a message used for air traffic control?",
      options: [
        "Flight regularity message",
        "Meteorological message",
        "Message related to direction finding",
        "Flight safety message"
      ],
      correctIndex: 3
    },
    {
      id: 21,
      question: "Distress messages are messages...",
      options: [
        "concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "sent by a pilot or an aircraft operating agency which have an imminent meaning for aircraft in flight.",
        "concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
        "concerning the operation or maintenance of facilities which are important for the safety and regularity of flight operations."
      ],
      correctIndex: 2
    },
    {
      id: 22,
      question: "Urgency messages are messages...",
      options: [
        "concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
        "concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "concerning the operation or maintenance of facilities essential for the safety or regularity of aircraft operation.",
        "sent by a pilot or an aircraft operating agency which have an imminent meaning for aircraft in flight."
      ],
      correctIndex: 1
    },
    {
      id: 23,
      question: "Regularity messages are messages...",
      options: [
        "concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
        "sent by an aircraft operating agency or an aircraft of immediate concern to an aircraft in flight.",
        "concerning the operation or maintenance of facilities essential for the safety or regularity of aircraft operation."
      ],
      correctIndex: 3
    },
    {
      id: 24,
      question: "Which of the following messages has the highest priority?",
      options: [
        "Turn left",
        "Request QDM",
        "QNH 1013",
        "Wind 300 degrees, 5 knots"
      ],
      correctIndex: 1
    },
    {
      id: 25,
      question: "What is the correct way to transmit the call sign HB-YKM?",
      options: [
        "Home Bravo Yuliett Kilo Mike",
        "Hotel Bravo Yankee Kilo Mike",
        "Hotel Bravo Yuliett Kilo Mikro",
        "Home Bravo Yankee Kilo Mikro"
      ],
      correctIndex: 1
    },
    {
      id: 26,
      question: "What is the correct way to transmit the call sign OE-JVK?",
      options: [
        "Omega Echo Jankee Victor Kilo",
        "Oscar Echo Jankee Victor Kilogramm",
        "Oscar Echo Juliett Victor Kilo",
        "Omega Echo Juliett Victor Kilogramm"
      ],
      correctIndex: 2
    },
    {
      id: 27,
      question: "An altitude of 4500 ft is transmitted as...",
      options: [
        "four tousand five hundred.",
        "four five tousand.",
        "four tousand five zero zero.",
        "four five zero zero."
      ],
      correctIndex: 0
    },
    {
      id: 28,
      question: "A heading of 285 degrees is correctly transmitted as...",
      options: [
        "two eight five.",
        "two eight five hundred.",
        "two hundred eight five.",
        "two hundred eighty-five."
      ],
      correctIndex: 0
    },
    {
      id: 29,
      question: "A frequency of 119.500 MHz is correctly transmitted as...",
      options: [
        "one one niner tousand decimal five zero.",
        "one one niner decimal five.",
        "one one niner decimal five zero.",
        "one one niner decimal five zero zero."
      ],
      correctIndex: 1
    },
    {
      id: 30,
      question: "The directional information \"12 o'clock\" is correctly transmitted as...",
      options: [
        "One two.",
        "One two o'clock.",
        "One two hundred.",
        "Twelve o'clock."
      ],
      correctIndex: 3
    },
    {
      id: 31,
      question: "Times are transmitted as...",
      options: [
        "UTC.",
        "standard time.",
        "local time.",
        "time zone time."
      ],
      correctIndex: 0
    },
    {
      id: 32,
      question: "If there is any doubt about ambiguity, a time of 1620 is to be transmitted as...",
      options: [
        "sixteen twenty.",
        "two zero.",
        "one tousand six hundred two zero.",
        "one six two zero."
      ],
      correctIndex: 3
    },
    {
      id: 33,
      question: "What is the meaning of the phrase \"Roger\"?",
      options: [
        "Permission for proposed action is granted",
        "I understand your message and will comply with it",
        "I have received all of your last transmission",
        "An error has been made in this transmission. The correct version is..."
      ],
      correctIndex: 2
    },
    {
      id: 34,
      question: "What is the meaning of the phrase \"Correction\"?",
      options: [
        "Permission for proposed action is granted",
        "An error has been made in this transmission. The correct version is...",
        "I have received all of your last transmission",
        "I understand your message and will comply with it"
      ],
      correctIndex: 1
    },
    {
      id: 35,
      question: "What is the meaning of the phrase \"Approved\"?",
      options: [
        "I have received all of your last transmission",
        "I understand your message and will comply with it",
        "Permission for proposed action is granted",
        "An error has been made in this transmission. The correct version is..."
      ],
      correctIndex: 2
    },
    {
      id: 36,
      question: "Which phrase does a pilot use when he / she wants to check the readability of his / her transmission?",
      options: [
        "What is the communication like?",
        "How do you read?",
        "Request readability",
        "You read me five"
      ],
      correctIndex: 1
    },
    {
      id: 37,
      question: "Which phrase is used by a pilot when he wants to fly through controlled airspace?",
      options: [
        "Apply",
        "Want",
        "Would like",
        "Request"
      ],
      correctIndex: 3
    },
    {
      id: 38,
      question: "What phrase is used by a pilot if a transmission is to be answered with \"yes\"?",
      options: [
        "Roger",
        "Yes",
        "Affirm",
        "Affirmative"
      ],
      correctIndex: 2
    },
    {
      id: 39,
      question: "What phrase is used by a pilot if a transmission is to be answered with \"no\"?",
      options: [
        "Negative",
        "Not",
        "Finish",
        "No"
      ],
      correctIndex: 0
    },
    {
      id: 40,
      question: "Which phrase is to be used when a pilot wants the tower to know that he is ready for take-off?",
      options: [
        "Ready for start-up",
        "Ready for departure",
        "Request take-off",
        "Ready"
      ],
      correctIndex: 1
    },
    {
      id: 41,
      question: "What phrase is used by a pilot to inform the tower about a go-around?",
      options: [
        "No landing",
        "Pulling up",
        "Going around",
        "Approach canceled"
      ],
      correctIndex: 2
    },
    {
      id: 42,
      question: "What is the call sign of the aerodrome control?",
      options: [
        "Tower",
        "Airfield",
        "Ground",
        "Control"
      ],
      correctIndex: 0
    },
    {
      id: 43,
      question: "What is the call sign of the surface movement control?",
      options: [
        "Tower",
        "Earth",
        "Ground",
        "Control"
      ],
      correctIndex: 2
    },
    {
      id: 44,
      question: "What is the call sign of the flight information service?",
      options: [
        "Info",
        "Advice",
        "Flight information",
        "Information"
      ],
      correctIndex: 3
    },
    {
      id: 45,
      question: "What is the correct abbreviation of the call sign D-EAZF?",
      options: [
        "DEA",
        "AZF",
        "DZF",
        "DEF"
      ],
      correctIndex: 2
    },
    {
      id: 46,
      question: "In what case is the pilot allowed to abbreviate the call sign of his aircraft?",
      options: [
        "After the ground station has used the abbreviation",
        "Within controlled airspace",
        "If there is little traffic in the traffic circuit",
        "After passing the first reporting point"
      ],
      correctIndex: 0
    },
    {
      id: 47,
      question: "What is the correct way of using the aircraft call sign at first contact?",
      options: [
        "Using the first two characters only",
        "Using the last two characters only",
        "Using the first three characters only",
        "Using all characters"
      ],
      correctIndex: 3
    },
    {
      id: 48,
      question: "What is the correct way of establishing radio communication between D-EAZF and Dusseldorf Tower?",
      options: [
        "Dusseldorf Tower over",
        "DEAZF is calling Dusseldorf Tower",
        "Dusseldorf Tower D-EAZF",
        "Tower from D-EAZF"
      ],
      correctIndex: 2
    },
    {
      id: 49,
      question: "What is the correct way of acknowledging the instruction \"Call Hamburg Tower on 121.275\"?",
      options: [
        "Call 121.275",
        "Call tower",
        "121.275",
        "Call tower on 121.275"
      ],
      correctIndex: 2
    },
    {
      id: 50,
      question: "What does a readability of 1 indicate?",
      options: [
        "The transmission is perfectly readable",
        "The transmission is unreadable",
        "The transmission is readable but with difficulty",
        "The transmission is readable now and then"
      ],
      correctIndex: 1
    },
    {
      id: 51,
      question: "What does a readability of 2 indicate?",
      options: [
        "The transmission is readable now and then",
        "The transmission is readable but with difficulty",
        "The transmission is perfectly readable",
        "The transmission is unreadable"
      ],
      correctIndex: 0
    },
    {
      id: 52,
      question: "What does a readability of 3 indicate?",
      options: [
        "The transmission is readable now and then",
        "The transmission is perfectly readable",
        "The transmission is readable but with difficulty",
        "The transmission is unreadable"
      ],
      correctIndex: 2
    },
    {
      id: 53,
      question: "What does a readability of 5 indicate?",
      options: [
        "The transmission is readable now and then",
        "The transmission is readable but with difficulty",
        "The transmission is unreadable",
        "The transmission is perfectly readable"
      ],
      correctIndex: 3
    },
    {
      id: 54,
      question: "Which information from a ground station does not require readback?",
      options: [
        "Runway in use",
        "Wind",
        "SSR-Code",
        "Altitude"
      ],
      correctIndex: 1
    },
    {
      id: 55,
      question: "Which information from a ground station does not require readback?",
      options: [
        "Altimeter setting",
        "Traffic information",
        "Taxi instructions",
        "Heading"
      ],
      correctIndex: 1
    },
    {
      id: 56,
      question: "What is the correct way of acknowledging the instruction \"DZF after lift-off climb straight ahead until 2500 feet before turning right heading 220 degrees, wind 090 degrees, 5 knots, runway 12, cleared for take-off\"?",
      options: [
        "DZF after lift-off climb straight ahead 2500 feet, wilco, heading 220 degrees, 090 degrees, 5 knots, cleared for take-off",
        "DZF after lift-off climb straight ahead 2500 feet, then turn right heading 220, runway 12, cleared for take-off",
        "DZF after lift-off climb straight ahead 2500 feet, then turn right heading 220, 090 degrees, 5 knots",
        "DZF after lift-off climb straight ahead 2500 feet, then turn right heading 220, 090 degrees, 5 knots, cleared for take-off"
      ],
      correctIndex: 1
    },
    {
      id: 57,
      question: "What is the correct way of acknowledging the instruction \"Next report PAH\"?",
      options: [
        "Positive",
        "Roger",
        "Report PAH",
        "Wilco"
      ],
      correctIndex: 3
    },
    {
      id: 58,
      question: "What is the correct way of acknowledging the instruction \"Squawk 4321, Call Bremen Radar on 131.325\"?",
      options: [
        "Roger",
        "Squawk 4321, wilco",
        "Squawk 4321, 131.325",
        "Wilco"
      ],
      correctIndex: 2
    },
    {
      id: 59,
      question: "What is the correct way of acknowledging \"You are now entering airspace Delta\"?",
      options: [
        "Entering",
        "Roger",
        "Wilco",
        "Airspace Delta"
      ],
      correctIndex: 1
    },
    {
      id: 60,
      question: "What does a cloud coverage of \"FEW\" mean in a METAR weather report?",
      options: [
        "8 eighths",
        "1 to 2 eighths",
        "5 to 7 eighths",
        "3 to 4 eighths"
      ],
      correctIndex: 1
    },
    {
      id: 61,
      question: "What does a cloud coverage of \"SCT\" mean in a METAR weather report?",
      options: [
        "1 to 2 eighths",
        "8 eighths",
        "3 to 4 eighths",
        "5 to 7 eighths"
      ],
      correctIndex: 2
    },
    {
      id: 62,
      question: "What does a cloud coverage of \"BKN\" mean in a METAR weather report?",
      options: [
        "3 to 4 eighths",
        "8 eighths",
        "5 to 7 eighths",
        "1 to 2 eighths"
      ],
      correctIndex: 2
    },
    {
      id: 63,
      question: "Given a visibility of 12 km, what is the correct way to transmit this visibility?",
      options: [
        "One-two kilometers.",
        "Twelve kilometers.",
        "One-zero kilometers or more.",
        "One-zero kilometers."
      ],
      correctIndex: 2
    },
    {
      id: 64,
      question: "In what case is visibility transmitted in meters?",
      options: [
        "Up to 5 km",
        "Greater than 10 km",
        "Greater than 5 km",
        "Up to 10 km"
      ],
      correctIndex: 0
    },
    {
      id: 65,
      question: "In what cases is visibility transmitted in kilometers?",
      options: [
        "Up to 10 km",
        "Greater than 5 km",
        "Up to 5 km",
        "Greater than 10 km"
      ],
      correctIndex: 1
    },
    {
      id: 66,
      question: "What information is broadcasted on a VOLMET frequency?",
      options: [
        "Navigational information",
        "NOTAMS",
        "Current information",
        "Meteorological information"
      ],
      correctIndex: 3
    },
    {
      id: 67,
      question: "Which navigation facility may be used for broadcasting the ATIS?",
      options: [
        "GPS",
        "DME",
        "NDB",
        "VOR"
      ],
      correctIndex: 3
    },
    {
      id: 68,
      question: "How can you obtain meteorological information concerning airports during a cross-country flight?",
      options: [
        "VOLMET",
        "GAMET",
        "METAR",
        "AIRMET"
      ],
      correctIndex: 0
    },
    {
      id: 69,
      question: "Which transponder code indicates a radio failure?",
      options: [
        "7700",
        "7600",
        "7500",
        "7000"
      ],
      correctIndex: 1
    },
    {
      id: 70,
      question: "What is the correct phrase to begin a blind transmission?",
      options: [
        "Blind",
        "Transmitting blind",
        "No reception",
        "Listen"
      ],
      correctIndex: 1
    },
    {
      id: 71,
      question: "On what frequency shall a blind transmission be made?",
      options: [
        "On the appropriate FIS frequency",
        "On a radar frequency of the lower airspace",
        "On the current frequency",
        "On a tower frequency"
      ],
      correctIndex: 2
    },
    {
      id: 72,
      question: "How often shall a blind transmission be made?",
      options: [
        "Two times",
        "Three times",
        "Four times",
        "One time"
      ],
      correctIndex: 0
    },
    {
      id: 73,
      question: "In what situation is it appropriate to set the transponder code 7600?",
      options: [
        "Hijacking",
        "Emergency",
        "Flight into clouds",
        "Loss of radio"
      ],
      correctIndex: 3
    },
    {
      id: 74,
      question: "What is the correct course of action when experiencing a radio failure in class D airspace?",
      options: [
        "The flight has to be continued above 5000 feet complying with VFR flight rules or the airspace has to be left by the shortest route",
        "The flight has to be continued according to the last clearance complying with VFR rules or the airspace has to be left by the shortest route",
        "The flight has to be continued above 5000 feet complying with VFR flight rules or the airspace has to be left using a standard routing",
        "The flight has to be continued according to the last clearance complying with VFR flight rules or the airspace has to be left using a standard routing"
      ],
      correctIndex: 1
    },
    {
      id: 75,
      question: "Under what conditions may class D airspace be entered with a radio failure?",
      options: [
        "Approval has been granted before",
        "There are other aircraft in the aerodrome circuit",
        "It ist the aerodrome of departure",
        "It is the destination aerodrome"
      ],
      correctIndex: 0
    },
    {
      id: 76,
      question: "Which phrase is to be repeated three times before transmitting an urgency message?",
      options: [
        "Help",
        "Urgent",
        "Pan Pan",
        "Mayday"
      ],
      correctIndex: 2
    },
    {
      id: 77,
      question: "Urgency messages are defined as...",
      options: [
        "messages concerning urgent spare parts which are needed for a continuation of flight and which need to be ordered in advance.",
        "messages concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "information concerning the apron personell and which imply an imminent danger to landing aircraft.",
        "messages concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance."
      ],
      correctIndex: 1
    },
    {
      id: 78,
      question: "Distress messages contain...",
      options: [
        "information concerning urgent spare parts which are required for a continuation of flight and which have to be ordered in advance.",
        "information concerning the apron personell and which imply an imminent danger to landing aircraft.",
        "information concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
        "information concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance."
      ],
      correctIndex: 3
    },
    {
      id: 79,
      question: "What is the correct frequency for an initial distress message?",
      options: [
        "Emergency frequency",
        "Current frequency",
        "FIS frequency",
        "Radar frequency"
      ],
      correctIndex: 1
    },
    {
      id: 80,
      question: "What kind of information should be included in an urgency message?",
      options: [
        "Nature of problem or observation, important information for support, departure aerodrome, information about position, heading and altitude",
        "Intended routing, important information for support, intentions of the pilot, information about position, departure aerodrome, heading and altitude",
        "Nature of problem or observation, important information for support, intentions of the pilot, information about position, heading and altitude",
        "Intended routing, important information for support, intentions of the pilot, departure aerodrome, destination aerodrome, heading and altitude"
      ],
      correctIndex: 2
    },
    {
      id: 81,
      question: "The correct transponder code for emergencies is...",
      options: [
        "7700.",
        "7000.",
        "7600.",
        "7500."
      ],
      correctIndex: 0
    },
    {
      id: 82,
      question: "Which of the following frequencies is designated for VHF voice communication?",
      options: [
        "118.75 kHz",
        "327.25 MHz",
        "327.25 kHz",
        "118.75 MHz"
      ],
      correctIndex: 3
    },
    {
      id: 83,
      question: "Which of the following frequencies is designated for VHF voice communication?",
      options: [
        "120.50 MHz",
        "115.15 MHz",
        "108.80 MHz",
        "117.30 kHz"
      ],
      correctIndex: 0
    },
    {
      id: 84,
      question: "What is the correct designation of the frequency band from 118.000 to 136.975 MHz used for voice communication?",
      options: [
        "LF",
        "VHF",
        "MF",
        "HF"
      ],
      correctIndex: 1
    },
    {
      id: 85,
      question: "Which of the following factors affects the reception of VHF transmissions?",
      options: [
        "Altitude",
        "Shoreline effect",
        "Twilight error",
        "Height of ionosphere"
      ],
      correctIndex: 0
    },
    {
      id: 86,
      question: "What is the approximate speed of electromagnetic wave propagation?",
      options: [
        "123000 m/s",
        "300000 km/s",
        "123000 km/s",
        "300000 m/s"
      ],
      correctIndex: 1
    },
    {
      id: 87,
      question: "An ATIS is valid for...",
      options: [
        "10 minutes.",
        "45 minutes.",
        "60 minutes.",
        "30 minutes."
      ],
      correctIndex: 3
    }
  ]
};

/* ELEMENTS */
const loginSection = document.getElementById("login-section");
const registerSection = document.getElementById("register-section");
const subjectSection = document.getElementById("subject-section");
const startSection = document.getElementById("start-section");
const quizSection = document.getElementById("quiz-section");

/* NOU: Elemente pentru Rezultate */
const resultSection = document.getElementById("result-section");
const scoreDisplayEl = document.getElementById("score-display");
const historyListEl = document.getElementById("history-list");

const quizEl = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const gridEl = document.getElementById("question-grid");
const welcomeEl = document.getElementById("welcome");
const examTitleEl = document.getElementById("exam-title");

/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "on" : "off");
  const btn = document.getElementById("dark-toggle");
  if(btn) btn.textContent = isDark ? "☀️" : "🌙";
}

/* NAVIGARE SECTIUNI */
function showSection(section) {
  // Ascundem tot
  if(loginSection) loginSection.style.display = "none";
  if(registerSection) registerSection.style.display = "none";
  if(subjectSection) subjectSection.style.display = "none";
  if(startSection) startSection.style.display = "none";
  if(quizSection) quizSection.style.display = "none";
  if(resultSection) resultSection.style.display = "none";
  
  // Afisam ce trebuie
  if(section) section.style.display = "block";
}

/* QUIZ STATE */
let shuffledQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let timeLeft;
let timerInterval;
let answered = [];
let selectedSubject = null;

/* LOGIN / REGISTER */
function showRegister() { showSection(registerSection); }
function showLogin() { showSection(loginSection); }

function register() {
  const username = regUsername().value;
  if (users.find(u => u.username === username)) {
    alert("Username already exists");
    return;
  }
  const user = {
    username,
    password: regPassword().value,
    firstName: regFirst().value,
    lastName: regLast().value,
    birthDate: regBirth().value,
    history: []
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  loginUser(user);
}

function login() {
  const user = users.find(u => u.username === loginUsername().value && u.password === loginPassword().value);
  if (!user) {
    alert("Invalid credentials");
    return;
  }
  loginUser(user);
}

function loginUser(user) {
  currentUser = user;
  localStorage.setItem("loggedUser", user.username);
  showSection(subjectSection);
  welcomeEl.textContent = `Welcome back, ${user.firstName}`;
}

function logout() {
  localStorage.removeItem("loggedUser");
  showSection(loginSection);
}

/* INPUT HELPERS */
const loginUsername = () => document.getElementById("login-username");
const loginPassword = () => document.getElementById("login-password");
const regUsername = () => document.getElementById("reg-username");
const regPassword = () => document.getElementById("reg-password");
const regFirst = () => document.getElementById("reg-firstname");
const regLast = () => document.getElementById("reg-lastname");
const regBirth = () => document.getElementById("reg-birthdate");

function confirmSubject() {
  const subject = document.getElementById("subject-select").value;
  if (!subject) {
    alert("Please select a subject");
    return;
  }
  selectedSubject = subject;
  examTitleEl.textContent = `${subject.toUpperCase()} EXAM`;
  showSection(startSection);
}

/* START TEST */
function startTest() {
  showSection(quizSection);
  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 0.5;
    music.play().catch(error => {
      console.log("Eroare redare audio:", error);
    });
  }
  startQuiz();
}

/* QUIZ LOGIC */
function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

function startQuiz() {
  shuffledQuestions = shuffle([...questionBanks[selectedSubject]]).slice(0, QUESTIONS_PER_TEST);
  currentQuestion = 0;
  userAnswers = [];
  answered = [];
  timeLeft = TEST_TIME_SECONDS;
  if(resultEl) resultEl.innerHTML = "";

  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const q = shuffledQuestions[currentQuestion];
  const alreadyAnswered = answered[currentQuestion] === true;
  
  const imageHtml = q.img
    ? `<div class="image-container"><img src="${q.img}" alt="Exam image"></div>`
    : "";
  

  quizEl.innerHTML = `
    <div class="question-text">
    <strong>${currentQuestion + 1}. ${q.question}</strong>
    </div>
    ${imageHtml} 
    ${q.options.map((o, i) => {
      let className = "";
      if (alreadyAnswered) {
        if (i === q.correctIndex) className = "correct";
        else if (userAnswers[currentQuestion] === i) className = "wrong";
      }
      return `
        <label class="${className}">
          <input type="radio" name="answer" value="${i}"
            ${userAnswers[currentQuestion] === i ? "checked" : ""}
            ${alreadyAnswered ? "disabled" : ""}
          >
          ${o}
        </label>
      `;
    }).join("")}
  `;

  progressEl.textContent = `Question ${currentQuestion + 1}/${shuffledQuestions.length}`;

  // Navigare
  nextBtn.style.display = currentQuestion === shuffledQuestions.length - 1 ? "none" : "inline-block";
  nextBtn.disabled = !answered[currentQuestion];
  
  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
  
  // Submit apare doar la ultima intrebare
  submitBtn.style.display = currentQuestion === shuffledQuestions.length - 1 ? "inline-block" : "none";
  submitBtn.disabled = !answered[currentQuestion];
  
  renderGrid();
}

quizEl.addEventListener("change", e => {
  if (answered[currentQuestion]) return;
  userAnswers[currentQuestion] = Number(e.target.value);
  answered[currentQuestion] = true;
  loadQuestion();
});

nextBtn.onclick = () => {
  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
};

prevBtn.onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

/* GRID */
function renderGrid() {
  gridEl.innerHTML = "";
  shuffledQuestions.forEach((q, i) => {
    const box = document.createElement("div");
    box.textContent = i + 1;
    box.className = "q-box";

    if (userAnswers[i] === undefined) box.classList.add("q-unanswered");
    else if (userAnswers[i] === q.correctIndex) box.classList.add("q-correct");
    else box.classList.add("q-wrong");

    if (i === currentQuestion) box.classList.add("q-current");

    box.onclick = () => {
      currentQuestion = i;
      loadQuestion();
    };
    gridEl.appendChild(box);
  });
}

/* TIMER */
function startTimer() {
  timerEl.textContent = formatTime();
  if(timerInterval) clearInterval(timerInterval);
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = formatTime();
    if (timeLeft <= 0) submitTest();
  }, 1000);
}

function formatTime() {
  return `Time: ${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(timeLeft % 60).padStart(2, "0")}`;
}

/* SUBMIT */
submitBtn.onclick = submitTest;

function submitTest() {
  // Oprim timer-ul
  clearInterval(timerInterval);

  let score = 0;
  shuffledQuestions.forEach((q, i) => {
    if (userAnswers[i] === q.correctIndex) score++;
  });

  const percentage = ((score / shuffledQuestions.length) * 100).toFixed(2);
  const passed = percentage >= PASS_PERCENTAGE;

  // Actualizare istoric
  currentUser.history.push({
    date: new Date().toLocaleString(),
    score: score,
    total: shuffledQuestions.length,
    percentage: percentage,
    subject: selectedSubject || "General"
  });

  users = users.map(u => (u.username === currentUser.username ? currentUser : u));
  localStorage.setItem("users", JSON.stringify(users));

  // NAVIGARE CATRE REZULTATE
  showSection(resultSection);

  const color = passed ? "#2ecc71" : "#e74c3c";
  const statusText = passed ? "PASS" : "FAIL";

  scoreDisplayEl.innerHTML = `
    <h2 style="color: ${color}; font-size: 3rem; margin: 10px 0;">${percentage}%</h2>
    <h3 style="margin: 0; font-size: 1.5rem; color: #555;">${statusText}</h3>
    <p style="margin-top: 15px; font-size: 1.1rem;">
      You answered correctly to <strong>${score}</strong> out of <strong>${shuffledQuestions.length}</strong> questions.
    </p>
  `;
  renderHistory();
}

function renderHistory() {
  historyListEl.innerHTML = "";
  if (!currentUser.history || currentUser.history.length === 0) {
    historyListEl.innerHTML = "<p style='text-align:center; color: #777;'>No history available yet.</p>";
    return;
  }
  
  const reversedHistory = [...currentUser.history].reverse();
  let htmlContent = '<ul style="list-style: none; padding: 0;">';
  
  reversedHistory.forEach(h => {
    const isPass = parseFloat(h.percentage) >= PASS_PERCENTAGE;
    const itemColor = isPass ? "#2ecc71" : "#e74c3c";
    // Check dark mode for history item background
    const isDark = document.body.classList.contains("dark");
    const bgColor = isDark ? "#2b2b2b" : "#f9f9f9";

    htmlContent += `
      <li style="
        background: ${bgColor};
        border-left: 5px solid ${itemColor};
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <div style="flex-grow: 1;">
          <div style="font-weight: bold; font-size: 0.9rem; opacity: 0.8;">${h.date}</div>
          <div style="font-size: 0.85rem; text-transform: capitalize;">${h.subject || "Exam"}</div>
        </div>
        <div style="font-weight: bold; font-size: 1.2rem; color: ${itemColor};">
          ${h.percentage}%
        </div>
      </li>
    `;
  });
  htmlContent += '</ul>';
  historyListEl.innerHTML = htmlContent;
}

function returnToSubjects() {
  currentQuestion = 0;
  userAnswers = [];
  answered = [];
  quizEl.innerHTML = "";
  gridEl.innerHTML = "";
  showSection(subjectSection);
}

/* INITIALIZARE */
const logged = localStorage.getItem("loggedUser");
if (logged) {
  const user = users.find(u => u.username === logged);
  if (user) {
    loginUser(user);
  } else {
    showSection(loginSection);
  }
} else {
  showSection(loginSection);
}

/* DARK MODE PREF */
const darkPref = localStorage.getItem("darkMode");
if (darkPref === "on") {
  document.body.classList.add("dark");
  const btn = document.getElementById("dark-toggle");
  if (btn) btn.textContent = "☀️";
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-toggle");
  
  if (music.paused) {
    music.play();
    btn.textContent = "🔊"; 
  } else {
    music.pause();
    btn.textContent = "🔇"; 
  }
}