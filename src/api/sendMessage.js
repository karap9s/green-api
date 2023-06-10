import instance from "./instance.js";

const sendMessage = async (apiTokenInstance) => {
    const apiCall = await instance.post(`/sendMessage/${apiTokenInstance}`);
    console.log(apiCall);
    return apiCall;
};

export default sendMessage;