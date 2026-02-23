# Aula de Programação Orientada a Objetos (POO)

Esta aula cobre os conceitos fundamentais de Programação Orientada a Objetos utilizando exemplos em JavaScript. São apresentados quatro pilares essenciais da POO: abstração, encapsulamento, herança e polimorfismo.

## 1. Abstração

A abstração consiste em modelar entidades do mundo real em classes, expondo apenas os detalhes necessários e ocultando complexidades internas. No arquivo `Abstracao.js`, uma classe `NaveEspacial` é definida com atributos e métodos básicos.

```javascript
class NaveEspacial{
  // Atributos (Default - automático)
  nome;
  estavoando;

  // Métodos
  constructor(nome = null) {
    this.nome = nome;
    this.estavoando = false;
  }

  voar() {
    this.estavoando = true;
    return `${this.nome} está voando pelo espaço!`;
  }

  pousar() {
    this.estavoando = false;
  }
}

const minhaNave = new NaveEspacial("Millenium Falcon");
console.log(minhaNave);
console.log(minhaNave.voar());
console.log(`Esta voando? ${minhaNave.estavoando ? "Sim" : "Não"}`);
``` 

## 2. Encapsulamento

Encapsulamento protege o estado interno de uma classe, usando propriedades privadas e métodos públicos para controlar o acesso. O arquivo `Encapsulamento.js` mostra como usar o campo privado `#estaVoando` e um método `receberInfo` para obter informações.

```javascript
class NaveEspacial{
  #estaVoando; // Atributo privado

  constructor(nome = null) {
    this.nome = nome;
    this.#estaVoando = false;
  }

  voar() {
    this.#estaVoando = true;
    return `${this.nome} está voando pelo espaço!`;
  }

  pousar() {
    this.#estaVoando = false;
  }

  receberInfo() {
    return this.#estaVoando ? 'Sim' : 'Não';
  }
}

const minhaNave = new NaveEspacial("Millenium Falcon");
console.log(minhaNave.voar());
console.log(`Esta voando? ${minhaNave.receberInfo() === 'Sim' ? 'Decolagem autorizada' : 'Em solo'}`);
``` 

## 3. Herança

Herança permite que classes derivadas reaproveitem e estendam comportamentos de uma classe base. Em `Heranca.js`, a classe `NaveJedi` estende `NaveEspacial` e adiciona propriedades e métodos específicos.

```javascript
class NaveJedi extends NaveEspacial {
  constructor(nome, mestre) {
    super(nome);
    this.mestre = mestre;
  }

  ativarHiperspaco() {
    return `${this.nome} ativou o hiperespaço sob o comando do mestre ${this.mestre}!`;
  }
}
```

## 4. Polimorfismo

Polimorfismo permite que objetos de diferentes classes sejam tratados de forma uniforme, enquanto exibem comportamentos específicos. No arquivo `Polimorfismo.js`, as classes `NaveJedi` e `NaveSith` herdam de `NaveEspacial` e cada uma define sua própria versão do método `ativarHiperspaco`.

```javascript
class NaveSith extends NaveEspacial {
  constructor(nome, mestre) {
    super(nome);
    this.mestre = mestre;
  }

  ativarHiperspaco() {
    return `${this.nome} entrou no hiperespaço sob o comando do mestre malvado e bravo ${this.mestre}!`;
  }
}

const minhaNaveJedi = new NaveJedi("X-Wing", "Luke Skywalker");
const minhaNaveSith = new NaveSith("Estrela da morte", "Darth Vader");
console.log(minhaNaveJedi.ativarHiperspaco());
console.log(minhaNaveSith.ativarHiperspaco());
``` 

## Execução

Para executar os exemplos, abra um terminal no diretório `POO-2` e rode:

```sh
node Abstracao.js
node Encapsulamento.js
node Heranca.js
node Polimorfismo.js
```

Cada arquivo demonstra os conceitos descritos acima.

---

💡 **Dica:** Experimente criar novas classes e instâncias para reforçar o entendimento dos pilares de POO!
