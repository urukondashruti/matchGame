import './index.css'

const Items = props => {
  const {Item, onClickMatch} = props
  const {id, imageUrl, thumbnailUrl, category} = Item
  const onClickImg = () => {
    onClickMatch(id)
  }

  return (
    <li className="list3">
      <button type="button" onClick={onClickImg} className="but6">
        <img src={thumbnailUrl} className="but5" alt="thumbnail" />
      </button>
    </li>
  )
}

export default Items
