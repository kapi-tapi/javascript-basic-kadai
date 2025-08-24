// btn,textというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // textの文章を'ボタンをクリックしました'に変更する
  text.innerHTML = 'ボタンをクリックしました'
});
