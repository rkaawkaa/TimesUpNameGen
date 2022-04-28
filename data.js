
//Data for the website.

var dataText = {
    "english": {
        "title": "Times Up Name Generator",
        "introtext": "Welcome to you! In lack of inspiration for your Times Up's personalized cards? Here you can generate automatically differents names thanks to our huge database (historical and fictional people, scientifics, comedians...) to play it. Try it, it's free and easy to use!",
        "titledifficulty": "1. Choose your difficulty :",
        "titletheme": "2. Select your categorie(s) :",
        "titlenumbers": "3. Select the numbers of generated names by categories :",
        "titlefinal": "Finally, click the button below !",
        "easy": "Easy",
        "medium": "Medium",
        "hard": "Hard",
        "athletes": "Athletes",
        "series" : "Series and Movies",
        "intellectuals" : "Intellectuals",
        "fictional" : "Mythology and Religion",
        "historic" : "Historical people",
        "buttontext": "Generate Name",
        "footertext": "Developed by  KAWKA Robin &copy all rights reserved",
        "resulttitle": "Here are your results :"
        



    },
    "french": {
        "title": "Times Up Générateur",
        "introtext": "Bienvenue à vous! En manque d'inspiration pour vos cartes Times Up personnalisées ? Sur ce site, vous pouvez générer automatiquement différents noms grâce à notre immense base de données (personnes historiques et fictifs, scientifiques, comédiens...) pour jouer à votre jeu favori. Essayez, c'est gratuit et simple à utiliser.",
        "titledifficulty": "1. Choisissez votre difficulté :",
        "titletheme": "2. Selectionnez vos catégorie(s) :",
        "titlenumbers": "3. Selectionnez le nombre de noms à générer par catégorie :",
        "titlefinal": "Finalement, cliquez sur le bouton ci-dessous !",
        "easy": "Facile",
        "medium": "Moyen",
        "hard": "Difficiles",
        "athletes": "Les sportifs",
        "series" : "Séries et Films",
        "intellectuals" : "Les intellectuels",
        "fictional" : "Mythologies et Religions",
        "historic" : "Personnages historiques",
        "buttontext": "Générer les noms",
        "footertext": "Développé par KAWKA Robin &copy tous droits réservés",
        "resulttitle": "Voici vos résultats :"
    }
}


var resultText = {
    "english": {
        "selectedd" : "<b>Difficulty level :<b> ",
        "selectedc" : "<b>Selected categories :<b> ",
        "selectedi" : "<b>Number of generated names by categorie:<b> ",
        "warningmessage": "You can <p class= \"reset-btn\">reset all parameters</p> or <p class= \"generate-btn\">generate new names</p>."
    },
    "french": {
        "selectedd" : "<b>Niveau de difficulté :</b> ",
        "selectedc" : "<b>Catégories séléctionnées :<b> ",
        "selectedi" : "<b>Nombre de noms générés par catégories:<b> ",
        "warningmessage": "Vous pouvez <p class= \"reset-btn\">réinitialiser tous les paramètres</p> ou <p class= \"generate-btn\">générer de nouveaux noms</p>."
    }
}

var coolmessageObj = {
    "english": {
        "cool1": "Good game to you and until the next one! &#128512",
        "cool2": "And There you go ! All you have to do now is to win! &#128526",
        "cool3": "It was a pleasure to help you. Come back whenever you want! &#128521"
    },
    "french": {
        "cool1": "Bon jeu à vous et à la prochaine! &#128512",
        "cool2": "Et voilà ! Il ne vous reste plus qu'à gagner ! &#128526",
        "cool3": "Ce fut un plaisir de vous aider. Revenez quand vous le souhaitez ! &#128521"
    }
}

var validationForm = {
    "english": {
        "difficultychosen" : "Pick a difficulty level",
        "categoriechosen" : "Pick at least one categorie",
        "iterationchosen" : "Pick a number"
    },
    "french": {
        "difficultychosen" : "Choisissez un niveau de difficulté",
        "categoriechosen" : "Choisissez au moins une catégorie",
        "iterationchosen" : "Choisissez un nombre"
}
}


