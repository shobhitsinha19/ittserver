app.controller("homeCtrl",["$scope","$http","$location","$anchorScroll",function($scope,$http,$location,$anchorScroll){
	$scope.scrollTo = function(id) {
		console.log(id);
		 $location.hash(id);
		 $anchorScroll();
	}
	$(document).ready(function(){
    $('.parallax').parallax();
});
}]);


app.controller("regCtrl",['$scope', '$http',"$state",function($scope,$http,$state){
$scope.reg=function(){
	var data=({
		fname: $scope.firstName,
		lname:$scope.lastName,
		email:$scope.email,
		pass: $scope.password
	});
	$http.post('http://localhost:3000/signup', data).then(function success(res){
		console.log("IN");
		console.log(data);
		console.log(res);
		$state.go("home");
	},function failure(res){
		console.log("error");
	})
}
}])

app.controller("loginCtrl",['$scope','$http',"$state",function($scope, $http,$state){
	$scope.login=function(){
		var data=({
			email:$scope.email,
			pass:$scope.password
		});
		$http.post('http://localhost:3000/login',data).then(function success(res){
			console.log("IN");
			console.log(res);
			$state.go("dash")
		},function failure(res){
			console.log("error");
			$scope.er="Invalid";
		}) ;
	}
}])

app.controller("dashCtrl",["$scope","$http",function($scope,$http){
/*	$scope.tts=function(){
		var x=document.getElementById("original").innerHTML;

		$http.get("http://api.voicerss.org/?key=64069f92869246ae96789a96803eb7e1&hl=en-us&src="+x).then(function success(res){
		]}, then function fail(){})
	}*/
	$scope.translate=function(){
		var lang=$scope.lang;
		var x=document.getElementById("original").innerHTML;
		console.log(x);
		var key="AIzaSyB43GXWNd_l3F3pWfjXQsFcF0eklSICKKA";
		console.log("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161118T212409Z.1d6f7d973aa055f5.4072ba4c9e49d9ce53d6ec237be33c12a54ff244&text="+x+"&lang=en-"+lang)
		$http.post("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161118T212409Z.1d6f7d973aa055f5.4072ba4c9e49d9ce53d6ec237be33c12a54ff244&text="+x+"&lang=en-"+lang)
		.then(function(res){
			console.log(res);
			document.getElementById("translated").innerHTML=res.data.text[0];
		})
	}


}])
