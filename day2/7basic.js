let data = 10;

try {
  data = 99999999999999999999999999;

  console.log('Ini benar', data);
} catch (error) {
  console.log('ini error');
}
