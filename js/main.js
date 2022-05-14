var quotes = [
{
    author:"Bernard M. Baruch",
    quoteDescription:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
},
{
    author:"Mae West",
    quoteDescription:"“You only live once, but if you do it right, once is enough.”",
},
{
    author:"Oscar Wilde",
    quoteDescription:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
},
{
    author:"Mark Twain",
    quoteDescription:"“If you tell the truth, you don't have to remember anything.”",
},
{
    author:"Maya Angelou",
    quoteDescription:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
},
{
    author:"Thomas A. Edison",
    quoteDescription:"“I have not failed. I've just found 10,000 ways that won't work.”",
}
];

var quoteBtn = document.getElementById('getQuote')
var quoteOutput = document.getElementById('quoteOutput')
var authorOutput = document.getElementById('authorOutput')

var currentIndex = 0

quoteBtn.onclick=function(){
    
    for (var i=0;i<quotes.length;i++){
        if (currentIndex==i){
            displayData(currentIndex)

        }
        else if(currentIndex==quotes.length){
            currentIndex=0
            displayData(currentIndex)
        }
    }
    currentIndex +=1
}

var displayData = function(quoteId){
    quoteOutput.innerHTML=quotes[quoteId].quoteDescription
    authorOutput.innerHTML=quotes[quoteId].author
}