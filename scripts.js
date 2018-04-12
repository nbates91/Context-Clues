var body = $('body');

var friendName = ['Kalyn', 'Ned', 'Benny', 'Zack', 'Stephen'];

var weaponName = [
	'gun',
	'knife',
	'skillet',
	'spoon',
	'bat',
	'stick',
	'chair',
	'eggplant',
	'banana',
	'basketball',
	'golf club',
	'fly swatter',
	'water balloon',
	'poison',
	'bottle',
	'book',
	'looks',
	'rope',
	'fists',
	'trout',
];

var locationName = [
	'museum',
	'library',
	'bathroom',
	'classroom',
	'lab',
	'jail',
	'post office',
	'gas station',
	'bank',
	'park',
];

for (var i = 1; i <= 100; i++) {
	var heading = $('<h3></h3>');
	var hText = 'Accusation ' + i;
	heading.append(hText);
	body.append(heading);
	var alertFunc = hAlert(i);
	heading.click(alertFunc);
}
function hAlert(num) {
	var friends = friendName[num % friendName.length];
	var weapons = weaponName[num % weaponName.length];
	var locations = locationName[num % locationName.length];
	return function() {
		alert('I accuse ' + friends + ', ' + 'with the ' + weapons + ' in the ' + locations + '.');
	};
}
