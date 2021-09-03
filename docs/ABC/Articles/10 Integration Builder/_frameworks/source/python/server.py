#! /usr/bin/env python3.6

"""
server.py
Stripe Sample.
Python 3.6 or newer required.
"""
import os
from flask import Flask, redirect, request

import stripe
# This is a sample test API key. Sign in to see examples pre-filled with your key.
stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'

app = Flask(__name__,
            static_url_path='',
            static_folder='.')

YOUR_DOMAIN = 'http://localhost:3000/checkout'

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            customer_email='customer@example.com',
            submit_type='donate',
            billing_address_collection='auto',
            shipping_address_collection={
              'allowed_countries': ['US', 'CA'],
            },
            payment_method_types=[
              'sepa_debit',
              'p24',
              'card',
              'ideal',
              'bancontact',
              'sofort',
              'eps',
              'alipay',
              'grabpay',
              'wechat_pay',
              'acss_debit',
              'boleto',
              'oxxo',
            ],
            line_items=[
                {
                    # TODO: replace this with the `price` of the product you want to sell
                    'price': '{{PRICE_ID}}',
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '?success=true',
            cancel_url=YOUR_DOMAIN + '?canceled=true',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)

if __name__ == '__main__':
    app.run(port=4242)
