import {Request, Response} from 'express';


function giveAnswer(req: Request, res: Response) {

    console.log("Application received request");  

    res.status(200).send({
        "Message": `Your request for ${req.body.textInput} has been handled` 
    })

}

export const demoController = {
    giveAnswer: giveAnswer
}