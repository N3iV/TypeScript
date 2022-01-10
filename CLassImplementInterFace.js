"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    //Bat buoc phai implements ham` print
    Invoice.prototype.print = function () {
        return "".concat(this.client, " owes ").concat(this.amount, "$ for this work: ").concat(this.work);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(recipient, job, amt) {
        this.recipient = recipient;
        this.job = job;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return "i owe ".concat(this.recipient, "  ").concat(this.amt, "$ for this JOB: ").concat(this.job);
    };
    return Payment;
}());
exports.Payment = Payment;
