function fizzbuzz(){
    for(i=1; i<=100; i++){
        console.log(judge(i));
    }
}

function judge(num) {
    try{

        if(!Number.isFinite(num)){
            throw ('1 ~ 100までの数値を入力してください（数値のみ）');
        }

        if(1 > num || num > 100){
            throw ('1 ~ 100までの数値を入力してください（無効境界値）');
        }

        if(num % 3 == 0 && num % 5 == 0) {
            return "fizzbuzz"
        }

        if(num % 3 == 0) {
            return "fizz"
        }

        if(num % 5 == 0) {
            return "buzz"
        }

        return num

    }catch (e) {
        return e
    }

}

//fizzbuzz()

module.exports = judge;