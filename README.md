# API v2 Doctors

A RESTful API for managing doctor records. This API allows you to perform CRUD operations on doctor data and provides endpoints for retrieving doctor information based on various criteria.


## Installation

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Adrian-Cealic/apiv2Doctors.git
    ```

2. Navigate to the project directory:
    ```bash
    cd apiv2Doctors
    ```

3. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

4. Start the server:
    ```bash
    node index.js
    # or
    yarn start
    ```

6. Open your browser or API client and navigate to:
    ```
    http://localhost:3000/api
    ```

## API Endpoints

### Doctors

- **GET /api/doctors**: Retrieve a list of all doctors
- **GET /api/doctors/:id**: Retrieve a specific doctor by ID
- **POST /api/doctors**: Create a new doctor record
- **PUT /api/doctors/:id**: Update a specific doctor record by ID
- **DELETE /api/doctors/:id**: Delete a specific doctor record by ID

### Search

- **GET /api/doctors/search**: Search for doctors by query parameters (e.g., name, specialty, location)

### Filters

- **GET /api/doctors/filters**: Get available filters (e.g., specialties, locations)

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for building the API
- **Database**: JSON
