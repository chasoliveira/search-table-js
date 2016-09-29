# search-table-js
Make a table as searchable with javascript. It's necessary import jquery before.

How to use:

$("#yourtable").searchTable();

or

$("#yourtable").searchTable({
            filterTrClass: ".master",
            placeholder: "Type some term to find on table",
            before: function () {
                console.log("My function");
            }
        });
