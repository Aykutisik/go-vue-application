import { InteractionObject, Pact } from "@pact-foundation/pact";
import { pactWith } from "jest-pact";
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../api');
import { like } from "@pact-foundation/pact/src/dsl/matchers";
import axios from "axios";
import { HTTPMethod } from "@pact-foundation/pact/src/common/request";
import "babel-polyfill";


pactWith({ consumer: "todo", provider: "todo-backend", cors: true },
    provider => {
        describe('Get Todo Items', () => {
            beforeEach(() => {
                const expectedResponse = [{ "_id": "62234346c2a65768f2c03ca5", "status": 0, "text": "drink water" }, { "_id": "6225bfaec2a65768f2c03ca6", "status": 0, "text": "bla bla" }]
                const interaction = {
                    state: "there are already exists todos",
                    uponReceiving: 'request for geting todos',
                    withRequest: {
                        path: '/GetTodoElements',
                        method: 'GET',
                        headers: { 'Accept': 'application/json; charset=utf-8' }
                    },
                    willRespondWith: {
                        status: 200,
                        body: like(expectedResponse),
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                            "Access-Control-Allow-Origin": "*",
                        },
                    }
                };

                return provider.addInteraction(interaction)
            });
            it('Should Return All Todo Items', async() => {
                axios.defaults.baseURL = provider.mockService.baseUrl;
                await getTodos(axios.defaults.baseURL);
            })


        })
    }




)