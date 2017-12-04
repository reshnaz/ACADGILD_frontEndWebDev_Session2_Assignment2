function callThis() {
    var tsIsFun = (function () {
        function tsIsFun(assgn, count) {
            this.asnmnt = assgn;
            this.asnmntCount = count;
            this.tsAbout = "TypeScript is a strict superset of JavaScript.";
        }
        tsIsFun.prototype.describe = function () {
            return this.tsAbout + " This is " + this.asnmnt + ". We have completed " + this.asnmntCount + " assignments so far, including session-1.";
        };
        return tsIsFun;
    }());
    var tsval = new tsIsFun("Session-2, Assignment-2", 5);
    var result = tsval.describe();
    document.getElementById("displayResult").innerHTML = result;
}
//# sourceMappingURL=constructor.js.map