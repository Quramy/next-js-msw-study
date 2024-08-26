export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('Resigstration side effects.')

    if (process.env.NODE_ENV !== 'production') {
      const { startupServer } = await import('./msw')
      startupServer()
    }

    if (process.env.NODE_ENV === 'production') {
      await import('./tracer')
    }
  }
}
