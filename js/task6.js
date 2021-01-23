const model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
  ]
  
  function sortArr(arr) {
      const temp = JSON.parse(JSON.stringify(arr));
  
      temp.sort((a,b) => a.user.id > b.user.id ? 1 : -1)
  
      let groupedArr = [];
      let count = 0;
      let currentUser = 0;
  
      for (let i = 0; i < temp.length; i++) {
  
          let obj = {
              id : temp[i].id,
              title : temp[i].title,
              text : temp[i].text,
          }
  
          if ( i >= 1 && temp[i].user.id == temp[i - 1].user.id) {
              groupedArr[currentUser].posts.push(obj);
          } else {
              groupedArr.push(temp[i].user);
              groupedArr[count].posts = [obj];
              count++
              currentUser = count - 1;
          }
      }
  
      return console.log(groupedArr);
  }
  
  sortArr(model)