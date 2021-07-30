import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://smtp-mail.herokuapp.com'
})

export const contactAPI = {
    sendMessage: (data: MessageDataType) => {
        // return instance.post('/send', {
        //     ...data
        // });
        return new Promise(res => {
            setTimeout(() => {
                res(null);
            }, 6000)
        })
    }
}

//types

export type MessageDataType = {
    name: string
    mail: string
    message: string
}