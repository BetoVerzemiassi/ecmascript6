/**
 Para criarmos a classe com o ES6, usaremos a sintaxe class Negociacao. 
 Ela terá o mesmo nome do arquivo, propositalmente, para que haja uma paridade 
 e maior organização - mas não era obrigatório. E como definiremos os atributos 
 de uma classe no ES6? Utilizando a função constructor().
 */

class Negociacao {

    constructor(data, quantidade, valor){

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}