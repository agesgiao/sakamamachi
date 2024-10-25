const validKeywords = {
  "stamp1": "りんご",
  "stamp2": "ばなな",
  "stamp3": "さくらんぼ",
  "stamp4": "れもん",
  "stamp5": "みかん",
  "stamp6": "ぶどう",
  "stamp7": "きうい",
  "stamp8": "なし",
  "stamp9": "かき",
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

document.addEventListener('DOMContentLoaded', function() {
  // ここにチェックとスタンプ復元ロジックを置く
  for (let stampId in validKeywords) {
    const stampElement = document.getElementById(stampId);
    if (stampElement && localStorage.getItem(stampId) === 'true') {
      stampElement.classList.add('stamped');
    }
  }
});

function resetStamps() {
  for (let i = 1; i <= 9; i++) {
    const stampElement = document.getElementById('stamp' + i);
    if (stampElement) {
      stampElement.classList.remove('stamped');
    } else {
      console.error('該当するスタンプが見つかりません: stamp' + i);
    }
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
