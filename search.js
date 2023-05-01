const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const title = document.getElementById("title")
const author = document.getElementById("author")
const isbn = document.getElementById("ISBN")
const price = document.getElementById("price")



searchBtn.addEventListener("click",function(){

    let body = {
        "search":searchInput.value
    }

    fetch("http://localhost:8080/search_book_by_consumer",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify(body)
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        title.innerText = data[0].title
        author.innerText = data[0].author
        isbn.innerText = data[0].isbn
        price.innerText = data[0].price
    })
    .catch(function(err){
        console.log(err)
    })
})