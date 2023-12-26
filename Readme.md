> COURTERA Website Project

**Course Name:** Agile Software Engineering

**Department:** Software Engineering

**DR.** Reham Mohamed

**ENG.** Janna

Team members:

  -----------------------------------------------------------------------
  **Name**                            **ID**
  ----------------------------------- -----------------------------------
  Mohamed Hany                        192000270

  Mohamed Taha                        192000280

  Youssef Hossam                      192000175

  Abdullah Ashraf                     192000266

  Mohamed Heshmat                     192000255
  -----------------------------------------------------------------------

# Introduction:

Welcome to CourTera, the ultimate hub for effortless sports
reservations!

CourTera is crafted with a deep appreciation for the fervor surrounding
football and padel.

> Our platform is meticulously designed to enhance your sports
> encounters, offering a seamless experience for both devoted teams and
> enthusiastic individuals.
>
> Simplifying the venue and schedule booking process, CourTera allows
> you to concentrate on what matters most -- enjoying the game.
>
> Join us at CourTera to unlock a realm of convenience, enabling you to
> reserve football and tennis facilities effortlessly.

Step onto the field with ease and transform every match into an
unforgettable experience!

# Specifications:

## Epic: User Interface Enhancement

-   **User Story:** As a user, I want the website to have an intuitive
    and friendly UI/UX.

-   **Acceptance Criteria:** The interface should be visually appealing,
    easy to navigate, and provide a seamless user experience

## Epic: User-Friendly Navigation

-   **User Story:** As a user, I want an easily navigable menu for
    seamless exploration of football and padel options.

-   **Acceptance Criteria:** Implement a clear and user-friendly
    navigation menu for intuitive access to different sections of the
    website.

## Epic: Single-Page Application (SPA) Implementation

-   **User Story:** As a user, I want the website to apply the
    single-page application concept using React.js.

-   **Acceptance Criteria:** The website should load content dynamically
    without full page reloads, providing a smooth and efficient user
    experience.

## Epic: Authentication and Database Integration

-   **User Story:** As a user, I want to authenticate using secure
    credentials stored in the database.

-   **Acceptance Criteria:** Implement user authentication using secure
    methods and connect it to the database.

## Epic: Court Information Pages

-   **User Story:** As a user, I want separate pages for football and
    padel with detailed information about each court.

-   **Acceptance Criteria:** The website should have dedicated pages for
    football and padel courts, displaying relevant details, such as
    availability, amenities, and booking options.

## Epic: Node.js Authentication APIs

-   **User Story:** As a developer, I want to implement authentication
    APIs using Node.js.

-   **Acceptance Criteria:** Develop APIs for user registration, login,
    and token management using Node.js, ensuring secure communication
    between the front-end and back-end.

## Epic: Responsive Design

-   **User Story:** As a user, I want the website to be responsive on
    different screen sizes.

-   **Acceptance Criteria:** The website should adapt its layout and
    design to provide an optimal viewing experience on various devices,
    including desktops, tablets, and mobile phones.

## Epic: Profile Page Details

-   **User Story:** As a user, I want to view details on my profile
    page.

-   **Acceptance Criteria:** Users should be able to access and view
    their profile details, including personal information and booking
    history.

## Epic: Court Booking Functionality

-   **User Story:** As a user, I want the ability to book football and
    padel courts easily.

-   **Acceptance Criteria:** Integrate a booking system that allows
    users to select available time slots for their preferred courts,
    providing confirmation and receipt.

## Epic: Notifications

-   **User Story:** As a user, I want to receive notifications for
    successful bookings and other relevant updates.

-   **Acceptance Criteria:** Implement a notification system to keep
    users informed about their booking status and any important
    announcements.

## Epic: User Reviews and Ratings

-   **User Story:** As a user, I want to view reviews and ratings for
    each football and padel court.

-   **Acceptance Criteria:** Create a system for users to leave reviews
    and ratings, and display an average rating for each court.

## Epic: Social Media Integration

-   **User Story:** As a user, I want the option to share my booking or
    reviews on social media platforms.

-   **Acceptance Criteria:** Integrate social media sharing
    functionality to allow users to share their experiences and
    activities on the platform.

# 3.Sprint Planning {#sprint-planning .unnumbered}

## Sprint 1: {#sprint-1 .unnumbered}

-   **Task 1:** Design UI/UX for the website.

-   **Task 2:** Set up a React.js project for the single-page
    application.

-   **Task 3:** Implement basic authentication functionality on the
    front-end.

## Sprint 2: {#sprint-2 .unnumbered}

-   **Task 4:** Develop separate pages for football and padel courts.

-   **Task 5:** Design and implement a responsive layout for the
    website.

## Sprint 3: {#sprint-3 .unnumbered}

-   **Task 6:** Implement authentication APIs using Node.js.

-   **Task 7:** Create profile pages and integrate them with the
    authentication system.

## Sprint 4: {#sprint-4 .unnumbered}

-   **Task 8:** Design and implement a user-friendly navigation menu.

-   **Task 9:** Develop court booking functionality with a user-friendly
    interface.

## Sprint 5: {#sprint-5 .unnumbered}

-   **Task 10:** Implement a notification system for booking updates.

-   **Task 11:** Integrate user reviews and ratings functionality.

## Sprint 6: {#sprint-6 .unnumbered}

-   **Task 12:** Integrate social media sharing features.

