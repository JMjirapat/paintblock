export const createBlock = () => {
	const data = [];
	for (let y = 0; y < 20; y++) {
		const x_data = [];
		for (let x = 0; x < 20; x++) {
			x_data.push("#FFFFFF");
		}
		data.push(x_data);
	}
	return data;
};

export const colorSelect = () => {
	const color = [
		"#000000",
		"#804000",
		"#FE0000",
		"#FE6A00",
		"#FFD800",
		"#00FF01",
		"#FFFFFF",
		"#01FFFF",
		"#0094FE",
		"#0026FF",
		"#B100FE",
		"#FF006E",
	];
	return color;
};
