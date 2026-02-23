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

class NaveSith extends NaveEspacial {
    constructor(nome, mestre) {
        super(nome);
        this.mestre = mestre;
}
ativarHiperspaco() {
    return `${this.nome} entrou no hiperespaço sob o comando do mestre malvado e bravo ${this.mestre}!`

}
}


//Criando uma instancia da classe NaveEspacial - Objeto
const minhaNave = new NaveEspacial("Millenium Falcon");
const minhaNaveJedi = new NaveJedi("X-Wing", "Luke Skywalker");
const minhaNaveSith = new NaveSith("Estrela da morte", "Darth Vader");

//Voar
console.log(minhaNave.voar());
console.log(minhaNaveJedi.voar());
console.log(minhaNaveSith.voar());

//hiperspaco
console.log(minhaNave.voar());
console.log(minhaNaveJedi.ativarHiperspaco());
console.log(minhaNaveSith.ativarHiperspaco());


