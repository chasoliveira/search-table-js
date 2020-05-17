(function (wind) {
    'use strict';

    class searchTable {
        constructor(table, options) {
            function setUpOptions(options) {
                const placeHolderConst = "Enter a search term";
                var defaultOptions = options || { placeholder: placeHolderConst, filterTrClass: "" };
                if (defaultOptions.placeholder === undefined)
                    defaultOptions.placeholder = placeHolderConst;
                if (defaultOptions.filterTrClass === undefined)
                    defaultOptions.filterTrClass = "";
                return defaultOptions;
            }

            this.setUp = function () {
                var defaultOptions = setUpOptions(options);
                var inputSearch = document.createElement('input');
                inputSearch.setAttribute('type', 'text');
                inputSearch.setAttribute('placeholder', defaultOptions.placeholder);
                inputSearch.classList.add('class', 'span6');

                var spanSearch = document.createElement('span')
                spanSearch.setAttribute('class', 'add-on')
                const icon = document.createElement('i');
                ['icon', 'icon-search'].forEach(cl => icon.classList.add('class', cl));
                spanSearch.appendChild(icon);

                const divSearch = document.createElement('div');
                ['row-fluid', 'input-append'].forEach(cl => divSearch.classList.add('class', cl));
                divSearch.appendChild(inputSearch);
                divSearch.append(spanSearch);

                document.querySelector(table).closest('div').insertBefore(divSearch, document.querySelector(table));

                var rows = document.querySelector(table).querySelectorAll('tbody tr' + defaultOptions.filterTrClass);

                inputSearch.addEventListener('keyup', function () {
                    const val = '^(?=.*' + this.value.trim().split(/\s+/).join(')(?=.*') + ').*$';
                    const reg = RegExp(val, 'i');

                    [].forEach.call(rows, (el) => {
                        const text = el.innerText.replace(/\s+/g, ' ');
                        console.log('row el', text);
                        if (reg.test(text))
                            el.style.display = 'table-row';
                        else
                            el.style.display = 'none';
                    });
                });
            };
        }
    }

    wind.searchTable = function (tableId, options) {
        console.log('document.searchTable', tableId);
        var st = new searchTable(tableId, options);
        st.setUp();
    };
})(window);
