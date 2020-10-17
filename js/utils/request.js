import axios from "axios";
const axiosInstance = axios.create();
export default axiosInstance.request;
export const requestInstance = axiosInstance;
/**
 * Get Error for a request
 * @param action
 * @returns {*}
 */
export function getError(action) {
    let error;
    if (action.error) {
        error = getResponseError(action.payload) || action.payload.message || "Request Failed";
    }
    return error;
}
/**
 * Get Error from response
 * Default Response Format for error ->
 * {
 *   message : <Error Message>
 *       ... Other Properties
 * }
 * @param response
 */
export function getResponseError(payload) {
    if (typeof payload == 'undefined' || typeof payload.response == 'undefined') {
        throw new Error("Payload and response can not be empty for a request");
    }
    return payload.response.data;
}
