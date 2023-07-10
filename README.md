# Hospital API

A Hospital API built using Node.js and MongoDB. This API allows doctors to register, login, register patients, and create reports for patients. The reports can have four possible statuses: Negative, Travelled-Quarantine, Symptoms-Quarantine, and Positive-Admit. The API also provides routes to retrieve patient reports based on specific criteria.

##  Routes used

- `/doctors/register`: Register a doctor with username and password.
- `/doctors/login`: Login as a doctor and receive a JWT (JSON Web Token) for authentication.
- `/patients/register`: Register a new patient.
- `/patients/:id/create_report`: Create a report for a specific patient.
- `/patients/:id/all_reports`: List all the reports of a patient, sorted from oldest to latest.
- `/reports/:status`: List all the reports of all patients filtered by a specific status.

## Installation

1. Clone the repository: `git clone https://github.com/ashwani312/HospitalAPI.git`
2. Install the dependencies: `npm install`
3. Configure the MongoDB connection in the `config.js` file.
4. Start the server: `npm start`
5. Access the API endpoints using an API testing tool such as Postman.

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Credits

This API was developed by [Your Name]. Feel free to contribute or report any issues.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize this README file according to your specific project requirements.
