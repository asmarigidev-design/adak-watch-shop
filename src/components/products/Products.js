import React from 'react';
import formatCurrency from '../shopping-cart/util';
import Swal from 'sweetalert2';
import { useCart } from '../shopping-cart/CartContext';

function Products(props) {
  const { addProducts } = useCart();

const handleAddProduct = (product) => {
  const result = addProducts(product, true); //It just checks if it exists فقط بررسی می‌کنه که آیا وجود دارد

  if (result === 'exists') {
    Swal.fire({
      title: 'افزودن مجدد محصول',
      text: 'این محصول قبلاً در سبد خرید شما وجود دارد. آیا می‌خواهید یک عدد دیگر اضافه شود؟',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'بله، اضافه کن',
      cancelButtonText: 'خیر، نمی‌خوام'
    }).then((res) => {
      if (res.isConfirmed) {
        addProducts(product); //Now it really adds up. حالا واقعاً اضافه می‌کنه
        Swal.fire({
          icon: 'success',
          title: 'محصول اضافه شد',
          text: 'یک عدد دیگر از این محصول به سبد خرید شما اضافه شد.',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  } else if (result === 'added') {
    addProducts(product); //Add new product محصول جدید رو اضافه کن
    Swal.fire({
      icon: 'success',
      title: 'محصول اضافه شد',
      text: 'محصول با موفقیت به سبد خرید اضافه شد',
      confirmButtonText: 'عالیه'
    });
  }
  };

  return (
    <div>
      <ul className="products">
        {
          props.item.map((item) =>
            <li key={item.id}>
              <div className="product" data-aos="flip-left">
                <img src={item.image} alt="" />
                <div className="product-price">
                  <div className="price">{formatCurrency(item.price)}</div>
                  <button onClick={() => handleAddProduct(item)}>افزودن به سبدخرید</button>
                </div>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
}


export default Products;
