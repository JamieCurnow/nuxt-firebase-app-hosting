export default defineEventHandler(() => {
  const date = new Date()
  const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  return {
    time,
    message: `Hello from Nuxt! The time is ${time}`
  }
})
