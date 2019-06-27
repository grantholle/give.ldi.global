import React from "react"

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

    if (!email || !password) {
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

            <form action="/signin" method="post" onSubmit={this.handleSubmit}>
              <div className="mb-2">
                <label htmlFor="email">Email or phone number</label>
              </div>
              <div className="mb-6">
                <input autoFocus className="w-full" type="text" name="user[login]" id="email" placeholder="dan@email.com" />
              </div>

              <div className="mb-2">
                <label htmlFor="password">Password</label>
              </div>
              <div className="mb-6">
                <input className="w-full" type="password" name="user[password]" id="password" />
              </div>

              <div className="py-4 text-center">
                <button
                  className="btn"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? `Signing in...` : `Sign in`}
                </button>

                {this.props.data.hideForgot !== true && <div className="text-sm my-4">
                  <span className="inline-block mr-2 text-gray-700">Forgot password?</span> <a className="text-blue-500 underline" href="/users/password/new">Reset it</a>
                </div>}
                {this.props.data.hideSignup !== true && <div className="text-sm my-4">
                  <span className="inline-block mr-2 text-gray-700">No account?</span> <a className="text-blue-500 underline" href="/users/password/new">Sign up</a>
                </div>}
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
