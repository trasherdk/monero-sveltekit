import HTTP from "http"
import CORS from "cors"
import Express from "express"

import * as endpoints from "./endpoints"

export default class Server {

    private _port: number
    private _express: Express.Application
    private _instance: HTTP.Server

    public constructor(port: number) {

        this._port = port
        this._express = Express()
        this._instance = HTTP.createServer(this._express)

        this._express.use(CORS())
        this._express.use("/api", endpoints.api)
        this._express.use("/", endpoints.public)

    }

    public start(callback: () => void): Promise<HTTP.Server> {
        return Promise.resolve(this._instance.listen(this._port, () => {
            console.log(`Server listening on port ${this._port}`)
            callback()
        }))
    }

    public stop(): Promise<HTTP.Server> {
        return Promise.resolve(this._instance.close())
    }

}
