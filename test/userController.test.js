const userController = require("../controllers/userController");


// beforeEach(() => console.log("Serei executado antes de cada teste"));
// afterEach(() =>  console.log("Serei executado depois de cada teste"));
// beforeAll(() =>  console.log("Serei executado antes de todos os testes"));
// afterAll(() =>  console.log("Serei executado depois de todos os testes"));


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