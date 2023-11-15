//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(d_String, d_Names){
    for (let i = 0; i < d_Names.length; i ++){
        if (d_String.includes(d_Names[i])){
            console.log(`Matched ${d_Names[i]} \n`)
        } else {
            console.log("No matches")
        }
    }
}

findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

arr.splice(0, 1, "even index")

console.log(arr)

arr.splice(2, 1, "even index")

console.log(arr)

arr.splice(4, 1, "even index")

console.log(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
