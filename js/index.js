document.addEventListener("DOMContentLoaded", function(){
	var jml = ""
	var resourceLoader = ResourceLoader.create({
		resources : [{
			name : "jml",
			url : "data/jml.json",
			processor : JSON.parse
		}],
		success : function(){
			var html = Jml.jmlToHtml(resourceLoader.resources["jml"]);
			console.log(html);
		}
	});
}, true);