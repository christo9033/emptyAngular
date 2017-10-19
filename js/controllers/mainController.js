
// MAIN CONTROLLER
function mainController($scope) {


    $scope.infoUser = [];
    $scope.addUser = function(){        
        $scope.infoUser.push({ 
            'name':$scope.name,
            'lastName': $scope.lastName, 
            'email': $scope.email, 
        });

        $scope.name= '';
        $scope.lastName= '';
        $scope.email= '';
    };
};




