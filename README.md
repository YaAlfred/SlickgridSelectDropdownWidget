# SlickgridSelectDropdownWidget
Slickgrid select dropdown widget

to use:

1. import it in your project
const SelectCellWidget = require('./SelectCellWidget');

2. add to the editor field option, set options for dropdown
{id: "field_type", width: 30, name: "Data Type", field: "field_type",  options: "String,Number,Boolean", editor: SelectCellWidget},
