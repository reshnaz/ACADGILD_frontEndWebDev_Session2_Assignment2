// Below function is called on button click from html.
function callThis() {
class tsIsFun{
    asnmnt:string; // Constructor takes this string as argument
    asnmntCount:number; // Constructor takes this number as argument
    private tsAbout:string; //Private member that gets value assigned in contructor

    // Our ocnstructor
    constructor(assgn:string,count:number){
        this.asnmnt=assgn;
        this.asnmntCount=count;
        this.tsAbout="TypeScript is a strict superset of JavaScript.";
    }

    // Below function returns output with string and number to be displayed.
    describe():string {
        return `${this.tsAbout} This is ${this.asnmnt}. We have completed ${this.asnmntCount} assignments so far, including session-1.`;       
    }
}

let tsval = new tsIsFun(`Session-2, Assignment-2`, 5); //Object of class
let result:string = tsval.describe(); //Assign output string to variable
document.getElementById("displayResult").innerHTML = result; //Display result
}