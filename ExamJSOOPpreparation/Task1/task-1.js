function solve(){
    var module = (function (){
        var playable,
			validator,
			audio,			
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

        function getSortingFunction(firstParameter, secondParameter){
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
            validateString: function (val, name){
                if(val === undefined){
                    throw new Error(name + ' can not be undefined');
                } 
                if(typeof val !== 'string'){
                    throw new Error(name + ' must be a string');
                }
                if(!(CONSTANTS.TEXT_MIN_LENGTH < val.length && val.length < CONSTANTS.TEXT_MAX_LENGTH)){
                    throw new Error (name + ' must be between+' CONSTANTS.TEXT_MIN_LENGTH ' and '+ CONSTANTS.TEXT_MAX_LENGTH + ' symbols' );
                }
            },


			
        };




        var playable = (function(){
            var currentPlayableId=0,
				playable = Object.create({});

            Object.defineProperty(playable, 'init', {
                value: function (title, author){
                    this.title = title;
                    this.author = author;
                    this._id = ++currentPlayableId;
                }
            });

            Object.defineProperty(playable, 'id', {
                get: function () {
                    return this._id;
                } 
            });

            Object.defineProperty(playable, 'title', {
                get: function (){
                    return this._title;
                },
                set: function (val) {
                    validator.validateString(val, 'Playable title');
                    this._title = val;
                }
            });

            Object.defineProperty(playable, 'author', {
                get: function (){
                    return this._author;
                },
                set: function (val) {
                    validator.validateString(val, 'Playable author');
                    this._author = val;
                }
            });

            Object.defineProperty(playable, 'play', {
                value: function() {
                    return this._id + '. ' + this._title + ' - ' + this.author;
                }
            });

            return payable;
        }());

        audio = (function (){
            var audio = Object.create()


        }());






        return {
            getPlayer: function (name){
                // returns a new player instance with the provided name
            },
            getPlaylist: function(name){
                //returns a new playlist instance with the provided name
            },
            getAudio: function(title, author, length){
                //returns a new audio instance with the provided title, author and length
            },
            getVideo: function(title, author, imdbRating){
                //returns a new video instance with the provided title, author and imdbRating
            }
        };

    }());

    return module;
}

module.export = solve;