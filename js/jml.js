var Jml = (function(){

	function jmlToHtml(jml){
		var html = "<html>";
		if(jml.head){
			html += constructJmlTag(jml.head, "head");
		}
		if(jml.body){
			html += constructJmlTag(jml.body, "body");
		}
		html += "</html>"
		return html;
	}
	
	function constructJmlTag(jml, tagName){
		if(typeof(jml) === "string"){
			return jml;
		}
	
		var html = "<" + tagName;
		for(var key in jml.attrs){
			html += " " + key + "=" + "\"" + jml.attrs[key] + "\"";
		}
		html += ">";
		if(jml.children){
			for(var i = 0; i < jml.children.length; i++){
				html += constructJmlTag(jml.children[i], jml.children[i].tag);
			}
		}
		html += "</" + tagName + ">";
		return html;
	}
	
	function htmlToJml(){
	}

	return {
		jmlToHtml : jmlToHtml,
		htmlToJml : htmlToJml
	};

})();