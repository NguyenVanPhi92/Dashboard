const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// Sử dụng middleware mặc định
server.use(middlewares)
server.use(jsonServer.bodyParser)

// Middleware xử lý đăng ký
server.post('/register', (req, res) => {
    const { username, password, email } = req.body

    // Kiểm tra xem username hoặc email đã tồn tại chưa
    const users = router.db.get('users').value()
    const userExists = users.some(user => user.username === username || user.email === email)

    if (userExists) {
        return res.status(400).json({ message: 'Username or email already exists' })
    }

    // Tạo người dùng mới
    const newUser = {
        id: users.length + 1,
        username,
        password,
        email
    }

    router.db.get('users').push(newUser).write()
    res.status(201).json({ message: 'User registered successfully', user: newUser })
})

// Middleware xử lý đăng nhập
server.post('/login', (req, res) => {
    const { username, password } = req.body

    // Tìm người dùng trong cơ sở dữ liệu
    const user = router.db.get('users').find({ username, password }).value()

    if (user) {
        res.json({ message: 'Login successful', user })
    } else {
        res.status(401).json({ message: 'Invalid username or password' })
    }
})

// Middleware tùy chỉnh response
// server.use((req, res, next) => {
//     if (req.method === 'GET' && req.url.includes('/products')) {
//         const url = new URL(`http://localhost:3000${req.url}`)
//         const page = parseInt(url.searchParams.get('_page')) || 1
//         const limit = parseInt(url.searchParams.get('_limit')) || 10
//         const startIndex = (page - 1) * limit
//         const endIndex = page * limit

//         // Lấy dữ liệu từ router
//         const data = router.db.get('products').value()

//         // Phân trang dữ liệu
//         const paginatedData = data.slice(startIndex, endIndex)

//         // Tính toán thông tin phân trang
//         const totalItems = data.length
//         const totalPages = Math.ceil(totalItems / limit)

//         // Thêm thông tin phân trang vào response
//         res.jsonp({
//             data: paginatedData,
//             pagination: {
//                 limit: limit,
//                 page: page,
//                 page_size: paginatedData.length,
//                 total_items: totalItems,
//                 total_pages: totalPages
//             }
//         })
//     } else {
//         next()
//     }
// })

// Sử dụng router của JSON Server
server.use(router)

// Khởi chạy server
const PORT = 3000
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`)
})
