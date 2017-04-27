export function initializeSelectOptions(_list,valField){
  console.log("initializeSelectOptions==",_list);
  var list = _list.map(function (item) {
        return (
          {
            "label":item.name,
            "value":item[valField],
          }
        );
    }.bind(this));
    return list;
}
