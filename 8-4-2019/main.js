// Using Hash Tables

function firstDuplicate(array) {
   let count = {}

   for (let i = 0; i < array.length; i++) {
     if (!count[array[i]]) {
       count[array[i]] = i
     } else {
       return array[i]
     }
   }
   return "No duplicates"

}
