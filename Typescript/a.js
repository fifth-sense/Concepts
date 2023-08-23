let counter;
for (let i = 0; i < 60; i++) {
  setTimeout(() => {
    counter = i;
    console.log(counter)
  }, 1000);
}
