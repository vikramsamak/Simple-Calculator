        function add()
        {
        var a, b, result;
        a=parseFloat(document.getElementById("fnum").value);
        b=parseFloat(document.getElementById("snum").value);
        result=a+b;
        document.getElementById("answer").value=result;
        }
        function mul()
        {
        var a, b, result;
        a=parseFloat(document.getElementById("fnum").value);
        b=parseFloat(document.getElementById("snum").value);
        result=a*b;
        document.getElementById("answer").value=result;
        }
        function sub()
        {
        var a, b, result;
        a=parseFloat(document.getElementById("fnum").value);
        b=parseFloat(document.getElementById("snum").value);
        result=a-b;
        document.getElementById("answer").value=result;
        }
        function div()
        {
        var a, b, result;
        a=parseFloat(document.getElementById("fnum").value);
        b=parseFloat(document.getElementById("snum").value);
        result=a/b;
        document.getElementById("answer").value=result;
        }