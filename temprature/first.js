function convert(){
    let a = document.getElementById("tempinc").value;
    let b = document.getElementById("tempinf").value;
    if(a !=="" && b!=="")
    {
        alert("please enter only one value");
    }
    let a1= Number(a);
    let a2=Number(b);
    let ans;
    if(a !== "")
    {
        ans = ((((a1*9)/5))+32);
        document.getElementById("tempinf").value = ans;
    }
    else{
        ans = ((a2-32)*5)/9;
        document.getElementById("tempinc").value = ans;
    }
}