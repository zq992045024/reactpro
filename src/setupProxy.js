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
}