$(function(){

    function setProgress(num) {
        let value = (num * 100).toFixed(1) + "%";
        $("#progressBar .progress-bar")[0].style.width = value;
        $("#progressBar .progress-bar span").text(value);
    }


    $("#animation").click(function(){
        let val = 0.0;

        setProgress(val);

        function go() {
            setTimeout(()=>{
                val += 0.1 * Math.random();

                if (val >= 1.0) {
                    val = 1.0;
                    setProgress(val);
                } else {
                    setProgress(val);
                    go();
                }
            }, 300);
        }

        go();
    })
});