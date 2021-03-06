// @flow
import Home from './home'
import {connect} from 'react-redux'
import {setLocation, setLocationErrorMessage, clearErrorMessage} from '../../actions/location'

import type {Location} from '../../services/geocoder'

const mapStateToProps = ({location}, {navigation}) => {
  return {
    errorMessage: location.errorMessage,
    goMap: () => navigation.navigate('Map')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetLocation(location: Location) {
      dispatch(setLocation(location))
    },
    onSetLocationErrorMessage(errorMessage: string) {
      dispatch(setLocationErrorMessage(errorMessage))
    },
    onClearErrorMessage() {
      dispatch(clearErrorMessage())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)