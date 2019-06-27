import React from "react"
// import Required from "../required"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { range } from "lodash"
import DayPicker from "react-day-picker"

export default class ContactFrom extends React.Component {
  constructor (props) {
    super(props)

    const currentYear = (new Date()).getFullYear()

    this.state = {
      loading: false,
      inReview: false,
      years: range(currentYear, currentYear + 8),
      months: range(1, 12),
      form: {
        first_name: '',
        last_name: '',
        street_1: '',
        city: '',
        state: '',
        postal_code: '',
        payment_method: 'cc',
        period: 'once',
        start: new Date(),
        card_number: '',
        verification_value: '',
        expires_month: '',
        expires_year: '',
        account_number: '',
        routing_number: '',
        recurrence_day: ''
      },
      funds: [{
        id: 1,
        name: 'Fund 1'
      }, {
        id: 2,
        name: 'Fund 2'
      }],
      donations: [{
        key: (new Date()).getMilliseconds(),
        amount: 10,
        fund_id: 1,
        note: ''
      }],
      recurrences: [
        {
          value: `once`,
          label: `One-time donation`
        },
        {
          value: `1week`,
          label: `Weekly donation`
        },
        {
          value: `2weeks`,
          label: `Bi-weekly donation`
        },
        {
          value: `month`,
          label: `Monthly donation`
        },
        {
          value: `semi`,
          label: `Semi-monthly donation`
        }
      ],
      methods: [
        {
          value: `cc`,
          label: `Credit or debit card`
        },
        {
          value: `account`,
          label: `Checking or savings account`
        }
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeMethod = this.changeMethod.bind(this)
    this.changeRecurrence = this.changeRecurrence.bind(this)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.addFund = this.addFund.bind(this)
    this.removeFund = this.removeFund.bind(this)
    this.handleDonationChanges = this.handleDonationChanges.bind(this)
    this.handleFormChanges = this.handleFormChanges.bind(this)
    this.toggleReview = this.toggleReview.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    this.setState({ loading: true })

    // return console.log(e.target.recurrence_day.value)

    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  toggleReview () {
    this.setState({ inReview: !this.state.inReview }, () => {
      window.scrollTo(0, 0)
    })
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

  handleFormChanges (value, key) {
    const form = {
      ...this.state.form,
      [key]: value
    }

    this.setState({ form })
  }

  addFund (e) {
    const donations = [...this.state.donations]
    const nextFund = this.state.funds.find(f => !donations.some(d => d.fund_id === f.id))

    donations.push({
      key: (new Date()).getMilliseconds(),
      amount: 10,
      fund_id: nextFund ? nextFund.id : this.state.funds[0].id,
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
        <div className="container relative">
          <form action="/payments" method="post" onSubmit={this.handleSubmit}>

            <div className={`flex flex-wrap -mx-6 ${this.state.inReview ? 'fade-hide' : 'fade-show'}`}>
              <div className="w-full md:w-1/2 px-6">
                <h3 className="pt-10 md:pt-0">Donation information</h3>

                <ReactCSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={250}
                  transitionLeaveTimeout={250}
                >
                {this.state.donations.map((donation, index) => (
                  <div className={`flex flex-wrap -mx-4 ${index > 0 ? `pt-8` : ``}`} key={donation.key}>
                    <div className="w-1/2 px-4">
                      <div className="mb-2">
                        <label htmlFor={`amount_${index}`}>Amount (USD)</label>
                      </div>
                      <div className="mb-10">
                        <input type="number" name="donations[][amount]" id={`amount_${index}`} min="1.00" step="0.01" value={donation.amount} onChange={e => this.handleDonationChanges(e.target.value, index, 'amount')} />
                      </div>
                    </div>

                    <div className="w-1/2 px-4">
                      <div className="mb-2">
                        <label htmlFor={`fund_${index}`}>Fund</label>
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
                    </div>

                    <div className="w-full px-4 mb-8">
                      <div className="flex justify-between items-end -mx-4">
                        <div className="flex-1 px-4">
                          <div className="mb-2">
                            <label htmlFor={`note_${index}`}>Note</label>
                          </div>
                          <div className="">
                            <input type="text" name="donations[][note]" id={`note_${index}`} value={donation.note} onChange={e => this.handleDonationChanges(e.target.value, index, 'note')} />
                          </div>
                        </div>

                        {index > 0 &&
                          <div className="px-4">
                            <button type="button" className="btn text-xs" onClick={() => this.removeFund(index)}>Remove</button>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                ))}
                </ReactCSSTransitionGroup>

                <div className="text-right mb-10">
                  <button onClick={this.addFund} className="btn text-xs" type="button">Give to another fund</button>
                </div>

                <div className="mb-2">
                  <label htmlFor="period">Donation type</label>
                </div>
                <div className="mb-10">
                  <select
                    value={this.state.form.period}
                    onChange={e => this.handleFormChanges(e.target.value, 'period')}
                    id="period"
                    name="recurrence[period]"
                  >
                    {this.state.recurrences.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                  </select>
                </div>

                {this.state.form.period !== 'once' &&
                  <div className="mb-6">
                    <div className="mb-2">
                      <label>Starting day</label>
                    </div>

                    {this.state.form.period === '1week' &&
                      <p className="text-sm">The first date upon which to make this donation. Donations will follow on every single week moving forward.</p>
                    }

                    {this.state.form.period === '2weeks' &&
                      <p className="text-sm">The first date upon which to make this donation. Donations will follow on every other week moving forward.</p>
                    }

                    {this.state.form.period === 'month' &&
                      <>
                      <p className="text-sm mb-2">The first date upon which to make this donation. Donations will follow on every month moving forward on the same day of the month as the start date.</p>
                      <p className="text-sm">In cases where the day of month is greater than the number of days in the actual month, the system will apply the donation on the last day of the month.</p>
                      </>
                    }

                    {this.state.form.period === 'semi' &&
                      <>
                      <p className="text-sm mb-2">The first date upon which to make this donation. Donations will follow on every 1st and 15th moving forward.</p>
                      <p className="text-sm">These always occur on the 1st and 15th, so the actual donations will start on the first of these to occur <strong>after</strong> the start date.</p>
                      </>
                    }

                    <div className="text-center md:text-left">
                      <DayPicker
                        onDayClick={day => this.handleFormChanges(day, 'start')}
                        selectedDays={this.state.form.start}
                        disabledDays={{ before: new Date() }}
                      />
                      <input type="hidden" id="recurrence_day" name="recurrence[start]" value={this.state.selectedDay} />
                    </div>
                  </div>
                }

              </div>

              <div className="w-full md:w-1/2 px-6">
                <h3 className="pt-10 md:pt-0">Billing information</h3>

                <div className="mb-2">
                  <label htmlFor="first_name">First name</label>
                </div>
                <div className="mb-6">
                  <input type="text" value={this.state.form.first_name} onChange={e => this.handleFormChanges(e.target.value, 'first_name')} name="billing[first_name]" id="first_name" />
                </div>

                <div className="mb-2">
                  <label htmlFor="last_name">Last name</label>
                </div>
                <div className="mb-6">
                  <input type="text" value={this.state.form.last_name} onChange={e => this.handleFormChanges(e.target.value, 'last_name')} name="billing[last_name]" id="last_name" />
                </div>

                <div className="mb-2">
                  <label htmlFor="street_1">Street</label>
                </div>
                <div className="mb-6">
                  <input type="text" value={this.state.form.street_1} onChange={e => this.handleFormChanges(e.target.value, 'street_1')} name="billing[street_1]" id="street_1" />
                </div>

                <div className="mb-2">
                  <label htmlFor="city">City</label>
                </div>
                <div className="mb-6">
                  <input type="text" value={this.state.form.city} onChange={e => this.handleFormChanges(e.target.value, 'city')} name="billing[city]" id="city" />
                </div>

                <div className="flex -mx-4">
                  <div className="w-1/2 px-4">
                    <div className="mb-2">
                      <label htmlFor="state">State</label>
                    </div>
                    <div className="mb-6">
                      <select id="state" value={this.state.form.state} onChange={e => this.handleFormChanges(e.target.value, 'state')} name="billing[state]">
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
                      <label htmlFor="postal_code">Postal code</label>
                    </div>
                    <div className="mb-6">
                      <input type="number" value={this.state.form.postal_code} onChange={e => this.handleFormChanges(e.target.value, 'postal_code')} name="billing[postal_code]" id="postal_code" />
                    </div>
                  </div>
                </div>

                <h3 className="pt-10">Payment information</h3>

                <div className="mb-2">
                  <label htmlFor="payment_method">Payment method</label>
                </div>
                <div className="mb-10">
                  <select
                    value={this.state.form.payment_method}
                    onChange={e => this.handleFormChanges(e.target.value, 'payment_method')}
                    id="payment_method"
                    name="payment_method"
                  >
                    {this.state.methods.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                  </select>
                </div>

                <div className={this.state.form.payment_method === 'cc' ? 'block' : 'hidden'}>
                  <div className="flex">
                    <div className="flex-1 pr-4">
                      <div className="mb-2">
                        <label htmlFor="card_number">Card number</label>
                      </div>
                      <div className="mb-6">
                        <input type="number" id="card_number" value={this.state.form.card_number} onChange={e => this.handleFormChanges(e.target.value, 'card_number')} name="payment_card[card_number]" />
                      </div>
                    </div>

                    <div style={{ width: `60px` }}>
                      <div className="mb-2">
                        <label htmlFor="verification_value">CVV</label>
                      </div>
                      <div className="mb-6">
                        <input type="number" id="verification_value" value={this.state.form.verification_value} onChange={e => this.handleFormChanges(e.target.value, 'verification_value')} name="payment_card[verification_value]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-1/2 pr-2">
                      <div className="mb-2">
                        <label htmlFor="expires_month">Exp. month</label>
                      </div>
                      <div className="mb-6">
                        <select id="expires_month" value={this.state.form.expires_month} onChange={e => this.handleFormChanges(e.target.value, 'expires_month')} name="payment_card[expires_month]">
                          {this.state.months.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="w-1/2 pl-2">
                      <div className="mb-2">
                        <label htmlFor="expires_year">Exp. year</label>
                      </div>
                      <div className="mb-6">
                        <select id="expires_year" value={this.state.form.expires_year} onChange={e => this.handleFormChanges(e.target.value, 'expires_year')} name="payment_card[expires_year]">
                          {this.state.years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={this.state.form.payment_method === 'account' ? 'block' : 'hidden'}>
                  <div className="mb-2">
                    <label htmlFor="account_number">Account number</label>
                  </div>
                  <div className="mb-6">
                    <input type="number" id="account_number" value={this.state.form.account_number} onChange={e => this.handleFormChanges(e.target.value, 'account_number')} name="payment_card[account_number]" />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="routing_number">Routing number</label>
                  </div>
                  <div className="mb-6">
                    <input type="number" id="routing_number" value={this.state.form.routing_number} onChange={e => this.handleFormChanges(e.target.value, 'routing_number')} name="payment_card[routing_number]" />
                  </div>
                </div>

                <div className="py-4 text-right">
                  <button className="btn blue" type="button" onClick={this.toggleReview}>Review</button>
                </div>

              </div>
            </div>

            <div className={this.state.inReview ? 'fade-show' : 'fade-hide'}>
              <p className="max-w-md mx-auto text-center">Please review the information below.</p>

              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 px-6">
                  <h3 className="pt-10 md:pt-0">Donation information</h3>

                  <p className="mb-2">I'm making a <strong>{this.state.recurrences.find(r => r.value === this.state.form.period).label.toLowerCase()}</strong>.</p>

                  {this.state.form.period === '1week' &&
                    <p className="text-sm">The first donation will be made on {this.state.form.start.toLocaleDateString()}. Donations will follow on every single week moving forward.</p>
                  }

                  {this.state.form.period === '2weeks' &&
                    <p className="text-sm">The first donation will be made on {this.state.form.start.toLocaleDateString()}. Donations will follow on every other week moving forward.</p>
                  }

                  {this.state.form.period === 'month' &&
                    <>
                    <p className="text-sm mb-2">The first donation will be made on {this.state.form.start.toLocaleDateString()}. Donations will follow on every month moving forward on the same day of the month as the start date.</p>
                    <p className="text-sm">In cases where the day of month is greater than the number of days in the actual month, the system will apply the donation on the last day of the month.</p>
                    </>
                  }

                  {this.state.form.period === 'semi' &&
                    <>
                    <p className="text-sm mb-2">The first donation will be made on {this.state.form.start.toLocaleDateString()}. Donations will follow on every 1st and 15th moving forward.</p>
                    <p className="text-sm">These always occur on the 1st and 15th, so the actual donations will start on the first of these to occur <strong>after</strong> the start date.</p>
                    </>
                  }

                  {this.state.donations.map(donation => (
                    <div className={`border-b border-gray-600`} key={donation.key}>
                      <div className="py-4 flex flex-wrap justify-between items-center">
                        <div>
                          {this.state.funds.find(f => f.id === donation.fund_id).name}
                        </div>
                        <div className="text-right">
                          ${parseFloat(donation.amount).toFixed(2)}
                        </div>
                        <div className="w-full text-gray-700">
                          {donation.note}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className={`border-t border-gray-600`}>
                    <div className="py-4 flex flex-wrap justify-between items-center font-bold">
                      <div>
                        Total
                      </div>
                      <div className="text-right">
                        ${parseFloat(this.state.donations.reduce((total, d) => parseFloat(d.amount) + total, 0)).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-6">
                  <h3 className="pt-10 md:pt-0">Billing information</h3>

                  <div>{this.state.form.first_name} {this.state.form.last_name}</div>
                  <div>{this.state.form.street_1}</div>
                  <div>{this.state.form.city}, {this.state.form.state} {this.state.form.postal_code}</div>

                  <h3 className="pt-10">Payment information</h3>

                  <p className="mb-2">I'm paying by <strong>{this.state.methods.find(m => m.value === this.state.form.payment_method).label.toLowerCase()}</strong>.</p>

                  <p className={this.state.form.payment_method === 'cc' ? 'block text-sm' : 'hidden'}>
                    My card number is <strong>{this.state.form.card_number}</strong> and the CVV is <strong>{this.state.form.verification_value}</strong>. It expires on <strong>{this.state.form.expires_month}/{this.state.form.expires_year}</strong>.
                  </p>

                  <p className={this.state.form.payment_method === 'account' ? 'block text-sm' : 'hidden'}>
                    My account number is <strong>{this.state.form.account_number}</strong> with the routing number of <strong>{this.state.form.routing_number}</strong>.
                  </p>
                </div>
              </div>

              <div className="text-center py-8">
                <button className="btn mr-6" type="button" onClick={this.toggleReview}>Edit</button>
                <button
                  className="btn blue"
                  type="submit"
                  disabled={this.state.loading}
                >
                  {this.state.loading ? `Working...` : `Donate`}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
