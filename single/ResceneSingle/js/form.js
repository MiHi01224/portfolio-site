document.addEventListener("DOMContentLoaded",function(){
    //文字列に変換、グループ分け
    let savedTexts = JSON.parse(sessionStorage.getItem("userTexts")) || {
        メモ: [], 表情: [], 台詞: [], シーン殴り書き: [], キャラの背景: []
    };

    // 保存ボタンのクリックイベント
    document.getElementById("saveButton").addEventListener("click", function() {
        let text = document.getElementById("textInput").value.trim();  // 入力されたテキストを取得
        if (text === "") {
            alert("テキストを入力してください。");//空の場合警告する
            return;
        }

        // 選択されたラジオボタンを取得
        let selectedCategory = document.querySelector('input[name="category"]:checked');
        if (!selectedCategory) {
            alert("カテゴリーを選択してください。"); // 選択してなかったら警告
            return;
        }

        // 選ばれたカテゴリーを取得
        selectedCategory = selectedCategory.value; 

        // セッションストレージに保存
        savedTexts[selectedCategory].push(text);
        sessionStorage.setItem("userTexts", JSON.stringify(savedTexts));

        // 入力欄をクリア
        document.getElementById("textInput").value = "";
        // ラジオボタンをリセット
        document.querySelectorAll('input[name="category"]').forEach(radio => {
            radio.checked = false;
        });

        //表示ページに移動
        window.location.href = "memo.html";
    });
});


