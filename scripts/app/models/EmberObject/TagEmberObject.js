define(["ember"], function(Ember){
//	return Ember.Object.create([
	return [
//	var arrayTags = [
{	name: 'Body',
	childrens: [{	name: 'Healthcare',
			icon: 'stethoscope'
		},
		{	name: 'Sport',
			icon: 'dashboard'
		},
		{	name: 'Nutrition',
			icon: 'apple'
		},
		{	name: 'Rest, Hygiene & Aesthetic',
			icon: 'moon'
		}
	]
},
{	name: 'Mind',
	childrens: [{	name: 'Culture<br />Intelligence<br />Learn',
			icon: 'book'
		},
		{	name: 'Research<br />Exploration',
			icon: 'lightbulb' //beaker globe
		},
		{	name: 'Altruism<br />Community',
			icon: 'resize-full'
		},
		{	name: 'Center<br />Moral<br />Philosophy<br />Spirituality',
			icon: 'compass'
		}
	]
},
{	name: 'Maintenance-Support-Necessities',
	childrens: [{	name: 'Work<br />Finances<br />Money',
			icon: 'wrench' //money briefcase
		},
		{	name: 'Home<br />Unpaid work',
			icon: 'home'
		}
	]
},
{	name: 'Pleasure',
	childrens: [{	name: 'Entertainment<br />Hobbies<br />Leisure',
			icon: 'ticket'
		},
		{	name: 'Vice<br />Unhealthy habits<br />Weaknesses',
			icon: 'cut'
		}
	]
},
{	name: 'Circles',
	childrens: [{	name: 'Family',
			icon: 'group'
		},
		{	name: 'De tota la vida',
			icon: 'umbrella'
		},
		{	name: 'Ramon Llull i escoltes',
			icon: 'picture'
		},
		{	name: 'Feina i +',
			icon: 'briefcase'
		},
		{	name: 'Thailandia',
			icon: 'plane'
		},
		{	name: 'Game Of Thrones',
			icon: 'flag'
		}
	]
//}]);
}];
	var Tags = Ember.Object.extend({
		tags: Ember.A(),
	});
	var tags = Tags.create({
//		init: function() {
//			this._super();
//			this.get("tags").push(arrayTags);
//		}
	});
//	debugger;
	tags.get("tags").push(arrayTags);
	return tags;
});