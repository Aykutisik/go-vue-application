const { Pact } = require('@pact-foundation/pact')
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../api');
import { like } from "@pact-foundation/pact/src/dsl/matchers";
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
        it("Should return all todo items", async() => {
            const expectedResponse = [{ "_id": "62234346c2a65768f2c03ca5", "status": 0, "text": "drink water" }, { "_id": "6225bfaec2a65768f2c03ca6", "status": 0, "text": "bla bla" }]

            provider.addInteraction({
                state: "there are already exists todos",
                uponReceiving: 'request for geting todos',
                withRequest: {
                    path: '/GetTodoElements',
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                },
                willRespondWith: {
                    status: 200,
                    body: like(expectedResponse),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            })
            let response = await getTodos(baseURL);
            console.log("responsee", response.data);
            const myJSON = JSON.stringify(response.data);
            expect(response.data).toEqual(expectedResponse);

        })
    })

    describe("Create a todo", () => {
        it('Should add an element to todo list', async() => {

            const requestBody = { "status": 0, "text": "new todo element" }

            provider.addInteraction({
                state: "a todo item is created",
                uponReceiving: "create item request",
                withRequest: {
                    method: "POST",
                    path: "/CreateTodo",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: like(requestBody)
                },
                willRespondWith: {
                    status: 201,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            })
            let response = await createTodo(baseURL, like(requestBody));
            console.log(response);
            const myJSON = JSON.stringify(response.statusText);
            expect(myJSON).toEqual("\"Created \"");
        })
    })

    describe("Update a todo item", () => {
        const requestBody = { "_id": "62234346c2a65768f2c03ca5", "status": 0, "text": "drink water" }

        it("Should update the todo item", async() => {
            provider.addInteraction({
                state: 'Update a todo item',
                uponReceiving: 'a request to update the todo item',
                withRequest: {
                    method: 'PUT',
                    path: `/UpdateTodo`,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: like(requestBody)
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },


                }
            })

            const response = await updateTodo(baseURL, requestBody);


            const myJSON = JSON.stringify(response.data);

            expect(myJSON).toEqual('\"\"');
        })
    })

    describe("Delete a todo item", () => {
        const id = "62234346c2a65768f2c03ca5"

        it("Should delete the todo item", async() => {
            provider.addInteraction({
                state: 'delete a todo item',
                uponReceiving: 'a request to delete the todo item',
                withRequest: {
                    method: 'PUT',
                    path: `/DeleteTodo/${id}`,
                    headers: { 'Accept': 'application/json' }

                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },


                }
            })

            const response = await deleteTodo(baseURL, id);


            const myJSON = JSON.stringify(response.statusText);
            console.log(response);
            expect(myJSON).toEqual("\"OK \"");
        })
    })



})