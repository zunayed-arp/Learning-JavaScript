/*Question 1
Conversion of Feet to Inch*/


let inch = 12;

let feet = 3;

let inInch = feetToInch(inch,feet);

console.log(feet + ' feet = ' + inInch + " Inch" );

function feetToInch(inch,feet){
	
	let resultInInch = feet * inch;

	return resultInInch;

};


/*Question 2
Conversion of centimeter to  Meter*/

//CentimeterToMeter

let centM= 5;
let meter = 0.01;

let inMeter = centimeterToMeter(centM,meter);
console.log(centM + " Centimeter is = " +  inMeter +" Meter")

function centimeterToMeter(centiMParam,meterParam){
	
	let resultInMeter = centiMParam* meterParam;

	return resultInMeter;
}



/*Question 3
Return the total page needed for printing the several copies of each book*/

let book1 = 100;
let book2 = 200;
let book3 = 300;

let pageCount = pageRequirements(2,3,4);
console.log("Number of pages needed for print is " + pageCount)

function pageRequirements(book1Quantity,book2Quantity,book3Quantity){
		let numberTotalPage = (book1*book1Quantity) + (book2*book2Quantity) + (book3*book3Quantity);

		return numberTotalPage;
} 




/*Question 4
Return the largest string from the array list*/

const bestFriendName = ['shamim ahmed','tanvir ahmed','masum','zunayed','sazzad']

const largeName  = bestFriend(bestFriendName);

console.log("Best Friend name is " + largeName);

function bestFriend(bestFriendNameList){
	
	let mxLength = bestFriendNameList[0].length;
	let mxLengthName = '';

	for(const friend of bestFriendNameList){
		if (friend.length > mxLength){
			mxLength = friend.length;
		};
	};
	for(const fr of bestFriendNameList){
		if (fr.length == mxLength){
			 mxLengthName = fr;
			break;
		};
	};

	return mxLengthName;

} 


/*Question 5 
Return only Positive Number From array,Break the loop if negative is found*/

const postiveNegativeArray = [5,6,7,8,9,11,14,24,16,18,20,-70,32,35,23,453,23]
const onlyPos=[]
onlyPositive(postiveNegativeArray)
console.log("Positives numbers are: " + onlyPos)

function onlyPositive(){
	for (const positive of postiveNegativeArray) {
		if (positive > 0) {
			onlyPos.push(positive)
			//console.log(positive)
		}
		else if (positive < 0) {
			break;
		}
	};
	return onlyPositive
}

/* End of self assesment */

console.log("Be Confidence and  go ahead");


