import axios from "axios";

export const getTodos2 = () => {
    return axios.get("/GetTodoElements", {
        headers: {
            Accept: 'application/json',
        },
        baseURL: process.env.apiBaseURL,
    });
}

export async function getTodos(baseURL) {
    return axios.request({
        method: "GET",
        url: baseURL + "/GetTodoElements",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
    })
}

export async function createTodo(baseURL, todoElement) {
    return axios.request({
        method: "POST",
        url: baseURL + "/CreateTodo",
        headers: {
            'Accept': 'application/jso',
            'Content-type': 'application/json',
        },
        data: todoElement
    })
}

export async function updateTodo(baseURL, todoElement) {
    return axios.request({
        method: "PUT",
        url: baseURL + `/UpdateTodo`,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        data: todoElement
    })
}

export async function deleteTodo(baseURL, id) {
    return axios.request({
        method: "PUT",
        url: baseURL + `/DeleteTodo/${id}`,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        }
    })
}