import React, { useContext, useState } from "react";
import UserContext from "../../Contexts/UserContext";
import PayButn from "../Pay/PaymentGateway";

const OrderReviewPage = () => {
  const { cart } = useContext(UserContext);
  const totalAmount = cart?.reduce((sum, product) => sum + product.price, 0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImage = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Order Summary</h2>

        {cart?.length > 0 ? (
          <div>
            {cart.map((product, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-50 rounded">
                <h3 className="text-lg font-semibold mb-2">Order Details</h3>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="col-span-2">
                    <p><strong>Text:</strong> {product.text}</p>
                    <p><strong>Font:</strong> {product.font}</p>
                    <p><strong>Size:</strong> {product.size}</p>
                    <p><strong>Color:</strong> {product.color}</p>
                  </div>
                  <div className="text-right">
                    <img
                      src={product.imageUrl}
                      alt=""
                      className="w-20 cursor-pointer mx-auto mb-2"
                      onClick={() => handleImage(product.imageUrl)}
                    />
                    <p className="font-bold">₹{product.price.toLocaleString("en-IN")}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-right font-bold mt-4 pt-2 border-t">
              <p>Total Amount: ₹{totalAmount.toLocaleString("en-IN")}</p>
            </div>
            <div className="mt-6">
              <PayButn amount={totalAmount} />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No products in your order.</p>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
          <img src={selectedImage} alt="Selected Product" className="max-w-full max-h-screen" />
        </div>
      )}
    </div>
  );
};

export default OrderReviewPage;