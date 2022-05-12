import Express from "express"

const endpoint: Express.Router = Express.Router()

endpoint.use(Express.json())

endpoint.get("/test", (req: Express.Request, res: Express.Response) => {
    res.json({
        message: "Test message is being sent back from the Express API"
    })
})

export default endpoint
