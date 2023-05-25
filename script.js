const billTotalInputDiv=document.getElementById('billTotalInput')
const tipInputDiv=document.getElementById('tipInput')
const numberOfPeopleDiv=document.getElementById('numberOfPeople')
const perPersonTotalDiv=document.getElementById('perPersonTotal')

let numberperson=Number(numberOfPeopleDiv.innerHTML)
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billTotalInputDiv.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  const tip = Number(tipInputDiv.value) / 100

  // get the total tip amount
  const tipamount = bill * tip

  // calculate the total (tip amount + bill)
  const total = tipamount + bill

  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total / numberperson

  perPersonTotalDiv.innerHTML=`$${perPersonTotal.toFixed(2)}`

}

const increase=()=>{
  numberperson+=1
  numberOfPeopleDiv.innerHTML=numberperson
  calculateBill()
}

const decrease=()=>{
  if(numberperson<=1)
    return 1

  numberperson-=1
  numberOfPeopleDiv.innerHTML=numberperson
  calculateBill()
}
  

