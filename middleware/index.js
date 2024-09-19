const express = require("express")
const app = express()

const users = [{
    name : "john",
    kidneys : [{
        healthy : false
    }]
}];

app.get("/",function(req,res){
    const jkid = users[0].kidneys;
    const nofkidneys = jkid.length;
    let noofhealthy = 0;
    for (let i= 0 ; i< jkid.length ; i++)
    {
        if (jkid[i].healthy){
            noofhealthy = noofhealthy + 1;
        }
    }

    const noofunhealthykidneys = nofkidneys - noofhealthy;
    res.json({
        nofkidneys,
        noofhealthy,
        noofunhealthykidneys
    })

})

app.listen(3000)