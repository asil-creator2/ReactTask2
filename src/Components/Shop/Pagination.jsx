import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// the pagination is used in shop page & Blog Page
const Pagination = () => {
  return (
    <section id="Pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><FontAwesomeIcon icon={faArrowRight} className="i" /></a>
    </section>
  )
}

export default Pagination