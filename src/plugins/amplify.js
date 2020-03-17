import Amplify, { Auth } from 'aws-amplify'

const config = {
  Auth: {
    identityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID,        
    region: process.env.VUE_APP_REGION,
    identityPoolRegion: process.env.VUE_APP_IDENTITY_REGION,
    userPoolId: process.env.VUE_APP_USERPOOL_ID,
    userPoolWebClientId: process.env.VUE_APP_USERPOOL_CLIENT_ID,
  }
}

Amplify.configure(config)

export async function signIn(username, password) {
  return Auth.signIn(username, password);
}
  
export async function signOut() {
  return Auth.signOut();
}
  
export async function currentAuthenticatedUser() {
  return Auth.currentAuthenticatedUser({ bypassCache: true });
}
  
