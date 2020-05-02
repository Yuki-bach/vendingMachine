// drink-container
const cola = document.getElementById("cola")
const soda = document.getElementById("soda")
const water = document.getElementById("water")
// cash
const ten = document.getElementById("ten")
const fifty = document.getElementById("fifty")
const hundred = document.getElementById("hundred")
const f_hundred = document.getElementById("f_hundred")
const change = document.getElementById("change")
// rouulette
const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
// others
const total = document.getElementById("total")
const purchase = document.getElementById("purchase")
const m_lack = document.getElementById("money-lack")
const s_lack = document.getElementById("storage-lack")



let sum = 0
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let id = null
let id2 = null
let timeC = 3
m_lack.style.display = "none"
s_lack.style.display = "none"

// drinkの在庫情報とその値段
const product = {
  name: ["コーラ", "ソーダ", "お水"],
  price: [100, 50, 10],
  storage: [5, 2, 100]
}

//お金
ten.onclick = function(){
  add(10)
  total.textContent = sum
}
fifty.onclick = function(){
  add(50)
  total.textContent = sum
}
hundred.onclick = function(){
  add(100)
  total.textContent = sum
}
f_hundred.onclick = function(){
  add(500)
  total.textContent = sum
}

//商品がクリックされた時
  // 購入履歴に表示
  // totalから金額を引く
cola.onclick = function(){
  purchasing(0)
  total.textContent = sum
  } 
soda.onclick = function(){
  purchasing(1)
  total.textContent = sum
}
water.onclick = function(){
  purchasing(2)
  total.textContent = sum
}

//お釣りレバー
change.onclick = function(){
  changing()
}


/* ------関数 ------ */
const add = function(price){
  sum += price
}

const purchasing = function(n){
  if (sum >= product.price[n] && product.storage[n] > 0) {
    sum -= product.price[n]
    product.storage[n] -= 1
    console.log(product.storage[n])
    const b_product = document.createElement("li")
    b_product.textContent = product.name[n]
    purchase.append(b_product)
    m_lack.style.display = "none"
    // roulette start!
    roulette()
  } else if (sum < product.price[n]) {
    m_lack.style.display = "block"
  } else {
    s_lack.style.display = "block"
  }
}

//お釣りボタンを押したとき
const changing = function(){
  const changelist = document.createElement("li")
  changelist.textContent = sum + "円"
  purchase.append(changelist)
  sum = 0
  total.textContent = sum
}

// ルーレット機能
const countUp = function(){
  // 1-9の数字をランダムに表示
  count1 = Math.floor( Math.random() * 9 )
  count2 = Math.floor( Math.random() * 9 )
  count3 = Math.floor( Math.random() * 9 )
  count4 = Math.floor( Math.random() * 9 )
  one.textContent = count1
  two.textContent = count2
  three.textContent = count3
  four.textContent = count4
}


const timeCount = function(){
  // 3秒後にルーレットが止まるようにする
  // 上記で let timeC = 3 と指定している
  timeC -= 1
  console.log(timeC)

  if (timeC  <= 0){
    clearInterval(id)
  }
}

const roulette = function(){
  id = setInterval(countUp, 10)
  id2 = setInterval(timeCount, 1000)
}


