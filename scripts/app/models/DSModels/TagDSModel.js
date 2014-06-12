define(["DS"], function(DS){

var Tag = DS.Model.extend({
	toString: function() {return 'Tag'}
  , children: DS.hasMany('Tag', {inverse: 'parent'})
  , parent:   DS.belongsTo('Tag', {inverse: 'children'})
  , name: DS.attr('string')
  , icon: DS.attr('string')
//  , howmanyz: DS.hasMany('HowMany', {inverse: 'tagz'})
});


Tag.FIXTURES = [
{	id: 1,
	name: 'Body',
	children: [2,3,4,5]
},
	{	id: 2,
		name: 'Healthcare',
		icon: 'stethoscope',
		parent: 1
	},
	{	id: 3,
		name: 'Sport',
		icon: 'dashboard',
		parent: 1
	},
	{	id: 4,
		name: 'Nutrition',
		icon: 'apple',
		parent: 1
	},
	{	id: 5,
		name: 'Rest, Hygiene & Aesthetic',
		icon: 'moon',
		parent: 1
	},

{	id: 6,
	name: 'Mind',
	children: [7,8,9,10]
},
	{	id: 7,
		name: 'Culture<br />Intelligence<br />Learn',
		icon: 'book',
		parent: 6
	},
	{	id: 8,
		name: 'Research<br />Exploration',
		icon: 'lightbulb', //beaker globe
		parent: 6
	},
	{	id: 9,
		name: 'Altruism<br />Community',
		icon: 'resize-full',
		parent: 6
	},
	{	id: 10,
		name: 'Center<br />Moral<br />Philosophy<br />Spirituality',
		icon: 'compass',
		parent: 6
	},
{	id: 11,
	name: 'Maintenance-Support-Necessities',
	children: [12,13]
},
	{	id: 12,
		name: 'Work<br />Finances<br />Money',
		icon: 'wrench', //money briefcase
		parent: 11
	},
	{	id: 13,
		name: 'Home<br />Unpaid work',
		icon: 'home',
		parent: 11
	},
{	id: 14,
	name: 'Pleasure',
	children: [15,16]
},
	{	id: 15,
		name: 'Entertainment<br />Hobbies<br />Leisure',
		icon: 'ticket',
		parent: 14
	},
	{	id: 16,
		name: 'Vice<br />Unhealthy habits<br />Weaknesses',
		icon: 'cut',
		parent: 14
	},
{	id: 17,
	name: 'Circles',
	children: [18,19,20,21,22,23]
},
	{	id: 18,
		name: 'Family',
		icon: 'group',
		parent: 17
	},
	{	id: 19,
		name: 'De tota la vida',
		icon: 'umbrella',
		parent: 17
	},
	{	id: 20,
		name: 'Ramon Llull i escoltes',
		icon: 'picture',
		parent: 17
	},
	{	id: 21,
		name: 'Feina i +',
		icon: 'briefcase',
		parent: 17
	},
	{	id: 22,
		name: 'Thailandia',
		icon: 'plane',
		parent: 17
	},
	{	id: 23,
		name: 'Game Of Thrones',
		icon: 'flag-checkered',
		parent: 17
	}
];


	return Tag;
});
