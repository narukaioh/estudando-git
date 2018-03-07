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
        
        // chamando metodos e atribuindo outro valor
        cachorro.falar()
        cachorro.nome = 'Tobias'
        animal.falar()
        cachorro.falar()
        veterinario.vacinar(cachorro)

    }

    main()

}