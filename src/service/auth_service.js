import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
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

    logout(){
      signOut(this.firebaseAuth)
      .then(console.log("Bye Bye"))
      .catch((error)=>console.log(error));
    }

    onAuthChange(userChanged){
      onAuthStateChanged(this.firebaseAuth, userChanged);
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
