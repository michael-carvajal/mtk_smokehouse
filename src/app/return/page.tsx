'use client'
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`/api/stripe/create-checkout-session?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return redirect('/');
  }

  if (status === 'complete') {
    return (
      <section 
        id="success" 
        className=" flex items-center justify-center bg-gradient-to-b from-white to-slate-50 p-6 rounded-lg"
      >
        <div className="max-w-md text-center space-y-4 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-slate-800">Thank You!</h2>
          <p className="text-slate-600 leading-relaxed">
            We appreciate your business! A confirmation email will be sent to <span className="font-medium text-slate-900">{customerEmail}</span>.
          </p>
          <p className="text-slate-500">
            If you have any questions, please email us at{' '}
            <a href="mailto:orders@example.com" className="text-blue-600 hover:underline">
              orders@example.com
            </a>.
          </p>
        </div>
      </section>
    );
  }

  return null;
}
