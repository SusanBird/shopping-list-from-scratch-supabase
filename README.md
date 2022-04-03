## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## Sign in page

-   Already done on template

## Supabase table

    - 'shopping_list_items'
    - amount: int2
    - item_name: string
    - is_bought: boolean

## Shopping List

    - form
    - div for list
    - button - delete

## Events

1. when submit form, add item to shopping list

    - get data from the form
    - call createItem function
    - re-fetch and re-append
        - loading spinner

2. on load, fetch and display the list of shopping items

    - window 'load' event listener
    - fetch shopping items for this user from supabase
    - loop through the items, render and append
        - each item is clickable
        - use data to decide whether crossed out or not

3. on click of delete button, clear list
    - clear out DOM
    - delete every item on the table in supabase
4. on click of item, "buy" it and rerender as crossed out
    - update this item's `is_bought` property to `true`
    - re-fetch and re-append
      loading spinner
