
window.onload = function() {
    document.getElementById('button').addEventListener('click', function () {
        let val1 = document.querySelector('input[id="myvalue1"]').value;
        let val2 = document.querySelector('input[id="myvalue2"]').value;
        console.log(val1);
        fetch('https://pusvrdh7y8.execute-api.eu-central-1.amazonaws.com/default/myFirstWebsite?key1='+val1+'&key2='+val2)
        .then((response) => {
            return response.text();
        })
        .then((myContent) => {
            document.querySelector('.content').innerHTML = myContent;
        });
    
    }, false);
}