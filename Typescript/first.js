var Developer = /** @class */ (function () {
    function Developer(name) {
        this.TYPE_DEVELOPER = "DEVELOPER";
        (this.name = name), (this.type = this.TYPE_DEVELOPER);
    }
    Developer.prototype.getName = function () {
        return this.name;
    };
    return Developer;
}());
var Tester = /** @class */ (function () {
    function Tester(name) {
        this.TYPE_TESTER = "TESTER";
        this.name = name;
        this.type = this.TYPE_TESTER;
    }
    Tester.prototype.getName = function () {
        return this.name;
    };
    return Tester;
}());
var EmployeeFactory = /** @class */ (function () {
    function EmployeeFactory() {
    }
    EmployeeFactory.prototype.create = function (type, name) {
        switch (type) {
            case "Dev":
                return new Developer(name);
                break;
            case "Test":
                return new Tester(name);
                break;
        }
    };
    return EmployeeFactory;
}());
var factoryObj = new EmployeeFactory();
var employee = [];
var a = factoryObj.create("Dev", "Ruby");
var b = factoryObj.create("Test", "Mohit");
console.log(a === null || a === void 0 ? void 0 : a.getName(), b === null || b === void 0 ? void 0 : b.getName());
console.log(a === null || a === void 0 ? void 0 : a.name, b === null || b === void 0 ? void 0 : b.name);
