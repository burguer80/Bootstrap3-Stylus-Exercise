Puls4.Views.Article = Backbone.View.extend({
	events:{

	},
	tagName:"article",
	className:"post",
	initialize : function () {
		console.log(this.$el);
	},
	render :function () {
		this.$el.html( this.model.get('title') );
		//this.$el.html( 'hola' );
	}
});