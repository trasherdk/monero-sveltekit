import Path from "path"
import Express from "express"

import { build } from "../paths"

const endpoint: Express.Router = Express.Router()

endpoint.use(Express.static(build.public))
endpoint.use((req: Express.Request, res: Express.Response) => {
    res.sendFile(Path.join(build.public, "index.html"))
})

export default endpoint
