import React, { useEffect, useRef, useState } from 'react'
import styles from './ProductDetail.module.css';
import SearchPageHeader from '../SearchPageHeader/SearchPageHeader';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { useNavigate, useParams } from 'react-router-dom';


const ProductDetail = () => {
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState({});
    let { id } = useParams();
    let url = `https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`
    useEffect(() => {
        async function fetchProductDetail() {
            let data = await fetch(url, {
                headers: {
                    projectId: 'f104bi07c490'
                }
            })
            let res = await data.json();
            console.log(res.data);
            setProductDetail(res.data);

        }
        fetchProductDetail();
    }, [])

    const imageBoxRef = useRef(null);
    function leftScroll() {
        imageBoxRef.current.scrollLeft -= 150;
    }

    function rightScroll() {
        imageBoxRef.current.scrollLeft += 150;
    }

    async function handleCartData(buttonType) {
        const user = JSON.parse(localStorage.getItem("userLoginDetail"));
        try {
            const response = await fetch(
                `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        projectID: "f104bi07c490",
                        Authorization: `Bearer ${user.token}`,
                        'Content-Type':'application/json'
                    },
                    body:
                        JSON.stringify({
                            "quantity": 2
                        }
                        )
                }
            );
            const data = await response.json();
            console.log("response", response);
            console.log("data", data);

            if (!response.ok) {
                navigate('/login');
                return;
            }
            if (buttonType === 'addToCart') {
                navigate('/cart');
            } else if (buttonType === 'buyNow') {
                navigate('/checkOutPage');
            }
        } catch (error) {
            navigate('/login');
        }
    }
    return (
        <>
            <SearchPageHeader catagoryName={productDetail?.brand} />
            <div className={styles.container}>
                <div className={styles.imageBox}>
                    <div className={styles.mainImage}>
                        <img src={productDetail?.displayImage} />
                    </div>
                    <div className={styles.mediaCarousal}>
                        <button onClick={leftScroll}><ChevronLeftIcon /></button>
                        {/* <div className={styles.mediaBox} ref={imageBoxRef}>
                            {productDetail?.images.map((img, index) => {
                                return <img src={img} key={index}/>
                            })}
                        </div>  */}
                        <button onClick={rightScroll}><ChevronRightTwoToneIcon /></button>
                    </div>

                </div>
                <div className={styles.description}>
                    <div className={styles.productname}>{productDetail.name}</div>
                    <div className={styles.price}><span>Offer Price :</span><span>₹{productDetail.price}</span></div>
                    <div className={styles.features}>
                        <span>Key Features</span>
                        <ul>
                            {productDetail.features?.map((data, index) => {
                                return <li key={index}>{data}</li>
                            })}
                        </ul>
                    </div>
                    <div className={styles.freeshipping}>Free Shipping!</div>
                    <div className={styles.cartButton}>
                        <button onClick={() => handleCartData('addToCart')}>ADD TO CART</button>
                        <button onClick={() => handleCartData('buyNow')}>BUY NOW</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(ProductDetail); 