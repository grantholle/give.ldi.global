import React from "react"
// import Required from "../required"
import { range } from "lodash"
import DayPicker from "react-day-picker"

export default class ContactFrom extends React.Component {
  constructor (props) {
    super(props)

    const currentYear = (new Date()).getFullYear()

    this.state = {
      loading: false,
      method: 'cc',
      recurrence: 'once',
      years: range(currentYear, currentYear + 8),
      months: range(1, 12),
      selectedDay: new Date(),
      funds: [{
        id: 1,
        name: 'Fund 1'
      }, {
        id: 2,
        name: 'Fund 2'
      }],
      donations: [{
        amount: '10',
        fund_id: 1,
        note: ''
      }]
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeMethod = this.changeMethod.bind(this)
    this.changeRecurrence = this.changeRecurrence.bind(this)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.addFund = this.addFund.bind(this)
    this.removeFund = this.removeFund.bind(this)
    this.handleDonationChanges = this.handleDonationChanges.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    // this.setState({ loading: true })

    return console.log(e.target.recurrence_day.value)

  }

  changeMethod (e) {
    this.setState({ method: e.target.value })
  }

  changeRecurrence (e) {
    this.setState({ recurrence: e.target.value })
  }

  handleDayClick (day) {
    this.setState({ selectedDay: day });
  }

  handleDonationChanges (value, index, key) {
    const donations = [...this.state.donations]
    donations[index][key] = value

    this.setState({ donations })
  }

  addFund (e) {
    const donations = [...this.state.donations]
    donations.push({
      amount: '',
      fund_id: '',
      note: ''
    })

    this.setState({ donations })
  }

  removeFund (index) {
    const donations = [...this.state.donations]
    donations.splice(index, 1)

    this.setState({ donations })
  }

  render () {
    return (
      <div style={{ paddingTop: '0' }}>
        <div className="container">
          <form action="/payments" method="post" onSubmit={this.handleSubmit}>
            <div className="flex flex-wrap -mx-6">

              <div className="w-full md:w-1/2 px-6">
                <h3 className="pt-10 md:pt-0">Donation information</h3>

                {this.state.donations.map((donation, index) => (
                  <div className={index > 0 ? `pt-8` : ``} key={index}>
                    <div className="mb-2 flex justify-between items-center">
                      <label className="block" htmlFor={`amount_${index}`}>Donation amount (USD)</label>
                      {index > 0 &&
                        <button type="button" className="btn text-xs" onClick={() => this.removeFund(index)}>Remove</button>
                      }
                    </div>
                    <div className="mb-10">
                      <input type="number" name="donations[][amount]" id={`amount_${index}`} min="1.00" step="0.01" value={donation.amount} onChange={e => this.handleDonationChanges(e.target.value, index, 'amount')} />
                    </div>

                    <div className="mb-2">
                      <label className="block" htmlFor={`fund_${index}`}>Fund</label>
                    </div>
                    <div className="mb-10">
                      <select
                        value={donation.fund_id}
                        onChange={e => this.handleDonationChanges(e.target.value, index, 'fund_id')}
                        id={`fund_${index}`}
                        name="donations[][fund_id]"
                      >
                        {this.state.funds.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                      </select>
                    </div>

                    <div className="mb-2">
                      <label className="block" htmlFor={`note_${index}`}>Note</label>
                    </div>
                    <div className="mb-8">
                      <input type="text" name="donations[][note]" id={`note_${index}`} value={donation.note} onChange={e => this.handleDonationChanges(e.target.value, index, 'note')} />
                    </div>

                  </div>
                ))}

                <div className="text-right mb-10">
                  <button onClick={this.addFund} className="btn text-xs" type="button">Give to another fund</button>
                </div>

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

                    {this.state.recurrence === '1week' &&
                      <p className="text-sm">The first date upon which to make this donation. Donations will follow on every single week moving forward.</p>
                    }

                    {this.state.recurrence === '2weeks' &&
                      <p className="text-sm">The first date upon which to make this donation. Donations will follow on every other week moving forward.</p>
                    }

                    {this.state.recurrence === 'month' &&
                      <>
                      <p className="text-sm mb-2">The first date upon which to make this donation. Donations will follow on every month moving forward on the same day of the month as the start date.</p>
                      <p className="text-sm">In cases where the day of month is greater than the number of days in the actual month, the system will apply the donation on the last day of the month.</p>
                      </>
                    }

                    {this.state.recurrence === 'semi' &&
                      <>
                      <p className="text-sm mb-2">The first date upon which to make this donation. Donations will follow on every 1st and 15th moving forward.</p>
                      <p className="text-sm">These always occur on the 1st and 15th, so the actual donations will start on the first of these to occur <strong>after</strong> the start date.</p>
                      </>
                    }

                    <div className="text-center md:text-left">
                      <DayPicker
                        onDayClick={this.handleDayClick}
                        selectedDays={this.state.selectedDay}
                        disabledDays={{ before: new Date() }}
                      />
                      <input type="hidden" id="recurrence_day" name="recurrence[start]" value={this.state.selectedDay} />
                    </div>
                  </div>
                }

              </div>

              <div className="w-full md:w-1/2 px-6">
                <h3 className="pt-10 md:pt-0">Billing information</h3>
                <p className="error-message">Example error.</p>

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

                <h3 className="pt-10">Payment information</h3>

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

                <div className="py-4 text-right">
                  <button
                    className="btn"
                    disabled={this.state.loading}
                    type="submit"
                  >
                    {this.state.loading ? `Working...` : `Donate`}
                  </button>
                </div>

              </div>

            </div>

          </form>
        </div>
      </div>
    )
  }
}
