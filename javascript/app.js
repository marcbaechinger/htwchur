(function($, global) {
	
	var ApplicationController = function (spec) {
		this.container = $(spec.selector || "body");
		this.initUI();
		
		this.synchUI();
		return this;
	};
	
	ApplicationController.prototype.initUI = function() {
		var that = this;
		
		this.choice = this.container.find("#choice");
		this.choiceTitle = this.container.find("#choiceTitle");
		
		this.container.bind("click", function (ev) {
			var target = $(ev.target),
				action = target.data("action");
				
			if (action === "browser-choice") {
				that.chooseBrowser.call(that, target);
			}
		});
	};
	
	ApplicationController.prototype.chooseBrowser = function(target) {
		// TODO store source and title attribute on local storage 
		this.synchUI();
	};
	
	ApplicationController.prototype.synchUI = function() {
		this.choice.attr("src", this.getFavoriteBrowserIcon());
		this.choiceTitle.text(this.getFavoriteBrowserName());
	};
	
	ApplicationController.prototype.getFavoriteBrowserIcon = function(ev) {
		// TODO read image src from storage 
		return "img/browser/firefox.png";
	};
	ApplicationController.prototype.getFavoriteBrowserName = function(ev) {
		// TODO read browser name from storage
		return "blablabla";
	};
	
	global.ApplicationController = ApplicationController;
}(jQuery, this));