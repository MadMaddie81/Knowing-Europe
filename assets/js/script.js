/**
 * This script starts with a big array of countries that are used to play the game.
 * 
 * The actual game code starts at line 354
 */

let countries = [
    {
        country: 'Åland',
        capitol: 'Mariehamn',
        flag: '<img src="assets/images/flags/Flag_of_Aland.svg.png" alt="Flag of Åland" class="picture"></img>',
        photo: '<img src="assets/images/capitols/mariehamn.jpg" alt="Mariehamn" class="picture"></img>',
        city1: 'Jomala',
        city2: 'Finström'
    },
    {
        country: 'Albania',
        capitol: 'Tirana',
        flag: '<img src="assets/images/flags/Flag_of_Albania.svg.png" alt="Flag of Albania" class="picture">',
        photo: '<img src="assets/images/capitols/tirana.jpg" alt="Tirana" class="picture">',
        city1: 'Durrës',
        city2: 'Vlorë'
    },
    {
        country: 'Andorra',
        capitol: 'Andorra la Vella',
        flag: '<img src="assets/images/flags/Flag_of_Andorra.svg.png" alt="Flag of Andorra" class="picture">',
        photo: '<img src="assets/images/capitols/andorra_la_vella.jpg" alt="Andorra la Vella" class="picture">',
        city1: 'Andorra del Rio',
        city2: 'Andorra de la Casa'
    },
    {
        country: 'Armenia',
        capitol: 'Yerevan',
        flag: '<img src="assets/images/flags/Flag_of_Armenia.svg.png" alt="Flag of Armenia" class="picture">',
        photo: '<img src="assets/images/capitols/yerevan.jpg" alt="Yerevan" class="picture">',
        city1: 'Gyumri',
        city2: 'Vanadzor'
    },
    {
        country: 'Austria',
        capitol: 'Vienna',
        flag: '<img src="assets/images/flags/Flag_of_Austria.svg.png" alt="Flag of Austria" class="picture">',
        photo: '<img src="assets/images/capitols/vienna.jpg" alt="" class="picture">',
        city1: 'Graz',
        city2: 'Salzburg'
    },
    {
        country: 'Azerbaijan',
        capitol: 'Baku',
        flag: '<img src="assets/images/flags/Flag_of_Azerbaijan.svg.png" alt="Flag of Azerbaijan" class="picture">',
        photo: '<img src="assets/images/capitols/baku.jpg" alt="Baku" class="picture">',
        city1: 'Sumgait',
        city2: 'Ganja'
    },
    {
        country: 'Belarus',
        capitol: 'Minsk',
        flag: '<img src="assets/images/flags/Flag_of_Belarus.svg.png" alt="Flag of Belarus" class="picture">',
        photo: '<img src="assets/images/capitols/minsk.jpg" alt="Minsk" class="picture">',
        city1: 'Homyel',
        city2: 'Mahilyow'
    },
    {
        country: 'Belgium',
        capitol: 'Brussels',
        flag: '<img src="assets/images/flags/Flag_of_Belgium.svg.png" alt="Flag of Belgium" class="picture">',
        photo: '<img src="assets/images/capitols/brussels.jpg" alt="Brussels" class="picture">',
        city1: 'Antwerp',
        city2: 'Ghent'
    },
    {
        country: 'Boznia & Herzegovina',
        capitol: 'Sarajevo',
        flag: '<img src="assets/images/flags/Flag_of_Bosnia_and_Herzegovina.svg.png" alt="Flag of Boznia & Herzegovina" class="picture">',
        photo: '<img src="assets/images/capitols/sarajevo.jpg" alt="Sarajevo" class="picture">',
        city1: 'Banja Luka',
        city2: 'Zagreb'
    },
    {
        country: 'Bulgaria',
        capitol: 'Sofia',
        flag: '<img src="assets/images/flags/Flag_of_Bulgaria.svg.png" alt="Flag of Bulgaria" class="picture">',
        photo: '<img src="assets/images/capitols/sofia.jpg" alt="Sofia" class="picture">',
        city1: 'Plovdiv',
        city2: 'Varna'
    },
    {
        country: 'Croatia',
        capitol: 'Zagreb',
        flag: '<img src="assets/images/flags/Flag_of_Croatia.svg.png" alt="Flag of Croatia" class="picture">',
        photo: '<img src="assets/images/capitols/zagreb.jpg" alt="Zagreb" class="picture">',
        city1: 'Split',
        city2: 'Rijeka'
    },
    {
        country: 'Cyprus',
        capitol: 'Nicosia',
        flag: '<img src="assets/images/flags/Flag_of_Cyprus.svg.png" alt="Flag of Cyprus" class="picture">',
        photo: '<img src="assets/images/capitols/nicosia.jpg" alt="" class="picture">',
        city1: 'Limassol',
        city2: 'Strovolos'
    },
    {
        country: 'Denmark',
        capitol: 'Copenhagen',
        flag: '<img src="assets/images/flags/Flag_of_Denmark.svg.png" alt="Flag of Denmark" class="picture">',
        photo: '<img src="assets/images/capitols/copenhagen.jpg" alt="Copenhagen" class="picture">',
        city1: 'Roskilde',
        city2: 'Odense'
    },
    {
        country: 'Estonia',
        capitol: 'Tallin',
        flag: '<img src="assets/images/flags/Flag_of_Estonia.svg.png" alt="Flag of Estonia" class="picture">',
        photo: '<img src="assets/images/capitols/tallin.jpg" alt="Tallin" class="picture">',
        city1: 'Tartu',
        city2: 'Riga'
    },
    {
        country: 'Finland',
        capitol: 'Helsinki',
        flag: '<img src="assets/images/flags/Flag_of_Finland.svg.png" alt="Flag of Finland" class="picture">',
        photo: '<img src="assets/images/capitols/helsinki.jpg" alt="Helsinki" class="picture">',
        city1: 'Turku',
        city2: 'Tampere'
    },
    {
        country: 'France',
        capitol: 'Paris',
        flag: '<img src="assets/images/flags/Flag_of_France.svg.png" alt="Flag of France" class="picture">',
        photo: '<img src="assets/images/capitols/paris.jpg" alt="Paris" class="picture">',
        city1: 'Lyon',
        city2: 'Marseille'
    },
    {
        country: 'Georgia',
        capitol: 'Tbilisi',
        flag: '<img src="assets/images/flags/Flag_of_Georgia.svg.png" alt="Flag of Georgia" class="picture">',
        photo: '<img src="assets/images/capitols/tbilisi.jpg" alt="" class="picture">',
        city1: 'Batumi',
        city2: 'Kutaisi'
    },
    {
        country: 'Germany',
        capitol: 'Berlin',
        flag: '<img src="assets/images/flags/Flag_of_Germany.png" alt="Flag of Germany" class="picture">',
        photo: '<img src="assets/images/capitols/berlin.jpg" alt="Berlin" class="picture">',
        city1: 'Hamburg',
        city2: 'Munich'
    },
    {
        country: 'Gibraltar',
        capitol: 'Westside',
        flag: '<img src="assets/images/flags/Flag_of_Gibraltar.svg.png" alt="Flag of Gibraltar" class="picture">',
        photo: '<img src="assets/images/capitols/westside.jpg" alt="Westside" class="picture">',
        city1: 'La Linea',
        city2: 'Algeciras'
    },
    {
        country: 'Greece',
        capitol: 'Athens',
        flag: '<img src="assets/images/flags/Flag_of_Greece.svg.png" alt="Flag of Greece" class="picture">',
        photo: '<img src="assets/images/capitols/athens.jpg" alt="Athens" class="picture">',
        city1: 'Thessaloniki',
        city2: 'Ankara'
    },
    {
        country: 'Greenland',
        capitol: 'Nuuk',
        flag: '<img src="assets/images/flags/Flag_of_Greenland.svg.png" alt="Flag of Greenland" class="picture">',
        photo: '<img src="assets/images/capitols/nuuk.jpg" alt="Nuuk" class="picture">',
        city1: 'Sisimiut',
        city2: 'Ilulissat'
    },
    {
        country: 'Hungary',
        capitol: 'Budapest',
        flag: '<img src="assets/images/flags/Flag_of_Hungary.svg.png" alt="Flag of Hungary" class="picture">',
        photo: '<img src="assets/images/capitols/budapest.jpg" alt="Budapest" class="picture">',
        city1: 'Bucharest',
        city2: 'Miskolc'
    },
    {
        country: 'Iceland',
        capitol: 'Reykjavík',
        flag: '<img src="assets/images/flags/Flag_of_Iceland.svg.png" alt="Flag of Iceland" class="picture">',
        photo: '<img src="assets/images/capitols/reykjavik.jpg" alt="Reykjavík" class="picture">',
        city1: 'Kópavogur',
        city2: 'Hafnarfjörður'
    },
    {
        country: 'Ireland',
        capitol: 'Dublin',
        flag: '<img src="assets/images/flags/Flag_of_Ireland.svg.png" alt="Flag of Ireland" class="picture">',
        photo: '<img src="assets/images/capitols/dublin.jpg" alt="Dublin" class="picture">',
        city1: 'Cork',
        city2: 'Limerick'
    },
    {
        country: 'Italy',
        capitol: 'Rome',
        flag: '<img src="assets/images/flags/Flag_of_Italy.svg.png" alt="Flag of Italy" class="picture">',
        photo: '<img src="assets/images/capitols/rome.jpg" alt="Rome" class="picture">',
        city1: 'Milan',
        city2: 'Naples'
    },
    {
        country: 'Kazakhstan',
        capitol: 'Astana',
        flag: '<img src="assets/images/flags/Flag_of_Kazakhstan.svg.png" alt="Flag of Kazakhstan" class="picture">',
        photo: '<img src="assets/images/capitols/astana.jpg" alt="Astana" class="picture">',
        city1: 'Almaty',
        city2: 'Sjyumkent'
    },
    {
        country: 'Kosovo',
        capitol: 'Pristina',
        flag: '<img src="assets/images/flags/Flag_of_Kosovo.svg.png" alt="Flag of Kosovo" class="picture">',
        photo: '<img src="assets/images/capitols/pristina.jpg" alt="Pristina" class="picture">',
        city1: 'Prizren',
        city2: 'Ferizaj'
    },
    {
        country: 'Latvia',
        capitol: 'Riga',
        flag: '<img src="assets/images/flags/Flag_of_Latvia.svg.png" alt="Flag of Latvia" class="picture">',
        photo: '<img src="assets/images/capitols/riga.jpg" alt="Riga" class="picture">',
        city1: 'Ventspils',
        city2: 'Vilnius'
    },
    {
        country: 'Liechtenstein',
        capitol: 'Vaduz',
        flag: '<img src="assets/images/flags/Flag_of_Liechtenstein.svg.png" alt="Flag of Liechtenstein" class="picture">',
        photo: '<img src="assets/images/capitols/vaduz.jpg" alt="Vaduz" class="picture">',
        city1: 'Schaan',
        city2: 'Liechtenstein'
    },
    {
        country: 'Lithuania',
        capitol: 'Vilnius',
        flag: '<img src="assets/images/flags/Flag_of_Lithuania.svg.png" alt="Flag of Lithuania" class="picture">',
        photo: '<img src="assets/images/capitols/vilnius.jpg" alt="Vilnius" class="picture">',
        city1: 'Kaunas',
        city2: 'Tallin'
    },
    {
        country: 'Luxembourg',
        capitol: 'Luxembourg',
        flag: '<img src="assets/images/flags/Flag_of_Luxembourg.png" alt="Flag of Luxembourg" class="picture">',
        photo: '<img src="assets/images/capitols/luxembourg.jpg" alt="Luxembourg" class="picture">',
        city1: 'Esch-sur-Alzette',
        city2: 'Differdange'
    },
    {
        country: 'Malta',
        capitol: 'Valletta',
        flag: '<img src="assets/images/flags/Flag_of_Malta.svg.png" alt="Flag of Malta" class="picture">',
        photo: '<img src="assets/images/capitols/valetta.jpg" alt="Valletta" class="picture">',
        city1: 'Vittorija',
        city2: 'Malta'
    },
    {
        country: 'Moldova',
        capitol: 'Chișinău',
        flag: '<img src="assets/images/flags/Flag_of_Moldova.svg.png" alt="Flag of Moldova" class="picture">',
        photo: '<img src="assets/images/capitols/chisinau.jpg" alt="Chișinău" class="picture">',
        city1: 'Tiraspol',
        city2: 'Bălți'
    },
    {
        country: 'Monaco',
        capitol: 'Monaco',
        flag: '<img src="assets/images/flags/Flag_of_Monaco.svg.png" alt="Flag of Monaco" class="picture">',
        photo: '<img src="assets/images/capitols/monaco.jpg" alt="Monaco" class="picture">',
        city1: 'Monte-Carlo',
        city2: 'Beausoleil'
    },
    {
        country: 'Montenegro',
        capitol: 'Podgorica',
        flag: '<img src="assets/images/flags/Flag_of_Montenegro.svg.png" alt="Flag of Montenegro" class="picture">',
        photo: '<img src="assets/images/capitols/podgorica.jpg" alt="Podgorica" class="picture">',
        city1: 'Skopje',
        city2: 'Cetinje'
    },
    {
        country: 'North Macedonia',
        capitol: 'Skopje',
        flag: '<img src="assets/images/flags/Flag_of_North_Macedonia.svg.png" alt="Flag of North Macedonia" class="picture">',
        photo: '<img src="assets/images/capitols/skopje.jpg" alt="Skopje" class="picture">',
        city1: 'Bitola',
        city2: 'Kumanovo'
    },
    {
        country: 'Norway',
        capitol: 'Oslo',
        flag: '<img src="assets/images/flags/Flag_of_Norway.svg.png" alt="Flag of Norway" class="picture">',
        photo: '<img src="assets/images/capitols/oslo.jpg" alt="Oslo" class="picture">',
        city1: 'Bergen',
        city2: 'Trondheim'
    },
    {
        country: 'Poland',
        capitol: 'Warsaw',
        flag: '<img src="assets/images/flags/Flag_of_Poland.svg.png" alt="Flag of " class="picture">',
        photo: '<img src="assets/images/capitols/warsaw.jpg" alt="" class="picture">',
        city1: 'Kraków',
        city2: 'Gdańsk'
    },
    {
        country: 'Portugal',
        capitol: 'Lisbon',
        flag: '<img src="assets/images/flags/Flag_of_Portugal.svg.png" alt="Flag of Portugal" class="picture">',
        photo: '<img src="assets/images/capitols/lisbon.jpg" alt="Lisbon" class="picture">',
        city1: 'Porto',
        city2: 'Amadora'
    },
    {
        country: 'Romania',
        capitol: 'Bucharest',
        flag: '<img src="assets/images/flags/Flag_of_Romania.png" alt="Flag of Romania" class="picture">',
        photo: '<img src="assets/images/capitols/bucharest.jpg" alt="Bucharest" class="picture">',
        city1: 'Budapest',
        city2: 'Brașov'
    },
    {
        country: 'Russia',
        capitol: 'Moscow',
        flag: '<img src="assets/images/flags/Flag_of_Russia.svg.png" alt="Flag of Russia" class="picture">',
        photo: '<img src="assets/images/capitols/moscow.jpg" alt="Moscow" class="picture">',
        city1: 'Saint Petersburg',
        city2: 'Novosibirsk'
    },
    {
        country: 'San Marino',
        capitol: 'San Marino',
        flag: '<img src="assets/images/flags/Flag_of_San_Marino.svg.png" alt="Flag of San Marino" class="picture">',
        photo: '<img src="assets/images/capitols/san_marino.jpg" alt="San Marino" class="picture">',
        city1: 'Dogana',
        city2: 'Serravalle'
    },
    {
        country: 'Scotland',
        capitol: 'Edinburgh',
        flag: '<img src="assets/images/flags/Flag_of_Scotland.svg.png" alt="Flag of Scotland" class="picture">',
        photo: '<img src="assets/images/capitols/edinburgh.jpg" alt="Edinburgh" class="picture">',
        city1: 'Glasgow',
        city2: 'Aberdeen'
    },
    {
        country: 'Serbia',
        capitol: 'Belgrade',
        flag: '<img src="assets/images/flags/Flag_of_Serbia.webp" alt="Flag of Serbia" class="picture">',
        photo: '<img src="assets/images/capitols/belgrade.jpg" alt="Belgrade" class="picture">',
        city1: 'Bratislava',
        city2: 'Novi Sad'
    },
    {
        country: 'Slovakia',
        capitol: 'Bratislava',
        flag: '<img src="assets/images/flags/Flag_of_Slovakia.svg.png" alt="Flag of Slovakia" class="picture">',
        photo: '<img src="assets/images/capitols/bratislava.jpg" alt="Bratislava" class="picture">',
        city1: 'Košice',
        city2: 'Ljubljana'
    },
    {
        country: 'Slovenia',
        capitol: 'Ljubljana',
        flag: '<img src="assets/images/flags/Flag_of_Slovenia.svg.png" alt="Flag of Slovenia" class="picture">',
        photo: '<img src="assets/images/capitols/ljubljana.jpg" alt="Ljubljana" class="picture">',
        city1: 'Bratislava',
        city2: 'Maribor'
    },
    {
        country: 'Spain',
        capitol: 'Madrid',
        flag: '<img src="assets/images/flags/Flag_of_Spain.png" alt="Flag of Spain" class="picture">',
        photo: '<img src="assets/images/capitols/madrid.jpg" alt="Madrid" class="picture">',
        city1: 'Barcelona',
        city2: 'Valencia'
    },
    {
        country: 'Sweden',
        capitol: 'Stockholm',
        flag: '<img src="assets/images/flags/Flag_of_Sweden.svg.png" alt="Flag of Sweden" class="picture">',
        photo: '<img src="assets/images/capitols/stockholm.jpg" alt="Stockholm" class="picture">',
        city1: 'Gothenburg',
        city2: 'Malmö'
    },
    {
        country: 'Switzerland',
        capitol: 'Bern',
        flag: '<img src="assets/images/flags/Flag_of_Switzerland.svg.png" alt="Flag of Switzerland" class="picture">',
        photo: '<img src="assets/images/capitols/bern.jpg" alt="Bern" class="picture">',
        city1: 'Zürich',
        city2: 'Geneva'
    },
    {
        country: 'the Czech Republic',
        capitol: 'Prague',
        flag: '<img src="assets/images/flags/Flag_of_the_Czech_Republic.svg.png" alt="Flag of the Czech Republic" class="picture">',
        photo: '<img src="assets/images/capitols/prague.jpg" alt="Prague" class="picture">',
        city1: 'Ostrava',
        city2: 'Brno'
    },
    {
        country: 'the Faroe Islands',
        capitol: 'Tórshavn',
        flag: '<img src="assets/images/flags/Flag_of_the_Faroe_Islands.svg.png" alt="Flag of the Faroe Islands" class="picture">',
        photo: '<img src="assets/images/capitols/torshavn.jpg" alt="Tórshavn" class="picture">',
        city1: 'Reykjavík',
        city2: 'Nuuk'
    },
    {
        country: 'the Netherlands',
        capitol: 'Amsterdam',
        flag: '<img src="assets/images/flags/Flag_of_the_Netherlands.png" alt="Flag of the Netherlands" class="picture">',
        photo: '<img src="assets/images/capitols/amsterdam.jpg" alt="Amsterdam" class="picture">',
        city1: 'Rotterdam',
        city2: 'Antwerp'
    },
    {
        country: 'the United Kingdom',
        capitol: 'London',
        flag: '<img src="assets/images/flags/Flag_of_the_United_Kingdom.svg.png" alt="Flag of the United Kingdom" class="picture">',
        photo: '<img src="assets/images/capitols/london.jpg" alt="London" class="picture">',
        city1: 'Birmingham',
        city2: 'Manchester'
    },
    {
        country: 'the Vatican City',
        capitol: 'Vatican City',
        flag: '<img src="assets/images/flags/Flag_of_the_Vatican_City.svg.png" alt="Flag of the Vatican City" class="picture">',
        photo: '<img src="assets/images/capitols/vatican_city.jpg" alt="the Vatican City" class="picture">',
        city1: 'Rome',
        city2: 'Sistine'
    },
    {
        country: 'Turkey',
        capitol: 'Ankara',
        flag: '<img src="assets/images/flags/Flag_of_Turkey.svg.webp" alt="Flag of Turkey" class="picture">',
        photo: '<img src="assets/images/capitols/ankara.jpg" alt="Ankara" class="picture">',
        city1: 'Istanbul',
        city2: 'Athens'
    },
    {
        country: 'Ukraine',
        capitol: 'Kyiv',
        flag: '<img src="assets/images/flags/Flag_of_Ukraine.svg.png" alt="Flag of Ukraine" class="picture">',
        photo: '<img src="assets/images/capitols/kiev.jpg" alt="Kiev" class="picture">',
        city1: 'Odesa',
        city2: 'Minsk'
    },
    {
        country: 'Wales',
        capitol: 'Cardiff',
        flag: '<img src="assets/images/flags/Flag_of_Wales.svg.png" alt="Flag of Wales" class="picture">',
        photo: '<img src="assets/images/capitols/cardiff.jpg" alt="Cardiff" class="picture">',
        city1: 'Swansea',
        city2: 'Newport'
    },
];

