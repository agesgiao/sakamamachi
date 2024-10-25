const validKeywords = {
  "stamp1": "りんご",
  "stamp2": "ばなな",
  "stamp3": "いちご",
  "stamp4": "れもん",
  "stamp5": "みかん",
  "stamp6": "ぶどう",
  "stamp7": "さくらんぼ",
  "stamp8": "すいか",
  "stamp9": "めろん",
};

function checkKeyword() {
  const keyword = document.getElementById('keyword').value.toLowerCase();
  let stampFound = false;
  let errorMsg = document.getElementById('error');

  // すでにスタンプが押されている場合はスキップ
  for (let stampId in validKeywords) {
    if (validKeywords[stampId] === keyword && !document.getElementById(stampId).classList.contains('stamped')) {
      document.getElementById(stampId).classList.add('stamped');
      localStorage.setItem(stampId, 'true');
      stampFound = true;
    }
  }

  // 入力結果に応じてメッセージを表示
  if (stampFound) {
    errorMsg.textContent = '';  // エラーメッセージをクリア
  } else {
    errorMsg.textContent = 'キーワードが正しくありません。';
  }

  document.getElementById('keyword').value = '';  // 入力欄をクリア
}

// ローカルストレージからスタンプ状態を復元
for (let stampId in validKeywords) {
  if (localStorage.getItem(stampId) === 'true') {
    document.getElementById(stampId).classList.add('stamped');
  }
}

// スタンプのリセット関数
function resetStamps() {
  // すべてのスタンプの状態をクリア
  for (let stampId in validKeywords) {
    document.getElementById(stampId).classList.remove('stamped');
    localStorage.removeItem(stampId);
  }
  // エラーメッセージをクリア
  document.getElementById('error').textContent = '';
}
