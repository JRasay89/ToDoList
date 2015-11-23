app.controller("myCtrl", function($scope) {
	$scope.todoList = [];
	$scope.activeTab = "all";
	
	//Add a todo item
	$scope.addTodo = function() {
		if ($scope.todoText) {
			$scope.todoList.push({
				text:$scope.todoText, 
				finish: false
			});
			$scope.todoText = "";
			if ($scope.markAll == true) {
				$scope.markAll = false;
			}
		}
	}
	
	//Get total number of todos
	$scope.getTotalTodos = function() {
		return $scope.todoList.length;
	}
	
	//Get the number of cleared todos
	$scope.getClearedCount = function() {
		var clearedCount = 0;
		angular.forEach($scope.todoList, function(todo) {
			if (todo.finish) {
				clearedCount++;
			}
		});
		return clearedCount;
	}
	
	//Check if any todo items are cleared
	$scope.hasClearedTodos = function() {
		if ($scope.activeTab == "all" || $scope.activeTab == "completed") {
			if ($scope.getClearedCount() > 0) {
				return true;
			}
			else {
				return false;
			}
		}
	}
	
	//Remove todo item
	$scope.removeTodo = function(index) {
		$scope.todoList.splice(index, 1);
	}
	
	//Remove cleared todos
	$scope.removeClearedTodos = function() {
		var oldTodoList = $scope.todoList;
		$scope.todoList = [];
		angular.forEach(oldTodoList, function(todo) {
			if (!todo.finish) {
				$scope.todoList.push(todo);
			}
		});
	}
	//Show number of completed task
	$scope.itemText = function() {
		if ($scope.getClearedCount() > 1) {
			return "items";
		}
		else {
			return "item";
		}
	}
	
	//Mark all toggle
	$scope.markAllToggle = function() {
		angular.forEach($scope.todoList, function(todo) {
			todo.finish = $scope.markAll;
		});
	}
});