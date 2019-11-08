1. What problem does the context API help solve?

    It helps keep the code and state clean by solving issues with prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    store is a global state object that holds all the state of the code in it's loving arms.reducer is just a function that doesn't have side effects. And an action is exactly what it sounds like.I think of it like smart sibling out of reducer and action. reducer doesn't know what just happened until action tells it.

    a source of truth may be overkill for me, but its just never mutated, cause its a clone. makes me think of genetics.. too much.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Erm,well in my own words is tough: Redux is used with application and component state only inside the component itself and passing down things to props. Component is just a local state and application is a global state.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    thunk is a middleware package. it allows redux to run async-ly.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I thought about this question really hard and what I've decided is that I am not in a position to pick a favorite because I don't actually have a deep enough understanding of either.There are pros and cons to both but I'd need more experience with both to decide outside of a learning bias.Ask me again in a month or so.
