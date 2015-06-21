function stringRepeat(ch, times){
	var str = '',
	i;
	for ( i = 0; i < times; i+=1) {
		str += ch;
	};
	return str;
}

console.log(stringRepeat('-', 30));
console.log(str);