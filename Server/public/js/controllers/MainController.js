app.controller("regCtrl",['$scope', '$http',function($scope,$http){
$scope.reg=function(){
	var data=({
		fname: $scope.firstName,
		lname:$scope.lastName,
		email:$scope.email,
		pass: $scope.password
	});
	$http.post('http://localhost:3000/signup', data)
}

}])

app.controller("loginCtrl",['$scope','$http',function($scope, $http){
	$scope.login=function(){
		var data=({
			email:$scope.email,
			pass:$scope.password
		});
		$http.post('http://localhost:3000/login',data);
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
