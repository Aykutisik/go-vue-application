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