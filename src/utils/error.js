var errors = {
    //General Errors
    300: "Bid Amount Is less than minimal Bid Amount",
    301: "Invalid Room Id",
    302: "Room is Not Auctionable",
    303: "Invalid Bid Id",
    404: "Room Not Found",
    500: "Internal Server Error",

};

var error = {
    _findError: function (code) {
        return errors[code];
    },
    throwError: function (code, message) {
        if (!code || this._findError(code) === "undefined") {
            code = 500;
        }
        var errorMessage = this._findError(code);
        var err = new Error();
        err.code = code;
        if (message) {
            err.message = message;
        } else if (errorMessage) {
            err.message = errorMessage;
        } else {
            err.message = "Internal Server Error";
        }
        return err;
    }
};

module.exports = error;