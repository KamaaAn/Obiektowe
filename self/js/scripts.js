function button(text) {
	this.text = text || "Hello";
}
    

button.prototype = {
    create: function() {
        var self =this;
        this.$element = $("<Button>");
        this.$element.text(this.text);
        this.$element.click(function(){
            alert(self.text);
        })
        $("Body").append(this.$element);
}
}


var btn1 = new button("Hello");
var btn2 = new button("Aloha");

btn1.create();
btn2.create();