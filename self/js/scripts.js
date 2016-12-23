function Button(text) {
	this.text = text || "Hello";
}
    

Button.prototype = {
    create: function() {
        var self =this;
        this.$element = $("<Button>");
        this.$element.text(this.text);
        this.$element.click(function(){
            aler(self.text);
        })
        $("Body").append(this.$element);
}
}


var btn1 = new Button("Hello");

btn1.create();

/*comment