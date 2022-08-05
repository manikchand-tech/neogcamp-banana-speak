var btn = document.querySelector('#btn-translate')
var inputtxt = document.querySelector('#txtInput');
var outputtxt = document.querySelector('#output');
var text1;
var text2 = "  I am shaktiman"
var url2 = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
inputtxt.value = "Name"
console.log(btn)
outputtxt.innerText = ""
btn.addEventListener("click", function clickEventHandler() {


    console.log(inputtxt.value)
    console.log(":)translating.....")

    //outputtxt.value = "dfjds fdid heuhp dsuodo "
    //console.log(inputtxt.value)
    outputtxt.value = "translated your text " + inputtxt.value + " see output"
    console.log(outputtxt.value)
    var txtinput = inputtxt.value

    url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
    function translateUrl(txtinput) {

        url2 = url + text1


    }


    function dofetch(translateUrl) {



        fetch(url2)
            .then(response => response.json())

            .then(json => {
                console.log(json)
                var c = json.contents.translated;
                outputtxt.innerText = txtinput + " " + c
            })

    }


    function errorHandler(error) {
        console.log(error)
    }
    translateUrl(text2)
    dofetch(translateUrl)


    //fetch(url)
    //.then(function response(response){
    //return response.json()})
    //
    //.then(function jsonfile(json){
    //console.log(json)})
    //.catch(errorHandler)
    //console.log(url)



})










