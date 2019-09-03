export class DC {

	parseDecimal(data) {
		var parts = [];
		var decimal = data.decimal;
		var nonRepeatingLength = data.length - data.repeating;
		parts[0] = decimal.substr(0, nonRepeatingLength);
		var period = decimal.substr(nonRepeatingLength);
		if (period.length % 2 === 0) {
			parts[1] = period.substr(0, period.length / 2);
			parts[2] = period.substr(period.length / 2);
		} else {
			parts[1] = period;
			parts[2] = '';
		}
		return parts;
	}

	process(data) {
		data.forEach((item) => {
			item.parts = this.parseDecimal(item);
		});
		return data;
	}
}
