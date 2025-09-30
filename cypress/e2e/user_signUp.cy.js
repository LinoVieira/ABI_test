import Login from '../pages/login';
import SignUp from '../pages/signUpPage';

describe('user registration', () => {
  beforeEach ('visit website', () => {
    SignUp.signUpPage()
  })

  it('should register a user with a random email', () => {
    SignUp.fillSignUpForm()

    SignUp.assertLoginPage()
  })
})