const pro1 = new Promise((resolve, reject) => {
  resolve(1);
});

const pro2 = pro1.then(res => {
  console.log('收到');
});

setTimeout(() => {
  console.log(pro2);
}, 1000);
