// Buatlah program untuk mendeteksi apakah kata / kalimat yang dimasukan adalah palindrome atau bukan.
// Palindrome merupakan kata yang sama jika dibaca dari belakang.

/**
 * "katak" >> true;
 * "makan" >> false;
 */

// Your Code Here
let word = 'kasur kakak rusak'; // String
let reverseWord = '';

// Membalik urutan huruf
for (let i = word.length - 1; i >= 0; i--) {
	reverseWord += word[i];
}

// Cek kata awal dengan setelah dibalik urutan hurufnya
if (word === reverseWord) {
	console.log(true);
} else {
	console.log(false);
}