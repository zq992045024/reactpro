const proxy = require("http-proxy-middleware");

module.exports = (app) =>{
    app.use(proxy("/api",{
        target:"https://m.piaoniu.com",
        changeOrigin:true,
    })),
    app.use(proxy("/open",{
        target:"https://testclubshop.liantuobank.com",
        changeOrigin:true,
    })),
    app.use(proxy("/piaoniu",{
        target:"http://localhost:3535",
        changeOrigin:true,
    }))
    app.use(proxy("/theatre", {
        target: "https://api.juooo.com",
        changeOrigin: true,
    }))
    app.use(proxy("/city", {
        target: "https://api.juooo.com",
        changeOrigin: true,
    }))
    app.use(proxy("/Schedule", {
        target: "https://api.juooo.com",
        changeOrigin: true,
    }))
}