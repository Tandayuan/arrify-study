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
	// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
	// 理解：Set或者Map对象都内置了Symbol.iterator属性，属性的值是@@iterator方法。
	// 当需要对一个对象进行迭代时（比如开始用于一个for..of循环中），@@iterator方法都会在不传参情况下被调用，返回的迭代器用于获取要迭代的值。
	// 因此value[Symbol.iterator] = @@iterator() typeof的结果就是function了。
	// ...value 解构语法糖是对一个对象进行迭代。迭代结果被[]接收，所以[...value]
	if (typeof value[Symbol.iterator] === 'function') {
		return [...value];
	}

	return [value];
}
