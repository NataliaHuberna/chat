import axios from 'axios';

type TBody = {
    email: string,
    password: string
}

type TContext = {
    type: string,
    message: string
}

export const HelperFunc = async (
    body: TBody,
    contextFunc: (obj: TContext) => void,
    navLink: (linkRedir: string) => void,
    linkReq: string,
    linkRedir: string
) => {
    try {
        const { data: {data} } = await axios.post(linkReq, body);
        contextFunc({ type: "success", message: `${data}` });
        setTimeout(() => navLink(linkRedir), 3000);
    } catch (error) {
        // @ts-ignore
        contextFunc({ type: "fail", message: `${error.response.data.data}` });
    }
};

export const HelperTokenBackFunc = async (
    body: TBody,
    contextFunc: (obj: TContext) => void,
    navLink: (linkRedir: string) => void,
    linkReq: string,
    linkRedir: string,
    token: string | null
) => {
    try {
        const { data: {data} } = await axios({
            method: 'post',
            url: linkReq,
            data: body,
            headers: {'token': `${token}`},
        });
        contextFunc({ type: "success", message: `${data}` });
        setTimeout(() => navLink (linkRedir), 3000);
    } catch (error) {
        // @ts-ignore
        contextFunc({ type: "fail", message: `${error.response.data.data}` });
    }
};
