import React from "react"
import { Link } from "gatsby"
import Required from "../required"

export default class ContactFrom extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: ``,
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (e) {
    this.setState({ loading: true })

    const email = e.target.email.value
    const password = e.target.password.value
    const password_confirmation = e.target.password_confirmation.value

    console.log(password_confirmation)

    if (!email || !password || (password !== password_confirmation)) {
      this.setState({ loading: false })
      e.preventDefault()

      return this.setState({ error: `Please fill out the form completely.` })
    }
  }

  render () {
    return (
      <div>
        <div className="container">
          <div className="max-w-md mx-auto">
            {this.state.error && <p className="error-message">{this.state.error}</p>}

            <form action="/signup" method="post" onSubmit={this.handleSubmit}>
              <div className="mb-2">
                <label htmlFor="email">Email or phone number <Required /></label>
              </div>
              <div className="mb-6">
                <input autoFocus className="w-full" type="text" name="user[login]" id="email" placeholder="dan@email.com" />
              </div>

              <div className="mb-2">
                <label htmlFor="password">Password <Required /></label>
              </div>
              <div className="mb-6">
                <input className="w-full" type="password" name="user[password]" id="password" />
              </div>

              <div className="mb-2">
                <label htmlFor="password_confirmation">Confirm password <Required /></label>
              </div>
              <div className="mb-6">
                <input className="w-full" type="password" name="user[password_confirmation]" id="password_confirmation" />
              </div>

              <div className="mb-2">
                <label htmlFor="first_name">First name</label>
              </div>
              <div className="mb-6">
                <input className="w-full" type="text" name="user[first_name]" id="first_name" />
              </div>

              <div className="mb-2">
                <label htmlFor="last_name">Last name</label>
              </div>
              <div className="mb-6">
                <input className="w-full" type="text" name="user[last_name]" id="last_name" />
              </div>

              <div className="mb-2">
                <label htmlFor="street_1">Street</label>
              </div>
              <div className="mb-6">
                <input className="w-full" type="text" name="user[street_1]" id="street_1" />
              </div>

              <div className="mb-2">
                <label htmlFor="city">City</label>
              </div>
              <div className="mb-6">
                <input className="w-full" type="text" name="user[city]" id="city" />
              </div>

              <div className="flex -mx-4">
                <div className="w-1/2 px-4">
                  <div className="mb-2">
                    <label htmlFor="state">State</label>
                  </div>
                  <div className="mb-6">
                    <select id="state" name="user[state]" defaultValue="">
                      <option value="" disabled>Select...</option>
                      <option value="AL">AL</option>
                      <option value="AK">AK</option>
                      <option value="AZ">AZ</option>
                      <option value="AR">AR</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DE">DE</option>
                      <option value="DC">DC</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="IA">IA</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="ME">ME</option>
                      <option value="MD">MD</option>
                      <option value="MA">MA</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MS">MS</option>
                      <option value="MO">MO</option>
                      <option value="MT">MT</option>
                      <option value="NE">NE</option>
                      <option value="NV">NV</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NY">NY</option>
                      <option value="NC">NC</option>
                      <option value="ND">ND</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="PR">PR</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VT">VT</option>
                      <option value="VA">VA</option>
                      <option value="WA">WA</option>
                      <option value="WV">WV</option>
                      <option value="WI">WI</option>
                      <option value="WY">WY</option>
                    </select>
                  </div>
                </div>

                <div className="w-1/2 px-4">
                  <div className="mb-2">
                    <label htmlFor="postal_code">Postal code</label>
                  </div>
                  <div className="mb-6">
                    <input className="w-full" type="number" name="user[postal_code]" id="postal_code" />
                  </div>
                </div>
              </div>

              <div className="py-4 text-center">
                <button
                  className="btn"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? `Signing up...` : `Sign up`}
                </button>

                <div className="text-sm my-4">
                  <span className="inline-block mr-2 text-gray-700">Have an account?</span> <Link className="text-blue-500 underline" to="/signin">Sign in</Link>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
