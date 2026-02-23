class NaveEspacial{
// Atributos(Default - automatico)
#estaVoando; // Atributo privado


//Metodos
constructor(nome = null) {
this.nome = nome;
this.#estaVoando = false;
}

voar() {
    this.#estaVoando = true
    return `${this.nome}está voando pelo espaço!`
}

pousar() {
    this.#estaVoando = false;
}
receberInfo() {
return this.#estaVoando ? 'Sim' : 'Não';
}
}

//Criando uma instancia da classe NaveEspacial - Objeto

const minhaNave = new NaveEspacial("Millenium Falcon");

console.log(minhaNave)

console.log(minhaNave.voar());

console.log(`Esta voando? ${minhaNave.receberInfo() === 'Sim'? 'Decolagem autorizada' : 'Em solo'}`);

minhaNave.pousar();
console.log(`Esta voando? ${minhaNave.receberInfo()}`);




