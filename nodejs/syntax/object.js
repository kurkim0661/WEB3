var members = ['egoing', 'jihwan', 'evian'];
console.log(members[1]);

var roles= {
	'programmer' : 'egoing',
	'designer' : 'jihwan',
	'water' : 'evian'
}

console.log(roles.designer);

for(var name in roles)
{
	console.log('object => ', name, 'value => ', roles[name]);
}
