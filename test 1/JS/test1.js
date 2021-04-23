// b1
function findOppositeNumber(n, inputNumber) {
  if (n < 4 || (n > 20 && n % 2 !== 0)) {
    return console.log(`n chan va nam trong khoang [4;20]`);
  } else {
    if (n / 2 - inputNumber == 0) {
      return 0;
    } else if (n / 2 - inputNumber > 0) {
      return console.log(n - (n / 2 - inputNumber));
    } else {
      return console.log((n / 2 - inputNumber) * -1);
    }
  }
}
let result = findOppositeNumber(10, 2);

// b2
let string1 = `abcd`;
let string2 = `123`;
function merge2String(str1, str2) {
  let size = Math.max(str1.length, str2.length);
  let s = [];
  a = str1.split("");
  b = str2.split("");
  for (let i = 0; i < size; i++) {
    if (a[i] != null && b[i] != null) {
      s.push(a[i]);
      s.push(b[i]);
    } else if (a[i] == null) {
      s.push(b[i]);
    } else if (b[i] == null) {
      s.push(a[i]);
    }
  }
  return s;
}
let str_result = merge2String(string1, string2);
console.log(str_result.join(""));

// b3
let inp = document.getElementById(`input`);
let btnRandom = document.getElementById(`btnRandom`);
let time = 2;
let trueNumber = Math.floor(Math.random() * 10) + 1;
btnRandom.onclick = function () {
  if (!inp.value) {
    alert("Bạn chưa nhập số dự đoán!");
  } else {
    if (trueNumber === Number(inp.value)) {
      alert(
        `Bạn đã đoán đúng. Chúc mừng bạn đã nhận được tình cảm của chúng tôi!`
      );
    } else if (time >= 0) {
      if (time === 0) {
        alert(`Bạn đoán sai rồi. Bạn đã hết lượt dự đoán!`);
        btnRandom.disabled = "true";
      } else {
        time--;
        alert(`Bạn đoán sai rồi. Bạn còn lại ${time + 1} lần dự đoán!`);
      }
    }
  }
};
