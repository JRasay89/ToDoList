app.controller("myCtrl", function($scope) {
	$scope.todoList = [];
	
	$scope.addTodo = function() {
		if ($scope.todoText) {
			$scope.todoList.push({
				text:$scope.todoText, 
				finish: false
			});
			$scope.todoText = "";
		}
	}
	
	$scope.getTotalTodos = function() {
		return $scope.todoList.length;
	}
	
	$scope.getClearedCount = function() {
		var clearedCount = 0;
		angular.forEach($scope.todoList, function(todo) {
			if (todo.finish) {
				clearedCount++;
			}
		});
		return clearedCount;
	}
	
	$scope.hasClearedTodos = function() {
		if ($scope.getClearedCount() > 0) {
			return true;
		}
		else {
			return false;
		}
	}
	
	$scope.removeTodo = function(index) {
		$scope.todoList.splice(index, 1);
	}
	
	$scope.removeClearedTodos = function() {
		var oldTodoList = $scope.todoList;
		$scope.todoList = [];
		angular.forEach(oldTodoList, function(todo) {
			if (!todo.finish) {
				$scope.todoList.push(todo);
			}
		});
	}
	
	$scope.itemText = function() {
		if ($scope.getClearedCount() > 1) {
			return "items";
		}
		else {
			return "item";
		}
	}
});