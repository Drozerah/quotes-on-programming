// Dom content ready !
document.addEventListener("DOMContentLoaded", function () {

    // array of quotes
    var arr = [];
    // object 'quote' constructor
    var quote = function (text, author) {
        this.text = text;
        this.author = author;
    };

    // populate arr with quotes
    arr.push(
        new quote("Get app, stand app, stand app for your app! Get app, stand app, don\'t give up the fight!", "Drozerah")
    );
    arr.push(
        new quote("Java is to JavaScript what Car is to Carpet.", "Chris Heilmann")
    );
    arr.push(
        new quote(
            "It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.",
            "Steve McConnell"
        )
    );
    arr.push(
        new quote(
            "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
            "Edsger Dijkstra"
        )
    );
    arr.push(
        new quote(
            "Rules of Optimization:<br>Rule 1: Don't do it.<br>Rule 2 (for experts only): Don't do it yet.",
            "Michael A. Jackson"
        )
    );
    arr.push(
        new quote(
            "Walking on water and developing software from a specification are easy if both are frozen.",
            "Edward V Berard"
        )
    );
    arr.push(
        new quote(
            "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
            "Brian Kernighan"
        )
    );
    arr.push(
        new quote(
            "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
            "Andrew Hunt and David Thomas"
        )
    );
    arr.push(
        new quote("First, solve the problem. Then, write the code.", "John Johnson")
    );
    arr.push(
        new quote(
            "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.",
            "Stan Kelly-Bootle"
        )
    );
    arr.push(
        new quote(
            "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
            "Rick Osborne"
        )
    );
    arr.push(
        new quote(
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            "Martin Fowler"
        )
    );
    arr.push(
        new quote("Software sucks because users demand it to.", "Nathan Myhrvold")
    );
    arr.push(
        new quote("Linux is only free if your time has no value.", "Jamie Zawinski")
    );
    arr.push(
        new quote(
            "Beware of bugs in the above code; I have only proved it correct, not tried it.",
            "Donald Knuth"
        )
    );
    arr.push(
        new quote(
            "There is not now, nor has there ever been, nor will there ever be, any programming language in which it is the least bit difficult to write bad code.",
            "Flon's Law"
        )
    );
    arr.push(
        new quote(
            "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
            "Tom Cargil"
        )
    );
    arr.push(
        new quote(
            "Good code is its own best documentation. As you're about to add a comment, ask yourself, \"How can I improve the code so that this comment isn't needed?\" Improve the code and then document it to make it even clearer.",
            "Steve McConnell"
        )
    );
    arr.push(
        new quote(
            "Programs must be written for people to read, and only incidentally for machines to execute.",
            "Abelson / Sussman"
        )
    );
    arr.push(
        new quote(
            "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
            "Alan Kay"
        )
    );
    arr.push(
        new quote(
            "Programming can be fun, so can cryptography; however they should not be combined.",
            "Kreitzberg and Shneiderman"
        )
    );
    arr.push(new quote("Copy and paste is a design error.", "David Parnas"));
    arr.push(
        new quote(
            "Before software can be reusable it first has to be usable.",
            "Ralph Johnson"
        )
    );
    arr.push(
        new quote(
            "Without requirements or design, programming is the art of adding bugs to an empty text file.",
            "Louis Srygley"
        )
    );
    arr.push(
        new quote(
            'When someone says, "I want a programming language in which I need only say what I want done", give him a lollipop.',
            "Alan Perlis"
        )
    );
    arr.push(
        new quote(
            "Computers are good at following instructions, but not at reading your mind.",
            "Donald Knuth"
        )
    );
    arr.push(
        new quote(
            "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.",
            "Eagleson's law"
        )
    );
    arr.push(
        new quote(
            "Programming isn't about what you know; it's about what you can figure out.",
            "Chris Pine"
        )
    );
    arr.push(
        new quote(
            "Think twice, code once.",
            "Waseem Latif"
        )
    );
    // console.log(arr);

    // Generate random number betwen min and max
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // get arr.length
    var objLength = arr.length;

    // push new quote randomly
    function newQuote() {

        // generate random number between 0 and objLength
        var random = randomIntFromInterval(0, objLength);
        // console.log('random => ',random);
        // reference datas from object randomly
        var cardContentDataText = arr[random].text;
        var cardContentDataAuthor = arr[random].author;
        // get HTML contents elements
        var cardContentText = document.querySelector('#card-content-text')
        var cardContentAuthor = document.querySelector('#card-content-author')
        var addIcon = '<i id="icon" class="material-icons md-229">format_quote</i>';
        // render HTML
        cardContentText.innerHTML = addIcon+cardContentDataText;
        cardContentAuthor.innerHTML = cardContentDataAuthor;

        var icon = document.querySelector("#icon");
        //icon.style.color = "blue";
        var rotation = randomIntFromInterval(0, 36)*100;
        var rotateData = "rotate("+rotation+"deg)"
        icon.style.transform = rotateData;

    }
    // push new quote randomly
    newQuote();

    // get HTML btn "New quote"
    var btnNewQuote = document.querySelector('#card-nav-btn-new-quote');
    // set click listener on btnNewQuote
    btnNewQuote.addEventListener('click', function () {

        // restart animation 
        var card = document.querySelector('#card')
        card.classList.remove('animation-target')
        void card.offsetWidth // triggering reflow
        card.classList.add('animation-target')

        // push new quote randomly
        newQuote();
    });

    // Opening the Twitter Share Box in a popup window
    // get HTML btn "Tweet"
    var btnTwitter = document.querySelector('#card-nav-btn-twitter');
    // generate popup
    btnTwitter.addEventListener('click', function (event) {
        event.preventDefault();
        // get window width and height
        var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        // alert(x + ' × ' + y);
        // console.log('url=> ',this.action);

        // Push Tweet text to popup
        // get HTML current quote text content
        var currentQuoteTextContent = document.querySelector('#card-content-text').textContent
        // remove 'format_quote' from text + replace ';' with ','
        var currentQuote = currentQuoteTextContent.replace('format_quote','').replace(';',',');
        // get HTML current quote author
        var currentQuoteAuthor = document.querySelector('#card-content-author').textContent
        // add double quotes to string        
        currentQuote = '"'+currentQuote+'"';
        // concatenate text+author in one string
        var tweetText = currentQuote+' '+currentQuoteAuthor;
        // console.log("=>",currentQuote)
        // URL-encoded Tweet text.
        // encodeURI 
        var encodedTweetText = encodeURI(tweetText); 
        // console.log("encodedTweetText =>",encodedTweetText)

        // create and populate popup
        var width  = 575,
        height = 400,
        left   = (x  - width)  / 2,
        top    = (y - height) / 2,
        urlRoot = this.action,
        urlParamText = '?text=',
        urlParamHashtags = '&hashtags=quotes,programming,javascript',
        relatedUrl = "https://quotes-on-programming.netlify.com/",
        url = urlRoot + urlParamText + encodedTweetText + urlParamHashtags +" "+relatedUrl,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
        //console.log("url=> ",url);
        window.open(url, 'twitter', opts);
 
        return false;
    });

});