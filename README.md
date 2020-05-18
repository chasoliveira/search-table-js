# search-table-js

**jquery dependency**

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
**without dependency**

```javascript
window.searchTable("#yourtable");
```

It looks better when used within a bootstrap CSS! :)
