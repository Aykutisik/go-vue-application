import axios from "axios";


export async function getTodos(baseURL) {
    return axios.request({
        method: "GET",
        url: baseURL + "/GetTodoElements",
        headers: {
            'Accept': 'application/json; charset=utf-8',
            'Content-type': 'application/json; charset=utf-8',
        },
    })
}

export async function createTodo(baseURL, todoElement){
    return axios.request({
        method: "POST",
        url: baseURL + "/CreateTodo",
        headers: {
            'Accept': 'application/json; charset=utf-8',
            'Content-type': 'application/json; charset=UTF-8',
        },
        data: todoElement
    })
}

export async function updateTodo(baseURL){
    return axios.request({
        method: "PUT",
        url: baseURL + `/UpdateTodo`,
        headers: {
            'Accept': 'application/json; charset=utf-8',
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}

export async function deleteTodo(baseURL, id){
    return axios.request({
        method: "PUT",
        url: baseURL + `/DeleteTodo/${id}`,
        headers: {
            'Accept': 'application/json; charset=utf-8',
            'Content-type': 'application/json; charset=utf-8',
        }
    })
}