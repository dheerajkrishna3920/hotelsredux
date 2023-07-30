import axios from "axios"



// basic structure for all api
export const commonRequest = async (method, url, body, header) => {

    let config = {
        //keys are inbuild methods and values are arguments
        method,
        url,
        headers: header ? header : "application/json",
        data: body
    }

    return axios(config).then(response => {
        console.log(response);
        return response
    }).catch(err => {
        console.log(err);
        return err
    })

}