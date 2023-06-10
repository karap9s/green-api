import instance from "./instance.js";

const getMessage = async (apiTokenInstance) => {
    const apiCall = await instance.post(`/receiveNotification/${apiTokenInstance}`);
    console.log(apiCall);
    return apiCall;
};

export default getMessage;