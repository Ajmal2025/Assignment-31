


// 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

const all_users:Array<string>=["guest","administrator","user","root","admin"]


if(!all_users.length){
    console.log("We Need to find some user")
    }

    else{


let i=all_users.length;
while(i>0){
    all_users.pop();
    i--;
    
}
 }


    console.log("Your username doesnot exist in aarray"+all_users)

    if(all_users.length===0){
 console.log("We Need to find some user")
}