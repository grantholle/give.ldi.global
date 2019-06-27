import React from "react"
import axios from "axios"
import { navigate } from "gatsby"

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
    this.setState({ loading: true })

    const question = e.target.question.value
    const email = e.target.email.value
    const name = e.target.name.value
    const phone = e.target.phone.value

    if (!question || !name || !email) {
      this.setState({ loading: false })

      return this.setState({ error: `Please fill out the form completely.` })
    }

    const data = {
      question,
      email,
      name,
      phone,
    }

    try {
      await axios.post(`/.netlify/functions/submit-contact`, data)
    } catch (e) {
      this.setState({ loading: false })
      return this.setState({ error: `An error occurred, please try again.` })
    }

    navigate(`/thanks`)
  }

  render () {
    return (
      <div>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/5 lg:pr-16 mb-10">
              {this.state.error && <p className="error-message">{this.state.error}</p>}

              <form onSubmit={this.handleSubmit}>
                <div>
                  <label className="block text-xl mb-4">Who can best help you with your question? <span className="text-red-600">*</span></label>
                  <div className="text-gray-700 mb-6">
                    <label className="w-full text-sm block">
                      <input className="mb-2 mr-4" type="radio" name="question" value="Employment Inquiries" />
                      Employment Inquiries
                    </label>
                    <label className="w-full text-sm block">
                      <input className="mb-2 mr-4" type="radio" name="question" value="Donor Opportunities" />
                      Donor Opportunities
                    </label>
                    <label className="w-full text-sm block">
                      <input className="mb-2 mr-4" type="radio" name="question" value="US Employment" />
                      US Employment
                    </label>
                    <label className="w-full text-sm block">
                      <input className="mb-2 mr-4" type="radio" name="question" value="Other Details Needed" />
                      Other Details Needed
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-auto mb-6">
                    <label className="block text-xl lg:mr-6" htmlFor="name">What's your name? <span className="text-red-600">*</span></label>
                  </div>
                  <div className="w-full lg:flex-1 mb-6">
                    <input type="text" name="name" id="name" placeholder="Jane Smith" />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-auto mb-6">
                    <label className="block text-xl lg:mr-6" htmlFor="email">What's your email? <span className="text-red-600">*</span></label>
                  </div>
                  <div className="w-full lg:flex-1 mb-6">
                    <input type="email" name="email" id="email" placeholder="jane@gmail.com" />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-auto mb-6">
                    <label className="block text-xl lg:mr-6" htmlFor="phone">What's your phone number?</label>
                  </div>
                  <div className="w-full lg:flex-1 mb-6">
                    <input type="tel" name="phone" id="phone" placeholder="########" />
                  </div>
                </div>

                <div className="py-6">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="Contact" />
                  <button
                    className="btn"
                    disabled={this.state.loading}
                  >
                    {this.state.loading ? `Sending...` : `Submit`}
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full lg:w-2/5 text-blue-500 text-xl lg:text-2xl">
              <address className="not-italic">
                <div className="font-bold">LDi Corporate Office</div>
                <div>1635 Highway 34 East, Suite B</div>
                <div className="mb-8">Newnan, GA 30265-2173</div>

                <div>Tel: <a className="text-blue-500 underline" href="tel:(770) 683 0808">(770) 683 0808</a></div>
                <div>Toll-Free (US): <a className="text-blue-500 underline" href="tel:(866) 436 0379">(866) 436 0379</a></div>
                <div>Fax: (770) 683-0809</div>
                <div>Email: <a className="text-blue-500 underline" href="mailto:vp@ldius.org">vp@ldius.org</a></div>
              </address>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
