class Sample
{
    constructor(){
        this.id=101;
        this.name="APPU"
    }
    displayInfo() {
        console.log(this.id+" "+this.name);
    }      
}
let s=new Sample();
s.displayInfo();