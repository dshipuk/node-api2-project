// implement your server here
// require your posts router and connect it here
const express = require("express");
const postsRouter = require("./posts/posts-router");

const server = express();

server.use(express.json());


server.use('/api/posts', postsRouter)

server.use("*", (res, req) => {
    res.statusCode(404).json({
        message: "Not Found"
    })
})

module.exports = server;