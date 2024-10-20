
        function searchProduct() {
            var input, filter, products, product, title, i;
            input = document.getElementById('searchinput');
            filter = input.value.topUpperCase();
            products  document.getElementsByClassName('product');

            for (i = 0;i< products.length; i++) {
                product = products[i];
                title = product.getAtribute('data-title');
                if (title.topUpperCase().indexOf(filter) > -1) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }
            }
        }

        function orderProduct(productName) {
            var whatsappNumber = "6283841605780";
            var message = "Haii Kak Mau Order " + productName + ".";
            var whatsappURL = "https://wa.me/" + whatsappNumber + "?text" + encodeURIComponent(message);
            window.open(whatsappURL,'_blank');
        }
