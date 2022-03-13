import './index.css'

const TabItem = props => {
  const {eachTabDetails, setActiveTabId, isActive} = props
  const {displayText, tabId} = eachTabDetails

  const onChangeTabId = () => {
    setActiveTabId(tabId)
  }
  const tabBtnClassName = isActive ? 'tab-btn active-btn' : 'tab-btn'

  return (
    <li className="tab-item-container">
      <button
        className={`${tabBtnClassName}`}
        type="button"
        onClick={onChangeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
