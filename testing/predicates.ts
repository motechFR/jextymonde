import { Request, Response } from 'express';

const code401 = (response: Response) => {
    return response.statusCode === 401
}

const code200 = (response: Response) => {

    return response.statusCode === 200

}

const code201 = (response: Response) => {

    return response.statusCode === 201

}



export const responses = {
    code401: code401,
    code200: code200,
    code201: code201
}