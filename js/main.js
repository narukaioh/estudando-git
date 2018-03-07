window.onload = () => {

    class Animal {
        constructor(nome) {
            this.nome = nome
        }

        falar() {
            console.log(`${this.nome} emite um barulho.`)
        }
    }

    class Cachorro extends Animal {
        falar() {
            console.log(`${this.nome} está latindo.`)
        }

    }
    class Gato extends Animal {
	falar() {
            console.log(`${this.nome} está miando.`)
        }        
	comer(alimento) {
            console.log(`${this.nome} está comendo ${alimento}.`)
        }

    }


    function main(){
        // cria um cachorro
        let cachorro = new Cachorro('Johnny')
        let animal = new Animal('Passarinho')
        
        // chamando metodos e atribuindo outro valor
        cachorro.falar()
        cachorro.nome = 'Tobias'
        animal.falar()
        cachorro.falar()

    }

    main()

}
