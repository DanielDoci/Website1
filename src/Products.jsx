import React, { useState } from 'react';

const Phones = 'Smart Phones';
const Laptops = 'Laptops';


export default function Product({ setCart, cart}) {
    const [products] = useState([

/*          *****   Smart-Phones    *****             */
{
  category: Phones,
  name: 'Iphone 8',
  Price: 175,
  image: 'https://assets.swappie.com/iPhone-8-Plus-256GB-Gold-1-1.png'
},  
{
  category: Phones,
  name: 'Iphone X',
  Price: 310,
  image: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=541,fit=contain,format=auto/iPhone-X-64GB-Silver-1-1-1-1-600x541.png'
}, 
{
  category: Phones,
  name: 'Iphone 11',
  Price: 650,
  image: 'https://assets.swappie.com/iphon11musta1.jpg'
}, 
{
  category: Phones,
  name: 'Iphone 12',
  Price: 1100,
  image: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg'
}, 
{
  category: Phones,
  name: 'Samsung S8',
  Price: 160,
  image: 'https://images-na.ssl-images-amazon.com/images/I/61B0qTsNumL._SX679_.jpg'
}, 
{
  category: Phones,
  name: 'Samsung S9',
  Price: 390,
  image: 'https://www.notebookcheck.net/uploads/tx_nbc2/SamsungGalaxyS9__1_.jpg'
}, 
{
  category: Phones,
  name: 'Samsung S10',
  Price: 750,
  image: 'https://hotelo.gr/wp-content/uploads/2019/03/s10.jpg'
}, 
{
  category: Phones,
  name: 'Samsung S20',
  Price: 920,
  image: 'https://www.mytrendyphone.eu/images/Puro-0-3-Nude-TPU-Case-for-Samsung-Galaxy-S20-transparent-8033830288470-28012020-01-p.jpg'
}, 
{
  category: Phones,
  name: 'Samsung S21',
  Price: 1050,
  image: 'https://www.mytrendyphone.eu/images/Samsung-Galaxy-S21-Ultra-5G-128GB-Phantom-Black-8806090887505-15012021-01-p.jpg'
}, 


/*              *****    Laptops    *****             */
{
  category: Laptops,
  name: 'Acer-Aspire 5',
  Price: 550,
  image: 'https://images-na.ssl-images-amazon.com/images/I/71sesDsw95L._AC_SL1500_.jpg'
},        
{
  category: Laptops,
  name: 'Dell Inspiron',
  Price: 430,
  image: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Dell_Inspiron_15_5548.jpg'
},
{
  category: Laptops,
  name: 'HP Pro-Book',
  Price: 800,
  image: 'https://support.hp.com/doc-images/863/c06955147.png'
},
{
  category: Laptops,
  name: 'MacBook Air',
  Price: 770,
  image: 'https://americancomputers.al/wp-content/uploads/2021/03/MACBOOK-AIR.jpg'
},
{
  category: Laptops,
  name: 'MacBook Pro',
  Price: 1888,
  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1613672894000'
},
{
  category: Laptops,
  name: 'Samsung Notebook 9 Pro',
  Price: 1500,
  image: 'https://www.technobuffalo.com/sites/technobuffalo.com/files/styles/large/public/wp/2019/01/notebook-9-pro-4.jpg'
},





]);

const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(Phones);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };    
 
    return (
        <>
          <h1>Galaxy Store</h1>
                Select your product: 
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value={Phones}>{Phones}</option>
            <option value={Laptops}>{Laptops}</option>
          </select>
          <div className="products">
            {getProductsInCategory().map((product, idx) => (
              <div className="product" key={idx}>
                <h3>{product.name}</h3>
                <h4>{product.Price}$</h4>
                <img src={product.image} alt={product.name} />
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      );
    }