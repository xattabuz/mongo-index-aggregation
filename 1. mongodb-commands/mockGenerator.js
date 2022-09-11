const fs = require('fs')
const path = require('path')

function mockGenerator(count) {
	let data = []
	for (let i = 0; i < count; i++) {
		data.push({
			id: i,
			username: 'user' + i,
			password: 'password' + i,
			email: 'user' + i + '@gmail.com',
		})
	}
	fs.writeFileSync(path.join(__dirname, 'mock.json'), JSON.stringify(data))
	console.log('Mock data generated successfully')
}

mockGenerator(1000000)

// MongoDb Comman find with milliseconds
db.Users.find({username: "user9999899"}).explain("executionStats").executionStats.executionTimeMillis