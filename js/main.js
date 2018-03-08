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


    class Veterinario {

        vacinar(Animal) {
            console.log(`${Animal.nome} foi vacinado.`)
        }
    }

    function main(){
        //cria um veterinario
        let veterinario = new Veterinario()
        // cria um cachorro
        let cachorro = new Cachorro('Johnny')
        let animal = new Animal('Passarinho')
	    let gato = new Gato('Francisca')
        
        // chamando metodos e atribuindo outro valor
        cachorro.falar()
        cachorro.nome = 'Tobias'
        animal.falar()
        cachorro.falar()
        veterinario.vacinar(cachorro)
	    gato.falar()
	    gato.comer('Peixe')

    }

    main()

}
