import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider
} from "firebase/auth";

class AuthService {
    constructor(){
      this.firebaseAuth = getAuth();
      this.googleProvider = new GoogleAuthProvider();
      this.githubProvider = new GithubAuthProvider();
    }

    login(providerName){
      const authProvider = this.getProvider(providerName);
      return signInWithPopup(this.firebaseAuth, authProvider);
    }

    getProvider(providerName){
      if(providerName === 'Google'){
        return this.googleProvider;
      } else if(providerName === 'Github'){
        return this.githubProvider;
      } else {
        throw new Error(`not supported provider:${providerName}`);
      }
    }
}

export default AuthService;
