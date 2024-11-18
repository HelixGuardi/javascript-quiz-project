class Question {
    // YOUR CODE HERE:
    constructor(text, choices, answer, difficulty) {
        this.text = text; // text(string)
        this.choices = choices; // choices (array of strings)
        this.answer = answer; // answer (string)
        this.difficulty = difficulty; // number (number between 1 and 3, with 1 being the easiest and 3 being the hardest)
    }

    shuffleChoices() {
        //should shuffle the elements stored in the choices array property
    }
}