// Wait for the page to load before running the game, then add event listeners to the buttons

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            let gameType = this.getAttribute('data-type');
            gameStartup(gameType);
        });
    }
});

/**
 * Explains the game chosen and let the user start the game loop
 */
function gameStartup(gameType) {

    resetGame();
    let usedNumbers = [];

    if (gameType === 'flags') {
        document.getElementById('picture').innerHTML = `
        <div class="flag-box">
          <h2>Ok, let's test your flag knowledge</h2>
          <p>You will be presented with a flag and three options.</p>
          <p>Guess which country the flag belongs to.</p>
          <p>We play 15 rounds</p>
          <button class="start-button" id="start-flags">START GAME</button>
        </div>
        `;
        let start = document.getElementById('start-flags');
        start.addEventListener('click', function() {
            flagLoop(usedNumbers);
        });
    } else if (gameType === 'capitols') {
        document.getElementById('picture').innerHTML = `
        <div class="flag-box">
          <h2>Ok, let's see how well you know the capitols of Europe</h2>
          <p>I will tell you the country and show you a picture of the city.</p>
          <p>You will have three options.</p>
          <p>We play 15 rounds</p>
          <button class="start-button" id="start-capitols">START GAME</button>
        </div>
        `;
        let start = document.getElementById('start-capitols');
        start.addEventListener('click', function() {
            capitolLoop(usedNumbers);
        });
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * The flag game loop that keep running until player runs out of game rounds.
 */
function flagLoop(usedNumbers) {
    
    let rounds = parseInt(document.getElementById('played-games').innerText);

    if (rounds < 15) {
        runFlags(usedNumbers);
    } else {
        setTimeout(() => {
            endGame();
         }, 2000);
    }
}

/**
 * The capitols game loop that keep running until player runs out of game rounds.
 */
function capitolLoop(usedNumbers) {

    let rounds = parseInt(document.getElementById('played-games').innerText);

    if (rounds < 15) {
        runCapitols(usedNumbers);
    } else {
        setTimeout(() => {
            endGame();
         }, 2000);
    }
}

/**
 * The main flag game
 * Picks a country randomly from the array and displays the flag to the user
 * 
 * Gets two wrong options from another function and displays the three options on buttons for the user to press
 */
function runFlags(usedNumbers) {

    document.getElementsByClassName('options-area')[0].classList.remove('red', 'green');
    document.getElementsByClassName('options-area')[0].classList.add('button-background');

    document.getElementById('question').textContent = "What flag is this?";
    
    document.getElementsByClassName('options-area')[0].innerHTML = `
      <button data-type="answer" class="btn" id="option1"></button>
      <button data-type="answer" class="btn" id="option2"></button>
      <button data-type="answer" class="btn" id="option3"></button>
    `;

    let number;
    do {
        number = Math.floor(Math.random() * 57);
    } while (usedNumbers.includes(number));

    usedNumbers.push(number);

    let country = countries[number];

    let optionNumbers = randomiseOptions(number);
    
    let optionPlacing = Math.floor(Math.random() * 3);
    optionNumbers.splice(optionPlacing, 0, number);

    let op1 = optionNumbers[0];
    let op2 = optionNumbers[1];
    let op3 = optionNumbers[2];

    document.getElementById('picture').innerHTML = country.flag;

    document.getElementById('option1').textContent = countries[op1].country;
    document.getElementById('option2').textContent = countries[op2].country;
    document.getElementById('option3').textContent = countries[op3].country;

    document.getElementById('answer').textContent = "";

    let buttons = document.getElementsByClassName('btn');
    for (let button of buttons) {      
        button.addEventListener('click', function() {
            let answer = this.textContent;
            checkFlagAnswer(number, answer, usedNumbers);
        }, {once : true});
    }
}

/**
 * The main capitols game
 * Picks a country randomly from the array, asks the user what the capitol of the city is 
 * and displays a picture of the city to the user.
 * 
 * Gets two wrong options from another function and displays the three options on buttons for the user to press
 */
function runCapitols(usedNumbers) {
    document.getElementsByClassName('options-area')[0].classList.remove('red', 'green');
    document.getElementsByClassName('options-area')[0].classList.add('button-background');    
    
    document.getElementsByClassName('options-area')[0].innerHTML = `
      <button data-type="answer" class="btn" id="option1"></button>
      <button data-type="answer" class="btn" id="option2"></button>
      <button data-type="answer" class="btn" id="option3"></button>
    `;

    let number;
    do {
        number = Math.floor(Math.random() * 57);
    } while (usedNumbers.includes(number));

    usedNumbers.push(number);

    let country = countries[number];
    let capitol = countries[number].capitol;

    let options = [];
    options.push(country.city1);
    options.push(country.city2);
    
    let optionPlacing = Math.floor(Math.random() * 3);
    options.splice(optionPlacing, 0, capitol);

    let op1 = options[0];
    let op2 = options[1];
    let op3 = options[2];

    document.getElementById('question').innerHTML = `What is the capitol of ${country.country}?`;

    document.getElementById('picture').innerHTML = country.photo;

    document.getElementById('option1').textContent = options[0];
    document.getElementById('option2').textContent = options[1];
    document.getElementById('option3').textContent = options[2];

    document.getElementById('answer').textContent = "";

    let buttons = document.getElementsByClassName('btn');
    for (let button of buttons) {      
        button.addEventListener('click', function() {
            let answer = this.textContent;
            checkCapitolAnswer(number, answer, usedNumbers);
        }, {once : true});
    }

}

/**
 * Takes in the array number of the current question
 * 
 * Randomises 2 numbers and compare them to each other
 * and the question to avoid duplication
 * 
 * Returns the two random numbers
 */
function randomiseOptions(number) {
    let num1;
    let num2;

    do {
        num1 = Math.floor(Math.random() * 57);
        num2 = Math.floor(Math.random() * 57);
    } while (num1 === num2 || num1 === number || num2 === number);

    return [num1, num2];
}

/**
 * Comparing the clicked button with the correct answer.
 * 
 * Takes in the array number of the correct answer, the text content and class list of the button pressed.
 */
function checkCapitolAnswer(number, answer, usedNumbers) {
    
    let correct = countries[number].capitol;
    let country = countries[number].country;
    let message = document.getElementById('answer');
    let background = document.getElementsByClassName('options-area')[0];

    removeListeners();
    
    if (answer === correct) {
        message.classList.add("correct");
        message.classList.remove("incorrect");
        message.textContent = "Correct!";
        background.classList.add("green");
        background.classList.remove("red");
        incrementScore();
    } else {
        message.classList.add("incorrect");
        message.classList.remove("correct");
        message.innerHTML = `Wrong<br>The capitol of ${country} is ${correct}.`;
        background.classList.add("red");
        background.classList.remove("green");
    }

    incrementRounds();

    setTimeout(() => {
        capitolLoop(usedNumbers);
     }, 1700);
}

function checkFlagAnswer(number, answer, usedNumbers) {
    
    let correct = countries[number].country;
    let message = document.getElementById('answer');
    let background = document.getElementsByClassName('options-area')[0];

    removeListeners();
    
    if (answer === correct) {
        message.classList.add("correct");
        message.classList.remove("incorrect");
        message.textContent = "Correct!";
        background.classList.add("green");
        background.classList.remove("red");
        incrementScore();
    } else {
        message.classList.add("incorrect");
        message.classList.remove("correct");
        message.innerHTML = `Wrong<br>This is the flag of ${correct}.`;
        background.classList.add("red");
        background.classList.remove("green");
    }

    incrementRounds();

    setTimeout(() => {
        flagLoop(usedNumbers);
     }, 1700);
}

function removeListeners() {
    let buttons = document.getElementsByClassName('btn');
    for (let button of buttons) {
        button.replaceWith(button.cloneNode(true));
    }
}

/**
 * Get the number of played rounds from DOM and increment by 1
 * 
 * Adjusts the % of won games in DOM
 */
function incrementRounds() {
    let rounds = parseInt(document.getElementById('played-games').innerText);
    rounds++;
    document.getElementById('played-games').innerText = rounds;

    let wins = parseInt(document.getElementById('score').innerText);
    document.getElementById('win-percent').innerText = Math.round((wins / rounds) * 100);
}

/**
 * Gets score from DOM and increments it by 1
 */
function incrementScore() {
    let score = parseInt(document.getElementById('score').innerText);
    score++;
    document.getElementById('score').textContent = score;
}

/**
 * Resets the scores from previous game
 */
function resetGame() {
    document.getElementById('question').textContent = "";
    document.getElementById('answer').textContent = "";
    document.getElementsByClassName('options-area')[0].innerHTML = "";
    document.getElementsByClassName('options-area')[0].classList.remove('button-background', 'red', 'green');
    document.getElementById('score').innerHTML = '0';
    document.getElementById('played-games').innerHTML = '0';
    document.getElementById('win-percent').innerHTML = '0';
}

/**
 * Ends the game and displays the results
 */
function endGame() {
    document.getElementsByClassName('options-area')[0].innerHTML = `<a href="index.html" id="play-again"><button class="btn">PLAY AGAIN</button></a>`;
    document.getElementsByClassName('options-area')[0].classList.remove('button-background', 'red', 'green');
    document.getElementById('answer').textContent = "";

    let results = parseInt(document.getElementById('win-percent').innerText);

    document.getElementById('question').textContent = "Here are your results:";
    document.getElementById('picture').innerHTML = `
        <div class="end">
          <h3>You were correct on</h3>
          <p>${results}%</p>
          <h3>of the questions</h3>
          <h2 id="conclusion"></h2>
        </div>
        `;
    if (results < 21) {
        document.getElementById('conclusion').innerHTML = `That's not... very good.<br>Did you even try?`;
    } else if (results > 20 && results < 51) {
        document.getElementById('conclusion').innerHTML = `Nice attempt.<br>You might need some more practice though.`;
    } else if (results > 50 && results < 81) {
        document.getElementById('conclusion').innerHTML = `Good job!<br>A couple more times and you'll get them all`;
    } else if (results > 80 && results < 100) {
        document.getElementById('conclusion').innerHTML = `That's Amazing!<br>I'm sure you'll get 100% next time!`;
    } else {
        document.getElementById('conclusion').innerHTML = `YOU DID IT!<br>I'm so proud of you`;
    }
}