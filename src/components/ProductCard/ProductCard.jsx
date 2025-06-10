import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as corazonSolido } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IMAGE_URL = 'http://localhost:3000/products';

export default function ProductCard({ product }) {
  return (
    <article className="card" key={product.id}>
      <div className="card-header">
        <img
          src={`${IMAGE_URL}/${product.images[0]}`}
          alt="Jostick PS5 Front"
          className="card-image img-1"
        />
        <img
          src={`${IMAGE_URL}/${product.images[1]}`}
          alt="Jostick PS5 Box"
          className="card-image img-2"
        />
        <div className="card-sale">-35%</div>
        <div className="card-favorite">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={corazonSolido} />
        </div>
        <div className="card-btn-container">
          <a className="card-btn" href="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          <button href="#" className="card-btn">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="card-info">
          <span className="card-normal-price">${product.price}</span>
          <span className="card-price">$ {product.price * 0.9}</span>
        </div>
        <a href="#" className="card-title-link">
          <h3 className="card-title">{product.name}</h3>
        </a>
        <p className="card-description">{product.description}</p>
      </div>
    </article>
  );
}
