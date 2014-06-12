define( /*,"css!libs/fuelux/dist/css/fuelux","css!libs/fuelux/dist/css/fuelux-responsive","libs/fuelux/dist/wizard"*/
["ember","text!./Wizard.hbs","text!./WizardComponent.hbs","css!./Wizard"],
function(Ember,Template,Component,css) {
	
	var compiled = Ember.Handlebars.compile(Component);
	Ember.TEMPLATES["components/wizard-component"] = compiled;
	
	var WizardView = Ember.View.extend({
//		templateName: 'Wizard',
		defaultTemplate: Ember.Handlebars.compile(Template),
		$stepper: function() {
			if(this._$stepper) return this._$stepper;
//			this._$stepper = this.$().parent().prevAll('.wizard').find('.steps');
			this._$stepper = $('.wizard').find('.steps');
			return this._$stepper;
		},
		currentStep: function() {
			if(this._currentStep) return this._currentStep;
			this._currentStep = this.$stepper().children('li.active').index() +1;
			if(this._currentStep < 1) this._currentStep = 1;
			return this._currentStep;
		},
		numSteps: function() {
			if(this._numSteps) return this._numSteps;
			this._numSteps = this.$stepper().children('li').length;
			return this._numSteps;
		},
		updateStep: function(step) {
			this._currentStep = step;
			
			// reset classes for all steps
			var $steps = this.$stepper().find('li');
			$steps.removeClass('active').removeClass('complete');
			$steps.find('span.badge').removeClass('badge-info').removeClass('badge-success');

			// set class for all previous steps
			var prevSelector = 'li:lt(' + (this.currentStep() - 1) + ')';
			var $prevSteps = this.$stepper().find(prevSelector);
			$prevSteps.addClass('complete');
			$prevSteps.find('span.badge').addClass('badge-success');

			// set class for current step
			var currentSelector = 'li:eq(' + (this.currentStep() - 1) + ')';
			var $currentStep = this.$stepper().find(currentSelector);
			$currentStep.addClass('active');
			$currentStep.find('span.badge').addClass('badge-info');
		},
		prevStep: function() {
			var prevStep = this.currentStep() -1;
			if(prevStep < 1)  {
				Ember.Logger.log('A linici',this.currentStep());
				return false;
			}
			this.updateStep(prevStep);
		},
		nextStep: function() {
			var nextStep = this.currentStep() +1;
			if(nextStep > this.numSteps())  {
				Ember.Logger.log('Al final: ',this.currentStep(),this.numSteps());
				return false;
			}
			this.updateStep(nextStep);
//			this.transitionTo('Wizard.Work');
		},
		didInsertElement: function() {
			Ember.debug('inserted!',this,this.$());
//			$('#MyWizard').on('change', function(e, data) {
//				console.log('change');
//				if(data.step===3 && data.direction==='next') {
//					// return e.preventDefault();
//				}
//			});
//			$('#MyWizard').on('changed', function(e, data) {
//				console.log('changed');
//			});
//			$('#MyWizard').on('finished', function(e, data) {
//				console.log('finished');
//			});
			var self = this;
			$('#btnWizardPrev').on('click', function() {
				self.prevStep();
//				$('#MyWizard').wizard('previous');
			});
			$('#btnWizardNext').on('click', function() {
				self.nextStep();
//				$('#MyWizard').wizard('next');
			});
//			$('#btnWizardStep').on('click', function() {
//				var item = $('#MyWizard').wizard('selectedItem');
//				console.log(item.step);
//			});
//			$('#MyWizard').on('stepclick', function(e, data) {
//				console.log('step' + data.step + ' clicked');
//				if(data.step===1) {
//					// return e.preventDefault();
//				}
//			});
		},
	});
	return WizardView;
});
