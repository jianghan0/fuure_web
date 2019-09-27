import Client from 'shopify-buy'
import fetch from 'node-fetch'

const shopify = Client.buildClient(
  {
    domain: process.env.NUXT_ENV_STORE_URL,
    storefrontAccessToken: process.env.NUXT_ENV_STORE_FRONT_ACCESS_TOKEN,
  },
  fetch
)

export default ({ _app }, inject) => {
  inject('shopify', shopify)
}
