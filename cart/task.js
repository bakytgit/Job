document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.products');
    const cartContainer = document.querySelector('.cart');
    const cartProductsContainer = document.querySelector('.cart__products');
    const cart = {}; // Объект для хранения товаров в корзине (ключ - id товара, значение - количество)

    function updateCartVisibility() {
        cartContainer.classList.toggle('empty', Object.keys(cart).length === 0);
    }

    productList.addEventListener('click', (event) => {
        const target = event.target;

        // Управление количеством товара
        if (target.classList.contains('product__quantity-control_inc')) {
            const quantityValueElement = target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
            let quantity = parseInt(quantityValueElement.textContent);
            quantityValueElement.textContent = quantity + 1;
        } else if (target.classList.contains('product__quantity-control_dec')) {
            const quantityValueElement = target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
            let quantity = parseInt(quantityValueElement.textContent);
            if (quantity > 1) {
                quantityValueElement.textContent = quantity - 1;
            }
        }

        // Добавление товара в корзину
        if (target.classList.contains('product__add')) {
            const productElement = target.closest('.product');
            const productId = productElement.dataset.id;
            const productImageSrc = productElement.querySelector('.product__image').src;
            const quantityValueElement = productElement.querySelector('.product__quantity-controls').querySelector('.product__quantity-value');
            const quantityValue = parseInt(quantityValueElement.textContent);

            if (cart[productId]) {
                cart[productId] += quantityValue;
                updateCartDisplay();
            } else {
                cart[productId] = quantityValue;
                renderCartProduct(productId, productImageSrc, quantityValue);
            }

            // Сбрасываем количество товара в карточке после добавления
            quantityValueElement.textContent = 1;
            updateCartVisibility();
        }
    });

    cartProductsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('cart__product-remove')) {
            const cartProductElement = target.closest('.cart__product');
            const productId = cartProductElement.dataset.id;
            delete cart[productId];
            cartProductElement.remove();
            updateCartVisibility();
        }
    });

    function renderCartProduct(productId, imageSrc, count) {
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = productId;

        const image = document.createElement('img');
        image.classList.add('cart__product-image');
        image.src = imageSrc;

        const countElement = document.createElement('div');
        countElement.classList.add('cart__product-count');
        countElement.textContent = count;

        const removeButton = document.createElement('a');
        removeButton.href = '#';
        removeButton.classList.add('cart__product-remove');
        removeButton.textContent = '×';

        cartProduct.appendChild(image);
        cartProduct.appendChild(countElement);
        cartProduct.appendChild(removeButton);
        cartProductsContainer.appendChild(cartProduct);
    }

    function updateCartDisplay() {
        const cartProductElements = cartProductsContainer.querySelectorAll('.cart__product');
        cartProductElements.forEach(cartProductElement => {
            const productId = cartProductElement.dataset.id;
            if (cart[productId]) {
                cartProductElement.querySelector('.cart__product-count').textContent = cart[productId];
            } else {
                cartProductElement.remove();
            }
        });

        // Добавляем новые товары, которых еще нет в отображении
        for (const productId in cart) {
            const existingCartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);
            if (!existingCartProduct) {
                const productElement = productList.querySelector(`.product[data-id="${productId}"]`);
                const productImageSrc = productElement.querySelector('.product__image').src;
                renderCartProduct(productId, productImageSrc, cart[productId]);
            }
        }
    }

    // Инициализация видимости корзины
    updateCartVisibility();
});