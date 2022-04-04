export const fetchData = async (path: string) => {
	try {
		const result = await (await fetch(path)).json();
		return result;
	} catch (e) {
		return {};
	}
};
