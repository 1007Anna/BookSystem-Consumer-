const orderBtn = document.getElementById("order")
const isbnInput = document.getElementById("isbnInput")
const select = document.getElementById("select")
const totleprice = document.getElementById("totleprice")
const addBtn = document.getElementById("add")
// let arr = []
const map = new Map()


addBtn.addEventListener("click",function(){
    let isbnKey = isbnInput.value
    let selectValue = parseInt(select.value)
    // console.log(isbnValue + ":" + selectValue)
    // arr.push(isbnValue + ":" + selectValue)
    // console.log(arr)
    
    map.set(isbnKey, selectValue)
    console.log(map)
    isbnInput.value = null
})

orderBtn.addEventListener("click",function(e){
    // e.preventDefault();
    
    // map.forEach(function (value, key) {
    //     console.log(key + " : " + value);         
    // })

    let body = {       
        "book_Map": {}
    }

    map.forEach(function(value, key) {
        body.book_Map[key] = value;
    });

    fetch("http://localhost:8080/buy_book",{
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

        data.responseBookList.forEach(function(bookInfo) {
            // 創建新的表格(tr、td)
            let tr = document.createElement("tr");
            let title = document.createElement("td");
            let author = document.createElement("td");
            let isbn = document.createElement("td");
            let price = document.createElement("td");
            let ordered = document.createElement("td");
      
            // 為每個屬性td新增map資訊
            title.innerText = bookInfo.title;
            tr.appendChild(title);
      
            author.innerText = bookInfo.author;
            tr.appendChild(author);
      
            isbn.innerText = bookInfo.isbn;
            tr.appendChild(isbn);
            
            price.innerText = bookInfo.price;
            tr.appendChild(price);
      
            ordered.innerText = bookInfo.ordered;
            tr.appendChild(ordered);
      
            // 將新的表格行添加到表格列中
            tbody.appendChild(tr);

          });

        // 計算總價格
        totleprice.innerText = data.bookTotlePrice      
    })
    .catch(function(err){
        console.log(err)
    })
})