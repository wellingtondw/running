import { connect } from 'react-redux'
import actionCreators from './redux/actionCreators'

const Header = () => {
    return (
        <header>
            hello world
        </header>
    )
}

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
      signIn: (email, passwd) => actionCreators.signInRequest(email, passwd)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)