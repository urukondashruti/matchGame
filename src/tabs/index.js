import './index.css'

const Tabs = props => {
  const {tabs, onClickActive, activeTab} = props
  const {tabId, displayText} = tabs
  let className1 = null
  const onClickBut = () => {
    onClickActive(tabId)
  }

  if (activeTab === tabId) {
    className1 = 'but1'
  }

  return (
    <li className="list1">
      <button
        type="button"
        onClick={onClickBut}
        className={`but ${className1}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
