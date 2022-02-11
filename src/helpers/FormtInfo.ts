import axios from 'axios';

export const HelperFunc = async (body: any, contextFunc: any, navLink: any, linkReq:any, linkRedir:any) => {
    try {
        const { data: {data} } =await axios.post(linkReq, body);
        contextFunc({ type: "success", message: `${data}` });
        setTimeout(() =>navLink(linkRedir), 3000);
    } catch (error) {
        // @ts-ignore
        contextFunc({ type: "fail", message: `${error.response.data.data}` });
    }
};