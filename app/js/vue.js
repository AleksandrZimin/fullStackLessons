new Vue({
   el: '#app',
   data: {
      title: 'Сложение на 10',
      isTrue: true
   },
   methods: {
      changeText() {
         this.title = 'Введите число в поле'
      }
   }
});

new Vue({
   el: '#second',
   data: {
      first_num: "Введите число в поле ",
   },
   methods: {
      increment(val) {
         this.first_num = val + " " + "+ 10"
      }
   },
   computed: {
      second_num() {
         return parseInt(this.first_num) + 10
      }
   }
})

new Vue({
   el: '#tree',
   data: {
      title: 'Новый Vue JS',
      isTrue: "Введите CSS свойство",
      style: ' '
   },
   methods: {
      changeText() {
         this.title = 'Новый текст'
      }
   }
});

