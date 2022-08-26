// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/:name', async (request, reply) => {
  console.log(request.query.name)
  return { greeting: `Welcome ${request.query.name || "user"}!` }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
