import React from "react"
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
        <div className="container lg:pt-16">
          <div className="max-w-md mx-auto">
            <p className="text-red-600 font-bold">Example error.</p>

            {this.state.error && <p className="text-red-600 font-bold">{this.state.error}</p>}

            <form action="/signup" method="post" onSubmit={this.handleSubmit}>
              <div className="w-full lg:w-auto mb-2">
                <label className="block" htmlFor="email">Email or phone number <Required /></label>
              </div>
              <div className="w-full lg:flex-1 mb-6">
                <input autoFocus className="w-full" type="text" name="user[login]" id="email" placeholder="dan@email.com" />
              </div>

              <div className="w-full lg:w-auto mb-2">
                <label className="block" htmlFor="password">Password <Required /></label>
              </div>
              <div className="w-full lg:flex-1 mb-6">
                <input className="w-full" type="password" name="user[password]" id="password" />
              </div>

              <div className="w-full lg:w-auto mb-2">
                <label className="block" htmlFor="password_confirmation">Confirm password <Required /></label>
              </div>
              <div className="w-full lg:flex-1 mb-6">
                <input className="w-full" type="password" name="user[password_confirmation]" id="password_confirmation" />
              </div>

              <div className="w-full lg:w-auto mb-2">
                <label className="block" htmlFor="first_name">First name</label>
              </div>
              <div className="w-full lg:flex-1 mb-6">
                <input className="w-full" type="text" name="user[first_name]" id="first_name" />
              </div>

              <div className="w-full lg:w-auto mb-2">
                <label className="block" htmlFor="last_name">Last name</label>
              </div>
              <div className="w-full lg:flex-1 mb-6">
                <input className="w-full" type="text" name="user[last_name]" id="last_name" />
              </div>

              <div className="w-full lg:w-auto mb-2">
                <label className="block" htmlFor="street_1">Street</label>
              </div>
              <div className="w-full lg:flex-1 mb-6">
                <input className="w-full" type="text" name="user[street_1]" id="street_1" />
              </div>

              <div className="w-full lg:w-auto mb-2">
                <label className="block" htmlFor="city">City</label>
              </div>
              <div className="w-full lg:flex-1 mb-6">
                <input className="w-full" type="text" name="user[city]" id="city" />
              </div>

              <div className="w-full lg:w-auto mb-2">
                <label className="block" htmlFor="state">State</label>
              </div>
              <div className="w-full lg:flex-1 mb-6">
                <input className="w-full" type="text" name="user[state]" id="state" />
              </div>

              <div className="w-full lg:w-auto mb-2">
                <label className="block" htmlFor="postal_code">Postal code</label>
              </div>
              <div className="w-full lg:flex-1 mb-6">
                <input className="w-full" type="number" name="user[postal_code]" id="postal_code" />
              </div>

              <div className="py-4 text-center">
                <button
                  className="btn"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? `Signing up...` : `Sign up`}
                </button>

                <div className="text-sm my-4">
                  <span className="inline-block mr-2 text-gray-700">Have an account?</span> <a className="text-blue-500 underline" href="/signin">Sign in</a>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
