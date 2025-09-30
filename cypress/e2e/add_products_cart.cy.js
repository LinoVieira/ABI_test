import Login from "../pages/login"
import SignUp from '../pages/signUpPage'
import Products from "../pages/cartPage"

describe('Adding products to the cart', () => {
  beforeEach ('visit website', () => {
    Login.visitLoginPage()
    Login.inputData()
  })
  
  it('should add products to the cart', () => {
   
    SignUp.assertLoginPage()

    Products.addProductsToCart()

    Products.cartAssertPage()
  })
})


