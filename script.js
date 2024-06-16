function tip()
{
    var bill=document.getElementById("bill").value
    var tip=document.getElementById("tip").value
    if(bill=="")
    {
        alert("Please enter bill amount");
        return
    }
    else if (tip=="select tip percentage")
    {
        alert("Please select your tip percentage");
        return
    }
    var x;
    if(tip=="5%")
    {
        x=(bill*(5/100))
    }
    else if(tip=="10%")
    {
        x=(bill*(10/100))
    }
    else if(tip=="15%")
    {
        x=(bill*(15/100))
    }
    else if(tip=="20%")
    {
        x=(bill*(20/100))
    }
    else if(tip=="25%")
    {
        x=(bill*(25/100))
    }
    else if(tip=="30%")
    {
        x=(bill*(30/100))
    }
    console.log(x)
    var q=document.getElementById("demo").innerHTML="The total bill amount is "+bill;
    var p=document.getElementById("demo1").innerHTML="The total tip amount is "+x;
}