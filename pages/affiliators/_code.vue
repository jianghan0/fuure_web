<template>
  <div class="container">
    <h1 class="title">
      fuure
    </h1>
    <p>クーポン利用状況は以下になります。</p>
    <table class="table" border="1" style="border-collapse: collapse">
      <tr>
        <th>クーポンコード</th>
        <th>利用回数</th>
      </tr>
      <tr>
        <td>{{ couponInfo.discount_code.code }}</td>
        <td>{{ couponInfo.discount_code.usage_count }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
const AFFILIATORS = [
  {
    name: '',
    type: 'instagram',
    priceRuleId: '581502009397',
    discountCodeId: '3659276681269',
    discountCode: 'AF1MQ2KZXXFFR8S',
  },
]

export default {
  validate({ params }) {
    return AFFILIATORS.find(
      affiliator => affiliator.discountCode === params.code
    )
  },
  async asyncData({ $axios, params }) {
    const affiliator = AFFILIATORS.find(
      affiliator => affiliator.discountCode === params.code
    )
    const path = `/admin/api/2019-10/price_rules/${affiliator.priceRuleId}/discount_codes/${affiliator.discountCodeId}.json`
    const couponInfo = await $axios.$get(
      process.env.SOTRE_ADMIN_API_HOST + path
    )
    return { couponInfo }
  },
}
</script>

<style>
.container {
  margin: 2%;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 896px) {
  .table {
    width: auto;
  }
}

.title {
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
  display: block;
  color: #35495e;
  margin-bottom: 50px;
}

p {
  margin-bottom: 10px;
}

.table {
  text-align: left;
  width: 100%;
}
</style>
