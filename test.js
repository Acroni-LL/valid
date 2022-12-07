// 不开放，true
// 开放，满足二，true
//开放，不满足二，false

console.log(validRes)
if (!isOpen) {
  return (validRes = true)
} else if (sameFlag) {
  return (validRes = true)
} else if (!sameFlag) {
  return (validRes = false)
}
