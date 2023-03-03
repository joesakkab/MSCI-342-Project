## BluCollar

### Project Description

BluCollar is an application that allows users to find reliable tradespeople through a simple web interface built on a 
React/Node/MySQL/MUI stack. 

### Features

#### Landing Page
BluCollar prompts new users to sign up either as a service provider or a general user needing services on the landing page. It also
introduces the user to what BluCollar is with a brief description.

#### Accounts
Service providers can provide many details about their field of work through a description, primary location of work, 
and a designated service type. The primary location of work will be the city, while service type will be the type of work the
contractor does (plumber, electrician, carpenter, etc.). General users only need to provide an email and password to sign up.
A corresponding login page is also provided.

#### Search
Both general users and contractors are greeted with a search page in the app. The search page contains both listings, a search bar, 
and a navigation bar. The listings are the primary feature of the app. They allow users to find the best and most reliable contractors
and tradespeople near them. While the app will show users a default list of service providers, the user is able to modify their search
results through a search bar. The service type given by the contractor (such as welder or mechanic) is used in the search algorithm. 
Users are prompted to search by service type through a search bar. After clicking search, their search query will filter the listings
by service type. This allows users to find what they're looking for in the shortest amount of time.

#### Profile
Both service providers and users will have the ability to view their profile. Currently, only providers are able to edit their profiles.
Users are able to see the email they used to sign up for BluCollar on their profile. Service providers can see and edit all of their profile
details, including the details that appear in their public listings on the BluCollar search page. This includes modifying their service type,
description, and primary location.

If a general user or service provider clicks on a service provider profile on the search page, it will take them to the profile page corresponding
to the service provider they clicked on. Public profiles show primary location, description, service type, and the full name of the provider. If a
service provider clicks "Profile" on the navigation bar, it will take them to their own profile, but offer the option to edit their profile.

---

### Installation Requirements

1. Clone this repository to your local machine
