import bodyParser from 'body-parser'
import { cors, contentType } from '../middlewares'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 50000
  }))
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(cors)
  app.use(contentType)
}
