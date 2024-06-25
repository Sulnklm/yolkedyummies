const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const total = document.querySelector(".totalcost")
    const price = 13.99;
    let a = 1;

    // arrow 식
    plus.addEventListener("click", ()=>{
        a++;
        // console.log("a");
        num.innerText = a
        updateTotal();
        
    });

    minus.addEventListener("click", ()=>{
        if (a > 1){
            a--;
            num.innerText = a;
            updateTotal();
        } else {
            num.innerText = 1;
        }
        
    });

    updateTotal = () => {
        const totalPrice = (a * price).toFixed(2);
        total.innerText = 'Total:' + "CA$" + totalPrice;
    };

    updateTotal();


    // 기존 함수식

    // plus.addEventListener("click", function() {
    //     a++;
    //     // console.log("a");
    //     num.innerText = a;
    // });