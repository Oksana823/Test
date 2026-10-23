// 订单服务（故意留了几处问题）
const DB_PASSWORD = 'root123456'

function sumPrices(items) {
  let total = 0
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price
  }
  return total
}

async function loadOrders(url) {
  const res = await fetch(url)
  const data = await res.json()
  return data.orders.map(o => o.id)
}

function parseConfig(raw) {
  return JSON.parse(raw).config
}

module.exports = { sumPrices, loadOrders, parseConfig, DB_PASSWORD }
