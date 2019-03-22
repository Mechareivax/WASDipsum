//Code that generates the random lorem ipsum text

//Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

//Constructor function that creates an object with the sentences property
function GenerateNewText() {
	//Add property to the object
	this.sentences = 
	[
		"Quote number 1.",
		"Second cool quote.",
		"Another nice quote.",
		"The very last quote."
	];
}

//Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
	let randomSentence = this.sentences[Math.floor(Math.random()* this.sentences.length)]
		return randomSentence;
}

//Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function(){
	let paragraph = "";
	//Set the minimum number of words
	let minimumCharacterLength = 250;
	let firstSentence = true;
	while (paragraph.length < minimumCharacterLength) {
		if (firstSentence) {
			paragraph = paragraph.concat(this.getRandomSentence());
			firstSentence = false;
		} else {
			paragraph = paragraph.concat(" " + this.getRandomSentence());
		}
	}
	return paragraph;
}

//Method to the GenerateNewText constructor function that generates multiple paragraphs from 'paragraphs' variable
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
	let allParagraphs = [];
	//Generate the number of paragraphs as specified by the user
	while (allParagraphs.length < numberOfParagraphs) {
		allParagraphs.push(this.getParagraph());
	}
	//Convert array into HTML string
	//Remember to come back and add a conditional for whether or not they want p tags
	let paragraphHTML = "";
	allParagraphs.forEach(function (paragraph){
		paragraphHTML += "<p>" + paragraph + "</p>";
	});
	return paragraphHTML;
}

module.exports = loremIpsum;