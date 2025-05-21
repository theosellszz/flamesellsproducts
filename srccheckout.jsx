import React from 'react'

const Checkout = () => {
  return (
    <div className="text-white p-8 pt-32">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <p>Text your order to:</p>
      <p className="text-green-400 text-xl font-bold mt-2">203-817-4168</p>
      <div className="mt-6">
        <p>You can message via:</p>
        <a
          href="sms:2038174168"
          className="block bg-white text-black px-4 py-2 rounded my-2 w-fit"
        >
          Normal Text Message
        </a>
        <a
          href="https://wa.me/12038174168"
          className="block bg-green-500 text-white px-4 py-2 rounded my-2 w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export default Checkout
