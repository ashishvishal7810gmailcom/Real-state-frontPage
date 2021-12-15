import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}


class GLogin extends Component {
  constructor(props) {
      super(props);
     }

  render() {

      return (
       
          <GoogleLogin
              clientId=""
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className="btnGoogle"
              cookiePolicy={'single_host_origin'}
              icon={false}
          >
            <i className="fa fa-google-plus fa-lg" style={{ marginLeft: 
                '15px' }}/> 
            <span class="googletext">&nbsp;&nbsp;&nbsp;&nbsp;Continue with Google</span> 
          </GoogleLogin>       
  );
}
}
export default GLogin;