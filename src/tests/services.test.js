const services = require('../services/index')

describe('Testanto função formatPrice', () => {
  it('A função deve retornar uma string com duas casas decimais e vírgula', () => {
      expect('50,99').toEqual(services.formatPrice(50.99))
      expect('50,99').toEqual(services.formatPrice(50.994))
      expect('50,99').toEqual(services.formatPrice(50.995))
      expect('51,00').toEqual(services.formatPrice(50.996))
      expect('51,00').toEqual(services.formatPrice(50.999))
      expect('11,30').toEqual(services.formatPrice(11.3))
      expect('11,33').toEqual(services.formatPrice(11.3333333))
      expect('11,34').toEqual(services.formatPrice(11.3399999))
      expect('10,00').toEqual(services.formatPrice(10))
      expect('0,00').toEqual(services.formatPrice(0))
  })
})

describe('Testanto função calculaTotal', () => {
  it('A função deve retornar 0 com um array vazio', () => {
      expect(0).toEqual(services.calculaTotal([]))
  })
  it('A função deve retornar 616.17 com o array testado', () => {
    expect(616.17).toEqual(services.calculaTotal([
      {
        "id": 420,
        "name": "FIFA 18",
        "price": 195.39,
        "score": 325,
        "image": "fifa-18.png"
      },
      {
        "id": 420,
        "name": "FIFA 18",
        "price": 195.39,
        "score": 325,
        "image": "fifa-18.png"
      },
      {
        "id": 420,
        "name": "FIFA 18",
        "price": 195.39,
        "score": 325,
        "image": "fifa-18.png"
      }
    ]))
})
})

describe('Testanto função freteGratis', () => {
  it('A função deve retornar 0 com 0', () => {
    localStorage.setItem('carrinho', JSON.stringify([]))
    expect(0).toEqual(services.freteGratis(0))
  })
  it('A função deve retornar 586.17', () => {
    localStorage.setItem('carrinho', JSON.stringify([
      {
        "id": 420,
        "name": "FIFA 18",
        "price": 195.39,
        "score": 325,
        "image": "fifa-18.png"
      },
      {
        "id": 420,
        "name": "FIFA 18",
        "price": 195.39,
        "score": 325,
        "image": "fifa-18.png"
      },
      {
        "id": 420,
        "name": "FIFA 18",
        "price": 195.39,
        "score": 325,
        "image": "fifa-18.png"
      }
    ]))
    expect(586.17).toEqual(services.freteGratis(616.17))
})
})