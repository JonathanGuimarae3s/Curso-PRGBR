function speakGeneric() {
	console.log(this.sound);
}

let dog = {
	sound: "au au",
	speak: speakGeneric,
};
let cat = {
	sound: "miau",
	
};

dog.speak();


let bindedFunction = speakGeneric.bind(cat)
bindedFunction()
// binded é metodo de uma função onde voce pode declarar o contexto

