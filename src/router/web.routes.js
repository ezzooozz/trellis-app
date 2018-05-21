import WebLogin from '../components/login/WebLogin'
import Interview from '../components/interview/Interview'
import storage from '../services/storage/StorageService'

export default [{
  path: '/login',
  name: 'Login',
  component: WebLogin,
  beforeEnter: function (to, from, next) {
    if (storage.get('interview-id') !== null) {
      next({name: 'Interview', params: {studyId: storage.get('studyId'), interviewId: storage.get('interview-id')}})
    } else {
      next()
    }
  }
}, {
  path: '/form/preview/:formId',
  name: 'InterviewPreview',
  component: Interview
}]
