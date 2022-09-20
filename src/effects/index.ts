import { all, fork } from 'redux-saga/effects'
import settings from './settings'

const effects = function* () {
  yield all([
    fork(settings),
  ])
}

export default effects