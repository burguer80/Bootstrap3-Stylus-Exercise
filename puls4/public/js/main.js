$(document).ready(function(){
	console.log('main.js loaded');

	//c = new  Puls4.Collections.Articles()
	window.collections.articles = new  Puls4.Collections.Articles()
	window.collections.articles.on('add', function (model) {
		//console.log('Se agrego un nuevo articulo', model.toJSON());
		//Aqui agregaremos una vista para cada uno de los articulos
		var view = new Puls4.Views.Article({model:model});

		view.render();

		view.$el.appendTo('.posts');
	});

	window.collections.articles.fetch();
});
