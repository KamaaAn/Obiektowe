function Telefon(marka, cena, kolor, wielkosc) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
    this.wielkosc = wielkosc;
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + " wielkość to " + this.wielkosc);
}
var iPhone6S = new Telefon("Apple", 2000, "srebrny", "mały");
var SiaoMe = new Telefon("SiaoMe", 540, "biały", "duży")

iPhone6S.printInfo();
SiaoMe.printInfo();
