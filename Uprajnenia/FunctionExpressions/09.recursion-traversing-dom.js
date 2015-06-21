function traverse(node){
	traverseNode(node, '');

	function traverseNode(node, spacing){
		var i,
			len,
			child;
		spacing = spacing || '  ';
		console.log(spacing + node.nodeName);
		for (var i = 0, len = node.childNodes.length; i < len; i+=1) {
				child = node.childNodes[i];
				if(child.nodeType === 1){
					traverseNode(child, spacing + '  ');
				}
			};

		console.log(spacing + '/' + node.nodeName);		
	}
}

traverse(document.documentElement);