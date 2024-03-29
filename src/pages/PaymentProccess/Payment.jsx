import React from 'react'

export default function Payment() {
  const ROOT_URL = 'http://localhost:4000'
const checkout = async () => {
  await fetch(`${ROOT_URL}/stripe-payment/create-checkout-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      console.log(url)
        window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
}

  return (
    <button onClick={()=>{checkout()}}>Payment</button>
  )
}
