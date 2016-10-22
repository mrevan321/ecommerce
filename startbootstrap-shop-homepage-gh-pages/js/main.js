// function Shades(name,color,price){
// 	this.name=name
// 	this.color=color
// 	this.price=price
// }

// var shadesArray=[]

// var Orange=new Shades('cool',"orange",12)

// var Blue=new Shades('sport','blue',15)

// var Red=new Shades('rad','red',30)

// shadesArray.push(Orange)
// shadesArray.push(Blue)
// shadesArray.push(Red)


// for (var i = 0; i < shadesArray.length; i++) {
// 	var sName=document.createTextNode('name: ' + shadesArray[i].name)
// 	var sColor=document.createTextNode('color: ' + shadesArray[i].color)
// 	var sPrice=document.createTextNode('price: ' + shadesArray[i].price)

// var newCol=document.createElement('div')
// var newDiv=document.createElement('div')
// var nameH1 = document.createElement("H1")
//   var colorH4 = document.createElement("H4")
//   var priceH4 = document.createElement("H4")

// nameH1.appendChild(sName)
// colorH4.appendChild(sColor)
// priceH4.appendChild(sPrice)

// newCol.className ='col-sm-4'
// newDiv.className='shade' + i
// newDiv.appendChild(nameH1)
// newDiv.appendChild(colorH4)
// newDiv.appendChild(priceH4)
// newCol.appendChild(newDiv)

// document.getElementById('info').appendChild(newDiv)
// }

function Shirt(name, color, stock, image) {
  this.name = name;
  this.color = color;
  this.stock = stock;
  this.image = image;
}

var shirtArray = []

var whitetee = new Shirt('Stylish', "white", 10, "img/white.jpg")
var blacktee = new Shirt('Original', "Black", 30, "img/black.jpg")
var redtee = new Shirt('Evil', "red", 55, "img/red.jpg")
var bluetee = new Shirt('Diva', "purple", 33, "img/purple.jpg")
var greentee = new Shirt('Bro', "yellow", 15, "img/yellow.jpg")
var yellowtee = new Shirt('Turtle', "brown", 90, "img/brown.jpg")

shirtArray.push(whitetee)
shirtArray.push(blacktee)
shirtArray.push(redtee)
shirtArray.push(bluetee)
shirtArray.push(greentee)
shirtArray.push(yellowtee)

for (i = 0; i < shirtArray.length; i++) {
  var tName = document.createTextNode(shirtArray[i].name)
  // var tSize = document.createTextNode("Available size: " + shirtArray[i].size)
  var tColor = document.createTextNode("Color: " + shirtArray[i].color)
  var tStock = document.createTextNode("In stock: " + shirtArray[i].stock)
  var tButton = document.createTextNode("Buy Now!")
  var tImage = shirtArray[i].image

  var newCol = document.createElement("DIV")
  var newDiv = document.createElement("DIV")
  var nameH1 = document.createElement("H1")
  // var sizeH4 = document.createElement("H4")
  var colorH4 = document.createElement("H4")
  var stockH4 = document.createElement("H4")
  var buyNow = document.createElement("BUTTON")
  var image = document.createElement("IMG")

  nameH1.appendChild(tName)
  // sizeH4.appendChild(tSize)
  colorH4.appendChild(tColor)
  stockH4.appendChild(tStock)
  buyNow.appendChild(tButton)
  buyNow.className = "btn btn-primary btn-lg"
  image.src = tImage
  image.className = "img-responsive"

// for bootstrap. sets up a column
  newCol.className = "col-sm-4"
  // new class name 
  newDiv.className = "tshirt shirtName" + i + " thumbnail"
  // where           what
  newDiv.appendChild(nameH1)
  newDiv.appendChild(image)
  // newDiv.appendChild(sizeH4)
  newDiv.appendChild(colorH4)
  newDiv.appendChild(stockH4)
  newDiv.appendChild(buyNow)
  newCol.appendChild(newDiv)

  document.getElementById("info").appendChild(newCol)
}


