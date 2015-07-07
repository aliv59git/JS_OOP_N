function solve(){
	var module = (function (){
		var player,
		playlist,
		playable,
		audio,
		video,
		validator,
		CONSTANTS = {
			TEXT_MIN_LENGTH: 3,
			TEXT_MAX_LENGTH: 25,
			IMDB_MIN_RATTING: 1,
			IMDB_MAX_RATTING: 5,
			MAX_NUMBER: 9007199254740992
		};

		function indexOfElementWithIdInCollection(collection, id){
			var i, len;
			for (i = 0, len = collection.length; i < len; i+=1) {
				if(collection[i].id == id){
					return i;
				}
			}
			return -1;
		}

		function getsortingfunction(firstParameter, secondParameter){
			return function (first, second){
				if(first[firstParameter] < second[firstParameter]){
					return -1;
				} 
				else if(first[firstParameter] > second[firstParameter]){
					return 1;
				} 

				if(first[secondParameter] < second[secondParameter]){
					return -1;
				}
				else if (first[secondParameter] > second[secondParameter]) {
					return 1;
				}
				else {
					return 0;
				}
			}
		}

		validator = {
			
		}




		var playable = (function(){

			var playable = Object.create()

			return payable;
		}());





	}());
}