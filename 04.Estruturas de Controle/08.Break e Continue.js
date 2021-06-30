//BREAK, CONTINUE
// Não é recomendado usar o break e continue

const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if (x == 5){
        break // sai pra fora do for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5){
        continue // vai pra proxima iteracao
    }
    console.log(`${y} = ${nums[y]}`)
}

//não use isso.
externo: for (a in nums) {
    for(x in nums){
        if (x == 5){
            break externo
        }
        console.log(`${x} = ${nums[x]}`)
    }
}