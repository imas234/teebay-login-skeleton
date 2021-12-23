# Part 1

## Front End:

auth components (`src/components/auth`): Signup, Login, InputField
app component (`src/`): App (also contains AppRoutes and AuthContext)

Routing was done using `react-router`. UI elements were done using `semantic-ui-react` and pure css (`src/app.css`)

Routes available when not signed in: `/login`, `/signup`
Routes available when signed in: `/`
Default route when not signed in: '/login'

Form Field Inputs' logic was abstracted into `InputField`, reused in `Signup` and `Login`.

Context was to be used to update loggedIn status.

Mistakes made:
- Excessive time was spent on looking up Formik, only to end up not using it
- Time could have been saved by using something for ui that I was familiar with, rather than semantic-ui-react