import {describe, it, expect} from 'vitest'
import axios from 'axios'
describe('Primeiro teste da aplicação', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })
})

describe('Cadastro Filme', () => {
    it('Deve cadastrar um filme com sucesso', async () => {
        const filme = {
            id: 1,
            titulo: 'Vingadores',
            descricao: 'Filme dos Vingadores',
            foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
        }
        const resposta = 
            await axios.post('http://localhost:3000/filmes', filme)
        expect(resposta.status).toBe(201)
        expect(resposta.data).toEqual(filme)
    })
    it('deve listar um filme cadastrado', async () => {
      const filme = {
          id: 1,
          titulo: 'Vingadores',
          descricao: 'Filme dos Vingadores',
          foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
      }
      const resposta = await axios.post('http://localhost:3000/filmes', filme)

      //1) Buscar o filme cadastrado
      const listaFilmes = await axios.get('http://localhost:3000/filmes/1')
      const filmeCadastrado = listaFilmes.data
      //2)Verificar se o filme devolvido é igual ao que nós cadastramos
      expect(filmeCadastrado[0]).toEqual(filme)
      //3)Verificar se o tamanho da lista é igual a 1
      expect(filmeCadastrado.length).toBe(1)
  })
  it('deve listar outro filme cadastrado', async () => {
    const filme = {
        id: 2,
        titulo: 'Barbie',
        descricao: 'Filme da barbie',
        foto: 'https://shop.mattel.com/cdn/shop/products/qgjefzecvqfdo6yesinu_e3dcff46-604e-4448-952a-c8a5755eeefc.jpg?v=1690236698',
    }
    const resposta = await axios.post('http://localhost:3000/filmes', filme)

    //1) Buscar o filme cadastrado
    const listaFilmes = await axios.get('http://localhost:3000/filmes/2')
    const filmeCadastrado = listaFilmes.data
    //2)Verificar se o filme devolvido é igual ao que nós cadastramos
    expect(filmeCadastrado[0]).toEqual(filme)
    //3)Verificar se o tamanho da lista é igual a 1
    expect(filmeCadastrado.length).toBe(1)
  })
})