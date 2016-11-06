app.controller('MessageCreatorCtrl',function($scope,socket){
	$scope.newMessage='';
	$scope.createMessage = function(){
		//alert('?');
		if($scope.newMessage == ''){
			return;
		}
		socket.emit('createMessage',$scope.newMessage);
		$scope.newMessage='';
	}
})