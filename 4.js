// Buatlah program untuk mendeteksi angka palindrome selanjutnya

// Angkanya lebih dari 0
/**
 * 10 >> 11
 * 175 >> 181
 * 5 > 6
 */

// Your Code Here
let num = 1945; // Number
let isPalindrome;

while (!isPalindrome) {
	num++;
	let toString = String(num); // Ubah ke string
	let reverseNum = '';

    // Membalik urutan karakter
	for (let i = toString.length - 1; i >= 0; i--) {
		reverseNum += toString[i];
	}
	isPalindrome = num == reverseNum; // Cek angka awal apakah sama dengan setelah dibalik
}

console.log(num);