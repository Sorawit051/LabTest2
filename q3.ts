class FitnessMember{
    public memberName : string;
    private _points : number;

    constructor(public m : string, private p : number){
        this.memberName = m;
        this._points = p;
    }


        get points():number{
        return this._points;
    }
    
    set points(value:number){
        if(this._points >= 0){
            console.log(`${this._points}`);
        }else{
            console.log("คะแนนสะสมไม่สามารถเป็นค่าลบ");
        }
    }


}

const fitness = new FitnessMember("Bank",400);
fitness.points = 500;
console.log(fitness.points);


