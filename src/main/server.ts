import knex from '../infra/database/'
import app from './config/app'

app.listen(3010, async () => {
  console.log('Server is running!')
  const insert = await knex('user').insert({
    email: 'elianbatista2000@gmail.com',
    login_email: 'elianbatista2000@gmail.com',
    password: '123456',
    type: 'person'
  })
  console.log(insert)
  const users = await knex.select().table('user')
  console.log(users)
})
