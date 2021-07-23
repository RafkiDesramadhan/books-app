function main() {
    
    const baseUrl = "https://web-server-book-dicoding.appspot.com";

    const getBook = () => {
        // tuliskan kode di sini!
        //membuat instance dari XHR
        const xhr = new XMLHttpRequest();

        //menetapkan callback jika response sukses dan error
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllBooks(responseJson.books)
            }
        }

        xhr.onerror = function() {
            showResponseMessage();
        }

        //membuat GET request dan menetapkan target URL
        xhr.open("GET", `${baseUrl}/list`);
        //mengirimkan request
        xhr.send();
    };


    const insertBook = (book) => {
        // tuliskan kode di sini!
        //membuat instance dari XHR
        const xhr = new XMLHttpRequest();

        //menetapkan callback jika response sukses dan error
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            showResponseMessage(responseJson.message);
            getBook();
        }

        xhr.onerror = function() {
            showResponseMessage();
        }

        //membuat POST request dan menetapkan target URL
        xhr.open("POST", `${baseUrl}/add`);
        //menetapkan properti Content-Type dan X-Auth-Token pada header request
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-Auth-Token", "12345");
        //mengirimkan request dan menyisipkan JSON.stringify(book) pada body
        xhr.send(JSON.stringify(book));
    };

    const updateBook = (book) => {
        // tuliskan kode di sini!
        //membuat instance dari XHR
        const xhr = new XMLHttpRequest();

        //menetapkan callback jika response sukses dan error
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            showResponseMessage(responseJson.message);
            getBook();
        }

        xhr.onerror = function() {
            showResponseMessage();
        }

        //membuat PUT request  dan menetapkan target URL 
        xhr.open("PUT", `${baseUrl}/edit/${book.id}`);
        //menetapkan properti Content-Type dan X-Auth-Token pada Header request
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-Auth-Token", "12345");
        //mengirimkan request  dan menyisipkan JSON.stringify(book) pada body request
        xhr.send(JSON.stringify(book));
    };

    const removeBook = (bookId) => {
        // tuliskan kode di sini!
        // Membuat instance dari XMLHttpRequest
        const xhr = new XMLHttpRequest();
 
        //menetapkan callback jika response sukses dan error
        xhr.onload = function() {
           const responseJson = JSON.parse(this.responseText);
           showResponseMessage(responseJson.message);
           getBook();
         }
 
        xhr.onerror = function() {
            showResponseMessage();
        }
 
        // Membuat DELETE request dan menetapkan target URL
        xhr.open("DELETE", `${baseUrl}/delete/${bookId}`);
        
        // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
        xhr.setRequestHeader("X-Auth-Token", "12345");
 
        // Mengirimkan request
        xhr.send();
    };