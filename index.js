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
              //これより下はchild_lowに記載
              //"description",　
              //"remarks",
              //"contact",
              //"contact_phone_number",
              //"event_place_url",
              //"address",
              //"mail_address",
              //"transportation",
            ],
            data: response.data,
            options: {
              columnsDropdown: true,
              perPageValues:[10,30,response.data.length],
              filterByColumn: true,
              listColums:{
                category: [{
                  id:"歴史",
                  text:"歴史"
                }]
              },
              headings: {
                event_name: 'イベント名',
                description: '説明',
                remarks: '備考',
                category:"カテゴリ",
                start_date:"開始日時",
                end_date:"終了日時",
                contact:"コンタクト",
                contact_phone_number:"電話番号",
                event_place:"場所",
                event_place_url:"イベント場所URL",
                address:"住所",
                mail_address:"メールアドレス",
                transportation:"アクセス",
              },
              //sortable:false,
              //sortable: ["event_name"],   //ソート機能
              texts: {
                filterPlaceholder: '検索する'
              }
            }
          }
      });
});
