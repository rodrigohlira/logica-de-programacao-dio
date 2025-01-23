class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    ataque(){
        let ataque = "";
        switch (this.type) {

            case "mago":
                ataque = "usou magia";
                break;
            
            case "guerreiro":
                ataque = "usou espada";
                break;
            
            case "monge":
                ataque = "usou artes marciais";
                break;

            case "ninja":
                ataque = "usou shuriken";
                break;

            default:
                ataque = "usou um ataque desconhecido";
        }

        return ataque;
    }

    atacar(){
        console.log(`O ${this.type} ${this.name} de ${this.age} anos, ${this.ataque()}`)
    }
}

let heroUm = new hero("Gil", 38, "mago");
let heroDois = new hero("Murilo", 33, "guerreiro");
let heroTres = new hero("Brendo", 22, "ninja");
let heroQuatro = new hero("Carol", 29, "Fada");

heroUm.atacar();
heroDois.atacar();
heroTres.atacar();
heroQuatro.atacar();