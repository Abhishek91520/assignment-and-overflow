//creating object through literals
var person=
{
	f_name:"Ram ",
	l_name:"Kumar",
	age:21,
	fullname:function(){
		return this.f_name+this.l_name
	}
}
console.log(person);
console.log(person.fullname());
function batsman(name,run_scored,balls_faced,average)
	{
		this.name=name;
		this.run_scored=run_scored;
		this.balls_faced=balls_faced;
		this.average=average;
			this.strikrate=function()
	{
		return this.run_scored/this.balls_faced
	}
	//creating object through constructor
	}
	console.log(batsman);
	dhoni= new batsman("Dhoni",100002,805,104);
	console.log(dhoni);
	hardik= new batsman("hardik",16587,8465,174);
	console.log(hardik);
	bumrah= new batsman("bumrah",1568,54668,568);
	console.log(bumrah);

	console.log(dhoni.strikrate());
//CREATING OBJECT DIRCTLY FROM NEW OBJECT
	var human = new Object();
	human.age=10;
	human.name="Raj";
	console.log(human)
