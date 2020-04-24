//create a function to search the array for index of smallest element
function findSmallest(arr){
   var smallest = arr[0];
   var smallestIndex = 0;

  for(var i = 1; i < arr.length; i++){
  	if (arr[i] < smallest){
	 smallest = arr[i];
	 smallestIndex = i;
	}
	
  }
	return smallestIndex; //smallestIndex is returned because we need to always find which index to remove/pop from the array and not the element itself.
}


//use findSmallest() in your selection sort function

function selectionSort(arr){
   var newArr = [];
   var length = arr.length;
   
   for(var i = 0; i < length; i++){
   	var smallestValueIndex = findSmallest(arr);
	 newArr.push(arr.splice(smallestValueIndex, 1)[0]);
   }
   
   return newArr;
}




console.log(selectionSort([5, 3, 6, 2, 10]));
