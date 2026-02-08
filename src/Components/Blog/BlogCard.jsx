
const BlogCard = ({image}) => {
    return (
        <div className="blog-box">
            <div className="blog-imag">
                 <h1 className="h1">13/01</h1>
                <img src={image} alt=""/>
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <a href="#">CONTINUE READING</a>
            </div>
            
        </div>  
    )
}

export default BlogCard