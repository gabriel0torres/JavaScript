/*import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write('oi')
    return response.end()
})

server.listen(3333)*/

import { fastify } from 'fastify'
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgre.js'

const server = fastify()
//const database = new DatabaseMemory()
const database = new DatabasePostgres()

//Insere
server.post('/videos', async (request, response) => {
    const {title, description, duration} = request.body
    await database.create({
        title: title,
        description: description,
        duration: duration
    })

    return response.status(201).send()

})

//Lista
server.get('/videos', async (request) => {
    const search = request.query.search
    const videos = await database.list(search)
    return videos
})

//Atualiza
server.put('/videos/:id', async (request, response) => {
    const VideoID = request.params.id
    const {title, description, duration} = request.body

    const video = await database.update(VideoID, {
        title: title,
        description: description,
        duration: duration
    })

    return response.status(204).send()
})

//Deleta
server.delete('/videos/:id', (request, response) => {
    const VideoId = request.params.id
    database.delete(VideoId)
    return response.status(204).send()
})

server.listen({
    port: 3333
})