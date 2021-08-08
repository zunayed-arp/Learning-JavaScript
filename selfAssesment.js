/* let inch = 12;

let feet = 3;

let inInch = feetToInch(inch,feet);

console.log(feet + ' feet= ' + inInch + " Inch" )

function feetToInch(inch,feet){
	
	let resultInInch = feet * inch;

	return resultInInch;

}
 */


// //CentimeterToMeter

/* let centM= 5;
let meter = 0.01;

let inMeter = centimeterToMeter(centM,meter);
console.log(inMeter)

function centimeterToMeter(centiMParam,meterParam){
	
	let resultInMeter = centiMParam* meterParam;

	return resultInMeter;
} */


//PageRequirements Calculation


/* let book1 = 100;
let book2 = 200;
let book3 = 300;

let pageCount = pageRequirements(2,3,4);
console.log(pageCount)

function pageRequirements(book1Quantity,book2Quantity,book3Quantity){
		let numberTotalPage = (book1*book1Quantity) + (book2*book2Quantity) + (book3*book3Quantity);

		return numberTotalPage;
} */

/* const bestFriendName = ['shamim ahmed','tanvir ahmed','masum','zunayed','sazzad']

const largeName  = bestFriend(bestFriendName);

console.log(largeName);



function bestFriend(bestFriendNameList){
	
	let mxLength = bestFriendNameList[0].length;
	// console.log(mxLength)
	let mxLengthName = '';

	for(const friend of bestFriendNameList){
		if (friend.length > mxLength){
			mxLength = friend.length;
		};
	};
	// console.log(bestFriendNameList)
	for(const fr of bestFriendNameList){
		if (fr.length == mxLength){
			 mxLengthName = fr;
			// console.log(mxLengthName)
			break;
		};
	};

	return mxLengthName;

} */

const postiveNegativeArray = [5,6,7,8,9,11,14,24,16,18,20,-70,32,35,23,453,23]

const onlyPos=[]  
onlyPositive(postiveNegativeArray)
console.log(onlyPos)

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
	//return onlyPositive
}




