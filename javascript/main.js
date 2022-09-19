// class task_submitを取得
var taskSubmit=document.getElementsByClassName('task_submit')[0];

// Add Taskボタンを押したときの処理
taskSubmit.addEventListener('click', evt => {
  evt.preventDefault();

  // タスクを追加
  addTasks();
  // タスクを削除
  deleteTask();
  // タスクを完了済みにする
  doneTask();
});

// タスクの追加
function addTasks(){
  // 入力したタスクを取得
  var taskValue=document.getElementsByClassName('task_value')[0];
  // taskValueのtextを取得
  var text=document.createTextNode(taskValue.value);

  let message=[];
  // 未入力の場合はエラー
  if(text.data=="")
  {
    message.push("タスクを入力してください。");
    alert(message);
    taskValue.focus();
    return;
  }

  // li要素にタスクを追加
  var taskList=document.createElement('li');
  taskList.appendChild(text);

  // li要素にDeleteボタンを追加
  var trash=document.createElement('button');
  trash.classList.add('trashPosition');  // レイアウト調整用クラスを追加
  trash.classList.add('trash');
  trash.innerHTML= 'Delete <i class="fa-solid fa-trash-can"></i>';
  taskList.appendChild(trash);

  // li要素にDoneボタンを追加
  var check=document.createElement('button');
  check.classList.add('checkPosition');  // レイアウト調整用クラスを追加
  check.classList.add('check');
  check.innerHTML='Done <i class="fa-solid fa-square-check"></i>';
  taskList.appendChild(check);

  var todoLists=document.getElementById('todo');
  todoLists.appendChild(taskList);

  // 入力欄をクリア
  taskValue.value = '';
  taskValue.focus();
};

// タスクの削除
function deleteTask(){
  // trashクラスの要素を取得
  var trash=document.getElementsByClassName('trash');
  // クリックしたliタグの配列数を取得
  for(var i=0;i<trash.length;i++){
    // Deleteボタンを押したときの処理
    trash[i].addEventListener('click',function(){
      // this=trash[i]
      var li=this.parentNode;
      // trash[i]から、クリックした要素を削除
      li.remove();
    });
  };
};

// タスクを完了済みにする
function doneTask(){
  // checkクラスの要素を取得
  var check=document.getElementsByClassName('check');
  // doneクラスの要素を取得
  var doneList=document.getElementById('done');
  for(var i=0;i<check.length;i++){
    // Doneボタンを押したときの処理
    check[i].addEventListener('click',function(){
      // this=check[i]
      var li=this.parentNode;
      // doneクラスに、クリックした要素を追加
      doneList.appendChild(li);
      // checkクラスから、クリックした要素を削除
      this.remove();
    });
  };
};
