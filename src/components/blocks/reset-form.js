import React from "react"
import { Link } from "gatsby"

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

    if (!email) {
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

              <div className="py-4 text-center">
                <button
                  className="btn"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? `Reseting...` : `Reset`}
                </button>

                <div className="text-sm my-4">
                  <span className="inline-block mr-2 text-gray-700">Know your password?</span> <Link className="text-blue-500 underline" to="/signin">Sign in</Link>
                </div>
                <div className="text-sm my-4">
                  <span className="inline-block mr-2 text-gray-700">No account?</span> <Link className="text-blue-500 underline" to="/signup">Sign up</Link>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
