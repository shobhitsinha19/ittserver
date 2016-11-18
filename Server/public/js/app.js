var app=angular.module("chirper", ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("home",{
			url:'/',
			templateUrl:"js/templates/landing/index.html",
					})
		.state("register",{
			url:'/register',
			controller:"regCtrl",
			templateUrl:"js/templates/register.html"
		})
		.state("login",{
			url:'/login',
			controller:"loginCtrl",
			templateUrl:"js/templates/login.html"
		})
		.state("dash",{
			url:"/dash",
			controller:"dashCtrl",
			templateUrl:"js/templates/dash.html"
		})
		$urlRouterProvider.otherwise('/');
});
