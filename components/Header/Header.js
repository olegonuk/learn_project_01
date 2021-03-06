class Header {


   render(counter) {
      const html = `
         <div class="header-container">
            <div class="header-counter">
              ⚡️ ${counter}
            </div>
         </div>
      `;

      ROOT_HEADER.innerHTML = html;

   }
}

const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);