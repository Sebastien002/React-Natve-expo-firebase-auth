/**
 * Socket Io Handling middleware for redux
 * which emit the actions via socket.io
 * @param socket
 */
const socketIO = socket => () => next => action => {
    //Do only if socket is defined
    if (socket) {
        if (action.meta && action.meta.socket && action.meta.socket.channel) {
            let io = socket;
            if (action.meta.socket.namespace) {
                io = io.of(action.meta.socket.namespace);
            }
            if (action.meta.socket.room) {
                io = io.to(action.meta.socket.room);
            }

            io.emit(action.meta.socket.channel, action.data);
        }
    }

    return next(action);
};

/**
 * Configure all the socket listeners that result in redux actions
 * @param dispatch
 * @param socket
 * @param actions
 * @returns {Promise.<void>}
 */
export function configureSocketListeners(dispatch, socket, actions) {
    //Do only if socket is defined
    if (socket) {
        actions = actions || {};
        for (let key in actions) {
            socket.on(key, (data) => {
                if (actions[key]) {
                    dispatch(actions[key](data));
                }
            })
        }
    }
}


export default socketIO;
