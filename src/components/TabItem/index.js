import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    clickTabItem(tabId)
  }

  const tabButtonClassName = isActive ? 'tab-btn active' : 'tab-btn'

  return (
    <li className="list-container">
      <button
        type="button"
        className={tabButtonClassName}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
