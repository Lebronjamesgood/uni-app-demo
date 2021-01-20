const  throttled = function(func, wait, options) {
	const that = this;
	let timeout, context, args, result;
	let previous = 0;
	if (!options) options = {};

	const later = function() {
		previous = options.leading === false ? 0 : that.now();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};

	const throttled = function() {
		const now = that.now();
		if (!previous && options.leading === false) previous = now;
		const remaining = wait - (now - previous);
		// eslint-disable-next-line consistent-this
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};

	throttled.cancel = function() {
		clearTimeout(timeout);
		previous = 0;
		timeout = context = args = null;
	};

	return throttled;
}
export default throttled
