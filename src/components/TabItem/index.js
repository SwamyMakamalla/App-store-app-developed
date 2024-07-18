// Write your code here
import './index.css'

const TabItem = props => {
  const {eachItem, onTabSelect, activeClass} = props
  const {displayText, tabId} = eachItem
  const tabItem = () => {
    onTabSelect(tabId)
  }
  const onHoverTab = activeClass ? 'focused-tab' : ''

  return (
    <li className={`list-item ${onHoverTab}`} onClick={tabItem}>
      <button className={`title-app ${onHoverTab}`} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
