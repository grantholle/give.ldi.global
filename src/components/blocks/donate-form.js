import React from "react"
// import Required from "../required"
import { range } from "lodash"
import DayPicker from "react-day-picker"

export default class ContactFrom extends React.Component {
  constructor (props) {
    super(props)

    const currentYear = (new Date()).getFullYear()

    this.state = {
      error: ``,
      loading: false,
      method: 'cc',
      recurrence: 'once',
      years: range(currentYear, currentYear + 8),
      months: range(1, 12),
      selectedDay: new Date()
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeMethod = this.changeMethod.bind(this)
    this.changeRecurrence = this.changeRecurrence.bind(this)
    this.handleDayClick = this.handleDayClick.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    // this.setState({ loading: true })

    return console.log(e.target.recurrence_day.value)

    // if (!email || !password || (password !== password_confirmation)) {
    //   this.setState({ loading: false })
    //   e.preventDefault()

    //   return this.setState({ error: `Please fill out the form completely.` })
    // }
  }

  changeMethod (e) {
    this.setState({ method: e.target.value })
  }

  changeRecurrence (e) {
    this.setState({ recurrence: e.target.value })
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }

  render () {
    return (
      <div>
        <div className="container">
          <form action="/payments" method="post" onSubmit={this.handleSubmit}>
            <div className="flex flex-wrap -mx-6">

              <div className="w-full md:w-1/2 px-6">
                <h3>Billing information</h3>
                <p className="text-red-600 font-bold">Example error.</p>

                {this.state.error && <p className="text-red-600 font-bold">{this.state.error}</p>}

                  <div className="mb-2">
                    <label className="block" htmlFor="first_name">First name</label>
                  </div>
                  <div className="mb-6">
                    <input className="w-full" type="text" name="billing[first_name]" id="first_name" />
                  </div>

                  <div className="mb-2">
                    <label className="block" htmlFor="last_name">Last name</label>
                  </div>
                  <div className="mb-6">
                    <input className="w-full" type="text" name="billing[last_name]" id="last_name" />
                  </div>

                  <div className="mb-2">
                    <label className="block" htmlFor="street_1">Street</label>
                  </div>
                  <div className="mb-6">
                    <input className="w-full" type="text" name="billing[street_1]" id="street_1" />
                  </div>

                  <div className="mb-2">
                    <label className="block" htmlFor="city">City</label>
                  </div>
                  <div className="mb-6">
                    <input className="w-full" type="text" name="billing[city]" id="city" />
                  </div>

                  <div className="flex -mx-4">
                    <div className="w-1/2 px-4">
                      <div className="mb-2">
                        <label className="block" htmlFor="state">State</label>
                      </div>
                      <div className="mb-6">
                        <select id="state" name="billing[state]">
                          <option disabled defaultValue></option>
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
                        <label className="block" htmlFor="postal_code">Postal code</label>
                      </div>
                      <div className="mb-6">
                        <input className="w-full" type="number" name="billing[postal_code]" id="postal_code" />
                      </div>
                    </div>
                  </div>

              </div>

              <div className="w-full md:w-1/2 px-6">
                <h3 className="pt-10 md:pt-0">Donation information</h3>

                <div className="mb-2">
                  <label className="block" htmlFor="period">Donation type</label>
                </div>
                <div className="mb-10">
                  <select
                    value={this.state.recurrence}
                    onChange={this.changeRecurrence}
                    id="period"
                    name="recurrence[period]"
                  >
                    <option value="once">One-time donation</option>
                    <option value="1week">Weekly</option>
                    <option value="2weeks">Bi-weekly</option>
                    <option value="month">Monthly</option>
                    <option value="semi">Semi-monthly</option>
                  </select>
                </div>

                {this.state.recurrence !== 'once' &&
                  <div className="mb-6">
                    <div className="mb-2">
                      <label>Starting day</label>
                    </div>

                    <div className="">
                      <DayPicker
                        onDayClick={this.handleDayClick}
                        selectedDays={this.state.selectedDay}
                      />
                      <input type="hidden" id="recurrence_day" name="recurrence[start]" value={this.state.selectedDay} />
                    </div>
                  </div>
                }

                <h3 className="pt-10 md:pt-0">Payment information</h3>

                <div className="mb-2">
                  <label className="block" htmlFor="payment_method">Payment method</label>
                </div>
                <div className="mb-10">
                  <select
                    value={this.state.method}
                    onChange={this.changeMethod}
                    id="payment_method"
                    name="payment_method"
                  >
                    <option value="cc">Credit or debit card</option>
                    <option value="account">Checking or savings account</option>
                  </select>
                </div>

                <div className={this.state.method === 'cc' ? 'block' : 'hidden'}>
                  <div className="flex">
                    <div className="flex-1 pr-4">
                      <div className="mb-2">
                        <label className="block" htmlFor="card_number">Card number</label>
                      </div>
                      <div className="mb-6">
                        <input type="number" id="card_number" name="payment_card[card_number]" />
                      </div>
                    </div>

                    <div style={{ width: `60px` }}>
                      <div className="mb-2">
                        <label className="block" htmlFor="verification_value">CVV</label>
                      </div>
                      <div className="mb-6">
                        <input type="number" id="verification_value" name="payment_card[verification_value]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-1/2 pr-2">
                      <div className="mb-2">
                        <label className="block" htmlFor="expires_month">Exp. month</label>
                      </div>
                      <div className="mb-6">
                        <select id="expires_month" name="payment_card[expires_month]">
                          {this.state.months.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="w-1/2 pl-2">
                      <div className="mb-2">
                        <label className="block" htmlFor="expires_year">Exp. year</label>
                      </div>
                      <div className="mb-6">
                        <select id="expires_year" name="payment_card[expires_year]">
                          {this.state.years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={this.state.method === 'account' ? 'block' : 'hidden'}>
                  <div className="mb-2">
                    <label className="block" htmlFor="account_number">Account number</label>
                  </div>
                  <div className="mb-6">
                    <input type="number" id="account_number" name="payment_card[account_number" />
                  </div>

                  <div className="mb-2">
                    <label className="block" htmlFor="routing_number">Routing number</label>
                  </div>
                  <div className="mb-6">
                    <input type="number" id="routing_number" name="payment_card[routing_number" />
                  </div>
                </div>

              </div>

            </div>

            <div className="py-4 text-right">
              <button
                className="btn"
                disabled={this.state.loading}
                type="submit"
              >
                {this.state.loading ? `Working...` : `Donate`}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
