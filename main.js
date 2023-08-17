const app = Vue.createApp({
        data() {
            return {
                product: 'Socks',
                description: 'The warmest socks you\'ll ever wear!',
                image: './assets/images/socks_blue.jpg',
                url: 'https://www.vuemastery.com/',
                inventory: 1111,
                onSale: true,
                details: ['50% cotton','30% wool','20% polyester'],
                sizes: ['S', 'M', 'L', 'XL'],
                variants: [
                    { id: 2234, color: 'green' },
                    { id: 2235, color: 'blue' },
                ]
            }
        }
})