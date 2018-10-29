'use strict';
 class SelectCellWidget {
    constructor(args) {
        this._args = args;
        this._$select = undefined;
        this._defaultValue = undefined;
        this._init();
    }
     _init () {
        let selects, container, divend, opt_values;
        const args = this._args;
        if(args.column.options){
            opt_values = args.column.options.split(',');
        }else{
            opt_values = ["yes","no"];
        }
        container = document.createElement("div");
        container.classList.add('select-editable');
        divend = document.createElement('input');
        divend.setAttribute("type", "text");
        divend.setAttribute("name", "format");
        divend.setAttribute("value", "");
        selects = document.createElement("select");//"<select id='Mobility' tabIndex='0' class='editor-select'>"+ option_str +"</select>";
        selects.setAttribute("id", "Mobility");
        selects.setAttribute("tabIndex", 0);
        selects.setAttribute("class", "editor-select");
        for(let i = 0; i < opt_values.length; i++) {
            let v = opt_values[i];
            let option = document.createElement("option");
            option.setAttribute("value", v);
            option.innerText = v;
            selects.appendChild(option);
        }
    
        container.appendChild(divend);
        container.appendChild(selects);
        this._$select = container;
        args.container[0].appendChild(this._$select);
        this._$select.focus();
        document.getElementById("Mobility").selectedIndex = args.item[args.column.field] ? opt_values.indexOf(args.item[args.column.field]) : 0;
    }
     destroy () {
        this._$select.remove();
    }
     focus () {
        this._$select.focus();
    }
     loadValue (item) {
       this._defaultValue = item[this._args.column.field];
       this._$select.value = this._defaultValue;
    }
     serializeValue () {
        if(this._args.column.options){
            return this._$select.lastElementChild.value;
        }else{
            return (this._$select.lastElementChild.value === "yes");
        }
    }
     applyValue (item,state) {
       item[this._args.column.field] = state;
    }
     isValueChanged () {
       return (this._$select.lastElementChild.value !== this._defaultValue);
    }
     validate () {
       return {
           valid: true,
           msg: null
       };
    }
}
 module.exports=SelectCellWidget; 