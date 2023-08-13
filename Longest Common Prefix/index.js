// CARI OPTIMISASINYA

function longestCommonPrefix(strs) {
  if (strs.length == 0) return;
  let mapped_prefix = {};

  for (let i = 0; i < strs.length; i++) {
    //LOOP FOR EACH STRING
    let prefix = "";
    let curr_str = strs[i];

    if (curr_str.length == 0 && curr_str == "") {
      mapped_prefix[""] = 0;
      continue;
    }
    for (let j = 0; j < curr_str.length; j++) {
      let curr_word = curr_str[j];
      prefix += curr_word;
      if (mapped_prefix[prefix] != undefined) {
        mapped_prefix[prefix] += 1;
      } else {
        if (prefix == "") {
          mapped_prefix["''"] = 0;
        } else {
          mapped_prefix[prefix] = 0;
        }
      }
    }
  }

  let keys = Object.keys(mapped_prefix);
  let biggest_value = mapped_prefix[keys[0]];
  let biggest_idx = keys[0] || "";

  for (let i = 0; i < keys.length; i++) {
    let curr_key = keys[i];
    let curr_val = mapped_prefix[curr_key];
    if (
      curr_val > biggest_value ||
      (curr_val == biggest_value && curr_key.length > biggest_idx.length)
    ) {
      biggest_value = curr_val;
      biggest_idx = curr_key;
    }
  }

  if (keys.length == 1) return biggest_idx;
  if (biggest_value === 0) return "";
  if (biggest_value + 1 < strs.length) return "";
  return biggest_idx;
}
