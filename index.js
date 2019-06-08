axios.get('https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json')
    .then(response => {

        Vue.use(VueTables.ClientTable);
        new Vue({
          el: "#app",
          data: {
            columns: [
              'event_name',
              "category",
              "start_date",
              "end_date",
              "event_place",
              //これら以外は子行に記載
            ],
            data: response.data,  //jsonデータの取得
            options: {
              headings: {
                event_name: 'イベント名',
                category:"カテゴリ",
                start_date:"開始日時",
                end_date:"終了日時",
                event_place:"場所",
              },
              columnsDropdown: true,
              uniqueKey:'description',                    //子行に渡すユニークキー
              perPageValues:[10,30,response.data.length], //ページング機能
              filterByColumn: true,                       //ソート機能
              filterable: ["event_name","category"],
              listColums: {
                category: [{
                }]
              },
              sortable:[],
              texts: {
                filterBy: '検索する'
              }
            }
          }
      });

    });
