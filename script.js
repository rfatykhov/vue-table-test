const app = Vue.createApp({
  el: '#app',
  data() {
    return {
      columns: [{ name: 'name' }, { name: 'date' }],
      tasks: [
        {
          id: 1,
          name: 'Сделать тестовое задание',
          date: '10.12.2020',
        },
        {
          id: 2,
          name: 'Выгулять собаку',
          date: '17.11.2020',
        },
        {
          id: 3,
          name: 'Убраться дома',
          date: '22.10.2020',
        },
        {
          id: 4,
          name: 'Приготовить ужин',
          date: '24.10.2020',
        },
        {
          id: 5,
          name: 'Купить подарки',
          date: '01.12.2020',
        },
        {
          id: 6,
          name: 'Встретить Рождество',
          date: '07.01.2021',
        },
        {
          id: 7,
          name: 'Погулять',
          date: '03.02.2021',
        },
        {
          id: 8,
          name: 'Поздравить с праздником',
          date: '08.03.2021',
        },
        {
          id: 9,
          name: 'Позвонить друзьям',
          date: '30.12.2020',
        },
        {
          id: 10,
          name: 'Погладить кота',
          date: '23.04.2021',
        },
      ],
    };
  },
});

app.component('grid-template', {
  template: '#grid-template',
  data() {
    return {
      task: {},
      search: '',
      sort: '',
    };
  },
  props: ['columns', 'tasks'],
  methods: {
    add() {
      this.task = {
        name: this.task.name,
        date: new Date().toLocaleString('ru').slice(0, 10),
      };
      this.tasks.push(this.task);
      this.task = {};
    },
    remove(index) {
      this.tasks.splice(index, 1);
    },
    sortName(x, y) {
      return x.name.toLowerCase() > y.name.toLowerCase() ? 1 : -1;
    },
    sortDate(x, y) {
      return x.date > y.date ? 1 : -1;
    },
  },
  computed: {
    filtered() {
      return this.tasks.filter((el) => {
        return (
          el.name.toLowerCase().includes(this.search.toLowerCase()) != false ||
          el.date.includes(this.search) != false
        );
      });
    },
    sorted() {
      switch (this.sort) {
        case 'name':
          return this.tasks.sort(this.sortName);
        case 'date':
          return this.tasks.sort(this.sortDate);
        default:
          return this.tasks;
      }
    },
  },
});

app.mount('#app');
