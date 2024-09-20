import 'express-async-errors'
import express, {Request, Response, NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import indexRoutes from './routes/index'
import swaggerUi from "swagger-ui-express"
import swaggerOutput from "./swagger_output.json"

const app = express()

app.use(morgan('tiny'))

app.use(cors())

app.use(helmet())

app.use(express.json())

app.use(indexRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
   res.status(500).send(error.message)
})

export default app
