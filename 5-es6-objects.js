// Object property shorthand

const name = 'Andrew'
const age = 27

const user = {
	name,
	age,
	location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const product = {
	label: 'Red notebook',
	price: 3,
	stock: 201,
	salePrice: undefined,
	rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating=5} = product

// console.log(productLabel + " " + stock + "-" +rating)

const transaction = (type, { label, stock = 0 } = {}) => {
	console.log(type, label, stock)
}

transaction('order', product)
transaction('testing with default object')


