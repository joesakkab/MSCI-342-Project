// Landing page view test
describe('Landing page view', () => {
  it('Landing can be viewed', () => {
    cy.visit('/');
    // landing page should contain the text BluCollar
    cy.contains('BluCollar');
    // search page should contain two buttons: Login and Sign Up
    cy.contains('button', 'Login');
    cy.contains('button', 'Sign Up');
  });
});

// Search page view test
describe('Search page view', () => {
  it('Search can be viewed', () => {
    cy.visit('/search');
    // search page should contain navbar with links to profile and sign out
    cy.contains('button', 'Search')
    cy.contains('button', 'Profile')
    cy.contains('button', 'Sign Out')
    // search page should contain a search bar/text input to search for services
    cy.get('input', 'Search for a service ...')
    // search page should contain a sample listing containing a service type
    cy.contains('Plumber')
  });
});

// Profile page view test
describe('Profile page view', () => {
  it('Profile can be viewed', () => {
    cy.visit('/profile');
    // TODO: Profile must contain a name, description, phone number, link to website, location served, reviews
  });
});

// Sign in page can be viewed
describe('Sign in page view', () => {
  it('Sign In can be viewed', () => {
    cy.visit('/signin');
    // sign in page contains the text Email and Password
    cy.contains('Email')
    cy.contains('Password')
    // sign in page should have text inputs for both the email and password
    cy.get('email')
    cy.get('password')
    // sign in page should have a button to login
    cy.contains('button', 'Login')
  });
});

// Sign up page can be viewed
describe('Sign up page view', () => {
  it('Sign Up can be viewed', () => {
    cy.visit('/signup');
    // signup page should have various inputs for all the information needed to signup
    cy.contains('First Name')
    cy.contains('Last Name')
    cy.contains('Email')
    cy.contains('Password')
    cy.contains('Confirm Password')
    // signup page should contain a button to Sign Up
    cy.contains('button', 'Sign Up')
  });
});

// Navigate from Search to Profile
describe('Nav from Search to Profile', () => {
  it('Search to Profile Page', () => {
    cy.visit('/search');
    cy.contains('Profile').click()
    cy.url().should('equal', '/profile')
  });
});

// Navigate from Profile to Search
describe('Nav from Profile to Search', () => {
  it('Profile to Search Page', () => {
    cy.visit('/profile');
    cy.contains('Search').click()
    cy.url().should('equal', '/search')
  });
});

// Navigate from Search to Signout
describe('Sign Out from Search', () => {
  it('Signout Successful from Search Page', () => {
    cy.visit('/search');
    cy.contains('Sign Out').click()
    cy.url().should('equal', '/')
  });
});

// Navigate from Profile to Signout
describe('Sign Out from Profile', () => {
  it('Signout Successful from Profile Page', () => {
    cy.visit('/profile');
    cy.contains('Sign Out').click()
    cy.url().should('equal', '/')
  });
});

// Click on Listing Goes to Provider Profile Page 
describe('Listing Leads to Provider Profile', () => {
  it('Clicking Listing Goes to Profile', () => {
    cy.visit('/search');
    cy.contains('Ammar Siddiqui').click()
    cy.url().should('contain', '/profile/1')
  });
});

// Signing up for account takes you to the search page
describe('Sign Up Flow', () => {
  it('Signing Up Takes you to Search Page', () => {
    cy.visit('/');
    cy.contains('Sign Up').click()
    cy.contains('Email').type('test@email.com')
    cy.get('email').should('have.value', 'test@email.com')
    cy.contains('Password').type('password123')
    cy.get('password').should('have.value', 'password123')
    cy.contains('Confirm Password').type('password123')
    cy.get('confirm_password').should('have.value', 'password123')
    cy.contains('Sign Up').click()
    cy.url().should('equal', '/search')
  });
});

// Signing in takes you to the search page
describe('Sign In Flow', () => {
  it('Signing In Takes you to Search Page', () => {
    cy.visit('/');
    cy.contains('Sign In').click()
    cy.contains('Email').type('test@email.com')
    cy.get('email').should('have.value', 'test@email.com')
    cy.contains('Password').type('password123')
    cy.get('password').should('have.value', 'password123')
    cy.contains('Sign In').click()
    cy.url().should('equal', '/search')
  });
});