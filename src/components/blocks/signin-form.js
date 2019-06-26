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
    e.preventDefault()

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
        <div className="container lg:pt-16">
          <div className="max-w-md mx-auto">
            {this.state.error && <p className="text-red-600 font-bold">{this.state.error}</p>}

            <form action="/signin" method="post" onSubmit={this.handleSubmit}>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-auto mb-6">
                  <label className="block text-xl lg:mr-6" htmlFor="email">Email or phone</label>
                </div>
                <div className="w-full lg:flex-1 mb-6">
                  <input className="w-full" type="text" name="user[login]" id="email" placeholder="dan@email.com" />
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-auto mb-6">
                  <label className="block text-xl lg:mr-6" htmlFor="password">Password</label>
                </div>
                <div className="w-full lg:flex-1 mb-6">
                  <input className="w-full" type="password" name="user[password]" id="password" />
                </div>
              </div>

              <div className="py-6 flex items-center">
                <button
                  className="btn"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? `Signing in...` : `Sign in`}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
