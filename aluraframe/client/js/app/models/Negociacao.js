/**
 Para criarmos a classe com o ES6, usaremos a sintaxe class Negociacao. 
 Ela terá o mesmo nome do arquivo, propositalmente, para que haja uma paridade 
 e maior organização - mas não era obrigatório. E como definiremos os atributos 
 de uma classe no ES6? Utilizando a função constructor().
 */

class Negociacao {

    constructor(){
        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0;
    }
}