var onSuccess = function(data, textStatus, jqXHR) {
	console.group('onSuccess');
	console.log(data);
	console.log(textStatus);
	console.log(jqXHR);
	console.groupEnd();
};
var onError = function(data, textStatus, jqXHR) {
	console.group('onError');
	console.log(data);
	console.log(textStatus);
	console.log(jqXHR);
	console.groupEnd();
};

var testCase = function() {
	var root = '/users';
	var user_id = 1;
	var calls = {
		get: [
			{endpoint: root},	//index
			{endpoint: root + '/new'},	//new
			{endpoint: root + '/' + user_id},	//show
			{endpoint: root + '/' + user_id + '/edit'}	//edit
		],
		post: [
			{endpoint: root}	//create
		],
		put: [
			{endpoint: root + '/' + user_id},	//update
			{endpoint: root + '/'}	// error
		],
		delete: [
			{endpoint: root + '/' + user_id}	//destroy
		]
	};

	for (var i in calls) {
		for (var j = 0, len = calls[i].length; j < len; j++) {
			if (i === 'get' || i === 'post') {
				$[i](calls[i][j].endpoint, {}, onSuccess, 'text');
			} else {
				$[i](calls[i][j].endpoint, {}, onSuccess, onError, 'text');
			}
		}
	}
};

$(document).ready(function(){
	$.extend({
		put: function(url, data, success, error, type) {
			if ($.isFunction(data)) {
				success = data;
				error = success
				type = error;
				data = {};
			}
			error = error || function() {};
			return $.ajax({
				type: 'PUT',
				url: url,
				data: data,
				success: success,
				error : error,
				cache : false,
				dataType: type
			});
		},
		delete: function(url, data, success, error, type) {
			if ($.isFunction(data)) {
				success = data;
				error = success
				type = error;
				data = {};
			}
			error = error || function() {};
			return $.ajax({
				type: 'DELETE',
				url: url,
				data: data,
				success: success,
				error : error,
				cache : false,
				dataType: type
			});
		}
	});


	testCase();
});
