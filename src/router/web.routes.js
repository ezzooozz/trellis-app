import WebLogin from '../components/login/WebLogin'
import Interview from '../components/interview/Interview'
import StudySelectorPage from '../components/StudySelectorPage'
import ValidateLocale from './guards/ValidateLocale'
import chainableGuards from './guards/ChainableGuards'
import ValidateStudy from './guards/ValidateStudy'

export default [{
  path: '/login',
  name: 'Login',
  component: WebLogin
}, {
  path: '/',
  name: 'Home',
  component: StudySelectorPage
}, {
  path: '/form/:formId/preview',
  name: 'InterviewPreview',
  component: Interview,
  beforeEnter: chainableGuards(ValidateStudy, ValidateLocale)
}, {
  path: '*',
  redirect: '/login'
}]