<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        fuure_web
      </h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <h2>{{ product.title }}</h2>
          <img :src="product.images[0].src" alt="product.images[0].altText" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  async asyncData({ app }) {
    const products = await app.$shopify.product.fetchAll()
    return { products }
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $accent01;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
