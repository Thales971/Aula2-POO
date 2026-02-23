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
    return `${this.nome} está voando pelo espaço!`
}

pousar() {
    this.#estaVoando = false;
}
receberInfo() {
return this.#estaVoando ? 'Sim' : 'Não';
}
}

//Criando classe NaveJedi

class NaveJedi extends NaveEspacial {
    constructor(nome, mestre) {
        super(nome);
        this.mestre = mestre;
}
ativarHiperspaco() {
    return `${this.nome} ativou o hiperespaço sob o comando do mestre ${this.mestre}!`

}
}


//Criando uma instancia da classe NaveEspacial - Objeto
const minhaNave = new NaveEspacial("Millenium Falcon");
const minhaNaveJedi = new NaveJedi("X-Wing", "Luke Skywalker");

console.log(minhaNave);
console.log(minhaNaveJedi.ativarHiperspaco());