import {Server} from 'http'
import request from 'supertest'
import run from '../src'
describe('http test', () => {
  let server:Server
  beforeAll(() => {
    server = run(3303)
  })
  it('Get /', () => {
    return request(server)
    .get('/')
    .expect(200)
    .then(res => {
      expect(res.body.length).toEqual(9)
      expect(res.body).toStrictEqual([1,2,3,4,5,6,7,8,9])
    })
  })

  afterAll(() => {
    server.close()
  })
})