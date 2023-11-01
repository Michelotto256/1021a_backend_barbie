import FilmeRepositorioInterface from "../../aplicacao/filme-repositorio-interface"

export default class BancoEmMemoria implements FilmeRepositorioInterface{
    public dados:Filme[] = []
    constructor(){}
    public salvar(input:Filme):Promise<boolean>{
        
            this.dados.push(input)
            return new Promise ((resolve, reject)=>{
                resolve(true)
            })
        }
        
    }

type Filme = {
    id: number,
    titulo: string,
    descricao: string,
    foto: string
}