var database = {
    "easy": {
        "athletes" : ["Conor McGregor","Lionel Messi","Cristiano Ronaldo","Dak Prescott","LeBron James","Roger Federer","Tom Brady","Kevin Durant","Stephen Curry","Lewis Hamilton","Canelo Alvarez","Tiger Woods","Russel Westbrppl","Naomi Osaka","James Harden","Giannis Antetokounmpo","David Bakhtiari","Ronnie Stanley","Patrick Mahomes","Phil Mickelson","Joey Bosa","Klay Thompson","Kyrie Irving","Trent Williams","Myles Garrett","Jalen Ramsey","Gareth Bale","Dustin Johnson","Antoine Griezmann","Damian Lillard","Chris Paul","Kylian Mbappé","DeAndre Hopkins","Andres Iniesta","Leonard Williams","Marion Humpfrey","Paul Georges","Anthony Davis","Francisco Lindor","Chris Jones","Shaquil Barrett","Mohamed Salah","Serena Williams","Deshaun Watson","Matt Judon","Jimmy Butler","J.J.Watt","John Wall","Paul Pogba","Kawhi Leonard"],
        "intellectuals" : ["Thomas Wolsey","Hugo Grotius","Hypatia","John Stuart Mill","Terence Tao","William Siddis", "Philip Emeagwali","Judit Polgar"," Srinivasa Ramanujan","Garry Kasparov","Magnus Carlsen","Einstein","Tesla","Elon Musk","Graham Bell","Aristote","Friedrich Nietzsche","Schopenhauer","Marie Curie","Louis Pasteur","Hannah Arendt","Simone De Beauvoir","Simone Veil","Jean-Paul Sartre","Noam Chomsky","Gilles Deleuze","Dostoïevski","Gustave Flaubert","Carl Gustav Jung","Leo Tolstoï","Stephen Hawkins","Hemingway Ernest","Stephen King","George Orwell","Agatha Christie","Isaac Newton","Carl Gauss","Michael Faraday","Leonhard Euler","Gottfriend von Leibniz","Gallilee","Euclide","Johannes Kepler","Max Plank","Augustin Cauchy","James Clerk Maxwell","Robert Koch"],
        "historic" : ["Napoleon","Platon","Cesar","Ciceron","Cleopatre","Oppenheimer","Socrates","Marc-Aurele","Louis 16","Gengis Khan","Pol Pot","Saddam Hussein","Karl Marx","Lenine","Staline","Hitler","Beria","Goebbels","Himmler","Mussolini","Franco","Batista","Che Guevara","Georges W. Bush","Barack Obama","Ben Laden","Jesus Christ","Bouddha","Juda","Mahomet","Freddie Mercury","Montaigne","Freud","Rousseau","Mao Zedong","Kim Jung Un","Fidel Castro","Mohandas Gandhi","Winston Churchill","Ronald Reagan","Dalai Lama","Charles De Gaulles","Martin Luther King","Lance Armstrong","Margaret Thatcher","Nelson Mandela","Alexandre The Great"],
        "fictional": ["Zeus","Aphrodite","Apollon","Ares","Artemis","Athena","Demeter","Persephone","Dinoysos","Hades","Hephaistos","Heras","Hermes","Hestia","Poseidon","Chaos","Chronos","Erebe","Eros","Gaia","Héméra","Hypnos","Moros","Adam","Eve","Vénus","Phébus","Mars","Diane","Esculape","Minerve","Saturne","Céres","Bacchus","Cupidon","Tellus","Pluton","Thor","Ra","Amon","Anat","Horus","Isis","Osiris","Onouris","Dieu","Sebet","Brahma"],
        "series": ["Ted Mosby","Barney Stinson","Harry Potter","Dumbledore","Voldemort","Thomas Shelby","Jack Bauer","Stuart Little","Rachel Greene","Dr House","Dr Jekyll","Maximums","Legolas","Jack Sparrow","Hulk","Shrek","Cartman","Homer Simpson","ElasticMan","Godzilla","E.T","Rocky Balboa","Amelie Poulain","Neo","Indiana Jones","Han Solo","Dark Vador","Luc Skywalker","Lucky Luke","Don Corleone","Forrest Gump","Terminator","James Bond","The Joker","Walter White","Tyrion Lannister","Nora Durst","Olivia Pope","Saul Goodman","Michael Scott","Servietsky","Emma Watson","Ron Weasley","Ace Ventura","Aurora Greenway","Chloe OBrian","Inspector Gadjet","The toy boy"]
    },
    "medium": {
        "athletes" : ["Teddy Riner", "Mandzukic", "Mickael Phelps","Myles Garrett","Jalen Ramsey","Gareth Bale","Dustin Johnson","Antoine Griezmann","Damian Lillard","Chris Paul","Kylian Mbappé","DeAndre Hopkins","Andres Iniesta","Leonard Williams","Marion Humpfrey","Paul Georges","Anthony Davis","Francisco Lindor","Chris Jones","Shaquil Barrett","Mohamed Salah","Serena Williams","Deshaun Watson","Matt Judon","Jimmy Butler","J.J.Watt","John Wall","Paul Pogba","Kawhi Leonard","Xavi Hernandez","Zidane","Floyd Mayweather","Mike Tyson","Mohammad Ali","Mickael Schumacher","David Beckham","Yannick Noah","Rafael Nadal","Djokovic","Arnold Schwarzeneger","Michel Platini","John Wayne","Lewis Hamilton","Beckenbauer","Charles Barkley","Alexis Lalas"],
        "intellectuals" : ["Blaise Pascal","Nicolas Copernic","Bernahrd Riemann","Zhang Heng","Jules Henri Poincaré","Isambard Brunel","Joseph Lagrange","Paul Ehrlich","Archimede","Robert Boyle","Pierre Laplace","Henri Becquerel","Réné Descartes","John Von Neumann","Baudelaire","Rimbaud","Niels Bohr","Paul Verlaine","Victor Hugo","Alfred de Musset","Alphonse de Lamartine","Guillaume Apollinaire","Wolfgang Amadeus Mozart","Ludwig von Bethoven","Robert Hooke","William Siddis", "Philip Emeagwali","Judit Polgar"," Srinivasa Ramanujan","Garry Kasparov","Magnus Carlsen","Einstein","Tesla","Elon Musk","Graham Bell","Aristote","Friedrich Nietzsche","Schopenhauer","Marie Curie","Louis Pasteur","Hannah Arendt","Simone De Beauvoir","Simone Veil","Jean-Paul Sartre","Noam Chomsky","Gilles Deleuze","Dostoïevski","Gustave Flaubert","Carl Gustav Jung","Leo Tolstoï"],
        "historic": ["Napoleon","Platon","Cesar","Ciceron","Cleopatre","Bouddha","Juda","Mahomet","Freddie Mercury","Montaigne","Freud","Rousseau","Mao Zedong","Kim Jung Un","Fidel Castro","Mohandas Gandhi","Winston Churchill","Ronald Reagan","Dalai Lama","Charles De Gaulles","Martin Luther King","Lance Armstrong","Margaret Thatcher","Nelson Mandela","Alexandre The Great","Darwin","Thomas Jefferson","Georges Washington","Charles Dickens","John F. Kennedy","Hamilton","Christophe Colomb","Michel Ange","Vasco De Gama","Abraham Lincoln","Augustus","Adam Smith","Ulysse","Franklin D. Roosevelt","Magritte","Amin Dada","Harry Truman","Anne Frank","Joe Biden","Mother Theresa","Dian Fossey","Donald Trump"],
        "fictional": ["Ouranos","Hyperion","Theia","Themis","Agrios","Geryon","Typhon","Alpos","Achille","Attis","Heracles","Minos","Psyché","Vulcain","Uranus","Neptune","Jupiter","Caïn","Abel","Benoit XIV","Jean-Paul II","Ré","Seth","Gheb","Odin","Freya","Baldur","Zeus","Aphrodite","Apollon","Ares","Artemis","Athena","Demeter","Persephone","Dinoysos","Hades","Hephaistos","Heras","Hermes","Hestia","Poseidon","Chaos","Chronos","Erebe","Eros","Gaia","Héméra","Hypnos","Moros","Adam","Eve"],
        "series": ["Ted Mosby","Barney Stinson","Harry Potter","Dumbledore","Voldemort","Thomas Shelby","Jack Bauer","Stuart Little","Rachel Greene","Dr House","Dr Jekyll","Maximums","Legolas","Jack Sparrow","Hulk","Shrek","Cartman","Homer Simpson","ElasticMan","Godzilla","E.T","Rocky Balboa","Amelie Poulain","Neo","Indiana Jones","Han Solo","Dark Vador","Luc Skywalker","Lucky Luke","Don Corleone","Forrest Gump","Terminator","James Bond","The Joker","Leon","Django","Batman","Superman","John McLane","Tyler Durden","The Dude","Iron Man","Aragorn","Ron Burgundy","M. Gustave","Rick Blaine","Doc Brown","Hannibal Lecter","Travis Bickle","Ash","Patrick Bateman","Gandalf","Peter Venkman","Atticus Finch","Yoda","Lou Bloom"]
    },
    "hard": {
        "athletes": ["Pete Sampras","Ernie Banks","Usain Bolt","Kerri Strug","Phil Mickelson","Ronaldo","Maria Sharapova","Drew Brees","Paul Pogba","Kawhi Leonard","Xavi Hernandez","Zidane","Floyd Mayweather","Mike Tyson","Mohammad Ali","Mickael Schumacher","David Beckham","Yannick Noah","Rafael Nadal","Djokovic","Arnold Schwarzeneger","Michel Platini","John Wayne","Lewis Hamilton","Beckenbauer","Charles Barkley","Alexis Lalas","Steven Gerrard","George Best","Yao Ming","Randy Couture","Eric Heiden","David Robinson","Apolo Anton Ohno","Frank Thomas","Jimmie Johnson","Willie Stargell","Ray Leonard","Kirby Puckett","Tony Gwynn","LaDainian Tomlinson","Pedro Martinez","Shaun White","Ronaldinho","Jennie Finch","Mia Hamm","Dirk Nowitzki"],
        "intellectuals": ["Blaise Pascal","Nicolas Copernic","Bernahrd Riemann","Zhang Heng","Jules Henri Poincaré","Isambard Brunel","Joseph Lagrange","Paul Ehrlich","Archimede","Robert Boyle","Pierre Laplace","Henri Becquerel","Réné Descartes","John Von Neumann","Baudelaire","Rimbaud","Niels Bohr","Paul Verlaine","Victor Hugo","Alfred de Musset","Alphonse de Lamartine","Guillaume Apollinaire","Wolfgang Amadeus Mozart","Ludwig von Bethoven","Robert Hooke","Richard Wagner","Kierkegaard Soren","Antonio Vivaldo","Claude Debussy","Hegel","Hobbes","Machiaval","Marx","Montesquieu","Spinoza","Tocqueville","Voltaire","Bourdieu","Bergson","Heidegger","Lévi-Strauss","Paul Ricoeur","Merleau-Ponty","Peter Adamson","Judith Butler","Linda Coley","Jane Goodall","Jacob Hanna"],
        "historic": ["Georges Washington","Charles Dickens","John F. Kennedy","Hamilton","Christophe Colomb","Michel Ange","Vasco De Gama","Abraham Lincoln","Augustus","Adam Smith","Ulysse","Franklin D. Roosevelt","Magritte","Amin Dada","Harry Truman","Anne Frank","Joe Biden","Mother Theresa","Dian Fossey","Donald Trump","Angela Merkel","Abraham Lincoln","Bill Clinton","Ho Chi Minh","Mikhail Gorbatchev","Eisenhower","Richard Feynmann","Otto Von Bismark","Rockefeller","Woody Allen","René Barjavel","Jimmy Carter","Jimmy Hendrix","Mike Jagger","Paul McCartney","Tony Blair","Salvador Allende","Konrasdd Adenauer","Hermann Goring","Turing","Marie-Antoinette","Jacques Chirac","Raül Castro","George V","Colin Powell","Sadiq Khan","Leonard de Vinci","Picasso"],
        "fictional": ["Ouranos","Hyperion","Theia","Themis","Agrios","Geryon","Typhon","Alpos","Achille","Attis","Heracles","Minos","Psyché","Vulcain","Uranus","Neptune","Jupiter","Caïn","Abel","Benoit XIV","Jean-Paul II","Ré","Seth","Gheb","Odin","Freya","Baldur","Aegon","Saint Nicolas","Saint Grobian","Loki","Bragi","Tyr","Heimdall","Höd","Saint Joseph","Mary Magdalene","Jezebel","Billy Graham","Zoroaster","Maimonides","Saint Francis","Martin Luther","Guru Nanak","Mary Baker","Confucius","The Buddha","Joseph Smith","Krishna","Helena Blavatsky"],
        "series": ["Leon","Django","Batman","Superman","John McLane","Tyler Durden","The Dude","Iron Man","Aragorn","Ron Burgundy","M. Gustave","Rick Blaine","Doc Brown","Hannibal Lecter","Travis Bickle","Ash","Patrick Bateman","Gandalf","Peter Venkman","Atticus Finch","Yoda","Lou Bloom","Captain America","Rick Deckard","Lesther Burnham","Harry Callahan","Obi-wan Kenobi","Axel Foley","Jack Burton","Sarah Connor","Dr King Schultz","Bilbo Baggins","Wolverine","George Bailey","Gollum","Tony Montana","Donnie Darko","Martin Blank","V","Woody","Red","Groot","Hal","Norman Bates","Optimus Prime","Edna Mode"]
    }
   
}


