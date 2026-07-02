import axios from "axios";
const baseURL = "http://localhost:8081/api/v1";
export const sendMessagesToServer = async (messages, conversationId) => {

    const response = await axios.post(`${baseURL}/helpdesk`, messages, {
        headers: {
            //'Content-Type': 'application/json',
            ConversationId: conversationId,

        },
    });
    return response.data;

};