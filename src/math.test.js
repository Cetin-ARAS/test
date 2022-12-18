//! node module import formatı

const { calculateTotal, celsiusToFahrenheit, fahrenheitToCelsius, fibonacci } = require('./math')

//! es6 module format
// import{ calculateTotal, celciusToFahrenheit, fahrenheitToCelsius, fibonacci }from './math';

describe('calculateTotal', () =>{
  // test caselerini oluşturuyoruz
  it('should exist', () => {
    expect(calculateTotal).toBeDefined();
  });
  it('should return a number', () => {
    expect(calculateTotal(100, 0.20)).toBe(120);
  });
  it('should return with default VAT', () => {
    expect(calculateTotal(200)).toBe(236);
  });

});

describe('celsiusToFahrenheit', () => {  
 it('should exist', () => {
    expect(celsiusToFahrenheit).toBeDefined();
         }); 
})

describe('fahrenheitToCelsius', () => {
  it('should exist', () => {
     expect(fahrenheitToCelsius).toBeDefined();
      });
    
    
})
describe('fibonacci', () => {
  it('should exist', () => {
     expect(fibonacci).toBeDefined();
      });
    
})