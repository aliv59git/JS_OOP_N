function solve(){
  var domElement = (function(){
    
    function isValidType(type){
      if(typeof type !== 'string'){
        throw new Error('Invalid string type!');
      }

      return /^[A-Z0-9]+$/i.test(type);
    }

    function isValidAttributeName(name){
      if(typeof name !== 'string'){
        throw new Error('Invalid attribute name!');
      }
      return /^[A-Z0-9\-]+$/i.test(name);
    }

    function getSortedAttributesString(attributes){
      var attributesString = '';
      var keys = [];

      for (var key in attributes) {
          keys.push(key);
      }

      keys.sort();
      var currentKey;

      for (var ind = 0, len = keys.length; ind < len; ind+=1) {
        currentKey = keys[ind];
        attributesString += ' ' + currentKey + '="' + attributes[currentKey] + '"';
      };
      return attributesString;
    }

    var domElement = {
      init: function(type){
        this.type = type;
        this.content = '';
        this.parent;
        this.attributes = [];
        this.children = [];

        return this;
      },
      appendChild: function(child){
        this.children.push(child);
      

        if((typeof child) === 'object'){
          child.parent = this;
        }
      return this;
    },
    addAttribute: function(name, value){
      if(!(isValidAttributeName)){
        throw new Error('Invalid attribute name!');
      }
      this.attributes[name] = value;
      return this;
    },
    removeAttribute: function(attribute){
      if(!(this.attributes[attribute])){
        throw new Error('Can not remove not existing attribute!');
      }

      delete this.attributes[attribute];
      return this;
    },
    get innerHTML(){
      var innerHtml = '<' + this.type;
      var arrtibuteString = getSortedAttributesString(this.attributes);
      innerHtml += attributesString + '>';

      var child;
      for (var ind = 0, len = children.length; ind < len; ind+=1) {
        child = this.children[ind];

        if(typeof child === 'string'){
          innerHtml += child;
        } else {
          innerHtml += child.innerHtml;
        }
      }

        innerHtml += this.content;
        innerHtml += '</' + this.type + '>';

        return innerHtml;
    },
      get type(){
        return this._type;
      },
      set type(value){
        if(!(isValidType(value))){
          throw new Error('Invalid type!');
        }
        this._type = value;
      },
      get content(){
        if(this.children.length){
          return '';
        } 
        return this._content;
      },
      set content(value){
        this._content = value;
      }, 
      get attributes(){
        return this._attributes;
      }, 
      set attributes(value){
        this._attributes = value;
      }, 
      get children(){
        return this._children;
      },
      set children(value){
        this._children = value;
      },
      get parent(){
        return this._parent;
      }, 
      set parent(value){
        this._parent = value;
      }

    };

    return domElement;

  }());
  return domElement;
}

module.export = solve;