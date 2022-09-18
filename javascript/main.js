// task_valueクラスの要素を取得
const taskValue=document.getElementsByClassName('task_value')[0];
// task_submitクラスの要素を取得
const taskSubmit=document.getElementsByClassName('task_submit')[0];
// task_listクラスの要素を取得
const taskList=document.getElementsByClassName('task_list')[0];

// 追加ボタンを作成
const addTasks = (task) => {
    // 入力したタスクを追加・表示
    const listItem = document.createElement('li');  // createElementでリスト要素を生成
    const showItem = taskList.appendChild(listItem);    // appendChildで親要素(taskList)に対して子要素(listItem)を追加
    showItem.innerHTML = task;  // 入力したタスクを表示する
  
    // タスクに削除ボタンを付与
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    listItem.appendChild(deleteButton);
  
    // 削除ボタンをクリックし、イベントを発動（タスクが削除）
    deleteButton.addEventListener('click', evt => {
      evt.preventDefault();
      deleteTasks(deleteButton);
    });
  };

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask);
  };
  
  // 追加ボタンをクリックし、イベントを発動（タスクが追加）
  taskSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    const task = taskValue.value;
    let message=[];

    if(task=="")
    {
      message.push("タスクを入力してください。");
      alert(message);
      return;
    }

    addTasks(task);
    taskValue.value = '';
  });