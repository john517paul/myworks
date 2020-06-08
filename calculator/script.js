function insertNumber(num){
    document.myForm.textview.value += num
}
function equal(){
    document.myForm.textview.value = eval(document.myForm.textview.value)
}
function del(){
    document.myForm.textview.value = ""
}