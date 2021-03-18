const fizzbuzz = require('./fizzbuzz')

describe('Test para fizzbuzz',()=>{
  test('Si n es múltiplo de 3 devuelve fizz',()=>{
    expect(fizzbuzz(9)).toBe('fizz')
  })
  test('Si n es múltiplo de 5 devuelve buzz',()=>{
    expect(fizzbuzz(10)).toBe('buzz')
  })
  test('Si n es múltiplo de 3 y 5 devuelve buzz',()=>{
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
  test('Si n no es múltiplo de 3 o 5 devuelve n',()=>{
    let n = 17
    expect(fizzbuzz(n)).toBe(n)
  })
})