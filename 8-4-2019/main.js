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

function lengthOfLongestSubstring(s) {
  let array = s.split("")
  let hashTable = {}
  let sample = ""
  let max = 0

  for (let i = 0; i < array.length; i++) {
    let character = array[i]
    if (hashTable[character]) {
      if (sample.length > max) {
        max = sample.length
        sample = ""
        hashTable = {}
      }
    } else {
      hashTable[character] = i
      sample += character
    }
  }
  return max
}
