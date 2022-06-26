// Buatlah program untuk menghitung jumlah kata yang ada.

/**
 * "i have a dream" >> 4
 * "lalala" >> 1
 * "i love javascript" >> 3
 */

// Your Code Here
let sentence = "    i     have a dream "; // String
let countWord = 0;

// (Menghitung kata berdasarkan spasi && spasi bertumpuk diabaikan) || tambah 1
for (let i = 0; i < sentence.length; i++) {
	if ((sentence[i] == ' ' && !(sentence[i + 1] == ' ')) || i == sentence.length - 1) {
		countWord++;
	}
}

// Mengurangi 1 jika di awal adalah spasi
if (sentence[0] == ' ') {
	countWord--;
}

console.log(countWord);