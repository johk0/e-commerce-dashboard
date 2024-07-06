/**
 *
 * @param {string} text - input text which's slice
 * @param {number} [max=50] - max length of text
 * @returns {string}
 */
export const textSlice = (text: string, max: number = 50) => {
	if (text.length >= max) return text.slice(0, max) + "...";
	else return text;
};

/**
 *
 * @param {number} num - input number
 * @returns {string} - formatted number
 */
export const formatNumbers = (num: number) => {
	if (num >= 1000 && num < 1000000) {
		return (num / 1000).toFixed() + "K";
	}
	if (num < 1000) {
		return num;
	}
};
