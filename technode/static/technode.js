var app = angular.module('technodeApp',[]);

angular.module('technodeApp',['ngRoute']);

angular.module('technodeApp',['ngRoute']).run(function($window,$rootScope,$http,$location){
	$http({
		url:'/api/validate',
		method:'GET'
	}).success(function(user){
		$rootScope.me=use;
		$location.path('/');
	}).error(function(data){
		$location.path('/login');
	})
	$rootScope.logout = function(){
		$http({
			url:'/ajax/logout',
			method:'GET'
		}).success(function(){
			$rootScope.me=null;
			$location.path('/login');	
		})
	}
	$rootScope.$on('login',function(evt,me){
		$rootScope.me=me;
	})
})

