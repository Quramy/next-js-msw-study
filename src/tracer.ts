import ddtrace from 'dd-trace'

ddtrace
  .init({
    env: 'local',
    service: 'my-frontend',
    // logInjection: true,
    // startupLogs: true,
    // logger: {
    //   info: (message) => console.log(message),
    //   warn: (message) => console.log(message),
    //   debug: (message) => console.log(message),
    //   error: (err) => console.error(err),
    // },
  })
  .use('next')
  .use('http', {
    // hooks: {
    //   request: (span, req: any, res) => {
    //     console.log(`[trace][http] ${req?.method} ${req?.url}`)
    //   },
    // },
  })
  .use('fetch', {
    hooks: {
      request: (span, req: any, res) => {
        console.log(`[trace][fetch] ${req?.method} ${req?.url}`)
      },
    },
  })
