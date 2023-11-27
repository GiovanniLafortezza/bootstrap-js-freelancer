

function calculateOffer(event) {
    event.preventDefault();

    let hoursRequested = document.getElementById("hours").value;
        hoursRequested = parseInt(hoursRequested);
        console.log(hoursRequested);
    let typeOfWork = document.getElementById("type-of-work").value;
    console.log(typeOfWork);
    let totalOffer = selectTypeOfWork(typeOfWork);
    console.log(totalOffer);
    totalOffer = totalOffer * hoursRequested;
    console.log(totalOffer);

    document.getElementById("price").innerHTML = totalOffer;

    
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