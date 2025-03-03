var getQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },

    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },

    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },

    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },

    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
]

function generate() {
    var random = Number.parseInt(Math.random()*getQuotes.length + 1);
    document.getElementById("quote").innerHTML = `\"${getQuotes[random].quote}\"`;
    document.getElementById("author").innerHTML = `\"${getQuotes[random].author}\"`;

}
