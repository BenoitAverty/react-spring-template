import {createRenderer} from 'react-addons-test-utils'

const testRenderer = createRenderer()

global.render = testRenderer.render.bind(testRenderer)
