import setupMiddlewares from './middlewares'
import express from 'express'

const app = express()
setupMiddlewares(app)

// TODO Setup routes

export default app
