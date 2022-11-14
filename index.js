export default function arrify(value) {
	if (value === null || value === undefined) {
		return [];
	}

	if (Array.isArray(value)) {
		return value;
	}

	if (typeof value === 'string') {
		return [value];
	}
	// 不理解
	if (typeof value[Symbol.iterator] === 'function') {
		return [...value];
	}

	return [value];
}
