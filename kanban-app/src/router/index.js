import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { authorizeToken } from './guards'

Vue.use(Router)

const router = Router({ routes })
router.beforeEach(authorizeToken)

export default router
