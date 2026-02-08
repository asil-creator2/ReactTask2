
const CollectionCard = ({item}) => {
  return (
    <div className={item.className}>
        <h4>{item.title}</h4>
        <h2>{item.titleBig}</h2>
        <span>{item.text}</span>
        <button className="white">{item.button}</button>
     </div>
  )
}

export default CollectionCard