let arrayCoupon = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


function calculateOffer(event) {
    event.preventDefault();

    let hoursRequested = document.getElementById("hours").value;
        hoursRequested = parseInt(hoursRequested);
        
    let typeOfWork = document.getElementById("type-of-work").value;
    let totalOffer = selectTypeOfWork(typeOfWork);
    
    totalOffer = totalOffer * hoursRequested;
    

    let textInDiscountCoupon = document.getElementById("discount-code").value;
    
    let couponValide = false;
    for(i = 0; i < arrayCoupon.length && couponValide == false; i++) {
        if(arrayCoupon[i] == textInDiscountCoupon) {
            totalOffer = totalOffer - (totalOffer * 25 / 100);
            arrayCoupon.splice(i, 1);
            couponValide = true;
            console.log(arrayCoupon);
        } 
    }

    if (couponValide) {
        alert("Coupon valido")
        document.getElementById("discount-code").className = " form-control";
    } else {
        alert("Coupon non valido :( ")
        document.getElementById("discount-code").className += " text-danger";
    }

    document.getElementById("price").innerHTML = totalOffer.toFixed(2);

    
}

//--------------- FUNZIONI ----------------------

function selectTypeOfWork(typeOfWork) {
    let priceWork = 0;
    if(typeOfWork == "backend") {
        priceWork = 20.50;
    } else if(typeOfWork == "frontend") {
        priceWork = 15.30;
    } else if(typeOfWork == "project-analysis") {
        priceWork = 33.60;
    } else {
        alert("Inserisci il tipo di lavoro");
    }
    return priceWork;
}