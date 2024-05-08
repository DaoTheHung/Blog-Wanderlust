export const convertToSlug = (input: string) => {
	const decodedStr = decodeURI(input);
	const lowercaseStr = decodedStr.toLowerCase();
	// const removedSpecialChars = lowercaseStr.replace(/[^a-zA-Z0-9\s]/g, '');
	const replacedStr = lowercaseStr
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^\w\s]/g, '')
		.split(' ')
		.join('-');

	return replacedStr;
};
