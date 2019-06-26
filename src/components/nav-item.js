import React from "react"
import { Link } from "gatsby"

class DropDown extends React.Component {
  constructor ({ props }) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
  }

  render () {
    return (
      <div>
        <a
          href="/#"
          onClick={this.handleClick}
          className="top-nav-link dropdown-anchor"
          dangerouslySetInnerHTML={{
            __html: this.props.item.label
          }}
        />

        <div
          className={`dropdown-menu`}
        >
          {this.props.item.treeChildren.map(child => (
            <LinkElement className="top-nav-link" key={child.id} item={child} />
          ))}
        </div>
      </div>
    )
  }
}

const LinkElement = ({ item }) => {
  if (item.treeChildren && item.treeChildren.length > 0) {
    return <DropDown item={item} />
  }

  if (item.externalUrl) {
    return <a className="top-nav-link" href={item.externalUrl}>{item.label}</a>
  }

  if (item.pageReference) {
    return <Link className="top-nav-link" to={`/${item.pageReference.pageSlug}`}>{item.label}</Link>
  }

  return <div>{item.label}</div>
}

const NavItem = ({ item, footer }) => (
  <div className={footer ? 'footer-nav-item' : 'top-nav-item'}>
    <LinkElement item={item.node} />
  </div>
)

export default NavItem
