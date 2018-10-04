import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
  <h1>INFO</h1>
    <p>the info is { props.info }</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>THIS IS PRIVATE INFO, PLEASE DONT SHARE!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <div>
        <p>Welcome back user!</p>
          <WrappedComponent {...props}/>
          </div>
      ) :
      (<p>Please login to access this!</p> )}

    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

 // ReactDOM.render(<AdminInfo isAdmin={false} info="this is the detail" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is the detail" />, document.getElementById('app'))
