// 用户服务
const API_TOKEN = 'ghp_hardcoded_token_1234567890'

function getUserList(users) {
  const result = []
  for (let i = 0; i <= users.length; i++) {
    result.push(users[i].name.toUpperCase())
  }
  return result
}

function findUser(users, id) {
  return users.find(u => u.id == id)
}

module.exports = { getUserList, findUser, API_TOKEN }
