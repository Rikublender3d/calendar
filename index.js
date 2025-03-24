const calendar = () => {
    const year = Number(document.getElementById("year").value);
    const month = Number(document.getElementById("month").value) - 1; // 月は0から始まる
    const days = Number(document.getElementById("day").value);
  
    // 無効な値をチェック
    if (isNaN(year) || isNaN(month) || isNaN(days) || month < 0 || month > 11 || days < 1 || days > 31) {
      alert("正しい値を入力してください");
      return;
    }
  
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const endDay = endDate.getDate();
    const startDay = startDate.getDay();
  
    let calendarHtml = '';
    let dayCount = 1;

    for (let w = 0; w < 6; w++) { // 最大6週間分の行を作成
      calendarHtml += '<tr>';
      for (let d = 0; d < 7; d++) { // 曜日は7日間
        if (w === 0 && d < startDay) {
          calendarHtml += '<td></td>';
        } else if (dayCount > endDay) {
          calendarHtml += '<td></td>';
        } else if (dayCount === days) {
          calendarHtml += `<td id="exact-day" class="p-3">${dayCount}</td>`;
          dayCount++;
        } else {
          calendarHtml += `<td class="p-3">${dayCount}</td>`;
          dayCount++;
        }
      }
      calendarHtml += '</tr>';
    }
  
    // 既存のカレンダー内容を更新（曜日行はHTML側に固定）
    const table = document.getElementById('calendar');
    table.innerHTML = table.innerHTML.split('</tr>')[0] + '</tr>' + calendarHtml;
  };
  
  // ボタンにイベントリスナーを追加
  const button = document.getElementById('make');
  button.addEventListener('click', calendar);