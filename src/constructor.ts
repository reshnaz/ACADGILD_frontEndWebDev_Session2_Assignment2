function callThis() {
class tsIsFun{
    asnmnt:string;
    asnmntCount:number;
    private tsAbout:string;

    constructor(assgn:string,count:number){
        this.asnmnt=assgn;
        this.asnmntCount=count;
        this.tsAbout="TypeScript is a strict superset of JavaScript.";
    }

    describe():string {
        return `${this.tsAbout} This is ${this.asnmnt}. We have completed ${this.asnmntCount} assignments so far, including session-1.`;       
    }
}

let tsval = new tsIsFun(`Session-2, Assignment-2`, 5);
let result:string = tsval.describe();
document.getElementById("displayResult").innerHTML = result;
}