console.log("bleeper")

    function newLocation(){
        console.log("Bleeper Logistics")

const maxWeight = 10;
const cost = 10000;
let extraFee, destinationZone, extraWeight, totalAmount;
    extraFee = 2500
    destinationZone = "Lagos";
    extraWeight = 1500 //Charge for weight exceeding maxWeight
    totalAmount = cost + extraFee;

    const currentLoc = document.getElementById("currentLocation").value;
    const kg = document.getElementById("kg").value;
    const zone = document.getElementById("zone").value;
    const express = document.getElementById("express").checked;

        
    console.log("Weight (kg):", kg);
    console.log("Your Location:", currentLoc);
    console.log("Destination:", zone);
    console.log("Express", express)
        if (kg <= maxWeight && zone === destinationZone) console.log("The Base cost is " + (cost)) 
        if (zone !== destinationZone) console.log("The cost is " + (cost) + " + extra shipping fee of" + (extraFee))
            if (kg <=maxWeight && zone === destinationZone) console.log(" The Total Amount without express = " + (cost))
            if (kg > maxWeight && zone === destinationZone) console.log("Weight limit exceeded: " + (cost) + " + exceeded weight charge of " + (extraWeight) + ". The Total Amount without express is " + (cost + extraWeight))
            if (kg <= maxWeight && zone !== destinationZone) console.log("Total Amount without express = " + (totalAmount))
            if (kg > maxWeight && zone !== destinationZone) console.log("Weight limit exceeded: " + (cost) + " + extra shipping fee of " + (extraFee) + " + exceeded weight charge of " + (extraWeight) + ". The Total Amount without express is " + (totalAmount + extraWeight))
                
                if (express) {
                     if (kg <=maxWeight && zone === destinationZone) console.log(" For Express Delivery, the total Amount is " + (cost * 1.5))
                     if (kg > maxWeight && zone === destinationZone) console.log(" For Express Delivery and exceeded weight limit charges included, the total Amount is " + ((cost + extraWeight) * 1.5))
                    if (kg <= maxWeight && zone !== destinationZone) console.log(" For Express Delivery, the total Amount is " + (totalAmount * 1.5))
                    if (kg > maxWeight && zone !== destinationZone) console.log(" For Express Delivery and exceeded weight limit charges included, the total Amount is " + ((totalAmount + extraWeight) * 1.5))
                } 
    }
    