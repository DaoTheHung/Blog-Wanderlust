export const checkPathName = (path: string) => {
	return {
		url: path,
		path: path.split('/')[1]
	};
};
