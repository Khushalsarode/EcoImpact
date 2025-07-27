import React, { useState } from 'react';
import { FaRupeeSign, FaHeart, FaMoneyCheckAlt } from 'react-icons/fa';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [100, 250, 500];

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = amount || customAmount;
    if (finalAmount && !isNaN(finalAmount)) {
      // Send to backend or mock
      console.log('Donation submitted:', {
        amount: finalAmount,
        message,
        paymentMethod,
      });
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700 dark:text-green-300">
        <FaHeart className="inline-block mr-2 text-pink-500" />
        Support Our Green Mission!
      </h2>

      {submitted ? (
        <div className="text-center text-green-700 dark:text-green-400 text-lg font-semibold">
          🎉 Thank you for your generous donation!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Preset Amount Buttons */}
          <div>
            <label className="block font-semibold mb-2 dark:text-white">
              Choose Donation Amount
            </label>
            <div className="flex gap-3">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleAmountClick(amt)}
                  className={`flex-1 py-2 border rounded-lg font-medium hover:bg-green-600 hover:text-white transition ${
                    amount === amt
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 dark:text-white'
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mt-4">
              <input
                type="number"
                placeholder="Or enter custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
              
              
          {/* Payment Method */}
<div>
  <label className="block font-semibold mb-2 dark:text-white">
    Select Payment Method
  </label>
  <select
    value={paymentMethod}
    onChange={(e) => setPaymentMethod(e.target.value)}
    className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
    required
  >
    <option value="">-- Choose an option --</option>
    <option value="upi">UPI</option>
    <option value="creditCard">Credit / Debit Card</option>
    <option value="bankTransfer">Bank Transfer</option>
    <option value="mock">Mock Credits</option>
  </select>

  {/* QR Code Preview (Only for UPI) */}
  {paymentMethod === 'upi' && (
    <div className="flex flex-col items-center mt-4">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Scan this QR Code with your UPI app:
      </p>
      <img
        src="https://via.placeholder.com/150"
        alt="UPI QR Code"
        className="w-40 h-40 border border-gray-300 dark:border-gray-700 rounded-lg"
      />
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        UPI ID: Ecopluse@upi
      </p>
    </div>
  )}
</div>


          {/* Message */}
          <div>
            <label className="block font-semibold mb-2 dark:text-white">
              Message (optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              rows={3}
              placeholder="Why are you donating?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2 transition"
          >
            <FaMoneyCheckAlt />
            Donate Now
          </button>
        </form>
      )}
    </div>
  );
};

export default DonationForm;
