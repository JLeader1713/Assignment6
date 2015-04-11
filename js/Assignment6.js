function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    
    var newcustomer = '{"CustomerID":"' + customerid + '","City":"' + customercity + '","CompanyName":"' + customername +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
            
        }
    }
    
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}











function  updateOrderAddress()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    var ordernumber = document.getElementById("ordernum").value;
    var shiptoname = document.getElementById("shipname").value;
    var shiptoaddress = document.getElementById("shipaddress").value;
    var shiptocity = document.getElementById("shipcity").value;
    var shiptocode = document.getElementById("shipcode").value;
                                        //leave off the quotes for order number because it is not text already took them out
    var updateshipping = '{"OrderID":' + ordernumber + ',"ShipAddress":"' + shiptoaddress + '","ShipCity":"' + shiptocity + '","ShipName":"' + shiptoname + '","ShipPostcode":"' + shiptocode + '"}';
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var res = JSON.parse(objRequest.responseText);
            OperationResult_2(result);
            
        }
    }
    
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(updateshipping);
}

function OperationResult_2(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("res").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("res").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}














function deleteCustomer()
{
    var getRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer";
    
    var customerid = document.getElementById("custidee").value;
        
    //var byecustomer = '{"CustomerID":"' + customerid + '"}';
    
    getRequest.onreadystatechange = function()
    {
        if (getRequest.readyState == 4 && getRequest.status == 200)
        {
            var rez = JSON.parse(getRequest.responseText);
            OperationResult_3(rez);
            
        }
    }
    
    getRequest.open("GET",url,true);
    //getRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    getRequest.send();
}

function OperationResult_3(rez)
{
    if (rez.DeleteCustomerResult.WasSuccessful == 1)
    {
        document.getElementById("rez").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("rez").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}











function MenuChoice()
{
    if (document.getElementById("menu").value == "Add Customer")
    {   
        document.getElementById("section1").style.display = "inline";
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.display = "none";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.display = "none";
        document.getElementById("section3").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Update Shipping")
    {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.display = "inline";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.display = "none";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Delete Customer")
    {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.display = "none";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.display = "inline";
        document.getElementById("section3").style.visibility = "visible";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
}