function romanToInt(s) {
  const roman_map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    //ADDITIONAL
    'IV': 4,
    'IX': 9,
    'XL':40,
    'XC':90,
    'CD':400,
    'CM':900

  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let next_idx = i + 1;
    let curr_roman = s[i];
    let roman_val = roman_map[curr_roman];
    let double_roman_val=''
    if (next_idx < s.length) {
        let next_roman=s[next_idx]
        double_roman_val  = curr_roman+next_roman
    }

    let value_double_roman_val=roman_map[double_roman_val]
    if(value_double_roman_val){
        roman_val=value_double_roman_val
        sum+=roman_val
        i++
        continue
    }else{
        sum+=roman_val
    }
    
  }

  return sum
}


const tes=romanToInt('IV')
console.log(tes)
