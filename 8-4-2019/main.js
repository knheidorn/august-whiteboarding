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

function singleNumber(nums) {
  let table = {}

  for (let i = 0; i < nums.length; i++) {
    if (table[nums[i]]) {
      let value = table[nums[i]]
      table[nums[i]] = value + 1
    } else {
      table[nums[i]] = 1
    }
  }

  let entries = Object.entries(table)
  let length = entries.length
  for (let j = 0; j < length; j++) {
    if (entries[j][1] == 1) {
      return parseInt(entries[j][0])
    }
  }
}
