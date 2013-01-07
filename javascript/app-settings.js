(function($, global) {
	
	var ApplicationController = function (spec) {
		this.container = $(spec.selector || "body");
		this.initUI();
		this.settings = this.getSettings();
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
		this.settings.favoriteIcon = target.attr("src");
		this.settings.favoriteName = target.attr("title");
		
		this.synchUI();
		this.storeSettings();
	};
	
	ApplicationController.prototype.synchUI = function() {
		this.choice.attr("src", this.getFavoriteBrowserIcon());
		this.choiceTitle.text(this.getFavoriteBrowserName());
	};
	
	ApplicationController.prototype.getFavoriteBrowserIcon = function(ev) {
		return this.settings.favoriteIcon;
	};
	
	ApplicationController.prototype.getFavoriteBrowserName = function(ev) {
		return this.settings.favoriteName;
	};
	ApplicationController.prototype.getSettings = function() {
		var settings = localStorage.settings;
		if (settings) {
			settings = JSON.parse(settings);
		} else {
			settings = this.getDefaultSettings();
		}
		return settings;
	};
	ApplicationController.prototype.storeSettings = function() {
		localStorage.settings = JSON.stringify(this.settings);
	};
	
	ApplicationController.prototype.getDefaultSettings = function() {
		return {
			favoriteName: "Mozilla Firefox",
			favoriteIcon: "img/browser/firefox.png"
		};
	};
	
	
	global.ApplicationController = ApplicationController;
}(jQuery, this));