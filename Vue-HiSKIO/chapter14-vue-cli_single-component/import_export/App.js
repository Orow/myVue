import Counter from './Counter' // 如果檔名是.js可以省略

new Vue({
    el: '#app',
    components: {
        Counter,
    },
    template:`
    <div>
        <Counter/>
    </div>
    `
})