import React, { useState } from 'react';
import formatCurrency from './util';
import { useCart } from './CartContext';
import Swal from 'sweetalert2';

function Card(props) {
  const { cartItems, removeProducts, onClose } = props;

  const { addProducts } = useCart();
const [isVisible] = useState(true);
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemPrice;

  if (!isVisible) return null; // اگر سبد خرید بسته شده باشد، چیزی نمایش نده

  return (
    <>
       {/* دکمه بستن سبد خرید */}
   <div className="close-cart">
    <button onClick={onClose}>✖ بستن</button>
  </div>
      {
        cartItems.length === 0 ?
          <div className="empty-price">سبدخرید خالی است</div> :
          <div className="show-price">شما {cartItems.length} محصول در سبدخرید دارید</div>
      }

      <div className="card-item">
        {
          cartItems.map((item) =>
            <div
              className="product-item"
              key={item.id}
            >
              <div className="product-detail">
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
              </div>

              <div className="product-price">
                <div className="price">
                  <span>{formatCurrency(item.price)}</span>
                   <span className ="qty">{item.qty}</span>

                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() => {
                      if (item.qty === 1) {
                        Swal.fire({
                          title: 'آیا مطمئنی؟',
                          text: 'با کاهش تعداد، این محصول از سبد خرید حذف خواهد شد.',
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonText: 'بله، حذف کن',
                          cancelButtonText: 'نه، نگه دار'
                        }).then((result) => {
                          if (result.isConfirmed) {
                            removeProducts(item);
                            Swal.fire({
                              title: 'حذف شد!',
                              text: 'محصول با موفقیت حذف شد.',
                              icon: 'success',
                              timer: 1500,
                              showConfirmButton: false
                            });
                          }
                        });
                      } else {
                        removeProducts(item);
                      }
                    }}
                  >
                    ➖
                  </button>


                  <button onClick={() => addProducts(item)}>➕</button>
                </div>

                <div className="remove-item">
                  <button
                    onClick={() => {
                      if (item.qty === 1) {
                        Swal.fire({
                          title: 'آیا مطمئنی؟',
                          text: 'با کاهش تعداد، این محصول از سبد خرید حذف خواهد شد.',
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonText: 'بله، حذف کن',
                          cancelButtonText: 'نه، نگه دار'
                        }).then((result) => {
                          if (result.isConfirmed) {
                            removeProducts(item);
                            Swal.fire({
                              title: 'حذف شد!',
                              text: 'محصول با موفقیت حذف شد.',
                              icon: 'success',
                              timer: 1500,
                              showConfirmButton: false
                            });
                          }
                        });
                      } else {
                        removeProducts(item);
                      }
                    }}
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>

      <div className="total-price">
        <div className="total-text">مجموع قیمت</div>
        <div className="total">{formatCurrency(totalPrice)} تومان</div>
      </div>


    </>
  );
}


export default Card;
