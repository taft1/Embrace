import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom'
import * as Sentry from '@sentry/react'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import './index.css'

const LazyApp = lazy(() => import('./App'))

Sentry.init({
  dsn: 'https://df70b1f6196f845ed07e7bbace374e6e@o4506130477547520.ingest.sentry.io/4506130483773440',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyApp />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  container
)
