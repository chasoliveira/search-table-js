# search-table-js
Make a table as searchable with javascript. It's necessary import jquery before.

How to use:

```javascript
$("#yourtable").searchTable();
```
or
```javascript
$("#yourtable").searchTable({
            filterTrClass: ".master",
            placeholder: "Type some term to find on table",
            before: function () {
                console.log("My function");
            }
        });
```

It looks better when used within a bootstrap CSS! :)