-   **Task 13:** Perform testing and bug fixes for the implemented
    features.

# 5. Implementation: {#implementation .unnumbered}

## Front-end Implementation:

### React.js:

-   We used React.js to apply single page application concept and
    because react depend on different libraries and modules.

-   Components: react virtual dom.

### Bootstrap:

-   We used bootstrap for navbar component and modified it to be
    compatible with the design.

### Font Awesome:

-   We used font Awesome icons in social media icons in footer , profile
    icon and icons in navbar.

### React Router DOM:

-   React-router-dom made the navigation between pages easier with no
    refresh.

-   Example: when user login successfully the website navigates him to
    home page.

### Axios:

-   Axios post the data in form of object to the backend to check the
    database if exist or not.

-   Example: in sign in we used axios.post method to send email and
    password to backend as an Object.

### Formik:

-   Formik has some events to handle form changes like handle bluer and
    handle submit which handle the submit of forms by taking the entered
    data in input fields and send it to submit function.

-   Example: formik has functions to handle any change in the form (
    formik.handleChange ) so no need to make it manualy.

### Yup Validation:

-   We used Yup built-in methods to check the inputs by applying some
    conditions on these methods.

-   Examples: one of the rules we used is the rule of email in forms
    which is ( required rule ) and the email should contain @ sign.

### Protected Route:

-   It is a user defined module with if condition to check if the user
    logged in or not to navigate him to a specific page.

-   Example: The route that required an authentication is profile module
    .

### HTML5, CSS3, ES6:

-   Html5 used to build the construction of the website pages.

-   css3 used to apply the design.

-   Es6 is a version of java script which helps us to make the functions
    of the website.

-   Example: we used semantic tags which produced in Html5.

### Hooks (useState, useEffect):

-   Use state is used to initiate variables.

-   use effect is used with component didmount function.

## Backend Implementation:

### MongoDB:

-   Depend on the type of data and the relation between them, we used
    user collections.

### ES6:

-   We used ES6 to import files and modules.

### Express Framework and Mongoose:

-   Express make the code shortest and easier , Mongoose contain methods
    to interact with mongo.

-   Example: router.post(\'/signUp\',UC.signUp);.

### Bcrypt:

-   Bcrypt has function to hash passwords ( hashSync ) and it take the
    passwords from the login forms and hash them again then compare them
    using ( compareSync ).

### CORS:

-   We used CORS to be able to use the API link in front end.

# Testing:

## Test Case 1: User Registration {#test-case-1-user-registration .unnumbered}

### Inputs: {#inputs .unnumbered}

-   **User Name:** Mohamed Heshmat

-   **User Phone:** 01010446753

-   **User Email:** heshmat@gmail.com

-   **User Password:** mohamed1234

### Expected Action: {#expected-action .unnumbered}

-   The system should navigate to the login page.

### Alternate Action: {#alternate-action .unnumbered}

-   If the user already exists in the database, the system should send a
    response indicating the existence of the user.

## Test Case 2: User Login {#test-case-2-user-login .unnumbered}

### Inputs: {#inputs-1 .unnumbered}

-   **User Email:** heshmat@gmail.com

-   **User Password:** mohamed1234

### Expected Action: {#expected-action-1 .unnumbered}

-   The system should navigate to the home page.

### Alternate Action: {#alternate-action-1 .unnumbered}

-   If the user does not have an account, the database should send an
    error message to inform the user to register.

# User Manual:

## Creating an Account: {#creating-an-account .unnumbered}

1.  **Go to Registration Page:**

    -   Navigate to the Registration page by clicking on the
        \"Register\" or \"Create Account\" link in the navigation menu.

2.  **Fill the Input Fields:**

    -   Complete the required fields, including User Name, Phone, Email,
        and Password.

    -   Ensure that your password meets the specified criteria, if any
        (e.g., minimum length, special characters).

3.  **Press Register:**

    -   Click the \"Register\" button to submit your registration
        information.

    -   If successful, you should be redirected to the login page.

## Booking a Court: {#booking-a-court .unnumbered}

1.  **Go to Courts:**

    -   Access the \"Courts\" section by clicking on the corresponding
        link in the navigation menu.

2.  **Choose the Type of Court:**

    -   Select the type of court you want to book (e.g., football,
        padel).

3.  **Hover Over Any Court Card:**

    -   Hover over the card representing the court you wish to book to
        view additional details.

4.  **Press Book:**

    -   Click the \"Book\" button to proceed with the booking.

    -   Follow any on-screen prompts to choose a date and time for your
        reservation.

## Support and Help: {#support-and-help .unnumbered}

1.  **Scroll Down in Home Page Until Reaching the Contact Form:**

    -   Navigate to the bottom of the Home page to find the contact
        form.

2.  **Write Your Name, Email, and the Message:**

    -   Fill in your Name and Email in the designated fields.

    -   Write your message or describe the issue you need help with in
        the provided text area.

3.  **Press Submit:**

    -   Click the \"Submit\" button to send your inquiry to the support
        team.

    -   Expect a response from the CourTera support team to the provided
        email address.

# References:

-   <https://app.diagrams.net/>

-   <https://khattabprojects.atlassian.net/jira/software/projects/COR/boards/2/backlog>

-   <https://github.com/MohamedTahaKhattab/CourtEra>

-   <https://www.npmjs.com>
