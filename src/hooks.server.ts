import { hooks } from '@jill64/npm-demo-layout'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://bfb3956524176262adb95988bd7f1268@o4505814639312896.ingest.sentry.io/4506267264090112'
)

export const handle = onHandle(hooks)
export const handleError = onError()
