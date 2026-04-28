import Fastify from 'fastify'
import { Verse } from '@repo/types'

const fastify = Fastify({
  logger: true
})

// Basic route
fastify.get('/health', async (request, reply) => {
  return { status: 'ok' }
})

// Verse route (placeholder)
fastify.get('/v1/verse/:id', async (request, reply) => {
  const { id } = request.params as { id: string }
  // In a real app, this would fetch from Prisma
  return { 
    id, 
    message: 'Scholarly data ingestion pending...',
    tip: 'Connect to Prisma and Neon PostgreSQL to see live data.'
  }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3001, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
