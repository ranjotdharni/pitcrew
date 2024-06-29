import { Express, Request, Response } from 'express'
import express from 'express'
import dotenv from 'dotenv'

const port: string | number = process.env.port || 3000

dotenv.config()
const app: Express = express()

app.use(express.static(process.env.STATIC_PATH))

app.get("/", (req: Request, res: Response) => {
    res.sendFile(process.env.DIST_PATH)
})

app.listen(port, () => {
    console.log(`Server is live on PORT ${port}`)
})