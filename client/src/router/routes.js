import {App, HomePage} from '../core'
import {AuthPage} from '../auth'

export default {
  path: '/',
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    {path: '/login', component: AuthPage}
  ]
}
