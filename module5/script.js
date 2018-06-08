const initialUsers = [
    { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
    { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
    { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false },
    { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false },
    { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false },
  ];

  const initialPosts = {
    "-s19a6hqce": [
      { id: "-5sgljaskg", text: "post #1", likes: 3 },
      { id: "-199hb6igr", text: "post #2", likes: 5 },
      { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
    ],
    "-qkpzenjxe": [
      { id: "-5tu69g5rf", text: "post #1", likes: 8 },
      { id: "-bje766393", text: "post #2", likes: 15 }
    ],
    "-e51cpd4di": [
      { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
      { id: "-i03pbhy3s", text: "post #2", likes: 45 }
    ],
  };

const user = {
    email: 'ale98world@gmail.com',
    password: 'sdsd2324234',
};






function SocialBook (users = [], posts = {}) {
    this.users = users;
    this.getAllUsers = function (){
      return this.users;
  }

  this.getUserByLogin = function(login){
      initialUsers.find(function(name){
          if (login === name.login){
              console.log(name);
        }
      });
  }
  
  this.getUserStatus = function(userId){
    initialUsers.find(function(id){
        if (userId === id.id){
            if (id.isActive){
                console.log('active');
            } else {
                console.log('inactive');
            }
        } else {
            // console.log('not okay');
        }
    })
  }


  const getId = () => "-" + Math.random().toString(36).substr(2, 9);
  const user = { id: getId(), name: 'Mango' };
//   console.log(user);



  this.addUser = function(user){
      this.user = user;
      this.user.id = getId();
      this.user.isActive = false;
      this.users.push(this.user);

    }
    this.removeUserById = function(userId){
        this.users = this.users.filter(function(user){
            if (userId !== user.id){
                return user;
            }
        })
    }


    this.getUsersCount = function(){
    console.log('Oбщее количество пользователей', initialUsers.length);
}
}


const post = new SocialBook(initialUsers, initialPosts);

console.log(post.getAllUsers());
post.getUserByLogin('mangozedog@mail.com');
post.getUserStatus('-qkpzenjxe');
post.addUser(user);
post.removeUserById('-qkpzenjxe');
post.getUsersCount();






























// let arr = [1,3,4,5,78,90,23,56,76,54,32];

// const fn = function(elem){
//    let fulterArr = arr.filter(function(number){
//         if (elem !== number){
//             return number
//         }
//     })
//     return fulterArr
// }

// console.log(fn(23))
