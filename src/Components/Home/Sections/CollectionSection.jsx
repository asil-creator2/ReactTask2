import CollectionCard from "../Cards/CollectionCard";
import PhotoCollectionCard from "../Cards/PhotoCollectionCard";

const collectionData = [
  {
    id: 1,
    titleSmall: "Crazy Deals",
    titleBig: "Buy 1 Get 1 Free",
    text: "The Best Classic Dress Is On Sale At Care",
    button: "Learn More",
    className: "bannar_box",
  },
  {
    id: 2,
    titleSmall: "Spring / Summer",
    titleBig: "Upcoming Season",
    text: "The Best Classic Dress Is On Sale At Care",
    button: "Collection",
    className: "bannar_box bannar_box2",
  },
];
const photoCollections = [
  {
    id: 1,
    h2: "SEASONAL SALE",
    h3: "Winter Collection -50% OFF",
    className: "bannar_box",
  },
  {
    id: 2,
    h2: "NEW FOOTWEAR COLLECTION",
    h3: "Spring / Summer 2022",
    className: "bannar_box bannnarr_1",
  },
  {
    id: 3,
    h2: "T-SHIRTS",
    h3: "New Trendy Prints",
    className: "bannar_box bannnarr_2",
  },
];


const CollectionSection = () => {

  return (
    <div>
        <section id="sm_bannar" className="section-p1">

            {collectionData.map(card => (
                <CollectionCard key={card.id} item={card} />
            ))}
        </section>
        <section id="bannar3">
            {photoCollections.map(card => (
                <PhotoCollectionCard key={card.id} item={card}/>
            ))}
        </section>
    </div>
  )
}

export default CollectionSection