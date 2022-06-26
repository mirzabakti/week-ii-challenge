// Buatlah program untuk mengganti angka menjadi huruf.

// Angkanya antara 0 - 9
/**
 * "kawa3h edu3kasi" >> "kawaaah eduuukasi"
 * "i lo5ve co1ding" >> "i looooove coding"
 * "javasc0ript" >> "javasript"
 */

// Your Code Here
let sentence = 'i lo5ve co1ding',
    result = '';

for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i]; // Deteksi huruf
  const before = sentence[i - 1]; // Deteksi huruf sebelumnya
  const num = parseInt(letter); // Mengubah string menjadi Integer
  if (num) result += before.repeat(num - 1); // Huruf sebelum angka dicetak lagi sebanyak angka - 1
  else result += letter;
}
console.log(result);