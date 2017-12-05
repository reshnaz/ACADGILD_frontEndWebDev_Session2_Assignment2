// Below function is called on button click from html.
function callThis() {
    var tsIsFun = /** @class */ (function () {
        // Our ocnstructor
        function tsIsFun(assgn, count) {
            this.asnmnt = assgn;
            this.asnmntCount = count;
            this.tsAbout = "TypeScript is a strict superset of JavaScript.";
        }
        // Below function returns output with string and number to be displayed.
        tsIsFun.prototype.describe = function () {
            return this.tsAbout + " This is " + this.asnmnt + ". We have completed " + this.asnmntCount + " assignments so far, including session-1.";
        };
        return tsIsFun;
    }());
    var tsval = new tsIsFun("Session-2, Assignment-2", 5); //Object of class
    var result = tsval.describe(); //Assign output string to variable
    document.getElementById("displayResult").innerHTML = result; //Display result
}
