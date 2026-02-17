exports.getPosts = (req, res, next) => {
    res.status(200).json({ posts: [{ title: 'A day in a Life of Immortal King', description: 'One of the best chinese donghua.You will love it .give it a try' }] })
}

exports.createPost = (req, res, next) => {
    const { title, description } = req.body
    // later save this to database
    res.status(201).json({
        message: 'Successfully created posts',
        posts: { id: new Date().toISOString(), title: title, description: description }
    })
}