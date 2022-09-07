export const createSlug = (text: string) => {
	return text.toLowerCase().split(" ").join("-");
};

export const truncateText = (text: string, limit = 32) => {
	const result = text.split(" ").splice(0, limit).join(" ");
	return result;
};
