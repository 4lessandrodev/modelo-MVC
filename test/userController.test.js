//https://jestjs.io/docs/en/using-matchers

const userController = require("../controllers/userController");


// beforeEach(() => console.log("Serei executado antes de cada teste"));
// afterEach(() =>  console.log("Serei executado depois de cada teste"));
// beforeAll(() =>  console.log("Serei executado antes de todos os testes"));
// afterAll(() =>  console.log("Serei executado depois de todos os testes"));

// Tipos de comparação com jest 
/*

objetos 
expect(data).toEqual({one: 1, two: 2});

negação
expect(a + b).not.toBe(0);

nulo
expect(n).toBeNull();

definidos
expect(n).toBeDefined();

não definidos undefinide
expect(n).not.toBeUndefined();

não ser verdadeiro
expect(n).not.toBeTruthy();

falso
expect(n).toBeFalsy();

nulo
expect(z).not.toBeNull();

definido
expect(z).toBeDefined();

maior que
expect(value).toBeGreaterThan(3);

maior ou igual 
expect(value).toBeGreaterThanOrEqual(3.5);

menor que 
expect(value).toBeLessThan(5);

menor que ou igual 
expect(value).toBeLessThanOrEqual(4.5);

deve ser 
expect(value).toBe(4);

deve ser igual > números e objetos 
expect(value).toEqual(4);

deve dar match > regex
expect('Christoph').toMatch(/stop/);

é esperado um erro 
expect(value).toThrow('you are using the wrong JDK');

é esperado um erro que contenha a palavra JDK
expect(value).toThrow(/JDK/);

*/

//Nome do grupo de teste
describe('Validando salvar usuário ', () => {

    test('Deve retornar um erro solicitando email válido ', () => {
        const resultado = userController.create('alessandro', '123456'); 
        expect(resultado).toBe('Informe um email válido: String');
    });

    test('Deve retornar um erro solicitando uma senha ', () => {
        const resultado = userController.create('alessandro@mail.com', ''); 
        expect(resultado).toBe('Informe uma senha: String');
    });

    test('Deve salvar um novo usuário ', () => {
        const resultado = userController.create('alessandro@mail.com', '123456'); 
        expect(resultado).toBe('Usuário salvo com sucesso!');
    });
    
});