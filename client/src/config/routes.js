import {App, HomePage} from '../core'
import {AuthPage} from '../auth'
import {GreetingsPage} from '../greetings'

export default {
  path: '/',
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    { path: '/login', component: AuthPage },
    { path: '/greetings', component: GreetingsPage }
  ]
}
