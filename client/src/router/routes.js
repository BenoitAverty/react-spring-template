import {App, HomePage} from '../core'
import {AuthPage} from '../auth'

export default {
  path: '/',
  component: App, // This is the route component, always rendered
  indexRoute: { component: HomePage },
  childRoutes: [
    {path: '/login', component: AuthPage}
  ]
}
