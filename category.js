const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const title = document.getElementById("title")
const author = document.getElementById("author")
const isbn = document.getElementById("ISBN")
const price = document.getElementById("price")
const category = document.getElementById("category")


searchBtn.addEventListener("click",function(){
    let body = {
        "categoryList":[searchInput.value]
    }



    fetch("http://localhost:8080/search_book_category_Containing",{
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

        // 取得表格元素
        let table = document.getElementById("table")
        let tbody = table.getElementsByTagName("tbody")[0];

        data.forEach(function(bookInfo) {
            // 創建新的表格(tr、td)
            let tr = document.createElement("tr");
            let title = document.createElement("td");
            let author = document.createElement("td");
            let isbn = document.createElement("td");
            let price = document.createElement("td");
            let inventory = document.createElement("td");
      
            // 為每個屬性td新增List資訊
            title.innerText = bookInfo.title;
            tr.appendChild(title);
      
            author.innerText = bookInfo.author;
            tr.appendChild(author);
      
            isbn.innerText = bookInfo.isbn;
            tr.appendChild(isbn);
            
            price.innerText = bookInfo.price;
            tr.appendChild(price);
      
            inventory.innerText = bookInfo.inventory;
            tr.appendChild(inventory);
      
            // 將新的表格行添加到表格列中
            tbody.appendChild(tr);

        });
          
    })
    .catch(function(err){
        console.log(err)
    })
})