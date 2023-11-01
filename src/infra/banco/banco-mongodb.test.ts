import {describe,test,expect} from 'vitest'
import BancoMongoDB from './banco-mongodb'

describe("Banco em memória",()=>{
    test("Deve salvar no banco em memoria", async ()=>{
        const input = {
            id: 1,
            titulo:"test",
            descricao:"test",
            foto: "test",
        }
        const bancoEmMemoria = new BancoMongoDB();
        const result = await bancoEmMemoria.salvar(input)
        expect(result).toBe(true)

    })
})
