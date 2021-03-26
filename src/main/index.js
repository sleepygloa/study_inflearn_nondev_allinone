import React from 'react'
import './index.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import {API_URL} from '../config/constants.js'

dayjs.extend(relativeTime);

function MainPage(){
    const [products, setProducts] = React.useState([])
    React.useEffect(function(){
            axios.get(`${API_URL}/products`)
            .then(function(result){
                const products = result.data.products;
                console.log(result);
                setProducts(products);
            }).catch(function(error){
                console.log(error);
            })
        } , [])

    return (
        <div>
            <div id="banner">
                <img src="images/banners/banner1.png" alt="배너"/>
            </div>
            <h1 id="product-headline">판매되는 상품들</h1>
            <div id="product-list">
                {
                    products.map(function(product, index){
                        return (
                                <div className="product-card">
                                    <Link className="product-link" to={`/product/${product.id}`}>
                                        <div>
                                            <img className="product-img" src={`${API_URL}/${product.imageUrl}`} alt="상품사진들" />
                                        </div>
                                        <div className="product-contents">
                                            <span className="product-name">
                                                {product.name}
                                            </span>
                                            <span className="product-price">
                                                {product.price}원
                                            </span>
                                            <div id="product-footer">
                                                <div className="product-select">
                                                    <img className="product-avatar" src="images/icons/avatar.png" alt="아바타"/>
                                                    <span>{product.seller}</span>
                                                </div>
                                                <span>{dayjs(product.createdAt).fromNow()}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default MainPage;