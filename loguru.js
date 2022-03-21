exports.__esModule = true;
exports.LoguruFilter = exports.Message = exports.Logger = void 0;
function get_context(Json_Object) {
    var StdOut = Json_Object.stdout_addr;
    var i = StdOut.protocol_context;
    return i;
}
var LoguruFilter = /** @class */ (function () {
    function LoguruFilter(words) {
        this.words = words;
    }
    LoguruFilter.prototype.match = function (text) {
        return text.indexOf(this.words) >= 0;
    };
    return LoguruFilter;
}());
exports.LoguruFilter = LoguruFilter;
var Message = /** @class */ (function () {
    function Message(MessageData) {
        this.name = MessageData.name;
        this.context = MessageData.stdio;
        this.stdout = MessageData.stdout;
    }
    Message.prototype.Parse = function (_filter) {
        if (_filter.match(this.name)) {
            throw new Error("Filter Preventing Parse");
        }
        return this.name;
    };
    return Message;
}());
exports.Message = Message;
var Logger = /** @class */ (function () {
    function Logger() {
        this.info = function (__message) {
            var now = new Date();
            console.log("".concat(now.toString(), " INFO: ").concat(__message));
        };
        this.warn = function (__message) {
            var now = new Date();
            console.log("".concat(now.toString(), " WARN: ").concat(__message));
        };
        this.error = function (__message) {
            var now = new Date();
            console.log("".concat(now.toString(), " ERROR: ").concat(__message));
        };
    }
    return Logger;
}());
exports.Logger = Logger;
