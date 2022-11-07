import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import fire, { auth, db } from '../Config/Config'
import {AiFillStar} from 'react-icons/ai'
import  
import _, { size } from 'underscore';

function ProductVIew(individualProduct, ID) {

    const location = useLocation();
    const [products, setProducts] = useState({})
    const [productColours, setProductColours] = useState([])
    const [productColoursList, setProductColoursList] = useState([])
    const [productSizeList, setProductSizeList] = useState([])


    let colours = [];
    useEffect(() => {
        const products = db.collection('inventorystock').doc(location.state.id).get();
        products.then(res => {
            console.log(res.data());
            setProducts(res.data())
        });

        const productColours = db.collection('inventorystock').doc(location.state.id).collection('colours').get();
        productColours.then(res => {
            res.forEach(element => {
                console.log('Element: ', element.data())
                colours.push(element.data());
            });
            setProductColoursList(colours);
            var mySubArray = _.uniq(colours, 'colour');
            console.log('Element: ', mySubArray)
            setProductColours(mySubArray);
        });
    }, []);

    return (
        <div className='details'>
            {/* <h1>Product View </h1> */}
            <div className='big-img'>
            <img src={products.image} height={100} alt="productImage" />
            </div>
            <div className='box'>
                <div className='row'>
                    <h2> {products.prodName}</h2>
                    
                </div>
                <div className='row'>
                    <h2> R{products.productPrice}</h2>
                    <span><AiFillStar/></span>
                </div>
                <hr />
                <p>{products.prodDescription}</p>
                
                <div className='colors'>
                     {productColours !== 0 ? productColours.map((prod, idx) => {

                    const testClick = (prodt) => {
                        console.log(prodt);
                        let sizeList = [];
                        productColoursList.find(x => {
                            if (x.colour == prodt.colour) {
                                sizeList.push(x)
                            }
                        })
                        console.log('hello', sizeList);
                        setProductSizeList(sizeList);
                    }

                    return (
                        <div style={{ display: 'inline-flex', width: '100%' }}>
                            <div key={idx} onClick={() => testClick(prod)} >
                                <p style={{ margin: '8px', padding: '8px', background: 'whitesmoke' }} >{prod.colour}</p>
                            </div>
                        </div>

                    )
                }) : (

                    <div>No product colours available for this product</div>
                )
                }
                </div>

                

                {/* <div className='thumb'>

                </div> */}
                <button className='cart' >Add To cart</button>
            </div>
            {/* <h1>
                {products.prodName}
            </h1> */}
            {/* <p>{products.prodDescription}</p> */}
            {/* <div>
                {productColours !== 0 ? productColours.map((prod, idx) => {

                    const testClick = (prodt) => {
                        console.log(prodt);
                        let sizeList = [];
                        productColoursList.find(x => {
                            if (x.colour == prodt.colour) {
                                sizeList.push(x)
                            }
                        })
                        console.log('hello', sizeList);
                        setProductSizeList(sizeList);
                    }

                    return (
                        <div style={{ display: 'inline-flex', width: '100%' }}>
                            <div key={idx} onClick={() => testClick(prod)} >
                                <p style={{ margin: '8px', padding: '8px', background: 'whitesmoke' }} >{prod.colour}</p>
                            </div>
                        </div>

                    )
                }) : (

                    <div>No product colours available for this product</div>
                )
                }

                {/* Mapping the sizes of the selected colour */}
                {/* {
                    productSizeList.map((sizes, idx) => {
                        return (
                            <div style={{ display: 'inline-block',  }}>
                                <p style={{background: 'yellow', margin: '8px'}}>{sizes.size} : R{sizes.price}</p>
                            </div>
                        )
                    })
                }
            </div> */} 
            {/* <p>{products.productPrice}</p> */}

        </div>
    )
}

export default ProductVIew