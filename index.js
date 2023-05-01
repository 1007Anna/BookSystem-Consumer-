const btn = document.getElementById("btn")
const titleTh = document.getElementById("th01")
const authorTh = document.getElementById("th02")
const isbnTh = document.getElementById("th03")
const priceTh = document.getElementById("th04")
const inventoryTh = document.getElementById("th05")
const booktr = document.getElementById("booktr")



btn.addEventListener("click",function(){


    fetch("http://localhost:8080/get_book_top5_by_sales")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        titleTh.innerText = "Title"
        authorTh.innerText = "Author"
        isbnTh.innerText = "Isbn"
        priceTh.innerText = "Price"
        inventoryTh.innerText = "Inventory"

        // icon1.setAttribute("class", "fa-solid fa-book-open fa-5x text-black-50")
        // icon2.setAttribute("class", "fa-solid fa-book-open fa-5x text-black-50")
        // icon3.setAttribute("class", "fa-solid fa-book-open fa-5x text-black-50")
        // icon4.setAttribute("class", "fa-solid fa-book-open fa-5x text-black-50")
        // icon5.setAttribute("class", "fa-solid fa-book-open fa-5x text-black-50")

        // 取得表格元素
        let table = document.getElementById("table")
        let tbody = table.getElementsByTagName("tbody")[0];

        data.forEach(function(bookInfo) {

            // 創建新的表格(tr、td)
             
            let tr = document.createElement("tr");
            let no = document.createElement("td");
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
