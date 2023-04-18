import React from 'react';
import './Category.css'
import { Link } from 'react-router-dom';
import man_product from '/src/assets/catalog/man_product.png'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { database } from "../../Firebase";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Category(props) {
    const id = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const q = query(collection(database, "product"), where("id", "==", id.category));
        const allProduct = await getDocs(q)
        let products = []
        allProduct.forEach(product => {
            products.push(product.data())
        })
        setProduct(products)
        console.log(products)
    }

    // const viewProducts = product.map((product, index) => {
    // return (
    //     <div className='man_catalog_container'>
    //         <div className='road'>
    //             <div><Link to='/'>Главная</Link></div>
    //             <div><Link to='/Clothes'>Одежда</Link></div>
    //             <div><Link to='/man_catalog'>Для него</Link></div>
    //         </div>
    //         <div className='man_title'>Для него</div>
    //         <div>
    //             <div className='all_man_product'>
    //                 <div className='product_first_line'>
    //                     <Link to='/product/:1'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                     <Link to='/product/:2'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                  s          <div className='price'>2 880 KGS</div>
    //                  s      </div>
    //                  s  </div>
    //                  sLink>
    //                  sink to='/product/:3'>
    //                  s  <div className='product_card'>
    //                  s      <img src={man_product} alt="" />
    //                  s      <div className='product_name_price'>
    //                  s          <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                 </div>
    //                 <div className='product_second_line'>
    //                     <Link to='/product/:4'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                     <Link to='/product/:5'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                     <Link to='/product/:6'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                 </div>
    //                 <div className='product_third_line'>
    //                     <Link to='/product/:7'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                     <Link to='/product/:8'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                     <Link to='/product/:9'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                 </div>
    //                 <div className='product_fourth_line'>
    //                     <Link to='/product/:10'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                     <Link to='/product/:11'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                     <Link to='/product/:12'>
    //                         <div className='product_card'>
    //                             <img src={man_product} alt="" />
    //                             <div className='product_name_price'>
    //                                 <div className='product_name'>Мужские баскетбольные шорты <br /> Nike Dri-FIT Elite</div>
    //                                 <div className='price'>2 880 KGS</div>
    //                             </div>
    //                         </div>
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    // })
                        
    const viewProducts = product.map((product, index) => {
    return (
        <div>
            <div className="product_container">
                        <Link to='/product/:1'>
                            <div className='product_card'>
                                <img src={product.photo} alt="" />
                                <div className='product_name_price'>
                                    <div className='product_name'>{product.name}</div>
                                    <div className='price'>{product.price} KGS</div>
                                </div>
                            </div>
                        </Link>
            </div>
        </div>  
    )
    })
    // const viewProducts = product.map((product, index) => {
    //     return (
    //         <Card text="123123" key={index}>
    //             <Card.Img variant="top" src={product.photo} />
    //             <Card.Body>
    //                 <Card.Title>{product.name}</Card.Title>
    //                 <Card.Text>
    //                 {product.description}
    //                 </Card.Text>
    //             </Card.Body>
    //             <Card.Footer>
    //                 <small className="text-muted">{product.price}$</small>
    //             </Card.Footer>
    //         </Card>
    //     )
    // })
    return (
        <div>
            <div className="category_container">
                        <div className='road'>
                            <div><Link to='/'>Главная</Link></div>
                            <div><Link to='/Clothes'>Одежда</Link></div>
                        </div>
                <CardGroup>
                    {viewProducts}
                </CardGroup>
            </div>
        </div>  
    )
}

export default Category;