const accountId = 23131
let accountEmail = "ndn.com"
var accountPassword = "5464"
accountCity = "Surat"

/*
Prefer not use var
because of issue in block scope and functional scope

*/

accountEmail = "jjdk.com"
accountPassword = "54548"
accountCity = "Bihar"
 
console.table([accountEmail,accountPassword,accountId.accountCity])