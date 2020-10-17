/**
 This file is used to add middlewares. Add middlewares here
 */

import thunk from "redux-thunk";
import promise from "redux-promise";
//import io from 'socket.io-client';
import socketIO, {configureSocketListeners} from "./socket-io";
/**
 * Configure socket-io middleware
 */
const socket = null;//null;io.connect(HOST);
export  {
    configureSocketListeners,
    socket
};
const socketIoMiddleware = socketIO(socket);
/*
 Create History
 */
const middleware = [
    thunk,
    promise,
    socketIoMiddleware
]
export default middleware
