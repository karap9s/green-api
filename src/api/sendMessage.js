import instance from "./instance.js";

const sendMessage = async (apiTokenInstance, chatId, message) => {
  const apiCall = await instance.post(`/sendMessage/${apiTokenInstance}`, {
    chatId: `${chatId}@c.us`,
    message: message,
  });
  console.log(apiCall);
  return apiCall;
};

export default sendMessage;
