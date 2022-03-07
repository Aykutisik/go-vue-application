const { Pact } = require('@pact-foundation/pact')
const { getTodos, createTodo } = require('../api');

import "babel-polyfill";


jest.setTimeout(60000);

let baseURL = "http://localhost:8086/";

describe('Todo Api', () => {
    const provider = new Pact({
        port: 8086,
        consumer: 'todo',
        provider: 'todo-backend',
        cors: true
    })

    beforeAll(() => provider.setup());
    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());

    let addedTodo;

    describe('Get todo items', () => {
        it("Should return all todo items", async () => {
            const expectedResponse = [{ "_id": "62234346c2a65768f2c03ca5", "status": 0, "text": "drink water" }, { "_id": "6225bfaec2a65768f2c03ca6", "status": 0, "text": "bla bla" }]

            provider.addInteraction({
                state: "there are 2 todos",
                uponReceiving: 'a request for todos',
                withRequest: {
                    path: '/GetTodoElements',
                    method: 'GET',
                    headers: { 'Accept': 'application/json; charset=utf-8' }
                },
                willRespondWith: {
                    status: 200,
                    body: expectedResponse,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                }
            })
            let response = await getTodos(baseURL);
            console.log("responsee", response.data);
            const myJSON = JSON.stringify(response.data);
            expect(response.data).toEqual(expectedResponse);

        })
    })

    describe("Create todo", () => {
        it('Should add an element to todo list', async () => {
    
            const requestBody =
                {"status": 0, "text": "new todo element" }
    
            provider.addInteraction({
                state: "a todo item created",
                uponReceiving: "create item request",
                withRequest: {
                    method: "POST",
                    path: "/CreateTodo",
                    headers: {
                        'Accept': 'application/json; charset=utf-8',
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: requestBody
                },
                willRespondWith: {
                    status: 201,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                }
            })
            let response = await createTodo(baseURL, requestBody);
            const myJSON = JSON.stringify(response.statusText);
            expect(myJSON).toEqual( "\"Created \"");
        })
    })
})

