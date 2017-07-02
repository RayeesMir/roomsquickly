const CustomError = require('./error');

function Response() {

}

/**
 * @param response
 * @param data
 * @param key
 * @returns {*}
 */
Response.prototype.sendSuccess = function(response, data, key) {
    let builderData = {
        status: "success",
        code: 200
    };
    builderData.message = {};
    builderData.message[key] = data;
    return response.json(builderData);
};

/**
 *
 * @param response
 * @param error
 * @param message
 * @returns {*}
 */
Response.prototype.sendError = function(response, error, message) {
    let err;
    if (error instanceof Error) {
        err = error;
        if (!err.code) {
            err.code = 500;
        }
    } else {
        err = CustomError.throwError(error.code, message);
    }
    const builderData = {
        status: "failure",
        code: err.code,
        message: {
            error: err.message
        }
    };
    response.status(400).json(builderData);
};

Response.prototype._buildArray = function(data, message, key) {
    data.count = message.length;
    data.message = {};
    data.message[key] = message;
    return data;
};

Response.prototype._isObject = function(value) {
    try {
        Object.setPrototypeOf({}, value);
        return value !== null;
    } catch (err) {
        return false;
    }
};
/**
 *
 * @param data
 * @param message
 * @param key
 * @returns {*}
 * @private
 */
Response.prototype._buildObject = function(data, message, key) {
    data.message = {};
    data.message[key] = [message];
    return data;
};

module.exports = new Response();