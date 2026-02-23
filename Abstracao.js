class NaveEspacial{
// Atributos(Default - automatico)
nome;
estavoando;

//Metodos
constructor(nome = null) {
this.nome = nome;
this.estavoando = false;
}

voar() {
    this.estavoando = true
    return `${this.nome}está voando pelo espaço!`
}

pousar() {
    this.estavoando = false;
}
}

//Criando uma instancia da classe NaveEspacial - Objeto

const minhaNave = new NaveEspacial("Millenium Falcon");

console.log(minhaNave)

console.log("---------");
console.log(minhaNave.voar());
console.log(`Esta voando? ${minhaNave.estavoando ? "Sim" : "Não"}`);

console.log("---------");
console.log(minhaNave.pousar());
console.log(`Esta voando? ${minhaNave.estavoando ? "Sim" : "Não"}`);




