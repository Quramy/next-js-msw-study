import { http, HttpResponse } from 'msw'
import { type SetupServerApi, setupServer } from 'msw/node'

export function startupServer() {
  const server = setupServer()
  server.listen()
  ;(globalThis as any)['$msw_server'] = server
}

export function getServer() {
  return (globalThis as any)['$msw_server'] as SetupServerApi | undefined
}
