<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'buy milk',
          done: false,
          labelIds: [1, 2]
        },
        {
          id: 2,
          name: 'buy  vue.js book',
          done: true,
          labelIds: [1, 3]
        }
      ],
      labels: [
        {
          id: 1,
          text: 'grossary'
        },
        {
          id: 2,
          text: 'food'
        },
        {
          id: 3,
          text: 'book'
        }
      ]
    }
  }
}      
</script>
