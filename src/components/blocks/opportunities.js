import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import MagnifyingGlass from "../../images/magnifying-glass.svg"

class Opportunities extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      region: null,
      depts: [],
      search: ''
    }

    this.selectRegion = this.selectRegion.bind(this)
    this.expandDept = this.expandDept.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.displayByDepartment = this.displayByDepartment.bind(this)
    this.displayRegions = this.displayRegions.bind(this)
    this.departmentIsExpanded = this.departmentIsExpanded.bind(this)
    this.searchMatches = this.searchMatches.bind(this)
  }

  selectRegion (region) {
    const newRegion = this.state.region !== region ? region : null

    return this.setState({ depts: [], region: newRegion })
  }

  expandDept (dept) {
    const depts = [...this.state.depts]
    const index = depts.indexOf(dept)

    if (index === -1) {
      depts.push(dept)
    } else {
      depts.splice(index, 1)
    }

    this.setState({ depts })
  }

  handleSearch (event) {
    this.setState({ search: event.target.value })
  }

  searchMatches (title) {
    return this.state.search.length > 1 &&
      title.toLowerCase().includes(this.state.search.toLowerCase())
  }

  departmentIsExpanded (deptKey, dept) {
    const searchMatches = dept.some(d => this.searchMatches(d.title))

    if (this.state.region) {
      return dept.some(d => d.regions.includes(this.state.region)) && (this.state.search < 2 || searchMatches)
    }

    return this.state.depts.includes(deptKey) || searchMatches
  }

  displayByDepartment ({ edges }) {
    const departments = edges.reduce((depts, { node }) => {
      node.department.forEach(d => {
        if (depts[d] && !depts[d].some(dept => dept.id === node.id)) {
          depts[d].push(node)
        } else {
          depts[d] = [node]
        }
      })

      return depts
    }, {})

    return Object.keys(departments).map(deptKey => {
      const dept = departments[deptKey]

      return (
        <div key={deptKey} className="w-full py-4 border-b border-gray-400">
          <div className="flex items-center justify-between w-full">
            <div
              className="text-xl cursor-pointer"
              onClick={() => this.expandDept(deptKey)}
            >
              {deptKey}
            </div>
            <div className="inline-block text-white bg-blue-500 px-4 py-2 rounded-full text-sm">{dept.length}</div>
          </div>

          <div className={`${this.departmentIsExpanded(deptKey, dept) ? 'block' : 'hidden'}`}>
            {dept.map(d => {
              return (
                <div key={d.id} className={`my-2 ${this.state.search < 2 || this.searchMatches(d.title) ? 'block' : 'hidden'}`}>
                  <Link
                    to={`/opportunities/${d.pageSlug}`}
                    className={`text-blue-500 inline-block hover:underline ${d.regions.includes(this.state.region) ? 'font-bold' : ''}`}
                  >
                    {d.title}
                  </Link>

                  <div className="text-sm text-gray-600">
                    {d.regions.map((r, i) => (
                      <span key={r}>
                        <span className={`${r === this.state.region ? 'font-bold' : ''}`}>{r}</span>
                        {i < d.regions.length - 1 ? ' | ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    })
  }

  displayRegions ({ edges }) {
    const regions = edges.reduce((r, { node }) => {
      node.regions.forEach(region => {
        if (r[region] && !r[region].some(r => r === node.id)) {
          r[region].push(node.id)
        } else {
          r[region] = [node.id]
        }
      })

      return r
    }, {})

    return Object.keys(regions).map(region => (
      <div
        key={region}
        className="w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer"
        onClick={() => this.selectRegion(region)}
      >
        <div className={`p-4 m-4 rounded border border-gray-300 hover:bg-gray-200 hover:shadow-none ${this.state.region === region ? 'bg-gray-300 shadow-inner' : 'bg-white shadow'}`}>
          <div className="text-xl text-blue-500">{region}</div>
          <div className="text-sm text-gray-800">{regions[region].length} {regions[region].length === 1 ? 'opening' : 'openings'}</div>
        </div>
      </div>
    ))
  }

  render () {
    return (
      <StaticQuery
        query={graphql`{
          allDatoCmsOpportunity {
            edges {
              node{
                id
                title
                entity {
                  id
                  name
                  location
                }
                regions
                department
                pageSlug
              }
            }
          }
        }`}
        render={({ allDatoCmsOpportunity }) => (
          <div className="bg-white">

            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1600 500">
              <polygon fill="rgba(0, 155, 255, 0.2)" points="0,200 1500,40 1600,144 1600,394 0,294"/>
              <polygon fill="#005b94" points="0,294 0,160 885,45 1600,215 1600,294 430,360"/>
              <polygon fill="#005b94" opacity=".6" points="0,80 0,390 500,330 300,180"/>
            </svg>

            <div className="container">
              <header className="pb-12">
                <h2 className="text-center mb-0">Regions</h2>
                <div className="mx-auto w-6 h-2 bg-blue-400 opacity-50 my-3"></div>
              </header>

              <p className="text-sm text-center mb-0 text-gray-700">Filter by region</p>

              <div className="flex flex-wrap justify-center -mx-4 mb-8">
                {this.displayRegions(allDatoCmsOpportunity)}
              </div>

              <header className="py-12">
                <h2 className="text-center mb-0">Openings</h2>
                <div className="mx-auto w-6 h-2 bg-blue-400 opacity-50 my-3"></div>
              </header>

              <div className="flex mb-4 items-center justify-center">
                <div className="w-10 pr-2">
                  <MagnifyingGlass />
                </div>
                <div className="flex-1 md:flex-initial md:w-1/2 lg:w-1/3">
                  <input type="search" placeholder="Search by title..." onKeyUp={this.handleSearch} />
                </div>
              </div>

              <div className="flex flex-wrap justify-center">
                {this.displayByDepartment(allDatoCmsOpportunity)}
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}

export default Opportunities
