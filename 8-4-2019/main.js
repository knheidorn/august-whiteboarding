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

function firstPair(array, number) {
  let hashTable = {}
  let answer = []

  for (let i = 0; i < array.length; i++) {
    let difference = number - array[i]
    if (hashTable[difference]) {
      answer.push(array[i], difference)
      return answer
    } else {
      hashTable[array[i]] = i
    }
  }
  return "No pairs add to the number"
}
