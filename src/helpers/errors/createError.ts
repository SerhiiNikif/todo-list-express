import { RequestError } from '../../interfaces';
interface IMessages {
    [code:number]: string
}
const messages: IMessages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict",
    422: "Syntax error"
}

const createError = (status: number, message: string = messages[status]): Error => {
    const error: RequestError = new Error(message);
    error['status'] = status;
    return error;
}

export default createError;