

const PhotoCollectionCard = ({ item }) => {
  return (
    <div className={item.className}>
      <h2>{item.h2}</h2>
      <h3>{item.h3}</h3>
    </div>
  );
};


export default PhotoCollectionCard