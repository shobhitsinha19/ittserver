app.controller("regCtrl",['$scope', '$http',function($scope,$http){
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
	},function failure(res){
		console.log("error");
	})
}

}])

app.controller("loginCtrl",['$scope','$http',function($scope, $http){
	$scope.login=function(){
		var data=({
			email:$scope.email,
			pass:$scope.password
		});
		$http.post('http://localhost:3000/login',data).then(function success(res){
			console.log("IN");
			console.log(res);
		},function failure(res){
			console.log("error");
		}) ;
	}
}])
app.directive('file', function () {
    return {
        scope: {
            file: '='
        },
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var file = event.target.files[0];
                scope.file = file ? file : undefined;
                scope.$apply();
            });
        }
    };
});
app.controller("dashCtrl",["$scope","$http",function($scope,$http){
	$scope.translate=function(){
		$scope.textresult="Hello my name is Dave";
		var x=$scope.textresult;
		console.log(x);
		var key="AIzaSyB43GXWNd_l3F3pWfjXQsFcF0eklSICKKA";
		$http.post("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161118T212409Z.1d6f7d973aa055f5.4072ba4c9e49d9ce53d6ec237be33c12a54ff244&text="+x+"&lang=en-ru")
		.then(function(res){
			console.log(res);
		})
	}
	$scope.upload=function(){
	 $http({
            method: 'POST',
            url: '/upload-file',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: {
                email: Utils.getUserInfo().email,
                token: Utils.getUserInfo().token,
                upload: $scope.file
            },
            transformRequest: function (data, headersGetter) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);
                });

                var headers = headersGetter();
                delete headers['Content-Type'];

                return formData;
            }
        })
        .success(function (data) {

        })
        .error(function (data, status) {

        });

	}
}])
