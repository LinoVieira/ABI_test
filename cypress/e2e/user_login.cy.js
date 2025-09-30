import Login from "../pages/login"
import Home from "../pages/home"
 
describe('user login', () => { 
  beforeEach ('visit website', () => {
      Login.visitLoginPage()
    
    })
  
    it('shoud login the user', () => {
      Login.inputData()
      Home.loginPageAssert()
    })
  })