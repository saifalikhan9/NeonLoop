import { useContext, useState } from "react";
import UserContext from "../../Contexts/UserContext";
import axios from "axios";

const AddressPage = () => {
  const { url, address, token, selectedAddress, setSelectedAddress } = useContext(UserContext);
  const [newAddress, setNewAddress] = useState({
    addressLine: "", city: "", state: "", postalCode: "", country: ""
  });
  const [isNewAddress, setIsNewAddress] = useState(false);

  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/v1/address/addAddress`, newAddress, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 200) {
        setNewAddress({ addressLine: "", city: "", state: "", postalCode: "", country: "" });
        setIsNewAddress(false);
        alert("Address saved successfully!");
      }
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  const handleAddressSelection = (e) => {
    setSelectedAddress(address.find(addr => addr._id === e.target.value));
    setIsNewAddress(false);
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Select an Address</h2>

      {address?.length > 0 ? address.map((addr) => (
        <div key={addr._id} className="mb-2">
          <input
            type="radio"
            id={addr._id}
            name="existingAddress"
            value={addr._id}
            checked={selectedAddress?._id === addr._id}
            onChange={handleAddressSelection}
            className="mr-2"
          />
          <label htmlFor={addr._id}>
            {`${addr.addressLine}, ${addr.city}, ${addr.state}, ${addr.postalCode}, ${addr.country}`}
          </label>
        </div>
      )) : <p>No addresses found.</p>}

      <div className="mt-4">
        <input
          type="radio"
          id="newAddress"
          name="existingAddress"
          checked={isNewAddress}
          onChange={() => setIsNewAddress(true)}
          className="mr-2"
        />
        <label htmlFor="newAddress">Add a New Address</label>
      </div>

      {isNewAddress && (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {Object.keys(newAddress).map((key) => (
            <div key={key}>
              <label className="block text-sm mb-1" htmlFor={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                className="w-full px-3 py-2 border rounded"
                type="text"
                id={key}
                name={key}
                value={newAddress[key]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Address
          </button>
        </form>
      )}
    </div>
  );
};

export default AddressPage; 