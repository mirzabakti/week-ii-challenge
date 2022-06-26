// Buatlah program untuk menghitung point yang di dapat dari string

/**
 * Vocal (20 Pt)
 * Non-Vocal / Consonant (5 Pt)
 * Lainnya (selain spasi) (1 Pt)
 */

/**
 * "ABCDE" >> 55
 * "ZZ ZZA" >> 40
 * "XX!OO" >> 51
 */

// Your Code Here
let sentence = 'XX! $ %OO',  // String
  totalPoint = 0;

const vocal = 'aiueoAIUEO',
  consonant = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ',
  vocalPoint = 20,
  consonantPoint = 5;

for (let i = 0; i < sentence.length; i++) {
	let isFound = false;

    // Hitung vocal
	for (let j = 0; j < vocal.length; j++) {
		if (sentence[i] == vocal[j]) {
			totalPoint += vocalPoint;
			isFound = true;				
            j = vocal.length - 1;
		}
	}

    // Hitung konsonan
	if (!isFound) {
		for (let k = 0; k < consonant.length; k++) {
			if (sentence[i] == consonant[k]) {
				totalPoint += consonantPoint;
				isFound = true;
				k = consonant.length - 1;
			}
		}
	}

    // Hitung selain karakter lainnya
	if (!isFound) {
		if (!(sentence[i] == ' ')) {
			totalPoint += 1;
		}
	}
}

console.log(totalPoint);